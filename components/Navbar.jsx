/* eslint-disable react/function-component-definition */
// 'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiOutlineHome } from 'react-icons/hi';
import { useRouter } from 'next/router';

import styles from '../styles';
import { navVariants } from '../utils/motion';

function Navbar() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push('/register');
  };
  return (
    <div>
      {' '}
      <motion.nav
        variants={navVariants}
        initial="show"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative z-30`}
      >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div
          className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
        >
          <Link
            href="https://shunyapes.com/"
            className="hover:opacity-20 transition-opacity duration-300 z-30"
          >
            <HiOutlineHome className="w-[40px] h-[40px] object-contain text-white" />
          </Link>
          <button
            onClick={handleClick}
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
          >
            <span className="font-normal text-[16px] text-white">Register</span>
            <img
              src="/arrow.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
          </button>
        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;
