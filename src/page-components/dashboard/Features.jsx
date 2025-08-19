"use client";

import { dashboardFeatures, dashboardContent } from "../../constants/dashboard";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export function Features() {
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
      className="py-16 sm:py-20 md:py-25 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={itemVariants}
          className=" mb-12"
        >
          <div className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-medium leading-[1.2em] tracking-wide mb-8">
            {dashboardContent.title}
          </div>
          <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-light leading-[1em] tracking-wider text-[#000000]" >
            {dashboardContent.subtitle}
          </div>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-[40px]"
        >
          {dashboardFeatures.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className=""
            >
              <div className="text-[16px] text-[#1e4ed8] mb-2 font-semibold uppercase leading-[1.2em] tracking-[1.2px]">
                {feature.title}
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
