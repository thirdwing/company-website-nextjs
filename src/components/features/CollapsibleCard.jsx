"use client";

import { useState } from "react";

export function CollapsibleCard({ 
  image, 
  title, 
  description, 
  learnMoreLink, 
  isOpen = false,
  onToggle 
}) {
  return (
    <div className="">
      {/* Always visible header */}
      <div 
        className="flex items-center space-x-4 p-6 cursor-pointer transition-colors duration-200"
        onClick={onToggle}
      >
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-12 h-12"
          />
        </div>
        <div className="flex-1">
          <div className="text-[18px] mt-1 text-[#F5F5F5] leading-[28px] font-medium tracking-[0px] align-middle sm:text-[20px] sm:leading-[30px] md:text-[21px] md:leading-[31px] lg:text-[22px] lg:leading-[32px]">
            {title}
          </div>
        </div>
        {/* Show more/less icon */}
        <div className="flex-shrink-0 mt-[10px]">
          <img
            src={isOpen ? "/images/icons/show-less.svg" : "/images/icons/show-more.svg"}
            alt={isOpen ? "Show less" : "Show more"}
            className="w-5 h-5 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Collapsible content */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">
          <div className="text-[14px] text-[#F5F5F5] leading-[20px] font-medium tracking-[0px] align-middle sm:text-[15px] sm:leading-[22px] md:text-[15.5px] md:leading-[23px] lg:text-[16px] lg:leading-[24px] mb-6">
            {description}
          </div>
          <a
            href={learnMoreLink}
            className="text-white font-medium inline-flex gap-2 items-center hover:underline transition-colors duration-200"
          >
            Learn more
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
