/* eslint-disable jsx-a11y/iframe-has-title */

'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
// import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <>
    <style>
      {`
        .vid {
          width: min(70vw, 300px);
        }
      `}
    </style>
    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        {/* <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-3 lg:max-w-[800px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
              Arithemania 1.0
            </h4>
          </div>

          <p className="mt-[24px] font-normal sm:text-[16px] text-[12px] sm:leading-[45.6px] leading-[39.6px] text-gray-300">
            <span>
              Last year's Arithemania was a huge success, with over
              <span
                className="font-bold text-white
              "
              >
                {' '}
                500 registrations{' '}
              </span>
              and
              <span className="font-bold text-white">
                {' '}
                25+ teams participating{' '}
              </span>
              from diverse backgrounds. Participants had the chance to showcase
              their creativity, critical thinking, and technical abilities.
              Building on that success, we're thrilled to announce the launch of
              Arithemania 2.0!
            </span>
            <br />
            <span>
              This year's edition of Arithemania is going to be bigger, better,
              and more exciting than ever before! Join us at PESU 52 of PES
              University on
              <span className="font-extrabold text-white">
                {' '}
                April 7th and 8th{' '}
              </span>
              for an unforgettable hackathon experience. You'll have the
              opportunity to network, innovate, and learn from the most talented
              individuals and industry experts in their respective fields. Get
              ready to take on new challenges, make new friends, and hack your way
              to success with Arithemania 2.0!
            </span>
          </p>
        </motion.div> */}

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          {/* <img src="/planet-09.png" alt="planet-09" /> */}

          <video
            src="./CodeofHonor/reel.mp4"
            // allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowFullScreen
            // className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
            className={`vid`}
            muted
            loop
            autoPlay
            controls
          />

          {/* <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[3%]"
          >
            <img
              src="/stamp.png"
              alt="stamp"
              className="w-[155px] h-[155px] object-contain"
            />
          </motion.div> */}
        </motion.div>
      </motion.div>
    </section>
  </>
);

export default Feedback;
