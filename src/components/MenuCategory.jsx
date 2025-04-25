import React from 'react';
import MenuItem from './MenuItem';

export default function MenuCategory({ category }) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-amber-900 inline-block border-b-2 border-amber-700 pb-2">
          {category.name}
        </h2>
        <p className="text-gray-600 mt-3">
          {category.description}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}