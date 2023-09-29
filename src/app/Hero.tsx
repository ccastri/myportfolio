import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className='w-screen h-screen max-h-screen relative overflow-x-hidden'>
      {/* First triangle */}
      <div className="-z-10 absolute h-screen  bg-[#0F62FE] clip-triangle -rotate-180 overflow-x-hidden w-screen" />
      {/* Hero section */}
      <div className='h-screen w-screen flex flex-col md:flex-row   '>
<div className="z-50  h-screen top-0 w-screen md:w-1/2 h-6/12 sm:h-screen pl-6  flex items-center justify-center  relative ">
  <Image
    src="/hero.png"
    alt="Camilo Castrillon"
    priority
    className="absolute z-50 rounded-full sm:h-1/2 w-auto h-auto lg:h-full    sm:mb-0"
    width={380}
    height={380}
  />
  {/* <div className='md:w-1/2'> */}

  <svg
    viewBox="0 0 200 200"
    // className="sm:pl-0 "
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
      fill="#e4e9f3"
      d="M53.5,-45.2C64.2,-29.3,64.1,-7.3,59.8,14.4C55.4,36.2,46.8,57.7,31,66C15.2,74.2,-7.9,69.2,-24.4,58.3C-41,47.4,-51.1,30.7,-58.1,10.4C-65,-9.9,-68.7,-33.8,-58.5,-49.7C-48.3,-65.5,-24.1,-73.2,-1.4,-72.1C21.4,-71,42.8,-61.1,53.5,-45.2Z"
      transform="translate(100 100)"
      />
  </svg>
      {/* </div> */}
</div>
        <div className='h-6/12 pb-4 w-screen sm:w-1/2 text-center text-[#fafafa]   px-4 md:items-center md:justify-center flex flex-col'>

        <h1 className='z-50 font-semibold  text-3xl   '>
            Hi, there!
        </h1>
        <h2>{`I'm Camilo Castrillon a biomedical engineer from and software developer from`} <span>Cali, Colombia</span></h2>
        </div>

      </div>
    </div>
  );
}

export default Hero;
