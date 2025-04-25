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
          className="object-cover brightness-50"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to Aroma Haven Café
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Where passion for coffee meets a warm, inviting atmosphere.
            Experience the perfect blend of quality, comfort, and flavor.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/menu" className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full font-bold transition duration-300">
              Explore Our Menu
            </Link>
            <Link href="/#about" className="bg-transparent border-2 border-white hover:bg-white hover:text-amber-900 text-white px-8 py-3 rounded-full font-bold transition duration-300">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}