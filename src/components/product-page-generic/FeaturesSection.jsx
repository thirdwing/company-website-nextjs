"use client";

import { motion } from "framer-motion";

export function FeaturesSection({
  sections,
  bgColor = "bg-[#1E4ED8]",
  containerClassName = "max-w-[1222px] mx-auto px-4 sm:px-6 lg:px-8",
  sectionClassName = "py-12 sm:py-16 md:py-20 lg:py-25"
}) {
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

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'network':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'clipboard':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  return (
    <section className={`${sectionClassName} ${bgColor}`}>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={containerClassName}
      >
        {/* Small Screen Layout (Single Column) */}
        <div className="block md:hidden space-y-8">
          {sections.map((section) => (
            <motion.div key={section.id} variants={itemVariants} className="space-y-4">
              {/* Icon and Title Row */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  {getIcon(section.icon)}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {section.title}
                </h3>
              </div>

              {/* Points */}
              <div className="space-y-2 pl-[14px]">
                {section.points.map((point, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex items-start space-x-3">
                    {/* Checkmark Icon */}
                    <div className="flex-shrink-0 mt-0.5">
                      <img src="/images/icons/tick-icon.svg" alt="check" className="w-5 h-5" />
                    </div>
                    
                    {/* Point Text */}
                    <p className="text-sm text-white/90 leading-relaxed">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Medium and Large Screen Layout (Multi Column) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sections.map((section) => (
            <motion.div key={section.id} variants={itemVariants} className="text-center space-y-3">
              {/* Icon */}
              <div className="flex justify-start">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                  {getIcon(section.icon)}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white text-left">
                {section.title}
              </h3>

              {/* Points */}
              <div className="space-y-2">
                {section.points.map((point, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex items-start space-x-3">
                    {/* Checkmark Icon */}
                    <div className="flex-shrink-0 mt-0.5">
                      <img src="/images/icons/tick-icon.svg" alt="check" className="w-5 h-5" />
                    </div>
                    
                    {/* Point Text */}
                    <p className="text-sm text-white/90 leading-relaxed text-left">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
