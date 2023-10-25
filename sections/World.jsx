'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import Link from 'next/link';

import styles from '../styles';
import { TitleText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingTextLarge } from '../components/CustomTexts';
import { smpColab } from '../public/CodeofHonor'
import Image from 'next/image';
import { useRef } from 'react';
import { useEffect } from 'react';

const World = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(()=>{
    if (isInView) {
      mainControls.start("visible");
    }
  }, [ref, isInView, mainControls])

  return (
    <>
      <style>
        {`  
          .bgO {
            background-color: #eeeeee;
          }
        `}
      </style>
      <section ref={ref} className={`${styles.paddings} relative z-10`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
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
              <div className='text-white flex flex-col justify-center items-center gap-5 text-2xl'>
                <img
                  src="./sponsors/Oreilly.png"
                  alt="sponsors"
                  className={`w-[60vw] h-[20vh] lg:w-[40vw] object-contain px-10 bgO rounded-full`}
                />
                <div className='border-l-2 h-fit w-fit pl-3'>
                  For over 40 years O'Reilly has provided technology and business training, knowledge, and insight to help companies succeed. Our unique network of experts and innovators share their knowledge and expertise through books, articles, and our online learning platform. O'Reilly online learning gives you on-demand access to live training courses, in-depth learning paths, interactive coding environments, certification prep materials, and a vast collection of text and video from O'Reilly and 200+ other publishers. For more information visit <a href="https://www.oreilly.com" className='text-red-500' target='_blank'>oreilly.com.</a>
                </div>
              </div>
            </div>
          </motion.div>
          <TypingTextLarge title="In Collaboration with" textStyles="text-center" />
          <div>
            <motion.div
              className="relative justify-center items-center flex w-full h-[30vh]"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {opacity: 1, y: 0}
              }}
              animate={mainControls}
              initial="hidden"
              transition={{ duration: 2 }}
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
    </>
  );
}

export default World;
