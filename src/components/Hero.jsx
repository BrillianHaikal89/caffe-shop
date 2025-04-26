'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen">
      {/* Gambar Latar Belakang */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Suasana Kafe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
      </div>
      
      {/* Konten */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow animate-fadeIn">
            Selamat Datang di All The Time Café
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto animate-fadeIn">
            Di mana passion terhadap kopi bertemu dengan suasana hangat dan mengundang.
            Rasakan perpaduan sempurna antara kualitas, kenyamanan, dan cita rasa.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 animate-fadeIn">
            <Link href="/menu" className="btn-primary py-3 px-8 text-lg font-bold">
              Jelajahi Menu Kami
            </Link>
            <Link href="/#about" className="btn-secondary">
              Kisah Kami
            </Link>
          </div>
          
          {/* Indikator Gulir Ke Bawah */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-white">
              <i className="fas fa-chevron-down text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      
      {/* Elemen dekoratif cangkir kopi - IMPROVED */}
      <div className="hidden md:flex absolute bottom-20 right-20 items-center space-x-3">
        {/* Coffee cup icon with enhanced styling and subtle animation */}
        <div className="relative w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full p-2 shadow-lg transform hover:rotate-12 transition-transform duration-500">
          <Image 
            src="/logo.png"
            alt="Dekorasi cangkir kopi"
            fill
            className="object-contain brightness-100 filter drop-shadow-lg animate-pulse"
            style={{ animationDuration: '3s' }}
          />
          {/* Steam effect */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-80">
            <div className="w-1 h-5 bg-white/50 rounded-full mx-auto animate-steam-1"></div>
            <div className="w-1 h-6 bg-white/50 rounded-full mx-auto mt-1 animate-steam-2" 
                 style={{ animationDelay: '0.3s' }}></div>
            <div className="w-1 h-4 bg-white/50 rounded-full mx-auto mt-1 animate-steam-3"
                 style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>
        
        {/* Optional: Text element next to the coffee cup */}
        <div className="text-white/90 text-sm font-light italic rotate-12">
          Nikmati kopi terbaik!
        </div>
      </div>
    </section>
  );
}