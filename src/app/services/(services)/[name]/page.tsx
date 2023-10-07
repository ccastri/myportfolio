import React, { FC } from 'react'
export interface Ipage{
  params:{name:string}
} 
const page: FC<Ipage> = ({params}) => {
  return (
    <div className="pt-16 px-8">
      <h1>services name is: {params.name}</h1>
    </div>
  )
}

export default page
