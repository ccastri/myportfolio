'use client'
import Image from 'next/image';
import React from 'react';
import CVButton from './_components/CVButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHub from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';

const Hero = () => {

  return (
    <main className='w-screen md:h-screen h-full  md:space-y-6 md:items-center pb-8 md:px-16  z-40 sm:overflow-y-hidden flex overflow-x-hidden bg-[#96a396bb]' >
      
      {/* First triangle */}
      {/* <div className=" absolute h-full  bg-[#acbad6] clip-triangle shadow-xl -rotate-180 overflow-y-hidden w-screen" /> */}
      
      {/* Hero section: IMAGE + HERO TEXT AND BUTTONS */}
        {/* <div className='  w-full  p-4  flex items-center space-y-12 sm:space-y-0  flex-col sm::flex-row relative  '> */}
          {/* <div  className="absolute h-1/2  z-40  top-10 justify-center items-center my-auto sm:h-full overflow-y-hidden flex   w-auto  sm:left-0  ">
            <Image
              src="/hero.png"
              alt="Camilo Castrillon"
              priority
              className=" w-full mx-auto object-cover h-full sm:my-auto "
              width={400}
              height={400}
            />
          </div> */}

        {/* Hero text */}
        <div className='h-full items-center  w-full  sm:my-auto  pt-8 text-[#fafafa]  overflow-y-hidden    px-8 md:px-24 sm:items-center sm:justify-center flex flex-col'>
          <h1 className='z-40 font-semibold   md:w-full text-3xl   '>
              Hola, Bienvenidos!
          </h1>
          <p className='text-md     text-2xl w-full '>
            Me llamo Camilo Castrillón. <span className="font-bold text-yellow-300">Soy Ingeniero biomédico y desarrollo software.</span> 
          <span className='text-blue-500 font-bold'> Tambien soy experto en salud y teconología.</span> <span className= "w-full m-0  font-bold p-0 text-red-500"><LocationOnIcon/> Actualmente vivo en Cali, Colombia. </span>
           Construyo apps web, mobiles y basadas en IA. Mi mision es contribuir a actualizar la infraestuctura tecnológica en salud... <>O de tu empresa</>
          </p>
          <div className='space-x-4 w-auto h-auto  my-4  text-center flex '>

          {/*GITHUB AND CV BUTTON */}
            <div 
            onClick={()=>window.open('https://www.github.com/ccastri', '_blank')}
            className="hover:border-b-2 items-center flex justify-center py-2 px-6 w-1/2 opacity-80 hover:opacity-100 mx-auto bg-[#0F62FE] hover:bg-slate-600 text-[#fafafa] cursor-pointer rounded transition-all duration-200 transform hover:ease-in-out hover:scale-105  ">
              <span>Repo <GitHub/></span>
            </div>
              <div className='mx-auto group border-2 px-2 rounded-md w-1/2 h-auto text-center flex items-center  hover:text-slate-900 cursor-pointer   hover:bg-slate-300 transition-all duration-200 transform hover:ease-in-out'>
                <CVButton/> <DownloadIcon className="text-white group-hover:text-slate-600"/>
              </div>
            </div>
          </div>
      {/* </div> */}
    </main>
  );
}

export default Hero;
