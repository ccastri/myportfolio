import Image from 'next/image'
import React from 'react'

const About = () => {
  return (

      <div 
      className='  w-screen  py-6   bg-[#fafafae0] flex items-center  flex-col  '
      >
        <h1 className='py-4 tracking-widest text-sm text-center font-bold'>{`CAMILO "IN A NUTSHELL"`}</h1>

          <div  
        //   className="absolute h-1/2  z-40  top-10 justify-center items-center my-auto sm:h-full overflow-y-hidden flex   w-auto  sm:left-0  "
          >
            <Image
              src="/hero.png"
              alt="Camilo Castrillon"
              priority
              className=" w-full mx-auto object-cover h-full sm:my-auto "
              width={400}
              height={400}
            />
          </div>
          <p className="p-4 sm:w-10/12 text-xl font">
            Soy una persona apasionada por aprender y curiosa por naturaleza. Como ingeniero, desarrollo tecnología
            que impacta positivamente a personas y empresas locales.
            <br/>
            <br/>
             Mi enfoque en certificaciones y estándares 
            asegura que tus ideas cumplan con expectativas tanto locales como internacionales, especialmente en 
            la industria médica, donde busco cumplir con estándares como HL7 y HIPAA.
          </p>
          {/* <p>Beda Software is a full-cycle software house with a strong focus on healthcare and related fields.
             We turn your ideas into real-life products through product strategy, analytics, UI/UX design and
              development, DevOps & delivery.

            Excellent  Healthcare standards knowledge and implementation experience.

            We develop custom EHR, practice management systems, scheduling, self-checking solutions, 
            patient-facing mobile apps (patient portals, preventive care services), telemedicine and telehealth
             services.
            </p> */}
    </div>
  )
}

export default About
