"use client";

import { experienceTheFuture } from "../../constants/dashboard";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export function ExperienceTheFuture() {
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

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-16 sm:py-20 md:py-25 bg-white"
    >
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 md:px-8">
        <motion.div 
          variants={itemVariants}
          className="text-center"
        >
          {/* Main Title */}
          <motion.div 
            variants={itemVariants}
            className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[50px] font-medium  capitalize leading-[1.2em] text-black mb-4 sm:mb-10 md:mb-12"
          >
            {experienceTheFuture.title}
          </motion.div>

          {/* Subtitle */}
          <motion.div 
            variants={itemVariants}
            className="text-[14px] sm:text-[16px] md:text-[18px] font-normal text-black mb-3 sm:mb-4 md:mb-[28px]"
          >
            {experienceTheFuture.subtitle}
          </motion.div>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            {/* Primary Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 rounded-full font-semibold cursor-pointer group hover:translate-y-[-2px] transition-transform duration-300 text-sm sm:text-base">
              {experienceTheFuture.buttons[0].text}
            </button>

            {/* Separator */}
            <span className="text-black font-medium text-sm sm:text-base">or</span>

            {/* Secondary Button */}
            <button className="bg-white border-1 border-black hover:bg-gray-100 text-black px-6 sm:px-8 py-2 rounded-full font-semibold cursor-pointer group hover:translate-y-[-2px] transition-transform duration-300 text-sm sm:text-base">
              {experienceTheFuture.buttons[1].text}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
