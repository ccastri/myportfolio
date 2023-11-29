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
          <p className="p-4 sm:w-10/12 text-25xl font">
            I am a person passionate about learning and naturally curious. As an engineer, I develop technology that positively impacts local individuals and businesses.


            <br/>
            <br/>
My focus on quality standards ensures that your ideas meet both local and international expectations, particularly in the medical industry, where I work hand in hand with standards such as HL7 and HIPAA
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
