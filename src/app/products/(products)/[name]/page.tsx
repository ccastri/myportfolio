import { FC } from 'react'

export interface IProduct{
params:{name: string}
}

const page: FC<IProduct> = ({params}) => {
  return (
    <div className='p-12'>
      <h1>product: {params.name}</h1>
    </div>
  )
}

export default page
