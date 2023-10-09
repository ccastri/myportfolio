'use client'
import React from 'react';
// Framer motion is the answer
const Banner = () => {
  return (
    <div className=" py-4 text-white text-center">
      <div className="overflow-hidden relative">
        <div className="absolute animate-bounce left-0 -ml-60">
          <p className="text-2xl text-black font-semibold">
            ¡Oferta especial por tiempo limitado!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
