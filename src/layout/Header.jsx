"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ProductDropdown } from "../components/features/dropdowns/ProductDropdown";
import { productCards } from "../constants/products";
import Image from "next/image";

export function Header({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path) => {
    if (!mounted) return false;
    return pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileProducts = () => {
    setIsMobileProductsOpen(!isMobileProductsOpen);
  };

  return (
    <header className="bg-[#001224] text-white shadow-lg sticky top-0 z-50 py-3 relative">
      <div className="max-w-[1150px] mx-auto px-3">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold text-white no-underline"
            >
              <Image src="/images/logos/NyquistAI-logo.svg" alt="Nyquist AI" width={167} height={100} />
            </Link>
          </div>

          <nav className="hidden lg:flex space-x-4">
            <ProductDropdown />

            <Link
              href="/about-us"
              className={`px-3 py-2 text-md font-medium transition-colors no-underline ${isActive("/about-us")
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-white hover:text-gray-300"
                }`}
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className={`px-3 py-2 px-3 py-2 text-md font-medium transition-colors no-underline ${isActive("/blog")
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-white hover:text-gray-300"
                }`}
            >
              Blog
            </Link>
            <Link
              href="/pricing"
              className={`px-3 py-2 px-3 py-2 text-md font-medium transition-colors no-underline ${isActive("/pricing")
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-white hover:text-gray-300"
                }`}
            >
              Pricing
            </Link>
            <Link
              href="/roi"
              className={`px-3 py-2 px-3 py-2 text-md font-medium transition-colors no-underline ${isActive("/roi")
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-white hover:text-gray-300"
                }`}
            >
              ROI
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 px-3 py-2 text-md font-medium transition-colors no-underline ${isActive("/contact")
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-white hover:text-gray-300"
                }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://meetings.hubspot.com/mw33?uuid=08bb7e64-f3cb-41d4-a6b9-120014167550"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-white text-black px-[27px] py-[7px] rounded-full font-bold hover:bg-gray-200 hover:!text-black transition-colors no-underline text-center"
            >
              SCHEDULE A DEMO
            </a>
            <div className="relative">
              <button className="text-white hover:text-gray-300 px-3 py-2 text-md font-medium flex items-center">
                Login
                <svg
                  className="ml-1 h-4 w-4"
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
            </div>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-white hover:text-gray-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div className={`lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-[#001224] z-50 overflow-y-auto transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-full pointer-events-none'
        }`}>
            <div className="flex flex-col h-full ">
              <div className="flex justify-between items-center px-3 py-6 border-b border-gray-700">
                <Link
                  href="/"
                  className="text-xl sm:text-2xl font-bold text-white no-underline"
                >
                  <Image src="/images/logos/NyquistAI-logo.svg" alt="Nyquist AI" width={167} height={100} />
                </Link>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-white hover:text-gray-300"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

                             <div className="flex-1 py-4 mx-3">
                 <nav className={`flex flex-col space-y-2 transition-all duration-500 ease-out transform ${
                   isMobileMenuOpen 
                     ? 'translate-y-0 opacity-100' 
                     : 'translate-y-4 opacity-0'
                 }`}>
                  <div className="relative">
                    <button
                      onClick={toggleMobileProducts}
                      className={`w-full text-left px-3 py-2 px-3 py-2 text-md font-mediumtransition-colors no-underline flex items-center justify-between ${isMobileProductsOpen
                          ? "text-blue-400"
                          : "text-white hover:text-gray-300"
                        }`}
                    >
                      Products
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${isMobileProductsOpen ? "rotate-180" : "rotate-0"
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

                     <div className={`bg-[#001a2e] border-l-2 border-blue-400 ml-4 mt-2 transition-all duration-300 ease-in-out overflow-hidden ${
                       isMobileProductsOpen 
                         ? 'max-h-[500px] opacity-100' 
                         : 'max-h-0 opacity-0'
                     }`}>
                        <div className="py-2 space-y-4 max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                          {productCards.map((product, index) => (
                            <div key={index} className="px-6 py-3 border-b border-gray-700 last:border-b-0">
                              <h4 className="text-sm font-bold text-white uppercase mb-2">
                                {product.title}
                              </h4>
                              <p className="text-xs text-gray-300 mb-3 leading-relaxed">
                                {product.description}
                              </p>
                              <a
                                href={product.link}
                                className="text-[#007bff] text-xs font-medium hover:underline inline-flex items-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                Learn more
                                <svg
                                  className="ml-1 h-3 w-3"
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
                          ))}

                          {/* Demo Videos Section */}
                          <div className="px-6 py-3 border-t border-gray-700">
                            <h4 className="text-sm font-bold text-white mb-3">
                              Watch Demo Videos
                            </h4>
                            <div className="flex space-x-3">
                              <button className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                                <svg
                                  className="h-5 w-5 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </button>
                              <div className="flex-1">
                                <p className="text-xs text-gray-300">
                                  See our products in action
                                </p>
                              </div>
                            </div>
                          </div>
                                                 </div>
                       </div>
                  </div>

                  <Link
                    href="/about-us"
                    className={`px-3 py-2 px-3 py-2 text-md font-mediumtransition-colors no-underline ${isActive("/about-us")
                        ? "text-blue-400"
                        : "text-white hover:text-gray-300"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/blog"
                    className={`px-3 py-2 px-3 py-2 text-md font-mediumtransition-colors no-underline ${isActive("/blog")
                        ? "text-blue-400"
                        : "text-white hover:text-gray-300"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/pricing"
                    className={`px-3 py-2 px-3 py-2 text-md font-mediumtransition-colors no-underline ${isActive("/pricing")
                        ? "text-blue-400"
                        : "text-white hover:text-gray-300"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/roi"
                    className={`px-3 py-2 px-3 py-2 text-md font-mediumtransition-colors no-underline ${isActive("/roi")
                        ? "text-blue-400"
                        : "text-white hover:text-gray-300"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ROI
                  </Link>
                  <Link
                    href="/contact"
                    className={`px-3 py-2 px-3 py-2 text-md font-mediumtransition-colors no-underline ${isActive("/contact")
                        ? "text-blue-400"
                        : "text-white hover:text-gray-300"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>

                  {/* Mobile CTA Buttons */}
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <a
                      href="https://meetings.hubspot.com/mw33?uuid=08bb7e64-f3cb-41d4-a6b9-120014167550"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-white px-4 py-3 text-black rounded-full px-3 py-2 text-md font-mediumhover:bg-gray-200 transition-colors no-underline text-center mb-3"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      SCHEDULE A DEMO
                    </a>
                    <button className="w-full text-white hover:text-gray-300 px-3 py-2 text-md font-medium flex items-center justify-center py-3">
                      Login
                      <svg
                        className="ml-1 h-4 w-4"
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
                  </div>
                                 </nav>
               </div>
             </div>
           </div>

        {/* Children content area */}
        {children && <div className="mt-4 pb-4">{children}</div>}
      </div>
    </header>
  );
}
