import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ButtonProps } from '@/app/utils/type';

const Button: React.FC<ButtonProps> = ({
  width = 'auto',
  height = 'auto',
  backgroundColor = 'gray',
  onClick,
  text,
  children,
  img,
  link
}) => {
  const buttonContent = (
    <div className='flex items-center justify-center gap-2'>
      {img && <Image src={img} alt="no-img" width={24} height={24} className='filter brightness-0 invert' />}
      {text}
      {children}
    </div>
  );

  return (
    <Link href={link || '/'} passHref>
      <button
        className="text-white font-bold py-2 px-4 rounded-xl flex items-center justify-center gap-2"
        style={{ width, height, backgroundColor }}
        onClick={onClick}
      >
        {buttonContent}
      </button>
    </Link>
  )
};

export default Button;


// components/Button.tsx



// 'use client'

// import Image from 'next/image';
// import Link from 'next/link';

// import React from 'react';

// import { btnProps } from '@/app/utils/type';

// const Button: React.FC<btnProps> = ({ text }) => {
//   return (
//     <button
//       type="button"

//     >
//       {text}
//     </button>
//   );
// };

// export default Button;

