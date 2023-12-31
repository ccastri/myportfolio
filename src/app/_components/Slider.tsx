'use client'
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export const sliderItems = [
  {'id':1, 
  'title':'Chatbots and virtual assistants',
   'imgBg':"chatbot.jpg",
   'adds':'AI is here to assist you, your company and your clients! As simple as passing a pdf with instructions and the guidelines about the way you want it to treat your costumers! The assistant will learn everything from the knowledge base you are passing in and he will kindly help you take care of your clients. It would feels like having all the Chat GPT knowledge and resources customized to your own business. It is also possible to train the assistant in pattern recognition, emotions identification and classification, recomendation systems and even more... by taking feedback directly from the main source: ¡Your clients!',
  //  'repoLink':'https://github.com/ccastri/alma-by-tdi' ,
    // 'website':'https://www.almabyyuyumolina.com'
  },
  {'id':2, 
  'title':"RESTFull API's and Webapps Design",
   'imgBg':"angular_firebase.png",
    'adds':'When aiming to optimize information management, security, continuous integration, or to scale our system according to the real-time needs of our business, a Rest API can handle all logistics and store the information in our database while monitoring changes in real-time, enhancing control over daily operations.',
     'repoLink':'https://github.com/ccastri/productSoft' ,
      'website':' https://productsoft-52eb0.web.app/dashboard'},
  {'id':3, 
  'title':'AI Based 3D Design:', 'imgBg':"react-three-fiber.png", 'adds':'3D Applications: Bringing your own 3D designs to reality is now possible! The best 3D software tools and CAD design allow the realization of prosthetics, parts, and difficult-to-obtain or custom-made replacements, animations, and graphics for augmented reality... only limited by your imagination', 'repoLink':'https://github.com/ccastri/react-three-fiber' , 'website':' https://r3js-vite.vercel.app/'},
  {'id':4, 
  'title':'Entornos 3D digitales en salud', 'imgBg':"knee_prosthesis.png", 'adds':'Computer vision and augmented reality are some of the techniques setting the pace in the medical technology industry. The possibilities of recreating real scenarios in digital spaces promise an unprecedented improvement throughout the specialist training process, and real-time support opens doors to personalized and uninterrupted assistance', 'repoLink':'https://github.com/ccastri/THREEJS-basics' , 'website':' https://threejs-basics-sigma.vercel.app/'},

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
    <div className="w-screen relative  h-screen md:h-full  flex flex-col ">
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
            {/* <div 
            // initial={{ opacity: 0 }}
            //   animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            //   exit={{ opacity: 0 }}
            className='hover:opacity-90 opacity-30 w-8/12  bg-[#fafafa] absolute   z-40 py-12 flex  flex-col  justify-center  top-[25%] my-auto border-2 '>
              <span className='text-2xl tracking-wider text-center pb-6 font-bold text-slate-700'>{slide.adds}</span>
              <div className="w-full flex items-center z-40 justify-center space-x-4">

              <div className="z-40 w-auto h-auto cursor-pointer hover:text-[#fafafa] border-2 bg-[#fafafa]  hover:bg-[#a1a1a1a1] px-4 py-2"  onClick={()=>window.open(slide.repoLink, '_blank')}>
                <span>Ver repo</span>
              </div>
              <div className="z-40 w-auto h-auto cursor-pointer  border-2 px-4 py-2 hover:bg-[#fafafa] hover:text-slate-300" onClick={()=>window.open(slide.website, '_blank')}>
                <span>Ver App</span>
              </div>
              </div>
            </div> */}
            
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
