import Banner from '../components/banner';
import Contact from '../components/contact';
import Skills from '../components/skills';
import Navbar from '../components/navbar';
import Projects from '../components/projects';
import { motion } from 'framer-motion';

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

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          id="skills"
          className="p-3 lg:p-0"
        >
          <div className="text-center mt-24 text-2xl lg:text-4xl font-extrabold text-white leading-none uppercase  max-md:mt-10">
            SKILLS WITH
          </div>
          <Skills />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          id="projects"
          className="p-3 lg:p-0"
        >
          <div className="text-center mt-14 lg:mt-24 text-2xl lg:text-4xl font-extrabold text-white leading-none uppercase  max-md:mt-10">
            Projects
          </div>
          <Projects />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          id="contact"
          className="p-3 lg:p-0 "
        >
          <div className="flex flex-col justify-center items-center self-stretch px-20 py-14 mt-28 w-full bg-zinc-900 max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
            <Contact />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
