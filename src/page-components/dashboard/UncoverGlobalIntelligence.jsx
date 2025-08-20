"use client";

import { useState } from "react";
import { uncoverGlobalContent } from "../../constants/dashboard";
import { CollapsibleCard } from "../../components/features/CollapsibleCard";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export function UncoverGlobalIntelligence() {
  const [openCard, setOpenCard] = useState("medtech"); // First card open by default
  const { ref, isInView } = useScrollAnimation(0.2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const handleToggle = (cardId) => {
    // If clicking on the currently open card, close it
    if (openCard === cardId) {
      setOpenCard(null);
    } 
    // If clicking on a different card, close the current one and open the new one
    else {
      setOpenCard(cardId);
    }
  };

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative py-12 sm:py-16 md:py-20 lg:py-25 bg-[#0A1121] overflow-hidden"
    >
      <div className="max-w-[1222px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={itemVariants}
          className="space-y-4"
        >
          <div className="text-3xl md:text-4xl lg:text-[48px] leading-[1.2] font-semibold tracking-[1px] align-middle capitalize text-[#F5F5F5]">
            {uncoverGlobalContent.title}
          </div>
          <div className="text-2xl md:text-3xl lg:text-[40px] leading-[1.2] font-medium tracking-[-0.48px] align-middle text-[#F5F5F5]">
            {uncoverGlobalContent.subtitle}
          </div>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-[45px]"
        >
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="">
              <img
                src={uncoverGlobalContent.dashboardImage.src}
                alt={uncoverGlobalContent.dashboardImage.alt}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="max-h-[400px] overflow-y-auto"
          >
            {uncoverGlobalContent.platforms.map((platform) => (
              <CollapsibleCard
                key={platform.id}
                image={platform.logo}
                title={platform.title}
                description={platform.description}
                learnMoreLink={platform.link}
                isOpen={openCard === platform.id}
                onToggle={() => handleToggle(platform.id)}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
