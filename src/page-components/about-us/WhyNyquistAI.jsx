"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { whyNyquistAIContent } from "../../constants/AboutUs";
import Image from "next/image";

export function WhyNyquistAI() {
  const { ref, isInView } = useScrollAnimation(0.3);

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
      className="py-12 sm:py-16 md:py-20 lg:py-25 bg-[#001224]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          {/* Left Side - Content */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-[50%] space-y-6"
          >
            <div className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-semibold leading-[1.2em] text-white">
              {whyNyquistAIContent.title}
            </div>
            
            <div className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-normal leading-[1.3em] text-white">
              <p dangerouslySetInnerHTML={{ 
                __html: whyNyquistAIContent.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
              }} />
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-[50%] flex justify-center"
          >
            <img
              src="/images/hero/why-nyquistic.svg"
              alt="Why NyquistAI"
              className="w-full h-auto max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
