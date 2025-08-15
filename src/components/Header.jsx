'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header({ children }) {
  const pathname = usePathname()

  const isActive = (path) => {
    return pathname === path
  }

  return (
    <header className="bg-[#001224] text-white shadow-sm py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white no-underline">Nyquist AI</Link>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/products"
              className={`px-3 py-2 text-sm font-medium transition-colors no-underline ${
                isActive('/products')
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-white hover:text-gray-300'
              }`}
            >
              Products
            </Link>
            <Link
              href="/about-us"
              className={`px-3 py-2 text-sm font-medium transition-colors no-underline ${
                isActive('/about-us')
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-white hover:text-gray-300'
              }`}
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className={`px-3 py-2 text-sm font-medium transition-colors no-underline ${
                isActive('/blog')
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-white hover:text-gray-300'
              }`}
            >
              Blog
            </Link>
            <Link
              href="/pricing"
              className={`px-3 py-2 text-sm font-medium transition-colors no-underline ${
                isActive('/pricing')
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-white hover:text-gray-300'
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/roi"
              className={`px-3 py-2 text-sm font-medium transition-colors no-underline ${
                isActive('/roi')
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-white hover:text-gray-300'
              }`}
            >
              ROI
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium transition-colors no-underline ${
                isActive('/contact')
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-white hover:text-gray-300'
              }`}
            >
              Contact
            </Link>
          </nav>
          
          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://meetings.hubspot.com/mw33?uuid=08bb7e64-f3cb-41d4-a6b9-120014167550"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors no-underline"
            >
              SCHEDULE A DEMO
            </a>
            <div className="relative">
              <button className="text-white hover:text-gray-300 text-sm font-medium flex items-center">
                Login
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Children content area */}
        {children && (
          <div className="mt-4 pb-4">
            {children}
          </div>
        )}
      </div>
    </header>
  )
}
