import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Café atmosphere"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow animate-fadeIn">
            Welcome to Aroma Haven Café
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto animate-fadeIn">
            Where passion for coffee meets a warm, inviting atmosphere.
            Experience the perfect blend of quality, comfort, and flavor.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 animate-fadeIn">
            <Link href="/menu" className="btn-primary py-3 px-8 text-lg font-bold">
              Explore Our Menu
            </Link>
            <Link href="/#about" className="btn-secondary">
              Our Story
            </Link>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-white">
              <i className="fas fa-chevron-down text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      
      {/* Coffee cup decorative element */}
      <div className="hidden md:block absolute bottom-20 right-20">
        <div className="relative w-20 h-20">
          <Image 
            src="/logo.png"
            alt="Coffee cup decoration"
            fill
            className="object-contain brightness-0 invert opacity-60"
          />
        </div>
      </div>
    </section>
  );
}