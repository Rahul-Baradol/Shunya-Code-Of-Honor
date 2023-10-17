'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';
import Image from 'next/image';
import { shunya } from '../public/CodeofHonor';

const Footer = () => {
  return (
    <>
      <style>
        {`
          .shunya {
            width: max(6vw, 50px);
          }
        `}
      </style>
      <motion.footer
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
      >
        <div className="footer-gradient" />
    
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
    
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <Image
                src={shunya}
                className="shunya"
                alt="Shunya"
              />
            </div>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2022 - 2023 ShunyaPES. All rights reserved.
            </p>
    
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <a href={social.link} key={index}>
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
      </motion.footer>
    </>
  );
}

export default Footer;
