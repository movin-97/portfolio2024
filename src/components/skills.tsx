import jsvascript from '../assets/JavaScript-logo.png';
import htmls from '../assets/imageshtml.png';
import csss from '../assets/imagescss.png';
import typescript from '../assets/imagetypescript.jpg';
import reactim from '../assets/react-icon-2048x2048-o8k3ymqa.png';
import nodejs from '../assets/nodejs.jpg';
import reduxim from '../assets/react-redux.png';
import bootstrap from '../assets/bootstrap-social-logo.png';
import mui from '../assets/cover-mui.jpg';
import tailwind from '../assets/thumbtailwindcss.webp';
import { motion, Variants } from 'framer-motion';

const imageVariants: Variants = {
  hover: {
    scale: 1.5, // Scales the image by 10%
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};
const Skills = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:justify-around md:items-start mt-12 ">
        <motion.div initial="offscreen" animate="onscreen" className="mt-2 md:mt-0">
          <motion.img
            alt="html"
            src={htmls}
            className="object-cover shrink-0 aspect-square w-72 md:w-[80px] rounded-md cursor-pointer"
            variants={imageVariants}
            whileHover="hover"
          />
        </motion.div>
        <motion.div initial="offscreen" animate="onscreen" className="mt-2 md:mt-0">
          <motion.img
            alt="css"
            src={csss}
            className="object-cover shrink-0 aspect-square w-72 md:w-[80px] rounded-md cursor-pointer"
            variants={imageVariants}
            whileHover="hover"
          />
        </motion.div>
        <motion.div initial="offscreen" animate="onscreen" className="mt-2 md:mt-0">
          <motion.img
            alt="javascript"
            src={jsvascript}
            className="object-cover shrink-0 aspect-square w-72 md:w-[80px] rounded-md cursor-pointer"
            variants={imageVariants}
            whileHover="hover"
          />
        </motion.div>
        <motion.div initial="offscreen" animate="onscreen" className="mt-2 md:mt-0">
          <motion.img
            alt="typescript"
            src={typescript}
            className="object-cover shrink-0 aspect-square w-72 md:w-[80px] rounded-md cursor-pointer"
            variants={imageVariants}
            whileHover="hover"
          />
        </motion.div>
        <motion.div initial="offscreen" animate="onscreen" className="mt-2 md:mt-0">
          <motion.img
            alt="react"
            src={reactim}
            className="object-cover shrink-0 aspect-square w-72 md:w-[80px] rounded-md cursor-pointer"
            variants={imageVariants}
            whileHover="hover"
          />
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-around md:items-start mt-12 ">
        <motion.div initial="offscreen" animate="onscreen" className="mt-2 md:mt-0">
          <motion.img
            alt="redux"
            src={reduxim}
            className="object-covershrink-0 aspect-square w-72 md:w-[80px] rounded-md cursor-pointer"
            variants={imageVariants}
            whileHover="hover"
          />
        </motion.div>
        <motion.div initial="offscreen" animate="onscreen" className="mt-2 md:mt-0">
          <motion.img
            alt="bootstrap"
            src={bootstrap}
            className="object-cover shrink-0 aspect-square w-72 md:w-[80px] rounded-md cursor-pointer"
            variants={imageVariants}
            whileHover="hover"
          />
        </motion.div>
        <motion.div initial="offscreen" animate="onscreen" className="mt-2 md:mt-0">
          <motion.img
            alt="mui"
            src={mui}
            className="object-contain shrink-0 aspect-square w-72 md:w-[80px] rounded-md cursor-pointer"
            variants={imageVariants}
            whileHover="hover"
          />
        </motion.div>
        <motion.div initial="offscreen" animate="onscreen" className="mt-2 md:mt-0">
          <motion.img
            alt="tailwind"
            src={tailwind}
            className="object-cover shrink-0 aspect-square w-72 md:w-[80px] rounded-md cursor-pointer"
            variants={imageVariants}
            whileHover="hover"
          />
        </motion.div>
        <motion.div initial="offscreen" animate="onscreen" className="mt-2 md:mt-0">
          <motion.img
            alt="nodejs"
            src={nodejs}
            className="object-cover shrink-0 aspect-square w-72 md:w-[80px] rounded-md cursor-pointer"
            variants={imageVariants}
            whileHover="hover"
          />
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
