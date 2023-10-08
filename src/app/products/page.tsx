
import React, { FC } from 'react'
import Slider from '../_components/Slider'
import Product from '../_components/Product'
import Repo, { getGitHubRepos } from '../_components/Repo'


const page = () => {

  return (
    <div  className="h-full">
      <div className=' h-screen w-screen'>
        <Slider/>

      </div>
        <Product/>
        <Repo />
    </div>
  )
}

export default page
