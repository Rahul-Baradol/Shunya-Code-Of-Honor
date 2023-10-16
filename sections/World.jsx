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
  );
}

export default World;
