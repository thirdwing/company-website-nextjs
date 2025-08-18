"use client";

import { discoverConnectCreateAI } from "../../constants/dashboard";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export function DiscoverConnectCreateAI() {
  const { ref, isInView } = useScrollAnimation(0.2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
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
      className="py-16 sm:py-20 md:py-25 bg-[#001224]"
    >
      <div className="max-w-[1222px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-semibold capitalize text-white">
            {discoverConnectCreateAI.title}
          </h1>
        </motion.div>

        {/* Content Layout - Three Columns */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* First Column - Subtitle */}
          <div className="flex items-center">
            <div className="text-white">
              {discoverConnectCreateAI.subtitle.split('\n').map((line, index) => (
                <div key={index} className="text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.1em] tracking-wide">
                  {line}
                </div>
              ))}
            </div>
          </div>

          {/* Second Column - First Product */}
          <div className="text-white flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-white text-[16px] font-semibold uppercase leading-[1.2em] tracking-[1.2px mb-4">
                {discoverConnectCreateAI.products[0].title}
              </h3>
              <p className="text-white text-base leading-relaxed mb-6">
                {discoverConnectCreateAI.products[0].description}
              </p>
            </div>
            <div className="flex items-center cursor-pointer group hover:translate-y-[-2px] transition-transform duration-300 mt-auto">
              <span className="text-white font-medium text-lg">
                {discoverConnectCreateAI.products[0].learnMoreText}
              </span>
              <img 
                src='/images/icons/arrow-right.svg' 
                className="text-white w-3 h-3 ml-3" 
                alt="Arrow right"
              />
            </div>
          </div>

          {/* Third Column - Second Product */}
          <div className="text-white flex flex-col h-full">
            <div className="flex-grow">
            <h3 className="text-white text-[16px] font-semibold uppercase leading-[1.2em] tracking-[1.2px mb-4">
            {discoverConnectCreateAI.products[1].title}
              </h3>
              <p className="text-white text-base leading-relaxed mb-6">
                {discoverConnectCreateAI.products[1].description}
              </p>
            </div>
            <div className="flex items-center cursor-pointer group hover:translate-y-[-2px] transition-transform duration-300 mt-auto">
              <span className="text-white font-medium text-lg">
                {discoverConnectCreateAI.products[1].learnMoreText}
              </span>
              <img 
                src='/images/icons/arrow-right.svg' 
                className="text-white w-3 h-3 ml-3" 
                alt="Arrow right"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
