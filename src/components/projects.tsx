import roosadmin from '../assets/roosadmin.png';
import roosclient from '../assets/roosclient.png';
import bnmadmin from '../assets/bnmadminnew.png';
import bnmclient from '../assets/bnmclinet.png';
import yectralogo from '../assets/yectra.png';

import { motion, Variants } from 'framer-motion';

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.1,
    rotate: -10,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  },
};
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

const Projects = () => {
  return (
    <>
      <div>
        <div className="flex md:gap-20 justify-center max-md:flex-col md:mt-7">
          <motion.div
            initial="offscreen"
            animate="onscreen"
            whileHover="hover"
            className="flex flex-col w-4/12 max-md:ml-0 max-md:w-full"
          >
            <motion.div
              variants={cardVariants}
              className="flex flex-col grow font-extrabold uppercase max-md:mt-8 cursor-pointer"
            >
              <div className="flex flex-col pb-3.5 w-full rounded-2xl bg-zinc-800">
                <img
                  alt="roosadmin"
                  src={roosadmin}
                  className="object-cover w-full rounded-2xl aspect-[1.66]"
                />
                <div className="flex gap-5 justify-between items-center mt-3 mr-6 ml-6 max-md:mx-2.5">
                  <div className="flex flex-col">
                    <div className="self-start text-xs leading-5 text-stone-300">ROOS</div>
                    <div className="text-xl leading-none text-white">DADSHBOARD</div>
                  </div>
                  <i className="fa-solid fa-arrow-right text-white"></i>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial="offscreen"
            animate="onscreen"
            whileHover="hover"
            className="flex flex-col w-4/12 max-md:ml-0 max-md:w-full"
          >
            <motion.div
              variants={cardVariants}
              className="flex flex-col grow font-extrabold uppercase max-md:mt-8 cursor-pointer"
            >
              <div className="flex flex-col  pb-3.5 w-full rounded-2xl bg-zinc-800">
                <img
                  alt="roosclient"
                  src={roosclient}
                  className="object-cover w-full rounded-2xl aspect-[1.66]"
                />
                <div className="flex gap-5 justify-between items-center mt-3 mr-6 ml-6 max-md:mx-2.5">
                  <div className="flex flex-col">
                    <div className="self-start text-xs leading-5 text-stone-300">ROOS</div>
                    <div className="text-xl leading-none text-white">FRONT FACING</div>
                  </div>
                  <i className="fa-solid fa-arrow-right text-white"></i>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="flex md:gap-20 justify-center max-md:flex-col md:mt-8">
          <motion.div
            initial="offscreen"
            animate="onscreen"
            whileHover="hover"
            className="flex flex-col w-4/12 max-md:ml-0 max-md:w-full"
          >
            <motion.div
              variants={cardVariants}
              className="flex flex-col grow font-extrabold uppercase max-md:mt-8 cursor-pointer"
            >
              <div className="flex flex-col pb-3.5 w-full rounded-2xl bg-zinc-800">
                <img
                  alt="bnm admin"
                  src={bnmadmin}
                  className="object-cover w-full rounded-2xl aspect-[1.66]"
                />
                <div className="flex gap-5 justify-between items-center mt-3 mr-6 ml-6 max-md:mx-2.5">
                  <div className="flex flex-col">
                    <div className="self-start text-xs leading-5 text-stone-300">B & M</div>
                    <div className="text-xl leading-none text-white">DADSHBOARD</div>
                  </div>
                  <i className="fa-solid fa-arrow-right text-white"></i>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial="offscreen"
            animate="onscreen"
            whileHover="hover"
            className="flex flex-col w-4/12 max-md:ml-0 max-md:w-full"
          >
            <motion.div
              variants={cardVariants}
              className="flex flex-col grow font-extrabold uppercase max-md:mt-8 cursor-pointer"
            >
              <div className="flex flex-col  pb-3.5 w-full rounded-2xl bg-zinc-800">
                <img
                  alt="bnm client"
                  src={bnmclient}
                  className="object-cover w-full rounded-2xl aspect-[1.66]"
                />
                <div className="flex gap-5 justify-between items-center mt-3 mr-6 ml-6 max-md:mx-2.5">
                  <div className="flex flex-col">
                    <div className="self-start text-xs leading-5 text-stone-300">B & M</div>
                    <div className="text-xl leading-none text-white">FRONT FACING</div>
                  </div>
                  <i className="fa-solid fa-arrow-right text-white"></i>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="md:flex flex-col items-center px-0 md:px-12 lg:w-[80%] lg:m-auto">
        <div>
          <motion.div
            initial="offscreen"
            animate="onscreen"
            whileHover="hover"
            className="md:flex flex-wrap justify-between mt-14 text-center max-md:mt-10 cursor-pointer "
          >
            <motion.div variants={cardVariantsText} className=" text-2xl font-bold text-white ">
              <div className="md:flex justify-between">
                <div className="md:flex ">
                  <img
                    alt="company name"
                    src={yectralogo}
                    className="object-contain shrink-0 self-start aspect-[1.06] w-[34px] rounded-lg mx-auto"
                  />
                  <div className="flex-auto">React.js Developer at Yectra Technologies</div>
                </div>
                <div className="my-auto text-sm text-gray-400">Nov 2024 - Present</div>
              </div>

              <div className="mt-3 md:ps-10 text-sm leading-6 md:text-left text-gray-400 ">
                Front-end React.js Developer at Yectra Technologies with 3+ years of experience in
                creating responsive, user-centric web applications. Proficient in React, TypeScript,
                JavaScript, and UI/UX design, I focus on building high-performance, accessible, and
                SEO-optimized websites. Committed to delivering exceptional user experiences through
                a human-centered design approach and modern technologies.
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial="offscreen"
            animate="onscreen"
            whileHover="hover"
            className="md:flex flex-wrap justify-between mt-14 text-center max-md:mt-10 cursor-pointer"
          >
            <motion.div variants={cardVariantsText} className=" text-2xl font-bold text-white">
              <div className="md:flex justify-between">
                <div className="md:flex ">
                  <img
                    alt="company name"
                    src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                    className="object-contain shrink-0 self-start aspect-[1.06] w-[34px] rounded-lg mx-auto"
                  />
                  <div className="flex-auto">Desktop Support Engineer at Synergy</div>
                </div>
                <div className="my-auto text-sm text-gray-400">Full-time</div>
              </div>

              <div className="mt-3 md:ps-10 text-sm leading-6 md:text-left text-gray-400 ">
                Desktop Support Specialist with expertise in troubleshooting hardware and software
                issues to ensure optimal user experiences. Skilled in managing support tickets and
                providing effective IT solutions across various operating systems.
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;
