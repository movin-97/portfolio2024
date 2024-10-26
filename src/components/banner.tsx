import myImage from '../assets/d8d6d0061b327465a7989ebb430191788f41014bce397c0e8650de6ed21ac6ad.png';
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
    <div className="w-full text-center">
      <img
        src={myImage}
        alt="profile picture"
        className="object-contain mt-14 aspect-[1.13] w-[201px] m-auto"
      />
      <div className="mt-10 text-6xl font-extrabold  text-white bg-clip-text bg-[linear-gradient(116deg,#FF8660_71.79%,#9A33FF_95.51%)] leading-[63px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
        <span className="text-white">Turning Coffee into Code </span>
      </div>
      <div className="mt-3 text-3xl font-extrabold  text-white bg-clip-text bg-[linear-gradient(116deg,#FF8660_71.79%,#9A33FF_95.51%)] leading-[63px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
        <span className="text-white">React Websites That Just Click! </span>
      </div>
      <div className="mx-auto mt-10 text-lg font-light tracking-wide w-[650px] text-stone-300 max-md:max-w-72 ">
        I am a skilled React developer with 3+ years of experience, specializing in building dynamic
        front-end applications. My expertise is in creating responsive, user-focused interfaces that
        are both scalable and efficient...
      </div>
      <div className="md:flex md:gap-5 mt-14  items-center text-xl font-semibold md:w-[417px] max-md:mt-10 m-auto">
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
    </div>
  );
};

export default Banner;
