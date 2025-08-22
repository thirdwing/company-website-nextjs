"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#001224] text-white">
      <div className="max-w-[1222px] mx-auto px-3 py-25">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Branding and Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image 
                src="/images/logos/NyquistAI-logo.svg" 
                alt="Nyquist AI" 
                width={167} 
                height={100} 
              />
            </div>
            <div className="space-y-3 text-sm text-gray-300">
              <p>855 El Camino Real Ste 13A - 286</p>
              <p>Palo Alto, CA 94301</p>
              <p>Email: info@nyquistai.com</p>
              <p>Phone: (833) 536 - 6888</p>
            </div>
            <div className="mt-6">
              <a
                href="https://meetings.hubspot.com/mw33?uuid=08bb7e64-f3cb-41d4-a6b9-120014167550"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors no-underline text-center"
              >
                SCHEDULE A DEMO
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/nyquistmed" 
                  className="text-gray-300 hover:text-white transition-colors no-underline"
                >
                  Nyquist MedTech
                </Link>
              </li>
              <li>
                <Link 
                  href="/nyquistpharma" 
                  className="text-gray-300 hover:text-white transition-colors no-underline"
                >
                  Nyquist Pharma
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/blog" 
                  className="text-gray-300 hover:text-white transition-colors no-underline"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about-us" 
                  className="text-gray-300 hover:text-white transition-colors no-underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-white transition-colors no-underline"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-300">
              Copyright 2024 Nyquist Data, Inc. All Rights Reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <Link 
                href="/privacy-policy" 
                className="text-gray-300 hover:text-white transition-colors no-underline"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-gray-300 hover:text-white transition-colors no-underline"
              >
                Terms of Service
              </Link>
              <Link 
                href="/fulfillment-policy" 
                className="text-gray-300 hover:text-white transition-colors no-underline"
              >
                Fulfillment Policy
              </Link>
            </div>

            {/* Social Media */}
            <div className="flex items-center">
              <a
                href="https://linkedin.com/company/nyquist-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
