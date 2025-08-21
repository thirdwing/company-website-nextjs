"use client";

import { experienceTheFuture } from "../../constants/dashboard";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useRouter } from "next/navigation";

export function ExperienceTheFuture({ bgColor }) {
  const { ref, isInView } = useScrollAnimation(0.2);
  const router = useRouter();
  
  // Determine text color based on background color
  const isDarkBackground = bgColor && (bgColor.includes('bg-[#001224]') || bgColor.includes('bg-black') || bgColor.includes('bg-gray-900') || bgColor.includes('bg-slate-900'));
  const textColor = isDarkBackground ? 'text-white' : 'text-black';

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
      className={`py-12 sm:py-16 md:py-20 lg:py-25 ${bgColor ?? "bg-white"}`}
    >
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 md:px-8">
        <motion.div 
          variants={itemVariants}
          className="text-center"
        >
          {/* Main Title */}
          <motion.div 
            variants={itemVariants}
            className={`text-[32px] sm:text-[40px] md:text-[50px] lg:text-[50px] font-medium  capitalize leading-[1.2em] ${textColor} mb-4 sm:mb-6 md:mb-8`}
          >
            {experienceTheFuture.title}
          </motion.div>

          {/* Subtitle */}
          <motion.div 
            variants={itemVariants}
            className={`text-[14px] sm:text-[16px] md:text-[18px] font-normal ${textColor} mb-3 sm:mb-4 md:mb-[28px]`}
          >
            {experienceTheFuture.subtitle}
          </motion.div>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            {/* Primary Button */}
            <button 
              onClick={() => router.push('/pricing')}
              className="bg-blue-600 hover:bg-white hover:text-black hover:border-1 hover:border-black text-white px-6 sm:px-8 py-2 rounded-full font-semibold cursor-pointer group hover:translate-y-[-2px] transition-transform duration-300 text-sm sm:text-base"
            >
              {experienceTheFuture.buttons[0].text}
            </button>

            {/* Separator */}
            <span className={`${textColor} font-medium text-sm sm:text-base`}>or</span>

            {/* Secondary Button */}
            <button 
              onClick={() => window.open('https://meetings.hubspot.com/mw33?uuid=08bb7e64-f3cb-41d4-a6b9-120014167550', '_blank')}
              className="bg-white border-1 border-black hover:bg-blue-600 hover:border-blue-600 hover:text-white text-black px-6 sm:px-8 py-2 rounded-full font-semibold cursor-pointer group hover:translate-y-[-2px] transition-transform duration-300 text-sm sm:text-base"
            >
              {experienceTheFuture.buttons[1].text}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
