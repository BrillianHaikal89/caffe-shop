import React from 'react';
import { menuData } from '../../lib/data';
import MenuCategory from '../../components/MenuCategory';
import Image from 'next/image';

export default function Menu() {
  return (
    <>
      {/* Banner Menu */}
      <div className="relative h-80">
        <Image
          src="/images/menu-banner.jpg"
          alt="Banner Menu Kami"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-shadow">Menu Kami</h1>
        </div>
      </div>

      {/* Konten Menu */}
      <main className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-amber-900">Dibuat dengan Passion</h2>
            <p className="text-gray-700 text-lg">
              Temukan pilihan premium kopi, minuman segar, dan hidangan lezat yang kami pilih dengan 
              bahan-bahan terbaik. Setiap item di menu kami disiapkan dengan penuh perhatian untuk 
              memastikan pengalaman yang menyenangkan bagi para tamu kami.
            </p>
          </div>
          
          {/* Opsi Filter Menu - dapat dibuat fungsional dengan komponen klien */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 rounded-full bg-amber-700 text-white font-medium">
              Semua Item
            </button>
            <button className="px-6 py-2 rounded-full bg-white text-amber-900 border border-amber-700 font-medium">
              Kopi
            </button>
            <button className="px-6 py-2 rounded-full bg-white text-amber-900 border border-amber-700 font-medium">
              Non-Kopi
            </button>
            <button className="px-6 py-2 rounded-full bg-white text-amber-900 border border-amber-700 font-medium">
              Makanan
            </button>
            <button className="px-6 py-2 rounded-full bg-white text-amber-900 border border-amber-700 font-medium">
              Vegan
            </button>
          </div>
          
          {/* Kategori Menu */}
          <div className="space-y-24">
            {menuData.map((category, index) => (
              <MenuCategory key={index} category={category} />
            ))}
          </div>
        </div>
      </main>
      
      {/* Panggilan Aksi */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Memesan?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kunjungi kami di toko atau pesan secara online untuk pengambilan atau pengiriman.
          </p>
          <button className="bg-white text-amber-900 px-8 py-3 rounded-full font-bold hover:bg-amber-100 transition duration-300">
            Pesan Online Sekarang
          </button>
        </div>
      </section>
    </>
  );
}