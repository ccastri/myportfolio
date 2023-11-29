import React from 'react'
import DevServiceOptions from '../../../_components/DevServiceOption'
import Banner from '../../../_components/Banner'
import StlViewerAgain from '@/app/_components/StlViewerAgain'
import StlViewer from '@/app/_components/StlViewer'
import StlViewerFiber from '@/app/_components/StlViewerFiber'
import ContactForm from '@/app/_components/ContactForm'
const page = () => {
  return (
    <div className="p-8 bg-[#fafafa]">
    <div className=" h-[90vh] z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]  from-zinc-400 via-orange-200 to-fuchsia-600  text-[#fafafa]   mt-20 rounded-[44px] relative sm:h-screen  flex flex-col border-gray-200">
      <div className="h-full w-full opacity-20 bg-gray-600 rounded-[44px] "/>
{/* bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-400 via-orange-200 to-fuchsia-600 */}
{/* bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-600 via-lime-800 to-amber-300 */}
     <div className='z-40 space-y-16 px-8 py-12  absolute'>
      
<h2 className='flex my-auto rounded-[16px] text-3xl h-32 items-center font-bold z-40 '>Software Development <span className="text-3xl border-black flex font-semibold left-48 opacity-20 absolute">SD</span></h2>
<p className="text-2xl text-[#fafafa] font-bold tracking-wide">{`I'm a consultant specialized in automation and optimization for your business in this era of technological transition`}</p>

<button className='sm:w-3/12 font-bold rounded-full mt-12 px-6 py-2 text-md tracking-wider text-[#1a1a1a] bg-[#fafafa] hover:bg-slate-700 hover:text-[#fafafa]'>Contact Me</button>
</div>
</div>
{/* <div className='relative h-screen w-scree'>

  
</div> */}
<div className=' h-auto p-4 bg-[#fafafa]'>
  <p className='text-md'>I use programming to address multiple everyday problems, even outside the scope of healthcare.
  <br/>
  <br/>
  In the last 3 years, I have worked as an independent IT consultant, helping small local businesses modernize their processes.
  <br/>
  <br/>
  
   My technical background in engineering and my experience have led me to the healthcare IT sector, where I focus on modernizing platforms used by healthcare institutions, based on the principle of interoperability.
  </p>

    </div>
    <DevServiceOptions/>
    <div>

    {/* <StlViewerAgain/> */}
      <ContactForm/>
    </div>
    {/* <Banner/> */}

    </ div>
  )
}

export default page
