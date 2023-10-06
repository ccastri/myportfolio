import Image from 'next/image'
import React from 'react'

const About = () => {
  return (

      <div 
      className='  w-screen  py-6   bg-[#fafafa] flex items-center  flex-col  '
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
          <p className="p-4 sm:w-6/12 text-xl font">Como persona soy una combinación de varios aspectos: la curiosidad, el deseo por nuevos conocimientos y la
            pasión por todo lo que hago son factores decisivos en mi personalidad. 
            <br/>
            <br/>
            Como ingeniero mis habilidades me han llevado por el camino del desarrollo tecnológico, el cual estoy empezando
            a implementar afectando personas cercanas y empresas locales que necesitan de una persona con dominio del tema
            para dar el salto de calidad.
            <br/>
            <br/>
            Entiendo la importancia de la certificacion y los estandares, por ello pongo todo mi conocimientos al servicio
            de tus ideas para que el producto final cumpla tus espectativas y las de organismos interncionales. En la industria médica
            busco cumplir estandares como: HL7, HIPAA entre otros
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
