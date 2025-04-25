import React from 'react';
import { menuData } from '../../lib/data';
import MenuCategory from '../../components/MenuCategory';

export default function Menu() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-amber-900">Our Menu</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our carefully crafted selection of premium coffees, refreshing beverages, 
          and delicious food items made with the finest ingredients.
        </p>
        
        {/* Menu Categories */}
        <div className="space-y-16">
          {menuData.map((category, index) => (
            <MenuCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </main>
  );
}