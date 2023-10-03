import Image from 'next/image'
import React from 'react'

const Stack = () => {
  return (
    <div className="h-screen flex relative text-[#fafafa] bg-black flex-col items-center text-center justify-center w-screen border-2 px-2 ">
         <div className="absolute  w-screen h-full flex flex-col items-center justify-center space-y-32 z-10">
         <Image className="w-full absolute h-auto  object-cover z-10 " src="/hip.gif" alt="Unity Logo" width={200} height={200}/>
         <h1 className='absolute text-center z-30  font-bold text-[#fafafa] text-xs animate-rotate360'>3D model from a <br/> real patient brain</h1>
         </div>
        {/* <div className="-z-10 absolute h-full   bg-[] clip-triangle -rotate-180 overflow-y-hidden w-screen" /> */}
        {/* <div className="-z-10 absolute h-full  bg-[#0F62FE] clip-triangle  -rotate-270 overflow-y-hidden w-screen" /> */}
        <div className='group opacity-10 z-50 w-full h-full flex justify-between py-12  flex-col px-8 hover:opacity-100'>

        <h2 className='text-[#fafafa] text-2xl z-50'>Ongoing project stack:</h2>
      <div className='group flex-flex-wrap opacity-20 bottom-0   hover:opacity-70 z-20 py-4 px-2 flex w-full justify-between bg-[#fafafa] border-2 rounded-md sm:p-8  '>
         <Image className="hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/unity.svg" alt="Unity Logo" width={50} height={50}/>
         <Image className="hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/3d-slicer.png" alt="Slicer Logo" width={70} height={70}/>
         <Image className="hover:scale-105 transition-all duration-200 hover:ease-in-out transform z-50" src="/opengl-logo.svg" alt="Slicer Logo" width={90} height={90}/>
         <Image className="hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/logo_c_sharp.svg" alt="Slicer Logo" width={70} height={70}/>
         <Image className="hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/python-logo-small.svg" alt="Python Logo" width={50} height={50}/>
      </div>
      <span className='z-50 text-[#fafafa]'>Development of a neuronavigation system using unity 3D engine, 3D Slicer and python to build a bridge for them both. <br/> 
      { `Under the hood I'm be using C++/C# to create extensions for the integration process`}
      </span>
        </div>
    </div>
  )
}

export default Stack
