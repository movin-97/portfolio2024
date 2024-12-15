import { motion } from 'framer-motion';
import myImage from '../assets/WhatsApp Image 2024-12-12 at 13.47.27_30755d03.jpg';
import resume from '../assets/MovinResume.pdf';

const Banner = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'My_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="w-full text-center"
    >
      <motion.div
        className="mt-10 w-[201px] h-[201px] m-auto rounded-full overflow-hidden bg-cover bg-center transition-all duration-300 cursor-pointer"
        style={{
          backgroundImage: `url(${myImage})`,
          backgroundPosition: 'top center', // Adjust as needed (e.g., 'top left', 'bottom right')
        }}
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1.1 }} // Zoom in to 120% on hover
        transition={{ duration: 0.1, ease: 'backInOut' }}
      />
      <div className="mt-5 text-5xl font-extrabold text-white bg-clip-text bg-[linear-gradient(116deg,#FF8660_71.79%,#9A33FF_95.51%)] leading-[63px] max-md:mt-5 max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
        <span className="text-white">Turning Coffee into Code</span>
      </div>

      <div className="mb-3 text-3xl font-extrabold  text-white bg-clip-text bg-[linear-gradient(116deg,#FF8660_71.79%,#9A33FF_95.51%)] leading-[63px] max-md:mt-5 max-md:max-w-full max-md:text-3xl max-md:leading-[30px]">
        <span className="text-white">React Websites That Just Click! </span>
      </div>
      <div className="mx-auto text-lg font-light tracking-wide w-[650px] text-stone-300 max-md:max-w-72 ">
        I am a skilled React developer with 3+ years of experience, specializing in building dynamic
        front-end applications. My expertise is in creating responsive, user-focused interfaces that
        are both scalable and efficient...
      </div>
      <div className="md:flex md:gap-5 mt-10  items-center text-xl font-semibold md:w-[417px] max-md:mt-10 m-auto">
        <div className="px-8 cursor-pointer hover:bg-black hover:text-white py-4 bg-white border border-white border-solid rounded-[50px] text-neutral-900 max-md:px-5">
          <a target="_blank" href="https://www.linkedin.com/in/movin-d-a64ab212a/" className="">
            Get In Touch
          </a>
        </div>
        <div
          onClick={handleDownload}
          className="px-7 py-4 cursor-pointer hover:border-red-600 text-white border-2 border-white border-solid rounded-[50px] max-md:px-5 mt-4 md:mt-0"
        >
          Download CV
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
