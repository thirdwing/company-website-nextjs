"use client";

import { worldWideCoverage } from "../../constants/dashboard";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export function WorldWideCoverage() {
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
      className="py-12 sm:py-16 md:py-20 lg:py-25 bg-[#F5F5F5]"
    >
      <div className="max-w-[1222px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={itemVariants}
          className="text-center mb-8"
        >
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium leading-[1.2em] mb-4">
            {worldWideCoverage.title}
          </div>
        </motion.div>

        {/* Flags Row */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center items-center gap-[50px] mb-16 mt-6 flex-wrap"
        >
          {worldWideCoverage.flags.map((flag) => (
            <motion.div 
              key={flag.id} 
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <img
                src={flag.flag}
                alt={flag.alt}
                className=" object-cover mb-2"
              />
              <span className="text-sm font-medium text-black mt-2">
                {flag.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Row */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {worldWideCoverage.statistics.map((stat) => (
            <motion.div 
              key={stat.id} 
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium leading-[1.2em] mb-4">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base md:text-[16px] font-medium leading-[1.2em] tracking-[1.2px]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
