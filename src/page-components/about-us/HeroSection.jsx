"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { aboutUsContent, foundersData } from "../../constants/AboutUs";
import Image from "next/image";

export function HeroSection() {
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
      className="py-12 sm:py-16 md:py-20 lg:py-25 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - Image */}
                      <motion.div 
              variants={itemVariants}
              className="relative w-full lg:w-[62%]"
            >
            <Image
              src={foundersData[0].image}
              alt="NyquistAI Founders"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </motion.div>

          {/* Right Side - Content */}
                      <motion.div 
              variants={itemVariants}
              className="space-y-6 w-full lg:w-[38%]"
            >
            <div className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] font-medium uppercase tracking-[1.2px] text-[#000000]">
              {aboutUsContent.title}
            </div>
            
            <div className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-semibold leading-[1.2em] text-gray-900">
              {aboutUsContent.heading}
            </div>
            
            <div className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-normal leading-[1.3em] text-gray-600 space-y-4">
              <p>{aboutUsContent.description}</p>
              <p>{aboutUsContent.detailedDescription}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
