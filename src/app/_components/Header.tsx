'use client'
import { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the menu after clicking
  };
  return (
    <nav className={`${isScrolled && 'bg-[#a1a1a1]'} py-2 px-5 fixed  top-0 z-50 `}>
      <div className="w-screen right-0"><MenuIcon onClick={()=>setIsOpen(!isOpen)}/></div>
      <div  className={`${
          isOpen ? 'h-screen flex space-y-8 opacity-100' : 'h-0 hidden opacity-0'
        } z-50 flex-col top-10 px-5 bg-[#fafafa] transition-all duration-200 ease-in-out absolute left-0 right-0`}>
        <h1 className='text-xl'>Menu</h1>
        <ul className={`${isOpen ?'flex flex-col space-y-6' :'hidden h-0'}`}>
            <li className={`${isOpen ?'flex hover:bg-slate-400 hover:ease-in-out transition-all transform duration-200 w-1/3 hover:scale-105 hover:text-[#fafafa]' :'hidden h-0'}`} onClick={() => scrollToSection('home')}>Inicio</li>
            <li className={`${isOpen ?'flex hover:bg-slate-400 hover:ease-in-out transition-all transform duration-200 w-1/3 hover:scale-105 hover:text-[#fafafa]' :'hidden h-0'}`} onClick={() => scrollToSection('stack')}>Proyecto en curso</li>
            <li className={`${isOpen ?'flex hover:bg-slate-400 hover:ease-in-out transition-all transform duration-200 w-1/3 hover:scale-105 hover:text-[#fafafa]' :'hidden h-0'}`} onClick={() => scrollToSection('slider')}>Proyectos realizados</li>
            <li className={`${isOpen ?'flex hover:bg-slate-400 hover:ease-in-out transition-all transform duration-200 w-1/3 hover:scale-105 hover:text-[#fafafa]' :'hidden h-0'}`} onClick={() => scrollToSection('otherSkills')}>Otras habilidades</li>
            <li className={`${isOpen ?'flex hover:bg-slate-400 hover:ease-in-out transition-all transform duration-200 w-1/3 hover:scale-105 hover:text-[#fafafa]' :'hidden h-0'}`} onClick={() => scrollToSection('footer')}>Contacto</li>

        </ul>
      </div>
    </nav>
  )
}

export default Header
