/* eslint-disable react/function-component-definition */

'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { useRouter } from 'next/router';
import styles from '../styles';
import { navVariants } from '../utils/motion';

function Navbara() {
  const router = useRouter();
  return (
    <motion.nav
      variants={navVariants}
      initial="show"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative z-30`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01 -z-10" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
          onClick={() => router.push('/')}
        >
          <span className="font-normal text-[16px] text-white">Home</span>
          <img
            src="/arrow.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbara;
