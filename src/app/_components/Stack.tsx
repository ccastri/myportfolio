import Image from 'next/image'
import React from 'react'

const Stack = () => {
  return (
    <main className="h-screen flex relative text-[#fafafa] bg-black flex-col items-center text-center justify-center w-screen border-2  ">
         <div className="absolute  w-full h-full flex flex-col items-center justify-center space-y-32 sm:space-y-44 z-10">
         <Image className="w-auto absolute h-auto  object-cover z-10 " src="/hip.gif" alt="Unity Logo" width={1080} height={980}/>
         <h1 className='absolute text-center z-30  font-bold text-slate-800 text-xs animate-rotate360'>3D model from a <br/> <span className='text-lg text-slate-700'>real human brain</span></h1>
         </div>
        {/* <div className="-z-10 absolute h-full   bg-[] clip-triangle -rotate-180 overflow-y-hidden w-screen" /> */}
        {/* <div className="-z-10 absolute h-full  bg-[#0F62FE] clip-triangle  -rotate-270 overflow-y-hidden w-screen" /> */}
        <div className='group opacity-10 z-40 w-full h-full flex justify-between py-12  flex-col sm:px-8 hover:opacity-100'>
<>
        <h2 className='text-[#fafafa] text-2xl h-2 z-40'>Ongoing project:</h2>
        <span className="m-0 py-0 px-12">Neuronavigation System 3D (mented to be HL7 FHIR and AR compatible)</span>
</>
      <div className='group sm:flex grid grid-cols-3 opacity-20 bottom-0 items-center gap-4 mx-auto text-center justify-center hover:opacity-70 z-20 py-4   w-full sm:justify-between bg-[#fafafa] border-2 rounded-md sm:p-8  '>
         <Image className="mx-auto text-center hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/unity.svg" alt="Unity Logo" width={50} height={50}/>
         <Image className="mx-auto text-center hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/3d-slicer.png" alt="Slicer Logo" width={70} height={70}/>
         <Image className="mx-auto text-center hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/Opengl-logo.svg" alt="Slicer Logo" width={90} height={90}/>
         <Image className="mx-auto text-center hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/logo_c_sharp.svg" alt="Slicer Logo" width={70} height={70}/>
         <Image className="mx-auto text-center hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/python-logo-small.svg" alt="Python Logo" width={50} height={50}/>
         <Image className="mx-auto text-center hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/c_++_logo.svg" alt="Python Logo" width={50} height={50}/>
      </div>
      <span className='px-6 z-40 text-[#fafafa]'>Stack: <br/> Unity3D engine, 3D Slicer and Python to build a bridge for them both. <br/> 
      { `Under the hood I'm using C++/C# to create extensions for an smooth real-time integration process`}
      </span>
        </div>
    </main>
  )
}

export default Stack
