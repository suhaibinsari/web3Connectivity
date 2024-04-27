'use client'
import { useEffect, useState } from 'react';
interface CountdownProps {
    targetDate: Date;
}
const Countdown = ({ targetDate }: CountdownProps) => {

    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeRemaining = () => {
            const now = new Date().getTime();
            const difference = targetDate.getTime() - now;

            const days = Math.floor(difference / (10000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeRemaining({
                days,
                hours,
                minutes,
                seconds,
            });
        };

        const interval = setInterval(calculateTimeRemaining, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div>
            <div className="flex justify-center space-x-4">

                <div className="text-center">
                    <div className="text-4xl font-bold">
                        <span className="countdown font-mono text-4xl w-100 ">
                            <span style={{ '--value': timeRemaining.days } as any}></span>
                        </span>
                    </div>
                    <div className="text-gray-400">Days</div>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-bold">
                        <span className="countdown font-mono text-4xl">
                            <span style={{ '--value': timeRemaining.hours } as any}></span>
                        </span>
                    </div>
                    <div className="text-gray-400">Hours</div>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-bold">
                        <span className="countdown font-mono text-4xl">
                            <span style={{ '--value': timeRemaining.minutes } as any}></span>
                        </span>
                    </div>
                    <div className="text-gray-400">Minutes</div>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-bold">

                        <span className="countdown font-mono text-4xl">
                            <span style={{ '--value': timeRemaining.seconds } as any}></span>
                        </span>
                    </div>
                    <div className="text-gray-400">Seconds</div>
                </div>
            </div>
        </div>
    );
};



export default Countdown


