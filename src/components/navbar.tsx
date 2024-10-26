/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import Logo from '../assets/Logo';

type IProps = {
  handleClick?: any;
};

const Navbar = ({ handleClick }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="drop-shadow-2xl text-base font-semibold  text-white px-4 shadow-2xl">
        <div className="flex  gap-5 justify-between items-center">
          <div className="text-xl font-semibold text-stone-300 tracking-[2.4px] p-3">
            <Logo />
          </div>
          <div className={`hidden lg:flex gap-10 items-start my-auto max-md:max-w-full `}>
            <div
              className=" px-8 cursor-pointer hover:text-yellow-400"
              onClick={() => handleClick('home')}
            >
              Home
            </div>
            <div
              className=" px-8 cursor-pointer hover:text-yellow-400"
              onClick={() => handleClick('skills')}
            >
              Skills
            </div>
            <div
              className=" px-8 cursor-pointer hover:text-yellow-400"
              onClick={() => handleClick('projects')}
            >
              Projects
            </div>
            <div
              className=" px-8 cursor-pointer hover:text-yellow-400"
              onClick={() => handleClick('contact')}
            >
              Contact
            </div>
          </div>
          <div className=" lg:hidden">
            <button onClick={() => setIsOpen(true)}>
              <i className="fa-solid fa-bars text-2xl text-yellow-800"></i>
            </button>
          </div>
        </div>
      </div>

      <main
        className={
          'fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
          (isOpen
            ? ' transition-opacity opacity-100 duration-500 translate-x-0  '
            : ' transition-all delay-500 opacity-0 translate-x-full  ')
        }
      >
        <section
          className={
            ' min-w-64 right-0 absolute bg-neutral-800 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ' +
            (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
          }
        >
          <article className="relative bg-neutral-800 overflow-y-scroll ">
            <div className="flex justify-center items-center p-3">
              <button onClick={() => setIsOpen(false)}>
                <i className="fa-solid fa-xmark text-3xl text-yellow-800"></i>
              </button>
            </div>
            <div className="p-3 text-white">
              <div
                className="w-12 py-2 font-semibold cursor-pointer hover:text-yellow-400"
                onClick={() => {
                  handleClick('home');
                  setIsOpen(false);
                }}
              >
                Home
              </div>
              <div
                className="w-12 py-2 font-semibold cursor-pointer hover:text-yellow-400"
                onClick={() => {
                  handleClick('experience');
                  setIsOpen(false);
                }}
              >
                Experience
              </div>
              <div
                className="w-12 py-2 font-semibold cursor-pointer hover:text-yellow-400"
                onClick={() => {
                  handleClick('projects');
                  setIsOpen(false);
                }}
              >
                Projects
              </div>
              <div
                className="w-12 py-2 font-semibold cursor-pointer hover:text-yellow-400"
                onClick={() => {
                  handleClick('contact');
                  setIsOpen(false);
                }}
              >
                Contact
              </div>
            </div>
          </article>
        </section>
        <section
          className=" w-screen h-full cursor-pointer "
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </main>
    </>
  );
};

export default Navbar;
