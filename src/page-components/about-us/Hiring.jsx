"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { hiringContent } from "../../constants/AboutUs";

export function Hiring() {
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
      className="py-12 sm:py-16 md:py-20 lg:py-25 bg-[#1e4ed8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Left Side - Content */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-1/2 text-center mb-8 lg:mb-0"
          >
            <div className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-white mb-4">
              {hiringContent.title}
            </div>
            <div className="text-[16px] sm:text-[18px] md:text-[20px]  max-w-[200px] mx-auto lg:text-[22px] font-normal text-white">
              {hiringContent.subtitle}
            </div>
          </motion.div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px h-40 bg-white mx-8"></div>

          {/* Right Side - Positions */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-1/2 flex flex-col gap-4 justify-center items-center"
          >
            {hiringContent.positions.map((position) => {
              const getPositionLink = (positionTitle) => {
                switch (positionTitle.toLowerCase()) {
                  case 'sales director':
                    return 'https://nyquistdata.notion.site/Sales-Director-ba35175aa19a4649b54aea3cc6f8a97d';
                  case 'product manager':
                    return 'https://nyquistdata.notion.site/Product-Manager-5ae5480e0ac44a57a6bcbd50cea93120';
                  case 'product design lead':
                    return 'https://nyquistdata.notion.site/Product-Design-Lead-47e7bc05fef04e73becd8047d7acaf73';
                  default:
                    return '#';
                }
              };

              return (
                <button
                  key={position.id}
                  onClick={() => window.open(getPositionLink(position.title), '_blank')}
                  className="bg-white text-black px-6 mx-auto py-2 max-w-[270px] cursor-pointer !w-[100%] rounded-full font-semibold text-[14px] sm:text-[16px] md:text-[18px] hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 ease-in-out sm:w-auto sm:self-start"
                >
                  {position.title}
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
