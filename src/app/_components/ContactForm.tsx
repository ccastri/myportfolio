import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <>
            <h1 className="text-2xl md:text-25xl md:font-bold  ">¿Tienes una idea innovadora que promete revolucionar la industria?</h1>
            <h2 className=' left-0  h-full text-2xl w-10/12 '><span className="  w-full mx-auto text-2xl mt-4 h-20   ">Me encantaria conversar pensando en</span> hacerla realidad
            <br/>
            <span className='h-28  left-0 z-10  absolute bg-green-500   w-9/12 '/><span className="font-bold md:text-3xl sm:w-6/12 w-7/12 border-2 bg-[#fafafa]  flex mb-8  relative  h-20 z-40 ">Trabajemos para realizar tus sueños!!</span></h2>
        </>

        <>
            <form action=" " className='flex flex-col my-auto sm:w-8/12 w-10/12 bg-[#f2f2f2] sm:mr-52 pt-20 pb-4 gap-4 sm:pr-44 h-auto px-4   '>
                <input type="email" placeholder='Correo electrónico' className='py-4 bg-[#f2f2f2] border-b-2 border-[#a1a1a1]' />
                <input type="text"  placeholder='Nombre' className='py-4 bg-[#f2f2f2] border-b-2 border-[#a1a1a1]'/>
                <textarea placeholder='Cuéntame cómo crees que empezamos a cambiar el mundo' className=' h-44 bg-[#f2f2f2] border-b-2 border-[#a1a1a1]' />

                <input type="submit" className=' py-2 cursor-pointer  sm:ml-[80%] rounded-full font-semibold tracking-wide bg-[#1a1a1a] border-2   text-[#fafafa] text-md   ' />
            </form>
        </>
    </div>
  )
}

export default ContactForm
