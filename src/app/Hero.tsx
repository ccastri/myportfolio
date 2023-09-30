'use client'
import Image from 'next/image';
import React from 'react';
import CVButton from './_components/CVButton';
// import { useRouter } from 'next/router';
// useRouter
const Hero = () => {
  // const router = useRouter();
  return (
    <div className='w-screen h-screen flex relative overflow-x-hidden'>
      {/* First triangle */}
      <div className="-z-10 absolute h-screen  bg-[#0F62FE] clip-triangle -rotate-180 overflow-x-hidden w-screen" />
      {/* Hero section */}
      <div className='h-screen w-screen flex flex-col md:flex-row relative  '>
        {/* <div className="z-50   top-0  h-[50%] sm:h-screen pl-6  flex   relative "> */}
          <div  className="absolute z-50  my-auto top-0 sm:top-10  rounded-full h-1/2 w-auto   md:w-1/2 items-center justify-center flex  sm:mb-0">

          <Image
            src="/hero.png"
            alt="Camilo Castrillon"
            priority
           
            width={380}
            height={380}
          />
            </div>
            {/* <div className="absolute top-0 z-40">

          <svg
            viewBox="0 0 200 180"
            className="absolute top-0"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
              fill="#e4e9f3"
              d="M53.5,-45.2C64.2,-29.3,64.1,-7.3,59.8,14.4C55.4,36.2,46.8,57.7,31,66C15.2,74.2,-7.9,69.2,-24.4,58.3C-41,47.4,-51.1,30.7,-58.1,10.4C-65,-9.9,-68.7,-33.8,-58.5,-49.7C-48.3,-65.5,-24.1,-73.2,-1.4,-72.1C21.4,-71,42.8,-61.1,53.5,-45.2Z"
              transform="translate(100 80)"
              />
          </svg>
              </div> */}
        {/* </div> */}
        <div className='h-[50%] md:h-screen mt-[90%] sm:mt-0    pb-4 w-screen sm:w-1/2   text-[#fafafa]   px-8 md:items-center md:justify-center flex flex-col'>
          <h1 className='z-50 font-semibold  text-center text-3xl   '>
              Hi, there!
          </h1>
          <h2>{`I'm Camilo Castrillon a biomedical engineer and software developer from`} <span className="text-red-200">Cali, Colombia.</span></h2>
          <p> {`I have keen sense for innovation and creativity aimed to `}
            <span className='font-bold'>{` contribute into local healthcare sector development`}</span>
              from a software perspective
          </p>
          <div className='space-y-2 w-56 text-center mx-auto'>

          <div 
          onClick={()=>window.open('https://www.github.com/ccastri', '_blank')}
          className="border-2 my-4 px-4 py-3  mx-auto bg-[#0F62FE] cursor-pointer rounded transition-all duration-200 transform hover:ease-in-out hover:scale-75 hover:bg-slate-700">
            <span>Check out my GitHub</span>
          </div>
          <div className='mx-auto rounded-md border-2 hover:text-slate-900 cursor-pointer  bg-slate-500 hover:bg-slate-300 px-4 py-3 transition-all duration-200 transform hover:ease-in-out hover:scale-75'>

            <CVButton/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
