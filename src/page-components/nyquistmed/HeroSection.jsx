"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { nyquistMedData } from '../../constants/nyquistmed';
import { VideoModal } from '../../components/features/videomodal/VideoModal';

export function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { ref, isInView } = useScrollAnimation(0.2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-25 bg-white">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-[1222px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-8">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="w-full lg:w-[60%] space-y-8">
            {/* Heading */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                {nyquistMedData.hero.heading}
              </h2>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                {nyquistMedData.hero.title}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-md text-gray-600 leading-relaxed">
              {nyquistMedData.hero.description}
            </motion.p>

            {/* CTA Button */}
            <motion.button 
              variants={itemVariants}
              className="bg-[#F1B00A] cursor-pointer rounded-full hover:bg-yellow-600 hover:-translate-y-1 text-black px-6 py-3 font-semibold transition-all duration-300 ease-in-out"
            >
              {nyquistMedData.hero.ctaButton}
            </motion.button>
          </motion.div>

          {/* Right - Laptop with Platform Demo */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-[40%]"
          >
            <img 
              src="/images/hero/nyquitmed-hero.png" 
              alt="Nyquist MedTech Hero Laptop" 
              className="cursor-pointer" 
              onClick={openVideoModal} 
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        videoId="846077417"
      />
    </section>
  );
}
