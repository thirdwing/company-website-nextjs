"use client";

import { sciencesLeadersWorldwide } from "../../constants/dashboard";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { TestimonialCarousel } from "../../components/features/carousel";

export function SciencesLeadersWorldwide({ bgColor, parentBg }) {
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
      className={`relative py-12 sm:py-16 md:py-20 lg:py-25 ${parentBg ?? 'bg-blue-600'} ${bgColor ? 'mt-[-50px] sm:mt-[-50px] md:mt-[-50px] lg:mt-[-120px]' : ''}`}
    >
      {/* Background with 50/50 split */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-gray-50"></div>
        <div className="h-1/2  bg-gray-50"></div>
      </div>
      <div className="relative max-w-[1222px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          className={`${bgColor ?? 'bg-white'} rounded-3xl p-8 md:p-12  min-h-[550px]`}
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
              <div className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide ${bgColor ? 'text-white' : 'text-black'}  leading-tight mb-6 mt-8`}>
                {bgColor ?
                  <div className="flex flex-col mt-4">
                    Why Our Clients
                    <div className="">

                      Love NyquistAI
                    </div>

                  </div>
                  :
                  <div>

                    {sciencesLeadersWorldwide.title.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < sciencesLeadersWorldwide.title.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                }

              </div>
              <div className="flex items-center space-x-2 cursor-pointer group mt-4 hover:translate-y-[-2px] transition-transform duration-300">
                <span className={`${bgColor ? 'text-white' : 'text-black'} font-light text-lg`}>
                  {sciencesLeadersWorldwide.learnMoreText}
                </span>
                {bgColor ?
                  <img src='/images/icons/arrow-right.svg' className="text-[#000000]  w-3 h-3 ml-3 " />
                  :
                  <img src='/images/icons/black-arrow-right.svg' className="text-[#000000] w-3 h-3 ml-3 " />}

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
                bgColor={bgColor}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
