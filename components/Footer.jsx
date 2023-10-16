/* eslint-disable react/function-component-definition */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

function Footer() {
  const router = useRouter();
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Register for Arithemania
          </h4>
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
            onClick={() => router.push('/register')}
          >
            <span className="font-normal text-[16px] text-white">Register</span>
            <img
              src="/arrow.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
          </button>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">Shunya</h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2021 - 2022 ShunyaPES. All rights reserved.
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <a href={social.link}>
                  <img
                    key={social.name}
                    src={social.url}
                    alt={social.name}
                    className="w-[24px] h-[24px] object-contain cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
