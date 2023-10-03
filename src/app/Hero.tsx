'use client'
import Image from 'next/image';
import React from 'react';
import CVButton from './_components/CVButton';
// import { useRouter } from 'next/router';
// useRouter
const Hero = () => {

  return (
    <main className='w-screen h-[calc(100vh-40px)] flex relative z-40 sm:overflow-y-hidden border-2 mt-[40px] overflow-x-hidden' >
      
      {/* First triangle */}
      <div className="-z-10 absolute h-full  bg-[#0F62FE] clip-triangle -rotate-180 overflow-y-hidden w-screen" />
      
      {/* Hero section: IMAGE + HERO TEXT AND BUTTONS */}
        <div className='  w-screen    flex items-center space-y-12 sm:space-y-0  flex-col sm::flex-row  pt-12  '>
          <div  className="absolute h-1/2  z-40 border-black  my-auto sm:h-full overflow-y-hidden flex sm:w-[50%] rounded-full  w-auto  sm:left-0  ">
            <Image
              src="/hero.png"
              alt="Camilo Castrillon"
              priority
              className=" sm:w-auto mx-auto object-cover   sm:my-auto "
              width={300}
              height={10}
            />
          </div>
        
        {/* Hero text */}
        <div className='h-auto sm:h-full  right-0  top-[40%] sm:my-auto sm:top-0 space-y-4 absolute   w-screen sm:w-1/2   px-8 sm:items-center sm:justify-center flex flex-col'>
          <h1 className='z-50 font-semibold  h-auto text-center text-3xl   '>
              Hi, there!
          </h1>
          <p className='text-sm text-center px-4'>{`I'm Camilo Castrillón a biomedical engineer and software developer from`} <span className="font-bold text-green-700">Cali, Colombia.</span>
          {`with a keen sense for innovation and creativity  `}
          </p>
          <div className='space-x-4 w-auto h-16  text-center flex m-auto'>
          
          {/*GITHUB AND CV BUTTON */}
            <div 
            onClick={()=>window.open('https://www.github.com/ccastri', '_blank')}
            className="border-2  px-4 py-1 w-1/2 opacity-80 hover:opacity-100 mx-auto bg-slate-600 text-[#fafafa] cursor-pointer rounded transition-all duration-200 transform hover:ease-in-out hover:scale-105 hover:bg-[#0F62FE] ">
              <span>Check out my GitHub</span>
            </div>
              <div className='mx-auto   rounded-md w-1/2 border-2 h-auto text-center flex items-center  hover:text-slate-900 cursor-pointer   hover:bg-slate-300 transition-all duration-200 transform hover:ease-in-out'>
                <CVButton/>
              </div>
            </div>
          </div>
      </div>
    </main>
  );
}

export default Hero;
