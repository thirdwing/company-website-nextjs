"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { fuelOurSuccessContent } from "../../constants/AboutUs";
import Image from "next/image";

export function FuelOurSuccess() {
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
      className="py-12 sm:py-16 md:py-20 lg:py-25 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] font-medium uppercase tracking-[1.2px] text-black mb-4">
            {fuelOurSuccessContent.title}
          </div>
          <div className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-semibold leading-[1.2em] text-black">
            {fuelOurSuccessContent.heading}
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16 lg:gap-20"
        >
          {fuelOurSuccessContent.team.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-blue-50 flex items-center justify-center mx-auto overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100"
                  />
                </div>
              </div>
              <div className="text-[20px] sm:text-[22px] text-center md:text-[24px] lg:text-[26px] font-semibold text-black mb-2">
                {member.name}
              </div>
              <div className="text-[14px] sm:text-[15px] text-center md:text-[16px] lg:text-[16px] font-normal text-black">
                {member.role}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
