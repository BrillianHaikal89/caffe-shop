import React from 'react';

/**
 * Cart navigation buttons component
 */
export default function CartNavigation({ 
  checkoutStep, 
  setCheckoutStep, 
  totalPrice, 
  cart, 
  customerDetails,
  isProceedDisabled
}) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-3 sm:p-4">
      {checkoutStep === 'cart' && (
        <div className="flex justify-between items-center">
          <div>
            <div className="text-gray-500 text-xs sm:text-sm">Total</div>
            <div className="text-lg sm:text-xl font-bold text-amber-900">
              Rp {totalPrice.toLocaleString('id-ID')}
            </div>
          </div>

          <button
            onClick={() => setCheckoutStep('details')}
            disabled={cart.length === 0}
            className={`px-4 sm:px-6 py-2 rounded text-sm sm:text-base ${
              cart.length === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-amber-700 hover:bg-amber-800 text-white'
            }`}
          >
            Lanjutkan <i className="fas fa-arrow-right ml-1"></i>
          </button>
        </div>
      )}

      {checkoutStep === 'details' && (
        <div className="flex justify-between">
          <button
            onClick={() => setCheckoutStep('cart')}
            className="px-3 sm:px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm sm:text-base"
          >
            <i className="fas fa-arrow-left mr-1"></i> Kembali
          </button>

          <button
            onClick={() => setCheckoutStep('payment')}
            disabled={!customerDetails.name || !customerDetails.phone ||
              (customerDetails.orderType === 'delivery' && !customerDetails.deliveryAddress)}
            className={`px-3 sm:px-6 py-2 rounded text-sm sm:text-base ${
              isProceedDisabled()
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-amber-700 hover:bg-amber-800 text-white'
            }`}
          >
            Lanjutkan <i className="fas fa-arrow-right ml-1"></i>
          </button>
        </div>
      )}

      {checkoutStep === 'payment' && (
        <div className="flex justify-between">
          <button
            onClick={() => setCheckoutStep('details')}
            className="px-3 sm:px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm sm:text-base"
          >
            <i className="fas fa-arrow-left mr-1"></i> Kembali
          </button>

          <button
            onClick={() => setCheckoutStep('confirmation')}
            className="px-3 sm:px-6 py-2 bg-amber-700 hover:bg-amber-800 text-white rounded text-sm sm:text-base"
          >
            Konfirmasi Pesanan
          </button>
        </div>
      )}
    </div>
  );
}