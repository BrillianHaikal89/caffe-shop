import React from 'react';
import Image from 'next/image';

export default function MenuItem({ item }) {
  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1">
      <div className="relative h-64">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {item.isPopular && (
          <div className="absolute top-3 right-3 bg-amber-700 text-white px-3 py-1 text-sm rounded-full shadow-lg">
            <span className="flex items-center">
              <i className="fas fa-star mr-1"></i> Populer
            </span>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-amber-900 group-hover:text-amber-700 transition-colors">{item.name}</h3>
          <span className="font-bold text-amber-900 text-xl">Rp {item.price.toLocaleString('id-ID')}</span>
        </div>
        
        <p className="text-gray-600 mb-4">{item.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {item.isVegan && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded flex items-center">
              <i className="fas fa-leaf mr-1"></i> Vegan
            </span>
          )}
          {item.isGlutenFree && (
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded flex items-center">
              <i className="fas fa-wheat-alt mr-1"></i> Bebas Gluten
            </span>
          )}
          {item.allergens && item.allergens.length > 0 && (
            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded flex items-center">
              <i className="fas fa-exclamation-circle mr-1"></i> Mengandung: {item.allergens.join(', ')}
            </span>
          )}
        </div>
        
        <button className="w-full bg-amber-700 hover:bg-amber-800 text-white py-2 rounded-lg text-sm font-medium transition duration-300 flex items-center justify-center">
          <i className="fas fa-plus-circle mr-2"></i> Tambah ke Pesanan
        </button>
      </div>
    </div>
  );
}