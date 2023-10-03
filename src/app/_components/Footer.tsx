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
    <main className=' flex flex-col space-y-2 py-8 px-4 w-screen items-center justify-center text-slate-700 bg-[#c3d4f5] '>
      {/* <h1>Footer works</h1> */}
      <h1 className="text-2xl ">Just hit me up if anything...</h1>
      <h2 className="px-10 text-center">{`I'll be happy to hear how I'd be helpful to you or how we can collaborate this time`}</h2>
      <div className="w-full space-y-4 flex flex-col sm:flex-row">

      <div className="cursor-pointer hover:bg-blue-400 hover:text-[#fafafa] rounded w-36 px-4 m-auto flex space-x-2 py-3 bg-[#fafafa] border-2"><LinkedInIcon onClick={()=>window.open('https://www.linkedin.com/camilo-castrillonn', '_blank')}/><span className=" w-full">LinkedIn</span></div>
      <div className="cursor-pointer hover:bg-slate-700 hover:text-[#fafafa] rounded w-36 px-4 m-auto flex space-x-2 py-3 bg-[#fafafa] border-2"><GitHubIcon onClick={()=>window.open('https://www.github.com/ccastri', '_blank')}/><span className=" w-full">Github</span></div>
      <div className="cursor-pointer hover:bg-green-500 hover:text-[#fafafa] rounded w-36 px-4 m-auto flex space-x-2 py-3 bg-[#fafafa] border-2"><WhatsAppIcon onClick={()=>window.open(generateWhatsAppLink(), '_blank')}/><span className=" w-full">WhatsApp</span></div>
      </div>
    </main>
  )
}

export default Footer
