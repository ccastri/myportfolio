'use client'
import Image from 'next/image'
import React from 'react'
import { sliderItems } from './Slider'

const Product = () => {
  return (
    <div
    className="flex flex-col  h-full">
        {sliderItems.map(item =><div key={item.id}>

            <div>
      <Image 
      className="h-auto w-screen object-cover"
      src={`/${item.imgBg}`}  alt='' width={1064} height={800}/>
      </div>
      <div className="h-[40vh] flex flex-col space-y-4 px-4 py-2 bg-[#fafafa]">
        <h2 className='font-bold text-25xl '>
            {item.title}
        </h2>
        <p className='text-lg'>
        {item.adds}
        </p>

        {/* <input type="text" /> */}
        
        </div>
        </div>)
    }
    </div>
  )
}

export default Product
