import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  onClick?: () => void;
  text?: string;
  children?: React.ReactNode;
  img?: string | StaticImageData;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({ width = 'auto', height = 'auto', backgroundColor = 'gray', onClick, text, children, img, link  }) => {
  const buttonContent = (
    <>
      {typeof img === 'string' ? (
        <Image src={img} alt="no-img" width={24} height={24} className='filter brightness-0 invert' />
      ) : (
        img && <Image src={img} alt="no-img" width={24} height={24} className='filter brightness-0 invert' />
      )}
      {text}
      {children}
    </>
  );

  return link ? (
    <Link href={link} passHref>
      <button
        className={`text-white font-bold py-2 px-4 rounded-xl flex items-center justify-center gap-2 bg-${hover}-500`}
        style={{ width, height, backgroundColor }}
        onClick={onClick}
      >
        {buttonContent}
      </button>
    </Link>
  ) : (
    <button
      className="text-white font-bold py-2 px-4 rounded-xl flex items-center justify-center gap-2"
      style={{ width, height, backgroundColor }}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
