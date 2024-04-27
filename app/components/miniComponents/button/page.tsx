import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ButtonProps {
  onClick?: () => void;
  text?: string;
  children?: React.ReactNode;
  img?: string | StaticImageData ;
  backgroundColor?: string;
}

const Button: React.FC<ButtonProps> = ({

  backgroundColor = 'gray',
  onClick,
  text,
  children,
  img,

}) => {
  const buttonContent = (
    <div className='flex items-center justify-center gap-2'>
      {img && <Image src={img} alt="no-img" width={24} height={24} className='filter brightness-0 invert' />}
      {text}
      {children}
    </div>
  );

  return (
      <button
        className="text-white font-bold py-2 px-4 rounded-xl flex items-center justify-center gap-2"
        style={{ backgroundColor }}
        onClick={onClick}
      >
        {buttonContent}
      </button>
  )
};

export default Button;
