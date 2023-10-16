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

const Home = () => (
  <div className="bg-primary-black overflow-hidden w-[100vw]">
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
);

export default Home;
