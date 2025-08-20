"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { makeBetterDecisions } from "../../constants/pricing";

export function MakeBetterDecisions() {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
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
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gray-50"
    >
      <div className="max-w-[1222px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {makeBetterDecisions.title}
          </h2>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 "
        >
          {makeBetterDecisions.products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 flex flex-col h-full hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-900">${product.monthlyPrice}</span>
                  <span className="text-gray-600 ml-2">per month</span>
                </div>
                
                {/* Yearly Savings */}
                <div className="bg-gray-900 text-white px-4 py-3 rounded-lg mt-3">
                  <span className="text-sm font-medium">
                    Pay yearly and save {product.yearlySavings}%
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8 flex-grow">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Features Overview</h4>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Purchase Button */}
              <button className="w-full bg-blue-600 hover:cursor-pointer text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 mt-auto">
                Purchase
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
