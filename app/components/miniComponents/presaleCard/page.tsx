
import React from 'react';
import Image from 'next/image';
import bnb from '../../../../public/bnb.png'
import usd from '../../../../public/usdt.png'
import wallet from '../../../../public/wallet-2-svgrepo-com.svg'
import logo from '../../../../public/logo.png'



import { useEffect, useState, useCallback } from "react";
import Button from '../button/Button';
import Countdown from '../countDown/Countdown';

const Card = () => {
  const targetDate = new Date('2024-12-31T23:59:59');

  return (
    <>
      <div className='border bg-gray-400 flex flex-col items-center justify-center font-Crafty bg-opacity-25 rounded-3xl w-full max-w-[30rem] py-10'>
        <div className='flex flex-col items-center justify-center space-y-4'>
          <h2 className='text-3xl font-bold'>BOO COIN</h2>



          <progress
            id="file"
            style={{
              width: "99.71%",
              marginTop: "1px",
              marginLeft: "1px",
            }}
          >
          </progress>

          <p>Phase 1 Ends In:</p>
          <Countdown targetDate={targetDate} />
          <div className='text-center'>
            <p>USD Raised = $0.0 / $500000</p>
            <p>Minimum purchase = 5000 INCO</p>
            <p>1 INCO = $0.00625</p>
            <p>Listing price: TBD</p>
          </div>
          <div className='flex gap-6'>
            <Button img={bnb} text="BNB" backgroundColor="#F3B43B" />
            <Button img={usd} text="USDT" backgroundColor="#26A17B" />
          </div>

          {/* <div className='space-y-1'>
            <p className=''>Amount in <span className='font-bold'>BNB</span> You Pay:</p>
            <input type="text" name="" id="" className='rounded-xl h-10 w-96 text-black p-2' />
          </div> */}

          <div className="space-y-1 relative">
            <p className="">Amount in <span className="font-bold">BNB</span> You Pay:</p>
            <input type="text" name="" id="" className="rounded-xl h-10 lg:w-96 w-[20.2rem]  p-2 pr-10" />
            <hr className="absolute rotate-90 right-0 flex items-center pr-7 mr-7 border-t-0.5  border-gray-300" style={{ bottom: '19px' }} />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pt-6">
              <Image src={usd} alt="Image" className="h-5 w-5" width={500} height={500} />
            </div>
          </div>
          <div className="space-y-1 relative">
            <p className="">Amount in <span className="font-bold">BOO</span> You Receive:</p>
            <input type="text" name="" id="" className="rounded-xl h-10 lg:w-96 w-[20.2rem] text-black p-2 pr-10" />
            <hr className="absolute rotate-90 right-0 flex items-center pr-7 mr-7 border-t-0.5  border-gray-300" style={{ bottom: '19px' }} />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pt-6">
              <Image src={logo} alt="Image" className="h-5 w-5" width={500} height={500} />
            </div>
          </div>



          <div className='flex gap-6'>
            <Button img={wallet} text="Connect Wallet" backgroundColor="#D94A2C" width="200px" height="50px" />
          </div>

        </div>
      </div>
    </>
  );
};

export default Card;