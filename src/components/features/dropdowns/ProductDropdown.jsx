"use client";

import { useState, useEffect, useRef } from "react";
import { ProductCard } from "./ProductCard";
import { DropdownFooter } from "./DropdownFooter";
import { productCards, footerContent } from "../../../constants";

export function ProductDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
    >
      <button
        className={`px-3 py-2 px-3 py-2 text-md font-medium transition-colors no-underline flex items-center ${
          isOpen
            ? "text-blue-400 hover:text-blue-300"
            : "text-white hover:text-gray-300"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Products
        <svg
          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
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
      </button>

      {/* Products Dropdown */}
      {isOpen && (
        <>
          <div className="bg-[#E8E8E8] absolute top-full left-0 mt-2 w-[90vw] max-w-[1222px] lg:w-[900px] xl:w-[1222px] lg:ml-[-96px] xl:ml-[-230px] mt-[27px] shadow-lg z-50 border border-gray-200 overflow-hidden">
            {/* Main Content Cards Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {productCards.map((product, index) => (
                  <ProductCard
                    key={index}
                    title={product.title}
                    description={product.description}
                    link={product.link}
                    isEmpty={product.isEmpty}
                  />
                ))}
              </div>
            </div>

            {/* Footer Section */}
            <DropdownFooter content={footerContent} />
          </div>
        </>
      )}
    </div>
  );
}
