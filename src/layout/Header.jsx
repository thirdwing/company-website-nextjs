"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ProductDropdown } from "../components/features/dropdowns/ProductDropdown";
import { productCards, loginPlatforms, navigationLinks, headerConfig } from "../constants";
import { getDynamicProductCards } from "../utils/routeUtils";
import Image from "next/image";

export function Header({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isMobileLoginOpen, setIsMobileLoginOpen] = useState(false);
  const loginDropdownRef = useRef(null);
  const loginTimeoutRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target)) {
        setIsLoginDropdownOpen(false);
      }
    }

    function handleEscapeKey(event) {
      if (event.key === 'Escape') {
        setIsLoginDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      if (loginTimeoutRef.current) {
        clearTimeout(loginTimeoutRef.current);
      }
    };
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

  const handleLoginMouseEnter = () => {
    if (loginTimeoutRef.current) {
      clearTimeout(loginTimeoutRef.current);
    }
    setIsLoginDropdownOpen(true);
  };

  const handleLoginMouseLeave = () => {
    loginTimeoutRef.current = setTimeout(() => {
      setIsLoginDropdownOpen(false);
    }, 150); // Small delay to prevent accidental closing
  };

  const toggleLoginDropdown = () => {
    setIsLoginDropdownOpen(!isLoginDropdownOpen);
  };

  const toggleMobileLogin = () => {
    setIsMobileLoginOpen(!isMobileLoginOpen);
  };

  return (
    <header className="bg-[#001224] text-white shadow-2xl shadow-black/50 sticky top-0 z-50 py-3 relative" style={{ boxShadow: '0 px 2px 0px rgba(0, 0, 0, 0.2), 0 10px 5px 0px rgba(0, 0, 0, 0.4)' }}>
      <div className="max-w-[1222px] mx-auto px-3">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold text-white no-underline"
            >
              <Image
                src={headerConfig.logo.src}
                alt={headerConfig.logo.alt}
                width={headerConfig.logo.width}
                height={headerConfig.logo.height}
              />
            </Link>
          </div>

          <nav className="hidden lg:flex space-x-4">
            <ProductDropdown />

            {navigationLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`px-3 py-2 text-lg font-semibold transition-colors no-underline cursor-pointer ${isActive(link.href)
                  ? "text-[#ff9595] hover:text-blue-200"
                  : "text-white hover:text-blue-200"
                  }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={headerConfig.demoButton.href}
              target={headerConfig.demoButton.target}
              rel="noopener noreferrer"
              className="text-sm bg-white text-black px-[27px] py-[7px] rounded-full font-bold hover:bg-gray-200 hover:!text-black transition-colors no-underline text-center cursor-pointer"
            >
              {headerConfig.demoButton.text}
            </a>
            <div
              className="relative login-dropdown"
              ref={loginDropdownRef}
              onMouseEnter={handleLoginMouseEnter}
              onMouseLeave={handleLoginMouseLeave}
            >
              <button
                className={`px-3 py-2 cursor-pointer text-lg font-semibold flex items-center ${isLoginDropdownOpen ? "text-[#ff9595] hover:text-blue-200" : "text-white hover:text-blue-200"}`}
                onClick={toggleLoginDropdown}
              >
                {headerConfig.loginButton.text}
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isLoginDropdownOpen ? "rotate-180" : "rotate-0"}`}
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

              {/* Login Dropdown */}
              {isLoginDropdownOpen && (
                <div className="absolute right-0 top-full mt-6 w-[220px] bg-white rounded-md shadow-2xl border border-gray-200 z-50 overflow-hidden transform transition-all duration-200 ease-out">
                  {/* Invisible bridge to prevent gap - extends from button to dropdown */}
                  <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent"></div>
                  <div className="">
                    <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-800">Choose Platform</h3>
                    </div>
                    {loginPlatforms.map((platform, index) => (
                      <a
                        key={platform.id}
                        href={platform.href}
                        className={`block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all duration-200 group relative overflow-hidden ${index < loginPlatforms.length - 1 ? 'border-b border-gray-100' : ''
                          }`}
                          target="_blank"
                      >
                        {/* Hover background effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                        {/* Content with hover effects */}
                        <div className="relative z-10">
                          <div className="font-medium group-hover:translate-x-1 transition-transform duration-200 flex items-center">
                            {platform.title}
                            <svg className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                          <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-200">{platform.description}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
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

        <div className={`lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-[#001224] z-50 overflow-y-auto transition-all duration-300 ease-in-out transform ${isMobileMenuOpen
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-full pointer-events-none'
          }`}>
          <div className="flex flex-col h-full ">
            <div className="flex justify-between items-center px-3 py-6 border-b border-gray-700">
              <Link
                href="/"
                className="text-xl sm:text-2xl font-bold text-white no-underline"
              >
                <Image
                  src={headerConfig.logo.src}
                  alt={headerConfig.logo.alt}
                  width={headerConfig.logo.width}
                  height={headerConfig.logo.height}
                />
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
              <nav className={`flex flex-col space-y-2 transition-all duration-500 ease-out transform ${isMobileMenuOpen
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

                  <div className={`bg-[#001a2e] border-l-2 border-blue-400 ml-4 mt-2 transition-all duration-300 ease-in-out overflow-hidden ${isMobileProductsOpen
                      ? 'max-h-[500px] opacity-100'
                      : 'max-h-0 opacity-0'
                    }`}>
                    <div className="py-2 space-y-4 max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                      {getDynamicProductCards(pathname).map((product, index) => {
                        const isActive = pathname === product.link;
                        return (
                          <div key={index} className={`px-6 py-3 border-b border-gray-700 last:border-b-0 group transition-colors duration-200 rounded-md ${
                            isActive 
                              ? 'bg-blue-900/30 border-l-4 border-l-blue-400' 
                              : 'hover:bg-gray-800/50'
                          }`}>
                            <h4 className={`text-sm font-bold uppercase mb-2 transition-colors duration-200 ${
                              isActive 
                                ? 'text-blue-400' 
                                : 'text-white group-hover:text-blue-400'
                            }`}>
                              {product.title}
                              {isActive && (
                                <span className="ml-2 text-xs text-blue-300 font-normal">(Current)</span>
                              )}
                            </h4>
                            <p className={`text-xs mb-3 leading-relaxed transition-colors duration-200 ${
                              isActive 
                                ? 'text-blue-200' 
                                : 'text-gray-300 group-hover:text-gray-200'
                            }`}>
                              {product.description}
                            </p>
                            <a
                              href={product.link}
                              className={`text-xs font-medium hover:underline inline-flex items-center group/link transition-all duration-200 ${
                                isActive 
                                  ? 'text-blue-300 hover:text-blue-200' 
                                  : 'text-[#007bff] hover:text-blue-300'
                              }`}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <span className="group-hover/link:translate-x-1 transition-transform duration-200">
                                {isActive ? 'View page' : 'Learn more'}
                              </span>
                              <svg
                                className="ml-1 h-3 w-3 group-hover/link:translate-x-1 transition-transform duration-200"
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
                        );
                      })}

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

                {navigationLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`px-3 py-2 text-md font-medium transition-colors no-underline ${isActive(link.href)
                      ? "text-blue-400"
                      : "text-white hover:text-gray-300"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}

                {/* Mobile CTA Buttons */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <a
                    href={headerConfig.demoButton.href}
                    target={headerConfig.demoButton.target}
                    rel="noopener noreferrer"
                    className="block w-full bg-white px-4 py-3 text-black rounded-full px-3 py-2 text-md font-mediumhover:bg-gray-200 transition-colors no-underline text-center mb-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {headerConfig.demoButton.text}
                  </a>
                  <div className="relative">
                    <button
                      onClick={toggleMobileLogin}
                      className={`w-full text-left px-3 py-2 text-md font-medium transition-colors no-underline flex items-center justify-between ${isMobileLoginOpen
                        ? "text-blue-400"
                        : "text-white hover:text-gray-300"
                        }`}
                    >
                      {headerConfig.loginButton.text}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${isMobileLoginOpen ? "rotate-180" : "rotate-0"}`}
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

                    <div className={`bg-[#001a2e] border-l-2 border-blue-400 ml-4 mt-2 transition-all duration-300 ease-in-out overflow-hidden ${isMobileLoginOpen
                        ? 'max-h-[300px] opacity-100'
                        : 'max-h-0 opacity-0'
                      }`}>
                      <div className="py-2 space-y-1">
                        {loginPlatforms.map((platform, index) => (
                          <a
                            key={platform.id}
                            href={platform.href}
                            className={`block px-6 py-3 text-sm text-white hover:bg-gray-700 group transition-all duration-200 ${index < loginPlatforms.length - 1 ? 'border-b border-gray-700' : ''
                              }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="font-medium group-hover:text-blue-400 transition-colors duration-200 flex items-center">
                              {platform.title}
                              <svg className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
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
