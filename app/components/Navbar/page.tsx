'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi'; // Import the burger and close icons
import Button from '../miniComponents/button/page';
import Image from 'next/image';

import logo from '../../../public/logo.png'

import wallet from '@/public/wallet-2-svgrepo-com.svg'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      if (!event.target) return; // Ensure event.target is not null

      // Check if the click occurred outside the menu area
      if (isOpen && !((event.target as HTMLElement).closest('.menu-container'))) {
        setIsOpen(false);
      }
    };

    // Add event listener when the menu is open
    if (isOpen) {
      document.body.addEventListener('click', closeMenu);
    }

    // Clean up the event listener
    return () => {
      document.body.removeEventListener('click', closeMenu);
    };
  }, [isOpen]);

  return (
    <nav className="bg-gray-400 font-Crafty bg-opacity-25 backdrop-filter backdrop-blur-lg rounded-b-3xl w-auto p-4 relative">
      <div className="container mx-auto flex justify-between text-white items-center">
        <div>
          <Link href="/">
            <Image src={logo} width={60} height={60} alt='no-img' />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <span className=" transition-colors duration-300 hover:text-[#D94A2C] cursor-pointer">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className=" transition-colors duration-300 hover:text-[#D94A2C] cursor-pointer">About</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className=" transition-colors duration-300 hover:text-[#D94A2C] cursor-pointer">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className='hidden md:block'>
          {/* <Button text='Connect Wallet' width="200px" height="50px" backgroundColor="#D94A2C" img={wallet} link="https://www.google.com/" /> */}
          {/* <Button
        // imageUrl={wallet}
        width={170}
        height={50}
        bgColor="#007bff"
      >
        Click Me
      </Button> */}

<Button text="Click me!"  />

        </div>
        <div className="md:hidden">
          <motion.button
            className=""
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <HiX className='mt-1' size={24} /> : <HiMenu className='mt-1' size={24} />} {/* Use burger and close icons */}
          </motion.button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black opacity-50 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
        />
      )}
      <motion.div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden fixed top-0 left-0 bg-gray-800 w-3/4 h-full z-50 menu-container`}
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <ul className="flex flex-col space-y-2 mt-2 p-4">
          <li>
            <Link href="/">
              <motion.button
                className=""
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Home
              </motion.button>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <motion.button
                className=""
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                About
              </motion.button>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <motion.button
                className=""
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Contact
              </motion.button>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <motion.button
                className=""
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Button
              </motion.button>
            </Link>
          </li>
        </ul>

      </motion.div>
    </nav>
  );
};

export default Navbar;
