import { Navbar, Footer } from '../components';
import {
  About,
  Explore,
  Feedback,
  Hero,
  WhatsNew,
  World,
  // Timer,
} from '../sections';
// import FAQ from '../sections/FAQ';
// import styles from '../styles';

import { codeofhonor, bg } from '../public/CodeofHonor';
import Image from 'next/image';

const Home = () => (
  <>
  <div className=" overflow-hidden w-[100vw]">
    <div className='absolute -z-10 top-0 w-[100vw] h-fit'>
      <Image className='w-[100vw] h-[90vh]' src={bg} alt="" priority={true} />
    </div>
    <div className="relative">
      <div className="gradient-03 z-0" />
      <div>
        <Navbar />
        <Hero />
      </div>
      {/* <span className="pt-16 md:mt-24 my-8">
        <Timer type={false} />
      </span> */}
    </div>
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
      <WhatsNew />
      <Feedback />
    </div>
    <World />
    <div className="relative">
      <div className="gradient-04 z-0" />
    </div>
    {/* <FAQ /> */}
    <Footer />
  </div>
  </>
);

export default Home;
