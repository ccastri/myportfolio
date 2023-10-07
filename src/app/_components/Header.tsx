'use client'
import { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter()
  // let currentPosition= 0
  const handleMenuClick = () => {
    setIsOpen(!isOpen);

    // Verifica si el usuario está en la página principal
    if (location.pathname === '/') {
      scrollToSection('home');
    } else {
      // Si no está en la página principal, redirige al path raíz
      router.push('/');
    }
  };
  const handleScroll = () => {
    const currentPosition = window.scrollY;
   const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const newPosition = (currentPosition / totalHeight) * 100; // Calculate relative position

    setScrollPosition(newPosition);
 if (currentPosition > 0) {
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
    // <div className='fixed h-24'>
    <nav className={`${isScrolled && 'bg-[rgb(161,161,161)]'}  fixed  top-0 z-50 `}>
      <div className="w-screen right-0 text-[#fafafa] py-2 px-5"><MenuIcon onClick={()=>setIsOpen(!isOpen)}/></div>
      <div  className={`${
          isOpen ? 'h-screen flex space-y-8 opacity-100' : 'h-0 hidden opacity-0'
        } py-4 z-50 flex-col top-10 px-5 bg-[#fafafa] transition-all duration-200 ease-in-out absolute left-0 right-0`}>
        <h1 className='text-xl'>Menu</h1>
        <ul className={`${isOpen ?'flex flex-col space-y-6' :'hidden h-0'}`}>
            <li className={`${isOpen ?'flex cursor-pointer hover:text-slate-400 hover:ease-in-out transition-all transform duration-200 w-1/3 hover:scale-105' :'hidden h-0'}`} onClick={handleMenuClick}>Inicio</li>
            <li className={`${isOpen ?'flex cursor-pointer hover:text-slate-400 hover:ease-in-out transition-all transform duration-200 w-1/3 hover:scale-105' :'hidden h-0'}`} onClick={() => scrollToSection('about')}>Sobre Mí</li>
            <li className={`${isOpen ?'flex cursor-pointer hover:text-slate-400 hover:ease-in-out transition-all transform duration-200 w-1/3 hover:scale-105' :'hidden h-0'}`} onClick={() => scrollToSection('stack')}>Proyecto en curso</li>
            <li className={`${isOpen ?'flex cursor-pointer hover:text-slate-400 hover:ease-in-out transition-all transform duration-200 w-1/3 hover:scale-105' :'hidden h-0'}`} onClick={() => router.push('services')}>Servicios</li>
            <li className={`${isOpen ?'flex cursor-pointer hover:text-slate-400 hover:ease-in-out transition-all transform duration-200 w-1/3 hover:scale-105' :'hidden h-0'}`} onClick={() => scrollToSection('slider')}>Proyectos realizados</li>
            <li className={`${isOpen ?'flex cursor-pointer hover:text-slate-400 hover:ease-in-out transition-all transform duration-200 w-1/3 hover:scale-105' :'hidden h-0'}`} onClick={() => router.push('products')}>Productos</li>
            <li className={`${isOpen ?'flex cursor-pointer hover:text-slate-400 hover:ease-in-out transition-all transform duration-200 w-1/3 hover:scale-105' :'hidden h-0'}`} onClick={() => scrollToSection('otherSkills')}>Otras habilidades</li>
            <li className={`${isOpen ?'flex cursor-pointer hover:text-slate-400 hover:ease-in-out transition-all transform duration-200 w-1/3 hover:scale-105' :'hidden h-0'}`} onClick={() => scrollToSection('footer')}>Contacto</li>

        </ul>
      </div>
    <div 
     style={{ width: `${scrollPosition}%` }}
    className={`z-50  bottom-0 h-2 bg-yellow-400 `}/>
    </nav>
    // </div>
  )
}

export default Header
