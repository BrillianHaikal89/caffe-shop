import React from 'react';
import Image from 'next/image';

export default function MenuItem({ item }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative h-48">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
        {item.isPopular && (
          <div className="absolute top-2 right-2 bg-amber-700 text-white px-3 py-1 text-sm rounded-full">
            Popular
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <span className="font-bold text-amber-900">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
        {item.allergens && (
          <p className="text-xs text-gray-500 italic">
            Allergens: {item.allergens.join(', ')}
          </p>
        )}
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            {item.isVegan && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2">
                Vegan
              </span>
            )}
            {item.isGlutenFree && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                Gluten-Free
              </span>
            )}
          </div>
          <button className="bg-amber-700 hover:bg-amber-800 text-white px-3 py-1 rounded-full text-sm transition duration-300">
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
}