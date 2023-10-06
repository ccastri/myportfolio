import Image from 'next/image'
import React from 'react'

const Stack = () => {
  return (
    <main className="h-screen flex relative text-[#fafafa] bg-black flex-col items-center text-center justify-center w-screen border-2  ">
         <div className="absolute  w-full h-full flex flex-col items-center justify-center  z-10">
         <Image className="w-auto absolute h-auto bg-red-500 cursor-pointer  object-cover z-10 " src="/gif-3.gif" alt="hip gif" width={1080} height={980}/>
         {/* <h1 className='absolute text-center z-30  font-bold text-slate-800 text-xs animate-rotate360'>3D model from a <br/> <span className='text-lg text-slate-700'>real human brain</span></h1> */}
         </div>
        {/* <div className="-z-10 absolute h-full   bg-[] clip-triangle -rotate-180 overflow-y-hidden w-screen" /> */}
        {/* <div className="-z-10 absolute h-full  bg-[#0F62FE] clip-triangle  -rotate-270 overflow-y-hidden w-screen" /> */}
        <div className='group  opacity-10 hover:bg-slate-100 hover:rounded-xl text-slate-700 z-40 w-full h-full flex justify-evenly py-12  flex-col hover:opacity-100'>

        <h2 className='text-2xl h-2 w-auto z-40'> <div className="absolute  group-hover:w-48 top-24 pt-2 mt-10 sm:hidden h-2 ml-40 opacity-10 group-hover:opacity-100 w-0 mt-3  transition-all duration-500 group-hover:ease-in-out  bg-green-500 -z-20" />Proyecto actual</h2>
        <p className="m-0  py-0 px-20 md:px-44 mx-auto md:w-3/4  w-full">plataforma paciente para procedimientos quirugicos: 
        seguimiento en tiempo real, interoperabilidad (HL7 FHIR) y realidad virtual (Unity) en planeacion quirugica y soporte tecnológico para cirugia</p>

      <div className='px-20 mx-auto md:w-6/12 z-40 relative '><>Stack: <br/> Unity3D engine, 3D Slicer, Python y más para construír un <div className="absolute hidden sm:block group-hover:w-44 h-2 ml-44 md:ml-32 group-hover:lg:ml-44 group-hover:lg:w-44  group-hover:md:w-20 opacity-10 group-hover:opacity-100 w-0 mt-3  transition-all duration-500 group-hover:ease-in-out  bg-green-500 -z-20" /> <span className="z-40">puente hacia el futuro en medicina.     </span></></div>
      {/* { `Under the hood I'm using C++/C# to create extensions for an smooth real-time integration process`} */}
      <div className='  w-screen sm:flex   hidden  opacity-20 bottom-0 items-center gap-4 mx-auto text-center justify-center group-hover:opacity-90 z-20 py-4   sm:justify-between bg-[#fafafa] border-2 rounded-md   '>
         <Image className="mx-auto text-center hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/unity.svg" alt="Unity Logo" width={50} height={50}/>
         <Image className="mx-auto text-center hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/3d-slicer.png" alt="Slicer Logo" width={70} height={70}/>
         <Image className="mx-auto text-center hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/Opengl-logo.svg" alt="Slicer Logo" width={90} height={90}/>
         <Image className="mx-auto text-center hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/logo_c_sharp.svg" alt="Slicer Logo" width={70} height={70}/>
         <Image className="mx-auto text-center hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/python-logo-small.svg" alt="Python Logo" width={50} height={50}/>
         <Image className="mx-auto text-center hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/c_++_logo.svg" alt="Python Logo" width={50} height={50}/>
      </div>
        </div>
    </main>
  )
}

export default Stack
