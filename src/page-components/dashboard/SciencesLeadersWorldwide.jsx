"use client";

import { sciencesLeadersWorldwide } from "../../constants/dashboard";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { TestimonialCarousel } from "../../components/features/carousel";

export function SciencesLeadersWorldwide() {
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
      className="py-12 sm:py-16 md:py-20 lg:py-25 bg-blue-600"
    >
      <div className="max-w-[1222px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-3xl p-8 md:p-12  min-h-[480px]"
        >
          <motion.div 
            variants={itemVariants}
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-full "
          >
            {/* Left Section - Title and CTA (40% width on lg, 100% on md/sm) */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col lg:w-[40%]"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-wide text-black leading-tight mb-6 mt-8">
                {sciencesLeadersWorldwide.title.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < sciencesLeadersWorldwide.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-2 cursor-pointer group mt-4 hover:translate-y-[-2px] transition-transform duration-300">
                <span className="text-black font-light text-lg">
                  {sciencesLeadersWorldwide.learnMoreText}
                </span>
                <img src='/images/icons/black-arrow-right.svg' className="text-[#000000] w-3 h-3 ml-3 " />
              </div>
            </motion.div>

            {/* Right Section - Testimonial Carousel (60% width on lg, 100% on md/sm) */}
            <motion.div 
              variants={itemVariants}
              className="relative h-full lg:w-[60%]"
            >
              <TestimonialCarousel
                testimonials={sciencesLeadersWorldwide.testimonials}
                showIndicators={false}
                className="h-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
