// components/Navbar.tsx
'use client'; // make sure this is a client component

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              BizLogo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
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

          {/* Menu items */}
          <div
            className={`md:flex md:items-center ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            <Link href="#hero" className="block mt-4 md:mt-0 md:ml-6 text-gray-800 hover:text-blue-500 transition">
              Home
            </Link>
            <Link href="#about" className="block mt-4 md:mt-0 md:ml-6 text-gray-800 hover:text-blue-500 transition">
              About
            </Link>
            <Link href="#services" className="block mt-4 md:mt-0 md:ml-6 text-gray-800 hover:text-blue-500 transition">
              Services
            </Link>
            <Link href="#gallery" className="block mt-4 md:mt-0 md:ml-6 text-gray-800 hover:text-blue-500 transition">
              Gallery
            </Link>
            <Link href="#contact" className="block mt-4 md:mt-0 md:ml-6 text-gray-800 hover:text-blue-500 transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
