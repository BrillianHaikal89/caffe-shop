import React from 'react';

export default function CartConfirmation({ 
  customerDetails, 
  paymentMethod, 
  totalPrice, 
  orderNumber,
  handleOrderComplete 
}) {
  return (
    <div className="p-3 sm:p-4 text-center">
      <div className="mb-4 sm:mb-6 text-green-500 text-4xl sm:text-6xl">
        <i className="fas fa-check-circle"></i>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold mb-2">Terima Kasih!</h3>
      <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
        Pesanan Anda telah dikonfirmasi. {paymentMethod !== 'cash' && 'Struk pembelian telah dikirim ke WhatsApp Anda.'}
      </p>

      <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-6 text-xs sm:text-sm">
        <div className="text-left">
          <div className="mb-3 sm:mb-4">
            <div className="text-gray-500">Nomor Pesanan</div>
            <div className="font-medium">{orderNumber}</div>
          </div>

          <div className="mb-3 sm:mb-4">
            <div className="text-gray-500">Nama</div>
            <div className="font-medium">{customerDetails.name}</div>
          </div>

          <div className="mb-3 sm:mb-4">
            <div className="text-gray-500">Tipe Pesanan</div>
            <div className="font-medium">
              {customerDetails.orderType === 'pickup' ? 'Ambil Sendiri' : 'Pengantaran'}
            </div>
          </div>

          {customerDetails.orderType === 'delivery' && (
            <div className="mb-3 sm:mb-4">
              <div className="text-gray-500">Alamat Pengantaran</div>
              <div className="font-medium">{customerDetails.deliveryAddress}</div>
            </div>
          )}

          <div className="mb-3 sm:mb-4">
            <div className="text-gray-500">Metode Pembayaran</div>
            <div className="font-medium">
              {paymentMethod === 'cash' && 'Tunai'}
              {paymentMethod === 'transfer' && 'Transfer Bank'}
              {paymentMethod === 'ewallet' && 'E-Wallet'}
            </div>
          </div>

          <div>
            <div className="text-gray-500">Total</div>
            <div className="font-bold text-amber-900">
              Rp {(totalPrice + (customerDetails.orderType === 'delivery' ? 15000 : 0)).toLocaleString('id-ID')}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleOrderComplete}
        className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded"
      >
        Kembali ke Menu
      </button>
    </div>
  );
}