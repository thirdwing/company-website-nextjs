"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { AutoplayCarousel } from "../../components/features/autoplaycarousel";
import { carouselSlides } from "../../constants/AboutUs";

export function AboutUsCarousel() {
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
      className="py-12 sm:py-16 md:py-20 lg:py-25 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-semibold leading-[1.2em] text-black mb-4">
            AI-Driven Life Science Solutions
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <AutoplayCarousel slides={carouselSlides} autoPlayInterval={6000} />
        </motion.div>
      </div>
    </motion.section>
  );
}
