'use client'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='bg-[#fafafa] py-2 px-5 fixed top-0 z-50'>
      <div className="w-screen right-0"><MenuIcon onClick={()=>setIsOpen(!isOpen)}/></div>
      <div  className={`${
          isOpen ? 'h-auto flex space-y-8 opacity-100' : 'h-0 hidden opacity-0'
        } z-50 flex-col top-10 px-5 bg-[#fafafa] transition-all duration-200 ease-in-out absolute left-0 right-0`}>
        <h1 className='text-xl'>Menu</h1>
        <ul className={`${isOpen ?'flex flex-col' :'hidden h-0'}`}>
            <li className={`${isOpen ?'block' :'hidden h-0'}`}>Home</li>
            <li className={`${isOpen ?'block' :'hidden h-0'}`}>Projects</li>
            <li className={`${isOpen ?'block' :'hidden h-0'}`}>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
