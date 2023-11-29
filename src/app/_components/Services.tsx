'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Services = () => {
  const router = useRouter()
  return (
<div className="py-12 rounded-2xl bg-[#f1f1f1] min-h-screen text-center w-screen items-center flex flex-col px-8">
    <h1 className='text-3xl'>Services</h1>
    <h2 className='my-8 text-25xl'>Discover different options to empower your healthcare project with technology</h2>
    <div className='flex flex-col w-full space-y-6'>

      <div 
        onClick={()=>{router.push('services/programming')}}
        className='bg-[#fafafa] blur-sm hover:blur-0 hover:text-[#fafafa] md:w-6/12 py-6 space-y-4 flex flex-col mx-auto rounded-xl sm:w-8/12 w-auto hover:bg-green-600 transition-all hover:ease-in-out duration-200 transform hover:scale-105 cursor-pointer'
      >
        <h2 className="text-xl text-center font-bold tracking-wide">Software Development</h2>
        <p className="text-lg text-center mx-auto w-full">{`The web is the fastest way to reach your clients. Let's build a 24/7 support architecture for an abundant flow of clients and employees.`}</p>
      </div>
<div className='bg-[#fafafa] blur-sm hover:blur-0 hover:text-[#fafafa] md:w-6/12 py-6 space-y-4 flex flex-col mx-auto rounded-xl sm:w-8/12 w-auto hover:bg-green-600 transition-all hover:ease-in-out duration-200 transform hover:scale-105 cursor-pointer px-2'>
  <h2 className="text-lg text-center font-bold tracking-wide ">AI-Powered Solutions: Chatbots & Virtual Assistants for Marketing Excellence</h2>
  <p className="text-md text-center mx-auto w-10/12">{`Leverage my extensive expertise in AI, chatbots, and virtual assistants to revolutionize marketing strategies. Let's integrate cutting-edge AI-driven solutions that engage customers, streamline interactions, and elevate marketing success for your agency.`}</p>
</div>

      <div className='bg-[#fafafa] blur-sm hover:blur-0 hover:text-[#fafafa] md:w-6/12 py-6 space-y-4 flex flex-col mx-auto rounded-xl sm:w-8/12 w-auto hover:bg-green-600 transition-all hover:ease-in-out duration-200 transform hover:scale-105 cursor-pointer px-2'>
  <h2 className="text-lg text-center font-bold tracking-wide">Strategic IT Consulting for Healthcare Transformation</h2>
  <p className="text-md text-center mx-auto w-10/12">{`Leverage the web as the fastest way to reach your clients. Let's construct an architecture supporting 24/7 operations, ensuring a continuous and substantial flow.`}</p>
</div>

<div className='bg-[#fafafa] blur-sm hover:blur-0 hover:text-[#fafafa] md:w-6/12 py-6 space-y-4 flex flex-col mx-auto rounded-xl sm:w-8/12 w-auto hover:bg-green-600 transition-all hover:ease-in-out duration-200 transform hover:scale-105 cursor-pointer px-2'>
  <h2 className="text-lg text-center font-bold tracking-wide">Implement Smart FHIR Services in Your Healthcare Project</h2>
  <p className="text-md text-center mx-auto w-10/12">{`Utilize the web's agility to connect with clients swiftly. Let's architect a system that operates 24/7, ensuring a seamless and abundant flow of operations.`}</p>
</div>

<div className='bg-[#fafafa] blur-sm hover:blur-0 hover:text-[#fafafa] md:w-6/12 py-6 space-y-4 flex flex-col mx-auto rounded-xl sm:w-8/12 w-auto hover:bg-green-600 transition-all hover:ease-in-out duration-200 transform hover:scale-105 cursor-pointer px-2'>
  <h2 className="text-lg text-center font-bold tracking-wide ">Seamless Integration with Electronic Medical Records Services</h2>
  <p className="text-md text-center mx-auto w-10/12">{`Leverage the web's potential for rapid client interaction. Let's design an architecture that operates incessantly, facilitating a substantial flow of services.`}</p>
</div>

<div className='bg-[#fafafa] blur-sm hover:blur-0 hover:text-[#fafafa] md:w-6/12 py-6 space-y-4 flex flex-col mx-auto rounded-xl sm:w-8/12 w-auto hover:bg-green-600 transition-all hover:ease-in-out duration-200 transform hover:scale-105 cursor-pointer px-2'>
  <h2 className="text-lg text-center font-bold tracking-wide ">3D Design: Precision Modeling and Surgical Planning</h2>
  <p className="text-md text-center mx-auto w-10/12">{`Explore the web's rapid connectivity with clients. Let's build an architecture facilitating 24/7 operations, ensuring a robust flow of services.`}</p>
</div>



    </div>
  </div>
  )
}

export default Services
