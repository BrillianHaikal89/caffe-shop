import React from 'react';

/**
 * Empty cart component
 */
export default function CartEmpty({ onClose }) {
  return (
    <div className="p-4 sm:p-8 text-center">
      <div className="text-amber-800 text-4xl sm:text-5xl mb-4">
        <i className="fas fa-shopping-cart"></i>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">Keranjang Kosong</h3>
      <p className="text-gray-600 mb-6">Tambahkan item dari menu kami untuk mulai memesan.</p>
      <button
        onClick={onClose}
        className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded"
      >
        Jelajahi Menu
      </button>
    </div>
  );
}