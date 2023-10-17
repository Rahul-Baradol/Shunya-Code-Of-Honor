'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings1} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="|  About Code Of Honor" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span>
          {/* Welcome to <span className="font-extrabold text-white">Code of Honour</span>,
          Shunya's signature event and the{' '}
          <span className="font-extrabold text-white">
            first ever 30-hour hackathon{' '}
          </span>{' '}
          based on
          <span className="font-extrabold text-[#9cb1fd]">
            {' '}
            applied mathematics and its applications
          </span>
          , has been a smash hit in the past. The hackathon provides students
          with a unique opportunity to explore exciting domains such as{' '}
          <span className="font-extrabold text-[#9cb1fd]">
            machine learning, artificial intelligence, numerical analysis,
            cryptography, cybersecurity, image processing,
          </span>{' '}
          and other cutting-edge areas of study. It's a one-of-a-kind platform
          for students to connect with like-minded peers, broaden their
          horizons, and discover new opportunities. */}

          Welcome to 'Code Of Honour' - Shunya's epic 24-hour coding journey! Get ready for a coding adventure that will ignite your passion for programming. Join us as we dive deep into the heart of code ethics, principles, and the thrill of coding excellence. Connect with fellow enthusiasts, embrace the coding spirit, and emerge with new skills and a fresh perspective. 'Code Of Honour' - where coding dreams become reality. Don't miss it!
        </span>
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
