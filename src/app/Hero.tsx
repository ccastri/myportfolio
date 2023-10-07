'use client'
import Image from 'next/image';
import React from 'react';
import CVButton from './_components/CVButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHub from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';

const Hero = () => {
  
  return (
    <div className="flex h-screen group z-30 w-screen py-20 mb-64 relative hover:scale-105   hover:ease-in-out duration-200 transition-all transform ">
          <div className='z-40   flex justify-center px-1 py-3 space-x-2 items-center mx-auto bg-[#1a1a1a] h-4 top-28 left-48 w-3/12 rounded-full absolute'>
            
            <span className="rounded-full bg-slate-600 w-12 h-2"></span>
            
            <span className="rounded-full bg-slate-600 w-2 h-2"></span>
          </div>
    <main className='w-10/12   relative hover:scale-105 h-screen  hover:ease-in-out sm:mt:0  mb-28    mx-auto  my-auto justify-center items-center rounded-3xl m-8 text-sm  bg-[#1a1a1a] p-1 shadow-2xl shadow-blur-12  shadow-red-500 border-4  border-red-500 md:space-y-6 md:items-center  md:px-16  z-30  flex flex-col  ' >
        {/* Hero text */}
        <div className='h-full bottom-0 z-40 relative items-end justify-center rounded-3xl border-4 border-[#1a1a1a]  bg-[#f1f2f2]  w-full    text-slate-700  overflow-y-hidden   overflow-x-hidden p-4 flex flex-col'>
          <h1 className='z-40 font-semibold   px-4 ml-4 md:w-full text-2xl sm:text-3xl   '>
              Hola, Bienvenidos!
          </h1>
          <p className='text-md z-20 relative   text-xl sm:text-25xl w-full '>
            <span className=" mt-3  4 ml-28 absolute h-4 opacity-60 bg-green-500 w-48 -z-10"/>
            Me llamo
            <span className="z-20 font-semibold"> Camilo Castrillón.</span> <span className="font-bold text-yellow-500">Soy Ingeniero biomédico,</span> 
          <span className='text-blue-500 font-semibold'> experto en salud y teconología. </span> <br/><span className= "w-full m-0  font-bold p-0 text-red-500"> <LocationOnIcon/> Actualmente vivo en Cali, Colombia. </span>
           Desarrollo apps web, móviles y basadas en IA con la mision de modernizar la infraestuctura tecnológica en salud... 
           {/* <>O de tu empresa, cualquiera que sea</> */}
          </p>
          <div className='space-x-4 w-auto h-auto  py-6 text-center flex '>

          {/*GITHUB AND CV BUTTON */}
            <div 
            onClick={()=>window.open('https://www.github.com/ccastri', '_blank')}
            className="hover:border-b-2 items-center flex justify-center py-2 px-6 w-1/2 opacity-80 hover:opacity-100 mx-auto bg-[#0F62FE] hover:bg-slate-600 text-[#fafafa] cursor-pointer rounded transition-all duration-200 transform hover:ease-in-out hover:scale-105  ">
              <span>Repo <GitHub/></span>
            </div>
              <div className='mx-auto group border-2 px-2 rounded-md w-1/2 h-auto text-center flex items-center  hover:text-[#fafafa] cursor-pointer   hover:bg-gray-500 transition-all duration-200 transform hover:ease-in-out'>
                <CVButton/> <DownloadIcon className=" group-hover:text-s[#fafaa]"/>
              </div>
            </div>
          </div>
            <div className='w-6/12 pt-2 bottom-6 absolute z-40 h-2 mx-auto bg-gray-300 rounded-full'/>
      {/* </div> */}
      {/* <div className='h-2 w-8/12 flex flex-col absolute  bg-gray-400'/> */}
    </main>
      <div className='h-full w-10/12 p-16 mx-2 mb-6 mt-2 top-17 shadow-4  shadow-xl  group-hover:scale-105  blur-sm border-8 bg-red-500 border-red-500 absolute -z-20  border-l-none border-b-none rounded-3xl   ml-10 lg:ml-28 lg:mb-62 lg:pl-4'/>
      </div>
  );
}

export default Hero;
