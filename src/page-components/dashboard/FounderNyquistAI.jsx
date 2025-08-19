"use client";

import { founderNyquistAI } from "../../constants/dashboard";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export function FounderNyquistAI() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
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
      className="py-12 sm:py-16 md:py-20 lg:py-25 bg-gray-100"
    >
      <div className="max-w-[1222px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={itemVariants}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center "
        >
          {/* Left Column - Text Content */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-[40%] space-y-6"
          >
            {/* Small Heading */}
            <div className="text-black text-sm mt-7 font-medium uppercase tracking-wider">
              {founderNyquistAI.heading}
            </div>

            {/* Main Title */}
            <div className="text-black">
              {founderNyquistAI.title.split('\n').map((line, index) => (
                <div key={index} className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2em]">
                  {line}
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-black text-md font-light leading-[1.3em] tracking-wide max-w-[80%]">
              {founderNyquistAI.description}
            </p>

            {/* Learn More Button */}
            <div className="flex items-center cursor-pointer group hover:translate-y-[-2px] transition-transform duration-300">
              <span className="text-black font-medium text-lg">
                {founderNyquistAI.learnMoreText}
              </span>
              <img 
                src='/images/icons/black-arrow-right.svg' 
                className="text-black w-3 h-3 ml-3" 
                alt="Arrow right"
              />
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-[60%] flex justify-center lg:justify-end"
          >
            <img 
              src={founderNyquistAI.image.src}
              alt={founderNyquistAI.image.alt}
              className="rounded-lg max-w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
