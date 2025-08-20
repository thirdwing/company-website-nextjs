"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { pricingHero } from "../../constants/pricing";

export function HeroSection() {
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
      className="bg-[#001224] flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-25"
    >
      <div className="max-w-[1222px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-8">
          {/* Left Side - Text Content */}
          <motion.div 
            variants={itemVariants}
            className="text-white w-full lg:w-[65%]"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-4">
              {pricingHero.title}
            </h1>
            
            <div className="space-y-2 mb-3">
              {pricingHero.pricingPoints.map((point) => (
                <div key={point.id} className="flex items-center space-x-2">
                  <img src={point.icon} alt="Checkmark" className="w-5 h-5 flex-shrink-0" />
                  <span className="text-md sm:text-lg text-gray-200">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-sm sm:text-md text-gray-300 font-normal">
              {pricingHero.ctaText.split(pricingHero.ctaHighlight).map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && <span className="underline cursor-pointer">{pricingHero.ctaHighlight}</span>}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Laptop Image */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center lg:justify-end w-full lg:w-[35%]"
          >
            <div className="relative">
              <img 
                src={pricingHero.heroImage} 
                alt={pricingHero.heroImageAlt} 
                className="w-full shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
