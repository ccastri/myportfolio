'use client'
import Hero from './Hero';
import Stack from './_components/Stack';
import OtherSkills from './_components/OtherSkills';
import Slider from './_components/Slider';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import About from './_components/About';

export default function Home() {
  const aboutControls = useAnimation();
  const stackControls = useAnimation();
  const sliderControls = useAnimation();
  const otherSkillsControls = useAnimation();

  useEffect(() => {
    const aboutOffset = window.innerHeight / 2;
    const stackOffset = window.innerHeight * 1.5;
    const sliderOffset = window.innerHeight * 2; // Change this offset as needed
    const otherSkillsOffset = window.innerHeight * 2.5; // Change this offset as needed

    const scrollListener = () => {
      const isAboutReached = window.scrollY > aboutOffset;
      const isStackReached = window.scrollY > stackOffset;
      const isSliderReached = window.scrollY > sliderOffset;
      const isOtherSkillsReached = window.scrollY > otherSkillsOffset;

      if (isAboutReached) {
        aboutControls.start({ opacity: 1 });
      } else {
        aboutControls.start({ opacity: 0 });
      }
      if (isStackReached) {
        stackControls.start({ opacity: 1 });
      } else {
        stackControls.start({ opacity: 0 });
      }

      if (isSliderReached) {
        sliderControls.start({ opacity: 1 });
      } else {
        sliderControls.start({ opacity: 0 });
      }

      if (isOtherSkillsReached) {
        otherSkillsControls.start({ opacity: 1 });
      } else {
        otherSkillsControls.start({ opacity: 0 });
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [aboutControls, stackControls, sliderControls, otherSkillsControls]);

  return (
    <main className="flex flex-col items-center justify-between">
      <div id="home">

      <Hero  />
      </div>
      <motion.div 
      id='about'
      initial={{ opacity: 0 }} animate={aboutControls}>
        <About />
      </motion.div>
      <motion.div 
      id='stack'
      initial={{ opacity: 0 }} animate={stackControls}>
        <Stack />
      </motion.div>
      <motion.div 
      id="slider"
      initial={{ opacity: 0 }} animate={sliderControls}>
        <Slider />
      </motion.div>
      <motion.div 
      id='otherSkills'
      initial={{ opacity: 0 }} animate={otherSkillsControls}>
        <OtherSkills />
      </motion.div>
    </main>
  );
}
