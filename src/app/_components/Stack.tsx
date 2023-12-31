import Image from 'next/image'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useRouter} from 'next/navigation'
const Stack = () => {
  const router = useRouter()
  return (
    <main className="h-screen flex relative text-[#fafafa] bg-black flex-col items-center text-center justify-center w-screen   ">
         <div className="absolute  w-full h-full flex flex-col items-center justify-center  z-10">
         <Image className="w-auto absolute h-auto cursor-pointer  object-cover z-10 " src="/gif-3.gif" alt="hip gif" width={1080} height={980}/>
         {/* <h1 className='absolute text-center z-30  font-bold text-slate-800 text-xs animate-rotate360'>3D model from a <br/> <span className='text-lg text-slate-700'>real human brain</span></h1> */}
         </div>
        {/* <div className="-z-10 absolute h-full   bg-[] clip-triangle -rotate-180 overflow-y-hidden w-screen" /> */}
        {/* <div className="-z-10 absolute h-full  bg-[#0F62FE] clip-triangle  -rotate-270 overflow-y-hidden w-screen" /> */}
        <div className='group  duration-200 transition-all hover:ease-in-out opacity-10 hover:bg-slate-100 hover:rounded-xl relative text-slate-700 z-40 w-full h-full flex justify-evenly py-4  flex-col hover:opacity-100'>
<div className="absolute  group-hover:w-48  top-40  sm:hidden h-2 ml-28 opacity-10 group-hover:opacity-100 w-0 mt-5  transition-all duration-500 group-hover:ease-in-out  bg-green-500 -z-20" />
        <h2 className='text-2xl h-2 w-auto m-0 z-40'> Telemedicine</h2>
        <p className="m-0  py-0 px-4 md:px-44 mx-auto md:w-3/4 z-40 w-full">Patient platform for triage and patient tracking: 
        Real time updates, interoperability (HL7 FHIR)... even augmented reality (Unity) are now possible for supporting diagnosis and sugical planning</p>

      <div className='px-20 mx-auto md:w-6/12 z-40 relative '><>Stack: <br/> Unity3D engine, 3D Slicer, Python y more for... <div className="absolute hidden sm:block group-hover:w-44 h-2 ml-44 md:ml-32 group-hover:lg:ml-44 group-hover:lg:w-44  group-hover:md:w-20 opacity-10 group-hover:opacity-100 w-0 mt-3  transition-all duration-500 group-hover:ease-in-out  bg-green-500 -z-20" /> <span className="z-40">building the bridge to the future.</span></></div>
      {/* { `Under the hood I'm using C++/C# to create extensions for an smooth real-time integration process`} */}
      <div className='  w-screen sm:flex   hidden  opacity-20 bottom-0 items-center gap-4 mx-auto text-center justify-center group-hover:opacity-90 z-20 py-4   sm:justify-between bg-[#fafafa] rounded-md   '>
         <Image className="mx-auto text-center hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/unity.svg" alt="Unity Logo" width={50} height={50}/>
         <Image className="mx-auto text-center hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/3d-slicer.png" alt="Slicer Logo" width={70} height={70}/>
         <Image className="mx-auto text-center hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/Opengl-logo.svg" alt="Slicer Logo" width={90} height={90}/>
         <Image className="mx-auto text-center hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/logo_c_sharp.svg" alt="Slicer Logo" width={70} height={70}/>
         <Image className="mx-auto text-center hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/python-logo-small.svg" alt="Python Logo" width={50} height={50}/>
         <Image className="mx-auto text-center hover:scale-105 transition-all duration-200 hover:ease-in-out transform" src="/c_++_logo.svg" alt="Python Logo" width={50} height={50}/>
      </div>
      {/* <button 
      onClick={()=>router.push('/products/ongoing-project/')} 
      className='px-3 py-2 bg-[#fafafa] ml-44 opacity-10 hover:opacity-100 w-4/12 text-center rounded-full font-bold border-4 border-blue-600 hover:bg-blue-600 hover:text-[#fafafa] hover:ease-in-out transition-all duration-200'
      >
        Ver más <ArrowForwardIcon/>
      </button> */}
        </div>
    </main>
  )
}

export default Stack
