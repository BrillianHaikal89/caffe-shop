import React from 'react';
import MenuItem from './MenuItem';

export default function MenuCategory({ category }) {
  return (
    <div className="scroll-m-20" id={category.name.toLowerCase().replace(/\s+/g, '-')}>
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-amber-900 inline-block relative pb-3 mb-4">
          {category.name}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-700"></span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {category.description}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
      
      {/* Decorative divider */}
      <div className="flex items-center justify-center mt-16">
        <div className="w-2 h-2 rounded-full bg-amber-700"></div>
        <div className="w-24 h-px bg-amber-700 mx-2"></div>
        <div className="w-3 h-3 rounded-full bg-amber-700"></div>
        <div className="w-24 h-px bg-amber-700 mx-2"></div>
        <div className="w-2 h-2 rounded-full bg-amber-700"></div>
      </div>
    </div>
  );
}