// 'use client'
import React from 'react'
// import StlViewer from '@/app/_components/StlViewerFiber'
import dynamic from 'next/dynamic';

const StlViewer = dynamic(
  () => import('@/app/_components/StlViewerFiber'),
  { ssr: false }
);
const page = () => {
  return (
    <div className="">

      <StlViewer/>
    </div>
  )
}

export default page
