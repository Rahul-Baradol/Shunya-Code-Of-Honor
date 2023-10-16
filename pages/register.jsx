'use client';

import Navbar from '../components/Navbara';
import Footer from '../components/Footera';
// import Registrations from '../sections/Register';
import { GetStarted, Insights } from '../sections';
import styles from '../styles';
// import styles from '../styles';

const Home = () => (
  <div className="bg-primary-black overflow-hidden w-[100vw]">
    <div className="relative">
      <div className="gradient-03 z-0" />
      <div className="gradient-04 z-0" />
      <div className="gradient-02 z-0" />
      <Navbar />
    </div>

    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
    </div>
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
    </div>
    <div className="relative">
      <div className="gradient-02 z-0" />
      <div className="gradient-04 z-0" />
      {/* <Registrations /> */}
      <div className={`${styles.paddings1} relative z-10`}>
        <div className="flex flex-col text-left items-center w-full sm:rounded-[20px] sm:border-[1px] sm:border-[#6A6A6A] relative sm:p-10 sm:gradient-05">
          <p className="font-extrabold text-2xl text-white text-center">
            Registrations Closed
            <br />
            Results will be out soon
          </p>
          <div className="text-lg flex flex-col font-mono text-white mb-6 font-bold w-full text-center">
            if any queries please contact{' '}
            <span className="text-blue-400">shunya@pes.edu</span>
            or any of our socials
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
