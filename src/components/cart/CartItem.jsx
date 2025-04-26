import React from 'react';
import Image from 'next/image';

/**
 * Component for rendering an individual item in the cart
 */
export default function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <div className="p-3 sm:p-4 flex items-start">
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded overflow-hidden mr-2 sm:mr-3">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-800 text-sm sm:text-base truncate">{item.name}</h3>
        <div className="text-amber-800 font-bold mt-1 text-sm sm:text-base">
          Rp {item.price.toLocaleString('id-ID')}
        </div>
      </div>

      <div className="flex flex-col items-end ml-2">
        <button
          onClick={() => removeItem(item.id)}
          className="text-gray-400 hover:text-red-500 mb-1 sm:mb-2 p-1"
        >
          <i className="fas fa-times"></i>
        </button>

        <div className="flex items-center border rounded bg-gray-50">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="px-1 sm:px-2 py-1 text-gray-600 hover:bg-gray-200"
          >
            <i className="fas fa-minus text-xs sm:text-sm"></i>
          </button>

          <span className="px-2 sm:px-3 py-1 text-sm">{item.quantity}</span>

          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="px-1 sm:px-2 py-1 text-gray-600 hover:bg-gray-200"
          >
            <i className="fas fa-plus text-xs sm:text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  );
}