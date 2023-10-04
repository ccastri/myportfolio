'use client'
import Hero from './Hero';
import Stack from './_components/Stack';
import OtherSkills from './_components/OtherSkills';
import Slider from './_components/Slider';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Home() {
  const stackControls = useAnimation();
  const sliderControls = useAnimation();
  const otherSkillsControls = useAnimation();

  useEffect(() => {
    const stackOffset = window.innerHeight / 2;
    const sliderOffset = window.innerHeight * 1.7; // Change this offset as needed
    const otherSkillsOffset = window.innerHeight * 2.8; // Change this offset as needed

    const scrollListener = () => {
      const isStackReached = window.scrollY > stackOffset;
      const isSliderReached = window.scrollY > sliderOffset;
      const isOtherSkillsReached = window.scrollY > otherSkillsOffset;

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
  }, [stackControls, sliderControls, otherSkillsControls]);

  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <motion.div initial={{ opacity: 0 }} animate={stackControls}>
        <Stack />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={sliderControls}>
        <Slider />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={otherSkillsControls}>
        <OtherSkills />
      </motion.div>
    </main>
  );
}
