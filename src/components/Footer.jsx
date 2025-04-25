import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Wave decoration */}
        <div className="relative -mt-24 mb-12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-gray-900">
            <path d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,133.3C672,139,768,117,864,128C960,139,1056,181,1152,176C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <Image 
                  src="/logo.png" 
                  alt="Aroma Haven Café" 
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-2xl font-bold">Aroma Haven</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your cozy corner for premium coffee experiences and delightful treats.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-amber-700 transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram" className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-amber-700 transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter" className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-amber-700 transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center">
                  <i className="fas fa-chevron-right mr-2 text-amber-700 text-xs"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center">
                  <i className="fas fa-chevron-right mr-2 text-amber-700 text-xs"></i>
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center">
                  <i className="fas fa-chevron-right mr-2 text-amber-700 text-xs"></i>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center">
                  <i className="fas fa-chevron-right mr-2 text-amber-700 text-xs"></i>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center">
                  <i className="fas fa-chevron-right mr-2 text-amber-700 text-xs"></i>
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1 text-amber-700"></i>
                <span className="text-gray-400">123 Coffee Street, Café City, CC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone text-amber-700"></i>
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-amber-700"></i>
                <span className="text-gray-400">hello@aromahaven.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-clock text-amber-700"></i>
                <span className="text-gray-400">Open 7 days a week</span>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-400">Monday - Friday</span>
                <span className="text-amber-500">7AM - 8PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Saturday</span>
                <span className="text-amber-500">8AM - 10PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span className="text-amber-500">8AM - 8PM</span>
              </li>
            </ul>
            
            <div className="mt-6 pt-4 border-t border-gray-800">
              <a href="#" className="text-amber-500 hover:text-amber-400 transition duration-300 flex items-center">
                <i className="fas fa-map-marked-alt mr-2"></i>
                Get Directions
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Aroma Haven Café. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}