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
    <nav className={`${isScrolled && 'bg-[#f1f1f1]  '}  fixed  w-full top-0 z-50 `}>
      <div className="w-screen right-0  py-4 px-5"><MenuIcon className ={`${isScrolled&& ''}`}onClick={()=>setIsOpen(!isOpen)}/></div>
      <div  className={`w-screen ${
          isOpen ? 'ease-in-out h-screen flex space-y-6 opacity-100' : 'h-0 top-0 -z-50 opacity-0'
        } items-center mx-auto py-4 z-50 flex-col top-10  bg-[#fafafa] transition-all duration-200  absolute left-0 right-0`}>
        <h1 className='text-xl font-bold '>Menu</h1>
        <ul className={`text-center w-screen  mx-auto items-center justify-center ${isOpen ?'flex flex-col space-y-6' :'hidden h-0'}`}>
         <li className={`text-center text-lg font-semibold tracking-wide flex items-center justify-center mx-auto ${isOpen ? 'flex cursor-pointer hover:text-slate-400 hover:ease-in-out transition-all transform duration-200 w-screen text-center hover:scale-105' : 'hidden h-0'}`} onClick={handleMenuClick}>Home</li>
<li className={`text-center text-lg font-semibold tracking-wide flex items-center justify-center mx-auto ${isOpen ? 'flex cursor-pointer hover:text-slate-400 hover:ease-in-out transition-all transform duration-200 w-screen text-center hover:scale-105' : 'hidden h-0'}`} onClick={() => {scrollToSection('about'); setIsOpen(!isOpen)}}>About Me</li>
<li className={`text-center text-lg font-semibold tracking-wide flex items-center justify-center mx-auto ${isOpen ? 'flex cursor-pointer hover:text-slate-400 hover:ease-in-out transition-all transform duration-200 w-screen text-center hover:scale-105' : 'hidden h-0'}`} onClick={() => {scrollToSection('stack'); setIsOpen(!isOpen)}}>Telemedicine Project</li>
<li className={`text-center text-lg font-semibold tracking-wide flex items-center justify-center mx-auto ${isOpen ? 'flex cursor-pointer hover:text-slate-400 hover:ease-in-out transition-all transform duration-200 w-screen text-center hover:scale-105' : 'hidden h-0'}`} onClick={() => {router.push('/services'); setIsOpen(!isOpen)}}>Services</li>
<li className={`text-center text-lg font-semibold tracking-wide flex items-center justify-center mx-auto ${isOpen ? 'flex cursor-pointer hover:text-slate-400 hover:ease-in-out transition-all transform duration-200 w-screen text-center hover:scale-105' : 'hidden h-0'}`} onClick={() => {scrollToSection('slider'); setIsOpen(!isOpen)}}>Completed Projects</li>
<li className={`text-center text-lg font-semibold tracking-wide flex items-center justify-center mx-auto ${isOpen ? 'flex cursor-pointer hover:text-slate-400 hover:ease-in-out transition-all transform duration-200 w-screen text-center hover:scale-105' : 'hidden h-0'}`} onClick={() => {router.push('/products'); setIsOpen(!isOpen)}}>Products</li>
<li className={`text-center text-lg font-semibold tracking-wide flex items-center justify-center mx-auto ${isOpen ? 'flex cursor-pointer hover:text-slate-400 hover:ease-in-out transition-all transform duration-200 w-screen text-center hover:scale-105' : 'hidden h-0'}`} onClick={() => {scrollToSection('otherSkills'); setIsOpen(!isOpen)}}>Other Skills</li>
<li className={`text-center text-lg font-semibold tracking-wide flex items-center justify-center mx-auto ${isOpen ? 'flex cursor-pointer hover:text-slate-400 hover:ease-in-out transition-all transform duration-200 w-screen text-center hover:scale-105' : 'hidden h-0'}`} onClick={() => {scrollToSection('footer'); setIsOpen(!isOpen)}}>Contact</li>


        </ul>
        <button onClick={()=>scrollToSection('footer')}className="border-4 text-xl font-semibold tracking-wide border-green-600 rounded-full px-4 py-3 hover:text-[#fafafa] border-2 hover:bg-slate-700 text-slate-700" >Need Help? </button>
      </div>
    <div 
     style={{ width: `${scrollPosition}%` }}
    className={`z-50  bottom-0 h-2 bg-yellow-400 `}/>
    </nav>
    // </div>
  )
}

export default Header
