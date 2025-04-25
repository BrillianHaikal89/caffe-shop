import React from 'react';
import { menuData } from '../../lib/data';
import MenuCategory from '../../components/MenuCategory';
import Image from 'next/image';

export default function Menu() {
  return (
    <>
      {/* Menu Hero Banner */}
      <div className="relative h-80">
        <Image
          src="/images/menu-banner.jpg"
          alt="Our Menu Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-shadow">Our Menu</h1>
        </div>
      </div>

      {/* Menu Content */}
      <main className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-amber-900">Crafted with Passion</h2>
            <p className="text-gray-700 text-lg">
              Discover our carefully crafted selection of premium coffees, refreshing beverages, 
              and delicious food items made with the finest ingredients. Each item on our menu is 
              prepared with care to ensure a delightful experience for our guests.
            </p>
          </div>
          
          {/* Menu Filter Options - could be made functional with client components */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 rounded-full bg-amber-700 text-white font-medium">
              All Items
            </button>
            <button className="px-6 py-2 rounded-full bg-white text-amber-900 border border-amber-700 font-medium">
              Coffee
            </button>
            <button className="px-6 py-2 rounded-full bg-white text-amber-900 border border-amber-700 font-medium">
              Non-Coffee
            </button>
            <button className="px-6 py-2 rounded-full bg-white text-amber-900 border border-amber-700 font-medium">
              Food
            </button>
            <button className="px-6 py-2 rounded-full bg-white text-amber-900 border border-amber-700 font-medium">
              Vegan
            </button>
          </div>
          
          {/* Menu Categories */}
          <div className="space-y-24">
            {menuData.map((category, index) => (
              <MenuCategory key={index} category={category} />
            ))}
          </div>
        </div>
      </main>
      
      {/* Call to Action */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit us in-store or place your order online for pickup or delivery.
          </p>
          <button className="bg-white text-amber-900 px-8 py-3 rounded-full font-bold hover:bg-amber-100 transition duration-300">
            Order Online Now
          </button>
        </div>
      </section>
    </>
  );
}