"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { VideoModal } from "../../components/features/videomodal/VideoModal";

export function Hero() {
  const { ref, isInView } = useScrollAnimation(0.3);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative min-h-[440px] sm:h-[500px] md:h-[587px] bg-cover bg-center bg-no-repeat overflow-hidden py-16 sm:py-20 md:py-25"
    >
      <Image
        src="/images/hero/herobg.jpg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
        priority
        width={1920}
        height={100}
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-[1250px] sm:mt-[-13px] mx-auto z-10 flex items-center justify-center h-full px-4 sm:px-6 md:px-8">
        <div className="text-center md:text-left w-full">
          <motion.div 
            variants={itemVariants}
            className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold uppercase tracking-[1.2px] mb-8 sm:mb-10 md:mb-12 text-[#F5F5F5]"
          >
            WELCOME TO NYQUISTAI
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="text-[36px] sm:text-[44px] md:text-[56px] lg:text-[68px] xl:text-[72px] font-semibold capitalize leading-[1.2em] text-[#F5F5F5]"
          >
            Connecting Data,
            <span className="block">Igniting Discovery.</span>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-[48px] justify-center md:justify-start"
          >
            <a 
              href="https://meetings.hubspot.com/mw33?uuid=08bb7e64-f3cb-41d4-a6b9-120014167550"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 rounded-full font-semibold cursor-pointer group hover:translate-y-[-2px] transition-transform duration-300 text-sm sm:text-base inline-block"
            >
              SCHEDULE A DEMO
            </a>
            <button 
              onClick={() => setIsVideoModalOpen(true)}
              className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-2 rounded-full font-semibold cursor-pointer group hover:translate-y-[-2px] transition-transform duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              WATCH VIDEO <img src="/images/icons/play-icon.svg" alt="Play icon" className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </motion.section>
  );
}
