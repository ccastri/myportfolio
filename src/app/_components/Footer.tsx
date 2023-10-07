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
    className=' flex flex-col space-y-8 py-8 px-4 w-screen items-center justify-center text-slate-700 bg-[#c3d4f5] '>
      {/* <h1>Footer works</h1> */}
      <>
      <h1 className="text-2xl  ">¿Tienes una idea innovadora que promete cambiar el mundo?</h1>
      <h2 className='md:text-center left-0 w-full text-md line-through'> ¿No sabes cómo hacerla realidad?</h2>
      <h2 className=" text-2xl">Hablemos, quisiera ayudarte a<span className="font-bold"> realizar tus sueños!!</span></h2>
      </>
      <div className="w-screen items-center flex ">

      <div className="cursor-pointer hover:text-blue-400  rounded w-36 px-4 m-auto flex space-x-2 py-3 hover:underline"><LinkedInIcon onClick={()=>window.open('https://www.linkedin.com/camilo-castrillonn', '_blank')}/><span className=" w-full">LinkedIn</span></div>
      <div className="cursor-pointer hover:text-gray-500  rounded w-36 px-4 m-auto flex space-x-2 py-3 hover:underline"><GitHubIcon onClick={()=>window.open('https://www.github.com/ccastri', '_blank')}/><span className=" w-full">Github</span></div>
      <div className="cursor-pointer hover:text-green-500 rounded w-36 px-4 m-auto flex space-x-2 py-3 hover:underline"><WhatsAppIcon onClick={()=>window.open(generateWhatsAppLink(), '_blank')}/><span className=" w-full">WhatsApp</span></div>

      </div>
    </main>
  )
}

export default Footer
