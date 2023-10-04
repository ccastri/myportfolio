'use client'
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

  const bgAlma= ()=> (<div className="w-full z-50 flex bg-red-500 h-full">
<h1>Alma works</h1>
  </div>)
const sliderItems = [
  {'imgBg':"almabyym.png", 'adds':'Ecommerce desinger, builder and consultor', 'repoLink':'https://github.com/ccastri/alma-by-tdi' , 'website':'https://www.almabyyuyumolina.com'},
  {'imgBg':"angular_firebase.png", 'adds':'Real time updated RESTFull services', 'repoLink':'https://github.com/ccastri/productSoft' , 'website':' https://productsoft-52eb0.web.app/dashboard'},
  {'imgBg':"react-three-fiber.png", 'adds':'TBrought the best from react and its interactivity into the 3D world', 'repoLink':'https://github.com/ccastri/react-three-fiber' , 'website':' https://r3js-vite.vercel.app/'},
  {'imgBg':"knee_prosthesis.png", 'adds':'Real-time web-socket connection for surgical planning environments design', 'repoLink':'https://github.com/ccastri/THREEJS-basics' , 'website':' https://threejs-basics-sigma.vercel.app/'},

  // {'imgBg':"aesthetic_col_3.png", "img":'PhotoRoom_20230811_172032.png_big_no_bg.png'},
  // {'imgBg':"aesthetic_col_3.png", "img":'PhotoRoom_20230811_172055.png_big_no_bg.png'},
  // {'imgBg':"aesthetic_col_3.png", "img":'PhotoRoom_20230811_172118_big_no_bg.png'},
  // {'imgBg':"aesthetic_col_4.png", "img":'PhotoRoom_20230811_172423_big_no_bg.png'},
  // {'imgBg':"", "img":'PhotoRoom_20230811_171700.png'},
  // {'imgBg':"", "img":'PhotoRoom_20230811_172447.png'}
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the current image index to the next one, looping back to the start if necessary
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    }, 5000);

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);


  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };


  return (
    <div className="w-screen relative  h-screen md:h-full  flex flex-col">
      {/* <h1>Slider works</h1> */}
      <div
        ref={sliderRef}
        className="h-screen w-screen  flex rounded-md "
      >
        <AnimatePresence>

        {sliderItems.map((slide, index) => (
          <motion.div
            className="relative flex h-screen justify-center duration-200 transition-all ease z-20 -in-out w-auto md:h-screen rounded-md"
            key={index}
            initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
              exit={{ opacity: 0 }}
          //      style={{
          // backgroundImage: `url(${slide.imgBg})`, // Establece el valor de imgBg como fondo
          // backgroundSize: 'cover', // Ajusta el tamaño de fondo según sea necesario
          // backgroundRepeat: 'no-repeat', // Evita la repetición del fondo
          // backgroundColor: '#F6EEE6', // Color de fondo de respaldo
        // }}
      >
            {/* Use conditional rendering to display the current image */}
            <motion.div 
            initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
              exit={{ opacity: 0 }}
            className='absolute w-full h-full flex flex-col z-30 justify-center items-center text-center m-auto border-2 '>
              <span className='text-2xl tracking-wider font-bold text-slate-700'>{slide.adds}</span>
              <div className="w-full flex items-center z-40 justify-center space-x-4">

              <div className="z-40 w-auto h-auto cursor-pointer hover:text-[#fafafa] border-2 bg-[#fafafa] text-slate-300 hover:bg-slate-300 px-4 py-2"  onClick={()=>window.open(slide.repoLink, '_blank')}>
                <span>View repo</span>
              </div>
              <div className="z-40 w-auto h-auto cursor-pointer  border-2 px-4 py-2 hover:bg-[#fafafa] hover:text-slate-300" onClick={()=>window.open(slide.website, '_blank')}>
                <span>View App</span>
              </div>
              </div>
            </motion.div>
            
            <Image
              className=" w-screen h-screen opacity-60 object-cover cursor-pointer"
              src={`/${slide.imgBg}`}
              alt={`Image ${index}`}
              width={1080}
              height={300}
              style={{ display: index === currentImageIndex ? 'block' : 'none' }}
            />
           
            {/* <img
              className="w-auto  absolute h-screen cursor-pointer max-w-full"
              src={`/${slide.img}`}
              alt={`Image ${index}`}
              style={{ display: index === currentImageIndex ? 'block' : 'none' }}
            /> */}
          </motion.div>
        ))}
        </AnimatePresence>
      </div>
      <div className=" absolute  bottom-0 pb-8 w-full z-30 flex justify-center h-auto items-end space-x-6">
        {sliderItems.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full bg-gray-400 hover:scale-105 hover:bg-[#fafafa]  duration-200 transition-all hover:ease-in-out cursor-pointer ${
              index === currentImageIndex ? 'bg-blue-500' : ''
            }`}
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
