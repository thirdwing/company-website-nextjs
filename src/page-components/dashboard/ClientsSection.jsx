"use client";

import Image from "next/image";
import { clients } from "../../constants/dashboard";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export function ClientsSection() {
  const { ref, isInView } = useScrollAnimation(0.2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
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
        <motion.div 
          variants={itemVariants}
          className="text-left mb-12"
        >
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6 leading-[1.2em] tracking-wide">
            Our Valued Clients
          </div>
          <div className="text-[32px] font-normal leading-[1.2em] mb-5">
            Global Innovators in Life Sciences
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12"
        >
          {clients.map((client, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center group hover:opacity-80 transition-opacity duration-300 flex-shrink-0"
              style={{
                width: 'calc(50% - 1rem)', // 2 columns on mobile
                minWidth: '120px',
                maxWidth: '200px'
              }}
            >
              <div className="relative w-full  flex items-center justify-center p-2">
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
