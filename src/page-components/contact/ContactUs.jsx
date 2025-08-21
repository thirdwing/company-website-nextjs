"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { contactContent } from "../../constants/contact";
import { useRouter } from "next/navigation";

export function ContactUs() {
  const { ref, isInView } = useScrollAnimation(0.3);
  const router = useRouter();

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

  const getColorClass = (color) => {
    switch (color) {
      case "blue":
        return "bg-blue-600";
      case "yellow":
        return "bg-yellow-500";
      default:
        return "bg-blue-600";
    }
  };

  const getButtonClass = (buttonType) => {
    const baseClass = "px-6 py-3 !w-fit rounded-full font-semibold transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-pointer";
    
    if (buttonType === "solid") {
      return `${baseClass} bg-black text-white border border-black hover:bg-white hover:text-black hover:border-black`;
    } else {
      return `${baseClass} bg-white text-black border border-black hover:bg-black hover:text-white hover:border-white`;
    }
  };

  const handleButtonClick = (sectionId) => {
    switch (sectionId) {
      case 'general':
        window.open('mailto:info@nyquistai.com', '_self');
        break;
      case 'sales':
        router.push('/contact-sales-form/');
        break;
      case 'support':
        window.open('mailto:support@nyquistai.com', '_self');
        break;
      default:
        break;
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
      <div className="max-w-[1222px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h1 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-black mb-4">
            {contactContent.title}
          </h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-normal text-black">
            {contactContent.subtitle}
          </p>
        </motion.div>

        {/* Contact Sections */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {contactContent.sections.map((section) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {section.id === 'general' && (
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {section.id === 'sales' && (
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )}
                {section.id === 'support' && (
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                )}
              </div>
              
              {/* Section Title */}
              <h3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {section.title}
              </h3>
              
              {/* Section Description */}
              <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-normal text-gray-600 mb-8 leading-relaxed">
                {section.description}
              </p>
              
              {/* Button */}
              {section.id === 'general' || section.id === 'support' ? (
                <a 
                  href={section.id === 'general' ? 'mailto:info@nyquistai.com' : 'mailto:support@nyquistai.com'}
                  className={`${getButtonClass(section.buttonType)} w-full group-hover:scale-105`}
                >
                  {section.buttonText}
                </a>
              ) : (
                <button 
                  onClick={() => handleButtonClick(section.id)}
                  className={`${getButtonClass(section.buttonType)} w-full group-hover:scale-105`}
                >
                  {section.buttonText}
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
