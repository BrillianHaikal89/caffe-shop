'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Image 
                src="/logo.png" 
                alt="Aroma Haven Café" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-amber-900">Aroma Haven</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-700 transition duration-300">
              Home
            </Link>
            <Link href="/menu" className="text-gray-700 hover:text-amber-700 transition duration-300">
              Menu
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-amber-700 transition duration-300">
              About Us
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-amber-700 transition duration-300">
              Contact
            </Link>
          </div>
          
          {/* Order Button (Desktop) */}
          <div className="hidden md:block">
            <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-full transition duration-300">
              Order Online
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-amber-700 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <i className="fas fa-times text-2xl"></i>
              ) : (
                <i className="fas fa-bars text-2xl"></i>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-amber-700 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/menu" 
                className="text-gray-700 hover:text-amber-700 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                href="/#about" 
                className="text-gray-700 hover:text-amber-700 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/#contact" 
                className="text-gray-700 hover:text-amber-700 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-full transition duration-300 w-full">
                Order Online
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}