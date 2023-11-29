import React from 'react'

const ContactForm = () => {
return (
  <div className="pt-8 space-y-12">
    <>
      <h1 className="text-2xl md:text-25xl md:font-bold">
        Do you have an innovative idea that promises to revolutionize the industry?
      </h1>
      <h2 className='left-0 h-full text-2xl w-10/12'>
        <span className="w-full mx-auto text-2xl mt-4 h-20">
          I would love to have a conversation about turning it into reality.
        </span>
        <br/>
        <span className='h-28 left-0 z-10 absolute bg-green-500 w-9/12'/>
        <span className="font-bold md:text-2xl sm:w-6/12 w-/12 border-2 bg-[#fafafa] flex mb-8 relative h-20 z-40">
         {` Let's work together to make your dreams come true!!`}
        </span>
      </h2>
    </>

    <>
      <form action=" " className='flex  flex-col my-auto sm:w-8/12 w-10/12 bg-[#f2f2f2] sm:mr-52 pt-20 pb-4 gap-4 sm:pr-44 h-auto px-4'>
        <input type="email" placeholder='Email' className='py-4 bg-[#f2f2f2] border-b-2 border-[#a1a1a1]' />
        <input type="text" placeholder='Name' className='py-4 bg-[#f2f2f2] border-b-2 border-[#a1a1a1]' />
        <textarea placeholder='Tell me how you think we can start changing the world' className='h-44 bg-[#f2f2f2] border-b-2 border-[#a1a1a1]' />
        <input type="submit" className='py-2 cursor-pointer sm:ml-[80%] rounded-full font-semibold tracking-wide bg-[#1a1a1a] border-2 text-[#fafafa] text-md' />
      </form>
    </>
  </div>
)

}

export default ContactForm
