/* eslint-disable react/function-component-definition */
// 'use client';

import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { navVariants } from '../utils/motion';
import { shunya, pes } from '../public/CodeofHonor';
import styles from '../styles';

function Navbar() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push('/register');
  };
  return (
    <>
      <style>
        {`
          .img {
            width: min(18vw, 120px);
          }

          .reg {
            font-size: min(4vw, 20px);
          }

          .arrow {
            width: min(7vw, 20px);
          }
        `}
      </style>
      <div>
        {' '}
        <motion.nav
          variants={navVariants}
          initial="show"
          whileInView="show"
          className={`${styles.xPaddings} py-8 relative z-30 flex items-center h-[20vh]`}
        >
          <div className="absolute w-[50%] inset-0 gradient-01" />
          <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 items-center`}>
            <div className="flex flex-row w-[15vw]">
              <a
                href="https://pes.edu/"
                className="hover:opacity-20 cla transition-opacity duration-300 z-30 flex flex-row items-center"
                target="_blank"
                rel="noreferrer"
              >
                <div className="img">
                  <Image
                    src={pes}
                    alt="PES University"
                  />
                </div>
              </a>

              <a
                href="https://shunyapes.com/"
                className="hover:opacity-20 cla transition-opacity duration-300 z-30 flex flex-row items-center"
                target="_blank"
                rel="noreferrer"
              >
                <div className="img">
                  <Image
                    src={shunya}
                    alt="Shunya"
                  />
                </div>
              </a>
            </div>

            <button
              onClick={handleClick}
              type="button"
              className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
            >
              <span className="font-normal text-white reg">Register</span>
              <img
                src="/arrow.svg"
                alt="headset"
                className="object-contain arrow"
              />
            </button>
          </div>
        </motion.nav>
      </div>
    </>
  );
}

export default Navbar;
