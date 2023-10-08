'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Services = () => {
  const router = useRouter()
  return (
       <div className="py-12   rounded-2xl  bg-[#f1f1f1] min-h-screen text-center w-screen items-center flex flex-col  px-8">
      <h1 className='text-3xl'>Servicios</h1>

      <h2 className='my-8 text-25xl'>Conoce las diferentes opciones desde las cuales potencializar tu proyecto de salud con tecnología</h2>
<div className='flex flex-col w-full space-y-6  '>

      <div 
      onClick={()=>{router.push('services/programming')}}
      className='bg-[#fafafa] blur-sm hover:blur-0 hover:text-[#fafafa] md:w-6/12 py-6 space-y-4 flex flex-col mx-auto rounded-xl sm:w-8/12 w-auto hover:bg-green-600 transition-all hover:ease-in-out duration-200 transform hover:scale-105 cursor-pointer'>
            <h2 className="text-xl text-center font-bold tracking-wide">Desarrollo de software</h2>
        <p className="text-lg text-center mx-auto w-full">La web es la manera más rapida de llegar a tus clientes. Construyamos una arquitectura de soporte 24/7 para un flujo abundante de clientes y empleados</p>
        </div>
        <div className='bg-[#fafafa] blur-sm hover:blur-0  hover:text-[#fafafa] md:w-6/12 py-6 space-y-4 flex flex-col mx-auto rounded-xl sm:w-8/12 w-auto hover:bg-green-600 transition-all hover:ease-in-out duration-200 transform hover:scale-105 cursor-pointer px-2'>
            <h2 className="text-lg text-center font-bold tracking-wide ">Consultoria IT en salud</h2>
        <p className="text-md text-center mx-auto w-10/12">La web es la manera más rapida de llegar a tus clientes. Construyamos una arquitectura que soporte y funcione 24/7 con un flujo abundante</p>
        </div>
        <div className='bg-[#fafafa] blur-sm hover:blur-0  hover:text-[#fafafa] md:w-6/12 py-6 space-y-4 flex flex-col mx-auto rounded-xl sm:w-8/12 w-auto hover:bg-green-600 transition-all hover:ease-in-out duration-200 transform hover:scale-105 cursor-pointer px-2'>
            <h2 className="text-lg text-center font-bold tracking-wide ">Implementacion de servicios Smart FHIR en tu proyecto de salud</h2>
        <p className="text-md text-center mx-auto w-10/12">La web es la manera más rapida de llegar a tus clientes. Construyamos una arquitectura que soporte y funcione 24/7 con un flujo abundante</p>
        </div>
        <div className='bg-[#fafafa] blur-sm hover:blur-0  hover:text-[#fafafa] md:w-6/12 py-6 space-y-4 flex flex-col mx-auto rounded-xl sm:w-8/12 w-auto hover:bg-green-600 transition-all hover:ease-in-out duration-200 transform hover:scale-105 cursor-pointer px-2'>
            <h2 className="text-lg text-center font-bold tracking-wide ">Integracion con servicios de historia clinica electrónica</h2>
        <p className="text-md text-center mx-auto w-10/12">La web es la manera más rapida de llegar a tus clientes. Construyamos una arquitectura que soporte y funcione 24/7 con un flujo abundante</p>
        </div>
        <div className='bg-[#fafafa] blur-sm hover:blur-0  hover:text-[#fafafa] md:w-6/12 py-6 space-y-4 flex flex-col mx-auto rounded-xl sm:w-8/12 w-auto hover:bg-green-600 transition-all hover:ease-in-out duration-200 transform hover:scale-105 cursor-pointer px-2'>
            <h2 className="text-lg text-center font-bold tracking-wide ">Diseño 3D: modelado y planeación quirúrgica</h2>
        <p className="text-md text-center mx-auto w-10/12">La web es la manera más rapida de llegar a tus clientes. Construyamos una arquitectura que soporte y funcione 24/7 con un flujo abundante</p>
        </div>
      </div>
    </div>
  )
}

export default Services
