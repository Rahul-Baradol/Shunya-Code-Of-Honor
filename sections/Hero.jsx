/* eslint-disable react/jsx-no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/order */
/* eslint-disable react/function-component-definition */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import Spline from '@splinetool/react-spline';
import { useRouter } from 'next/router';
import styles from '../styles';
// import {
//   // planetVariants,
//   slideIn,
//   staggerContainer,
//   textVariant,
// } from '../utils/motion';
import { textVariant } from '../utils/motion';
import Image from 'next/image';

// const Hero = () => (
//   <section className={`${styles.yPaddings}  h-[100vh]`}>
//     <Spline
//       scene="https://prod.spline.design/GLps9wZiqSGfvIT1/scene.splinecode"
//       className="z-50 hidden sm:block"
//     />
//     <Spline
//       scene="https://prod.spline.design/jl6Krd7ogz9unygH/scene.splinecode"
//       className="z-50 sm:hidden block"
//     />
//   </section>
//   //   <motion.div
//   //     variants={staggerContainer}
//   //     initial="hidden"
//   //     whileInView="show"
//   //     viewport={{ once: false, amount: 0.25 }}
//   //     className={`${styles.innerWidth} mx-auto flex flex-col `}
//   //   >
//   //     <div className="flex justify-center items-center flex-col relative z-10 ">
//   //       <motion.div
//   //         variants={textVariant(0.5)}
//   //         className="flex flex-row justify-center items-center py-7"
//   //       >
//   //         <img src="./assets/logo.png" alt="Logo" />
//   //       </motion.div>
//   //     </div>

//   //     <motion.div
//   //       variants={slideIn('right', 'tween', 0.2, 1)}
//   //       className="relative w-full md:-mt-[20px] -mt-[12px]"
//   //     >
//   //       <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

//   //       <img
//   //         src="./assets/cover.png"
//   //         alt="hero_cover"
//   //         className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
//   //       />

//   //       <a href="#explore">
//   //         <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
//   //           <img
//   //             src="/stamp.png"
//   //             alt="stamp"
//   //             className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
//   //           />
//   //         </div>
//   //       </a>
//   //     </motion.div>
//   //   </motion.div>
// );

// export default Hero;

import { codeofhonor, calendar, time, loc, dummyqr } from '../public/CodeofHonor';

function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // set to true if screen width is less than 768px
    }

    // handleResize(); // set initial value on mount
    // window.addEventListener('resize', handleResize);
    // return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <style jsx>
        {`
          .cont {
            width: min(90vw, 400px);
          }
        `}
      </style>

      <div className='relative flex justify-center flex-col items-center w-full'>
        <div className='flex flex-col items-center justify-center text-white p-4 text-xl md:text-3xl'>
          <div className=''>
            Shunya Presents
          </div>
          <div>
            <Image src={codeofhonor} alt="Code Of Honor"/>
          </div>
        </div>

        <div className='flex flex-col items-center gap-6 md:flex-row w-[70vw] md:justify-between p-2 md:items-center'>
          <div className='h-fit'>
            <div className='flex flex-row items-center cont'>
                <div>
                  <Image 
                    src={calendar}
                    alt=""
                  />
                </div>
                <div className='text-white h-fit text-2xl flex flex-row justify-center items-center'> 
                  4th & 5th November
                </div>
            </div>
            <div className='flex flex-row items-center cont'>
                <div>
                    <Image 
                      src={time}
                      alt=""
                    />
                </div>
                <div className='text-white h-fit text-2xl'> 
                  PESU'52
                </div>
            </div>
            <div className='flex flex-row items-center cont'>
              <div>
                <Image 
                  src={loc}
                  alt=""
                />
              </div>
              <div className='text-white h-fit text-2xl'> 
                8 am onwards
              </div>
            </div>
          </div>

          <div>
            <Image
              src={dummyqr}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
