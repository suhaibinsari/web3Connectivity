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
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      type="button"
      style={{
        margin: '10px', // Wrap '10px' in quotes to make it a string
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;