'use client'
import React from 'react'
import StlViewerFiber from '@/app/_components/StlViewerFiber'
const page = () => {
  return (
    <div className="mt-20 h-[calc(100vh-40px)]">
    <h1>Devs working here...
Please, if you want to check the working component look at <span onClick ={()=>{window.open('http://3d-printer-k4h32pmvi.vercel.app')}}>HERE</span>

    </h1>
      <StlViewerFiber/>
    </div>
  )
}

export default page