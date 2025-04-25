import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Gambar dengan dekorasi biji kopi */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden h-[500px] shadow-xl">
              <Image
                src="/images/about.jpg"
                alt="Cerita kafe kami"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Elemen dekoratif */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-700 rounded-full flex items-center justify-center shadow-lg z-10">
              <i className="fas fa-coffee text-white text-3xl"></i>
            </div>
            
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center shadow-lg opacity-80">
              <i className="fas fa-mug-hot text-white text-2xl"></i>
            </div>
          </div>
          
          {/* Konten */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <h2 className="text-4xl font-bold mb-8 text-amber-900 relative">
              Kisah Kami
              <span className="block w-20 h-1 bg-amber-700 mt-4"></span>
            </h2>
            
            <p className="text-gray-700 mb-6 text-lg">
              Didirikan pada tahun 2018, All The Time bermula dari sebuah proyek passion 
              oleh seorang pendiri yang memiliki cinta mendalam terhadap kopi berkualitas 
              dan menciptakan ruang komunitas yang hangat.
            </p>
            
            <p className="text-gray-700 mb-6 text-lg">
              Dari sebuah sudut kecil, kini telah berkembang menjadi kafe lokal favorit 
              yang tetap memegang komitmen akan kualitas, keberlanjutan, dan menciptakan 
              suasana yang ramah di mana setiap orang merasa diterima.
            </p>
            
            <p className="text-gray-700 mb-8 text-lg">
              Kami dengan cermat memilih setiap biji kopi dari sumber etis di seluruh 
              dunia, memanggang dengan sempurna dalam batch kecil, dan melatih barista 
              kami dalam seni membuat secangkir kopi yang sempurna setiap saat.
            </p>
            
            <div className="flex items-center space-x-6 mt-8">
              <div className="w-16 h-16 rounded-full overflow-hidden relative border-2 border-amber-700">
                <Image
                  src="/images/founder1.jpg"
                  alt="Pendiri"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-medium text-amber-900">
                Rabila Anjasmara, Pendiri
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}