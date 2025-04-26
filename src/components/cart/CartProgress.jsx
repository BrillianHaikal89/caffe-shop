import React from 'react';

/**
 * Cart checkout progress indicator
 */
export default function CartProgress({ checkoutStep }) {
  return (
    <div className="bg-amber-100 px-2 sm:px-4 py-2">
      <div className="flex justify-between">
        <div className={`flex flex-col items-center ${
          checkoutStep === 'cart' ? 'text-amber-800' : 'text-gray-500'
        }`}>
          <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm ${
            checkoutStep === 'cart' ? 'bg-amber-800 text-white' : 'bg-gray-300'
          }`}>1</div>
          <span className="text-xs mt-1">Keranjang</span>
        </div>

        <div className="flex-1 flex items-center px-1 sm:px-2">
          <div className={`h-0.5 w-full ${
            checkoutStep === 'cart' ? 'bg-gray-300' : 'bg-amber-800'
          }`}></div>
        </div>

        <div className={`flex flex-col items-center ${
          checkoutStep === 'details' ? 'text-amber-800' : 'text-gray-500'
        }`}>
          <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm ${
            checkoutStep === 'details' || checkoutStep === 'payment' || checkoutStep === 'confirmation'
            ? 'bg-amber-800 text-white' : 'bg-gray-300'
          }`}>2</div>
          <span className="text-xs mt-1">Detail</span>
        </div>

        <div className="flex-1 flex items-center px-1 sm:px-2">
          <div className={`h-0.5 w-full ${
            checkoutStep === 'details' || checkoutStep === 'cart' ? 'bg-gray-300' : 'bg-amber-800'
          }`}></div>
        </div>

        <div className={`flex flex-col items-center ${
          checkoutStep === 'payment' || checkoutStep === 'confirmation' ? 'text-amber-800' : 'text-gray-500'
        }`}>
          <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm ${
            checkoutStep === 'payment' || checkoutStep === 'confirmation'
            ? 'bg-amber-800 text-white' : 'bg-gray-300'
          }`}>3</div>
          <span className="text-xs mt-1">Bayar</span>
        </div>
      </div>
    </div>
  );
}