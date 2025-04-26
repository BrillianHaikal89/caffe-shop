'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-12 h-12">
              <Image 
                src="/logo_nb.png" 
                alt="All The Time Café" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className={`text-xl font-bold ${scrolled ? 'text-amber-900' : 'text-white'}`}>
              All The Time
            </span>
          </Link>
          
          {/* Navigasi Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={`hover:text-amber-700 transition duration-300 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Beranda
            </Link>
            <Link href="/menu" className={`hover:text-amber-700 transition duration-300 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Menu
            </Link>
            <Link href="/#about" className={`hover:text-amber-700 transition duration-300 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Tentang Kami
            </Link>
            <Link href="/#contact" className={`hover:text-amber-700 transition duration-300 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Kontak
            </Link>
          </div>
          
          {/* Tombol Pesan (Desktop) */}
          <div className="hidden md:block">
            <button className="btn-primary">
              Pesan Daring
            </button>
          </div>
          
          {/* Tombol Menu Mobile */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`focus:outline-none ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {mobileMenuOpen ? (
                <i className="fas fa-times text-2xl"></i>
              ) : (
                <i className="fas fa-bars text-2xl"></i>
              )}
            </button>
          </div>
        </div>
        
        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-amber-700 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Beranda
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
                Tentang Kami
              </Link>
              <Link 
                href="/#contact" 
                className="text-gray-700 hover:text-amber-700 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontak
              </Link>
              <button className="btn-primary w-full">
                Pesan Daring
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}