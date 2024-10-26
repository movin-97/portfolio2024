import Banner from '../components/banner';
import Contact from '../components/contact';
import Skills from '../components/skills';
import Navbar from '../components/navbar';
import Projects from '../components/projects';
import yectralogo from '../assets/yectra.png';
import { motion, Variants } from 'framer-motion';

const cardVariantsText: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 1,
    },
  },
  hover: {
    scale: 1.05,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15,
      duration: 1,
    },
  },
};

export function HomePage() {
  const handleClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="min-w-full overflow-hidden bg-neutral-900">
      <div className="container m-auto px-4">
        <Navbar handleClick={handleClick} />
        <div id="home">
          <Banner />
        </div>

        <div id="skills" className="p-3 lg:p-0">
          <div className="text-center mt-24 text-2xl lg:text-4xl font-extrabold text-white leading-none uppercase  max-md:mt-10">
            SKILLS WITH
          </div>
          <Skills />
        </div>

        <div id="projects" className="p-3 lg:p-0">
          <div className="text-center mt-14 lg:mt-24 text-2xl lg:text-4xl font-extrabold text-white leading-none uppercase  max-md:mt-10">
            Projects
          </div>
          <Projects />
        </div>
        <div id="contact" className="p-3 lg:p-0 ">
          <div className="flex flex-col justify-center items-center self-stretch px-20 py-14 mt-28 w-full bg-zinc-900 max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
