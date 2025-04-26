import React from 'react';

/**
 * Customer details form component for the cart
 */
export default function CartDetailsForm({ customerDetails, handleInputChange }) {
  return (
    <div className="p-3 sm:p-4">
      <form className="space-y-3 sm:space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nama Lengkap *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={customerDetails.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Nomor Telepon * (format: 08xxxxxxxxxx)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={customerDetails.phone}
            onChange={handleInputChange}
            placeholder="08xxxxxxxxxx"
            pattern="[0-9]*"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Masukkan nomor WhatsApp aktif untuk menerima struk pembelian
          </p>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={customerDetails.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipe Pesanan *
          </label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="orderType"
                value="pickup"
                checked={customerDetails.orderType === 'pickup'}
                onChange={handleInputChange}
                className="mr-2 text-amber-700 focus:ring-amber-500"
              />
              <span>Ambil Sendiri</span>
            </label>

            <label className="flex items-center">
              <input
                type="radio"
                name="orderType"
                value="delivery"
                checked={customerDetails.orderType === 'delivery'}
                onChange={handleInputChange}
                className="mr-2 text-amber-700 focus:ring-amber-500"
              />
              <span>Pengantaran</span>
            </label>
          </div>
        </div>

        {customerDetails.orderType === 'delivery' && (
          <div>
            <label htmlFor="deliveryAddress" className="block text-sm font-medium text-gray-700 mb-1">
              Alamat Pengantaran *
            </label>
            <textarea
              id="deliveryAddress"
              name="deliveryAddress"
              value={customerDetails.deliveryAddress}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            ></textarea>
          </div>
        )}

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
            Catatan Pesanan
          </label>
          <textarea
            id="notes"
            name="notes"
            value={customerDetails.notes}
            onChange={handleInputChange}
            rows="2"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          ></textarea>
        </div>
      </form>
    </div>
  );
}