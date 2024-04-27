// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// interface ButtonProps {
//   onClick?: () => void;
//   text?: string;
//   children?: React.ReactNode;
//   img?: string ;
//   link?: string;
//   width?: string | number;
//   height?: string | number;
//   backgroundColor?: string;
// }

// const Button: React.FC<ButtonProps> = ({
//   width = 'auto',
//   height = 'auto',
//   backgroundColor = 'gray',
//   onClick,
//   text,
//   children,
//   img,
//   link
// }) => {
//   const buttonContent = (
//     <div className='flex items-center justify-center gap-2'>
//       {img && <Image src={img} alt="no-img" width={24} height={24} className='filter brightness-0 invert' />}
//       {text}
//       {children}
//     </div>
//   );

//   return (
//     <Link href={link || '/'} passHref>
//       <button
//         className="text-white font-bold py-2 px-4 rounded-xl flex items-center justify-center gap-2"
//         style={{ width, height, backgroundColor }}
//         onClick={onClick}
//       >
//         {buttonContent}
//       </button>
//     </Link>
//   )
// };

// export default Button;


// components/Button.tsx




import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

// Define interface for button props
interface ButtonProps {
  imageUrl: string;
  width: number;
  height: number;
  bgColor: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ imageUrl, width, height, bgColor, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: bgColor,
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5px',
      }}
    >
      <Image src={imageUrl} alt="Button Icon" style={{ width: '80%', height: '80%' }} />
      {children}
    </button>
  );
};

export default Button;
