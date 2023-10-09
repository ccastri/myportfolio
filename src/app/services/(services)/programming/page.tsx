import React from 'react'
import DevServiceOptions from '../../../_components/DevServiceOption'
import Banner from '../../../_components/Banner'
import StlViewerAgain from '@/app/_components/StlViewerAgain'
import StlViewer from '@/app/_components/StlViewer'
import StlViewerFiber from '@/app/_components/StlViewerFiber'
import ContactForm from '@/app/_components/contactForm'
const page = () => {
  return (
    <div className="bg-[#fafafa]">
    <div className=" h-[90vh] z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]  from-zinc-400 via-orange-200 to-fuchsia-600  text-[#fafafa]   mt-20 rounded-[44px] relative sm:h-screen  flex flex-col border-gray-200">
      <div className="h-full w-full opacity-20 bg-gray-600 rounded-[44px] "/>
{/* bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-400 via-orange-200 to-fuchsia-600 */}
{/* bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-600 via-lime-800 to-amber-300 */}
     <div className='z-40 space-y-16 px-8 py-12  absolute'>
      
     <h2 className='flex    my-auto rounded-[16px] text-3xl h-32 items-center font-bold z-40 '>Desarrollo de software <span className="text-3xl   border-black flex font-semibold left-48 opacity-20 absolute">DSw</span></h2>
     <p className="text-2xl text-[#fafafa] font-bold tracking-wide">Soy un consultor especializado en automatización y optimización para tu negocio en esta era de transición tecnológica</p>

      <button className='sm:w-3/12 font-bold   rounded-full mt-12 px-6 py-2 text-md tracking-wider  text-[#1a1a1a] bg-[#fafafa]  hover:bg-slate-700  hover:text-[#fafafa]'>Contactame</button>
     </div>
    </div>
    {/* <div className='relative h-screen w-scree'>

    
    </div> */}
    <div className=' h-auto p-4 bg-[#fafafa]'>
      <p className='text-md'>Hago uso de la programacion para abordar multiples problemas cotidianos, incluso fuera del ámbito de la salud. 
      <br/>
      <br/>
      En los últimos 3 años, he trabajado como consultor de IT independiente, ayudando a pequeños negocios locales a modernizar sus procesos. 
      <br/>
      <br/>
      
       Mi formación técnica en ingeniería y mi experiencia me han llevado al sector IT de la salud, donde me dedico a modernizar plataformas utilizadas por las instituciones de salud, basandome en el principio de interoperabilidad.
      </p>
    </div>
    <DevServiceOptions/>
    <div>

    <StlViewerAgain/>
      <ContactForm/>
    </div>
    {/* <Banner/> */}

    </ div>
  )
}

export default page
