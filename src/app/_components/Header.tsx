'use client'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='bg-[#fafafa] py-2 '>
      <div className="w-screen right-0"><MenuIcon onClick={()=>setIsOpen(!isOpen)}/></div>
      <div className={`${isOpen?'h-screen opacity-100': 'h-0 opacity-0'} z-50 sticky top-0 bg-[#fafafa] transition-all duration-200 ease-in-out`}>
        <h1>Menu</h1>
        <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
