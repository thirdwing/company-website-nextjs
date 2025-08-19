"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function AutoplayCarousel({ slides, autoPlayInterval = 5000 }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Autoplay functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, autoPlayInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slides.length, autoPlayInterval, isDragging]);

  // Mouse and touch drag handlers
  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleDragMove = (e) => {
    if (isDragging) {
      const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      setDragEnd(clientX);
    }
  };

  const handleDragEnd = () => {
    if (isDragging) {
      const dragDistance = dragStart - dragEnd;
      const threshold = 50; // Minimum drag distance to trigger slide change

      if (dragDistance > threshold) {
        // Swipe left - next slide
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else if (dragDistance < -threshold) {
        // Swipe right - previous slide
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }

      setIsDragging(false);
      setDragStart(0);
      setDragEnd(0);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    // Reset autoplay timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="relative w-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
            style={{
              transform: isDragging ? `translateX(${dragEnd - dragStart}px)` : 'translateX(0)',
              transition: isDragging ? 'none' : 'transform 0.3s ease-out'
            }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Left Section - Text Content */}
              <div className="w-full lg:w-[40%] space-y-6 lg:ml-[65px]">
              <div className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] font-medium uppercase tracking-[1.2px] text-black">
                  {slides[currentSlide].subtitle}
                </div>
                <div className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-semibold leading-[1.2em] text-black">
                  {slides[currentSlide].title}
                </div>
                <div className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-normal leading-[1.3em] text-black">
                  {slides[currentSlide].description}
                </div>
                {slides[currentSlide].button && (
                  <button className="bg-[#F1B00A] cursor-pointer rounded-full hover:bg-yellow-600 hover:-translate-y-1 text-black px-6 py-3 font-semibold transition-all duration-300 ease-in-out">
                    {slides[currentSlide].button}
                  </button>
                )}
              </div>

              {/* Right Section - Image */}
              <div className="w-full lg:w-[60%] flex justify-center">
                <div className="relative w-full ">
                  <Image
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    width={500}
                    height={400}
                    className="w-full h-auto "
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>



      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-black" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
