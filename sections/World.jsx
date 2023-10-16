'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import styles from '../styles';
import { TitleText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingTextLarge } from '../components/CustomTexts';
import { smpColab } from '../public/CodeofHonor'
import Image from 'next/image';
import sponserStyles from '../styles/sponser.module.css'

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TitleText title={<>Sponsors</>} textStyles="text-center" />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative justify-center items-center  flex w-full h-fit sm:h-fit"
      >
        <div className="flex justify-center items-center flex-wrap gap-10 relative p-10">
          <img
            src="./sponsors/4.png"
            alt="sponsors"
            className={`w-[60vw] h-[20vh] lg:w-[40vw]  object-contain px-10 bg-slate-300 rounded-full`}
          />
          <img
            src="./sponsors/echo.png"
            alt="sponsors"
            className={`w-[60vw] h-[20vh] lg:w-[40vw] object-contain px-10 bg-slate-300 rounded-full`}
          />
        </div>
      </motion.div>
      <TypingTextLarge title="In Collaboration with" textStyles="text-center" />
      <div>
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative justify-center items-center mt-[68px] flex w-full h-fit"
        >
          <div className="flex justify-center items-center flex-wrap sm:flex-nowrap">
            <div className="flex-col justify-center">
              <Image
                src={smpColab}
                alt="sponsors"
                className=" object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default World;
