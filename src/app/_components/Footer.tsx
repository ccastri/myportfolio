'use client'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footer = () => {
    const phoneNumber = '+573107282535';

  // Función para generar el enlace de WhatsApp
  const generateWhatsAppLink = () => {
    const message = "Hi, Camilo! I'm looking for and expert dev who would advise me about"; // Mensaje inicial opcional
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };
  return (
    <main 
    id="footer"
    className=' flex flex-col space-y-8 py-8 px-4 w-screen sm:ml-20 justify-center text-slate-700 bg-[#c3d4f5] '>
      {/* <h1>Footer works</h1> */}
      <>
      <h1 className="text-2xl md:text-25xl md:font-bold  ">¿Tienes una idea innovadora que promete revolucionar la industria?</h1>
      <h2 className=' left-0  h-full text-2xl w-10/12 '><span className="  w-full mx-auto text-2xl mt-4 h-20   ">Me encantaria conversar pensando en</span> hacerla realidad
      <br/>
      <span className='h-28  left-0 z-10  absolute bg-green-500   w-9/12 '/><span className="font-bold md:text-3xl sm:w-6/12 w-7/12 border-2 bg-[#fafafa]  flex mb-8  relative  h-20 z-40 ">Trabajemos para realizar tus sueños!!</span></h2>
      </>

      <><form action=" " className='flex flex-col my-auto sm:w-8/12 w-10/12 bg-[#f2f2f2] sm:mr-52 pt-20 pb-4 gap-4 sm:pr-44 h-auto px-4   '>
        <input type="email" placeholder='Correo electrónico' className='py-4 bg-[#f2f2f2] border-b-2 border-[#a1a1a1]' />
        <input type="text"  placeholder='Nombre' className='py-4 bg-[#f2f2f2] border-b-2 border-[#a1a1a1]'/>
        <textarea placeholder='Cuéntame cómo crees que empezamos a cambiar el mundo' className=' h-44 bg-[#f2f2f2] border-b-2 border-[#a1a1a1]' />

        <input type="submit" className=' py-2 cursor-pointer  sm:ml-[80%] rounded-full font-semibold tracking-wide bg-[#1a1a1a] border-2   text-[#fafafa] text-md   ' />
        </form></>
      <div className="w-screen items-center pt-20 flex ">

      <div className="cursor-pointer hover:text-blue-400  rounded w-36 px-4 m-auto flex space-x-2 py-3 hover:underline"><LinkedInIcon onClick={()=>window.open('https://www.linkedin.com/camilo-castrillonn', '_blank')}/><span className=" w-full">LinkedIn</span></div>
      <div className="cursor-pointer hover:text-gray-500  rounded w-36 px-4 m-auto flex space-x-2 py-3 hover:underline"><GitHubIcon onClick={()=>window.open('https://www.github.com/ccastri', '_blank')}/><span className=" w-full">Github</span></div>
      <div className="cursor-pointer hover:text-green-500 rounded w-36 px-4 m-auto flex space-x-2 py-3 hover:underline"><WhatsAppIcon onClick={()=>window.open(generateWhatsAppLink(), '_blank')}/><span className=" w-full">WhatsApp</span></div>

      </div>
    </main>
  )
}

export default Footer
