"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { frequentlyAskedQuestions } from "../../constants/pricing";

export function FrequentlyQuestion() {
  const { ref, isInView } = useScrollAnimation(0.2);
  const [openQuestion, setOpenQuestion] = useState(null);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const toggleQuestion = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  const renderHighlightedText = (text, highlightedText) => {
    if (!highlightedText) return text;
    
    if (Array.isArray(highlightedText)) {
      let result = text;
      highlightedText.forEach(highlight => {
        if (highlight.includes('@')) {
          // Handle email addresses
          result = result.replace(
            highlight,
            `<a href="mailto:${highlight}" class="text-pink-500 font-medium hover:text-pink-600 underline cursor-pointer" onclick="window.open('mailto:${highlight}')">${highlight}</a>`
          );
        } else if (highlight === 'Stripe') {
          // Handle Stripe link
          result = result.replace(
            highlight,
            `<a href="https://docs.stripe.com/invoicing/payment-methods" target="_blank" rel="noopener noreferrer" class="text-pink-500 font-medium hover:text-pink-600 underline cursor-pointer">${highlight}</a>`
          );
        } else {
          // Handle other highlighted text
          result = result.replace(
            highlight,
            `<span class="text-pink-500 font-medium">${highlight}</span>`
          );
        }
      });
      return <span dangerouslySetInnerHTML={{ __html: result }} />;
    }
    
    const parts = text.split(highlightedText);
    
    // Special handling for RFP template link
    if (highlightedText === "RFP template") {
      return (
        <>
          {parts[0]}
          <a 
            href="https://nyquistdata.notion.site/Why-choose-NyquistAI-Template-728f511831ce4bd185d75a6fb8250688"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 font-medium hover:text-pink-600 underline cursor-pointer"
          >
            {highlightedText}
          </a>
          {parts[1]}
        </>
      );
    }
    
    // Special handling for email addresses
    if (highlightedText.includes('@')) {
      return (
        <>
          {parts[0]}
          <a 
            href={`mailto:${highlightedText}`}
            className="text-pink-500 font-medium hover:text-pink-600 underline cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.open(`mailto:${highlightedText}`);
            }}
          >
            {highlightedText}
          </a>
          {parts[1]}
        </>
      );
    }
    
    return (
      <>
        {parts[0]}
        <span className="text-pink-500 font-medium">{highlightedText}</span>
        {parts[1]}
      </>
    );
  };

  const renderAnswer = (answer) => {
    if (typeof answer === 'string') {
      return <p className="text-gray-700 leading-relaxed">{answer}</p>;
    }

    return (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">{answer.intro}</p>
        
        {answer.sections.map((section, index) => (
          <div key={index} className="space-y-4">
            <h4 className="font-semibold text-gray-900">{section.title}</h4>
            
            {section.points && (
              <ul className="space-y-2 ml-4">
                {section.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {section.content && (
              <p className="text-gray-700 leading-relaxed">
                {renderHighlightedText(section.content, section.highlightedText)}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white"
    >
      <div className="max-w-[1222px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight">
            {frequentlyAskedQuestions.title}
          </h2>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="max-w-5xl mx-auto space-y-1"
        >
          {frequentlyAskedQuestions.questions.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="w-full cursor-pointer flex items-center justify-between py-6 px-0 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openQuestion === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg 
                    className="w-5 h-5 text-gray-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openQuestion === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-2 px-0">
                      {typeof faq.answer === 'string' ? (
                        <p className="text-gray-700 leading-relaxed">
                          {faq.highlightedTexts ? 
                            renderHighlightedText(faq.answer, faq.highlightedTexts) :
                            faq.highlightedText ? 
                              renderHighlightedText(faq.answer, faq.highlightedText) :
                              faq.answer
                          }
                        </p>
                      ) : (
                        renderAnswer(faq.answer)
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
