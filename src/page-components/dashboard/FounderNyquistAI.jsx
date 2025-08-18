"use client";

import { founderNyquistAI } from "../../constants/dashboard";

export function FounderNyquistAI() {
  return (
    <section className="py-16 sm:py-20 md:py-25 bg-gray-100">
      <div className="max-w-[1222px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-[40%] space-y-6">
            {/* Small Heading */}
            <div className="text-black text-sm mt-7 font-medium uppercase tracking-wider">
              {founderNyquistAI.heading}
            </div>

            {/* Main Title */}
            <div className="text-black">
              {founderNyquistAI.title.split('\n').map((line, index) => (
                <div key={index} className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2em]">
                  {line}
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-black text-md font-light leading-[1.3em] tracking-wide max-w-[80%]">
              {founderNyquistAI.description}
            </p>

            {/* Learn More Button */}
            <div className="flex items-center cursor-pointer group hover:translate-y-[-2px] transition-transform duration-300">
              <span className="text-black font-medium text-lg">
                {founderNyquistAI.learnMoreText}
              </span>
              <img 
                src='/images/icons/black-arrow-right.svg' 
                className="text-black w-3 h-3 ml-3" 
                alt="Arrow right"
              />
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-[60%] flex justify-center lg:justify-end">
            <img 
              src={founderNyquistAI.image.src}
              alt={founderNyquistAI.image.alt}
              className="rounded-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
