"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { pricingPlans, pricingFeatures } from "../../constants/pricing";

export function UncoverGlobalData() {
  const { ref, isInView } = useScrollAnimation(0.2);
  const [selectedPlan, setSelectedPlan] = useState(2); // MedTech is default (id: 2)

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

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-12 sm:py-16 md:py-20 lg:py-25 bg-white"
    >
      <div className="max-w-[1222px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {pricingPlans.title}
          </h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
        >
          {pricingPlans.plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 cursor-pointer overflow-visible ${selectedPlan === plan.id
                ? 'border-blue-600 shadow-xl transform scale-105'
                : 'border-gray-200 hover:border-blue-300 hover:shadow-xl'
                }`}
              onClick={() => handlePlanSelect(plan.id)}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ scale: 0, rotate: -180, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.8, 
                    duration: 0.6, 
                    ease: "backOut",
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="bg-black text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
                    MOST POPULAR
                  </span>
                </motion.div>
              )}

              <div className="p-8 flex flex-col h-full">
                {/* Plan Title */}
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </h3>

                </div>

                {/* Plan Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">${plan.monthlyPrice}</span>
                    <span className="text-gray-600 ml-2">per month</span>
                  </div>

                  {/* Yearly Savings */}
                  <div className="bg-gray-900 text-white px-4 py-2 rounded-lg mt-3">
                    <span className="text-sm">
                      Pay yearly and save {plan.yearlySavings}% (${plan.yearlyPrice}/mo.)
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8 flex-grow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Access To:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
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
                <button className="w-full hover:cursor-pointer bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 mt-auto">
                  Purchase
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={itemVariants}
          className="mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {pricingFeatures.title}
            </h3>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16"
          >
            {pricingFeatures.features.map((feature, index) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <img 
                      src={feature.icon} 
                      alt={feature.title} 
                      className="w-8 h-8"
                    />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
