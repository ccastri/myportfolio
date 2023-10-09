'use client'
import React from 'react'
import StlViewer from '@/app/_components/StlViewerFiber'
const page = () => {
  return (
    <div className="mt-20 h-[calc(100vh-40px)]">
    {/* <h1>Devs working here...
Please, if you want to check the working component look at <span onClick ={()=>{window.open('http://3d-printer-k4h32pmvi.vercel.app', '_blank')}}>HERE</span>

    </h1> */}
      <StlViewer/>
    </div>
  )
}

export default page
