import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Benefits from '../components/sections/Benefits';
import Features from '../components/sections/Features';
import Reviews from '../components/sections/Reviews';
import FAQ from '../components/sections/FAQ'
import CTA from '../components/sections/CTA';

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Benefits />
      <Features />
      <Reviews />
      <FAQ />
      <CTA />
    </motion.div>
  );
}

export default HomePage;