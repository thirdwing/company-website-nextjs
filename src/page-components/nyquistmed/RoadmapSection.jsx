"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { nyquistMedData } from '../../constants/nyquistmed';
import { VideoModal } from '../../components/features/videomodal/VideoModal';

export function RoadmapSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');
  const { ref, isInView } = useScrollAnimation(0.2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        staggerChildren: 0.02
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.08,
        ease: "easeOut"
      }
    }
  };

  const openVideoModal = (videoId) => {
    setCurrentVideoId(videoId);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setCurrentVideoId('');
  };

  return (
                <section className="py-12 sm:py-16 md:py-20 lg:py-25 bg-gray-50">       
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-[1222px] mx-auto px-4 sm:px-6 lg:px-8"
        >
        {nyquistMedData.roadmapSections.map((section, index) => (
          <motion.div 
            key={section.id} 
            variants={itemVariants}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-8 mb-12 space-y-6 lg:space-y-12"
          >
            {/* Content - alternates between left and right */}
            <motion.div 
              variants={itemVariants}
              className={`w-full lg:w-[60%] space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
            >
              {/* Heading */}
              <motion.div variants={itemVariants} className="space-y-2">
                <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {section.section}
                </h2>
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                  {section.title}
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p variants={itemVariants} className="text-md text-gray-600 leading-relaxed">
                {section.description}
              </motion.p>

              {/* CTA Button */}
              <motion.button 
                variants={itemVariants}
                className="bg-[#F1B00A] cursor-pointer rounded-full hover:bg-yellow-600 hover:-translate-y-1 text-black px-6 py-3 font-semibold transition-all duration-300 ease-in-out"
                onClick={() => openVideoModal(section.videoId)}
              >
                {section.buttonText}
              </motion.button>
            </motion.div>

            {/* Image - alternates between right and left */}
            <motion.div 
              variants={itemVariants}
              className={`w-full lg:w-[40%] ${index % 2 === 1 ? 'lg:order-1' : ''}`}
            >
              <img 
                src={`/images/hero/${section.image}`} 
                alt={`${section.section} - ${section.title}`} 
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        videoId={currentVideoId}
      />
    </section>
  );
}
