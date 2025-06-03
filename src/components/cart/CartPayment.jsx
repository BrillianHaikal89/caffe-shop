import React, { useState } from 'react'; // Tambahkan import useState
import Image from 'next/image';

// Bank account details for bank transfer
const bankAccounts = [
  {
    bank: "BCA",
    accountNumber: "0923456789",
    accountName: "All The Time Coffee",
    logo: "/images/payments/bca-logo.png"
  },
  {
    bank: "Mandiri",
    accountNumber: "1234567890",
    accountName: "All The Time Coffee",
    logo: "/images/payments/mandiri-logo.png"
  }
];

// QR Code payment details
const qrPayments = [
  {
    name: "DANA",
    qrImage: "/images/payments/dana-qr.png"
  },
  {
    name: "GoPay",
    qrImage: "/images/payments/gopay-qr.png"
  },
  {
    name: "OVO",
    qrImage: "/images/payments/ovo-qr.png"
  }
];

/**
 * Payment options component for the cart
 */
export default function CartPayment({ paymentMethod, handlePaymentMethodChange, customerDetails, totalPrice }) {
  const [showQRModal, setShowQRModal] = useState(null);

  const handleQRClick = (payment) => {
    setShowQRModal(payment);
  };

  const closeModal = () => {
    setShowQRModal(null);
  };

  return (
    <div className="p-3 sm:p-4">
      <h3 className="font-medium mb-3 sm:mb-4">Pilih Metode Pembayaran</h3>

      <div className="space-y-2 sm:space-y-3">
        {/* Cash Payment */}
        <label className="flex items-center p-2 sm:p-3 border rounded-lg cursor-pointer hover:bg-amber-50">
          <input
            type="radio"
            name="paymentMethod"
            value="cash"
            checked={paymentMethod === 'cash'}
            onChange={handlePaymentMethodChange}
            className="mr-2 sm:mr-3 text-amber-700"
          />
          <div className="flex items-center">
            <div className="bg-green-100 text-green-800 p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3">
              <i className="fas fa-money-bill-wave text-sm sm:text-base"></i>
            </div>
            <div>
              <div className="font-medium text-sm sm:text-base">Tunai</div>
              <div className="text-xs sm:text-sm text-gray-500">Bayar saat pengambilan/pengantaran</div>
            </div>
          </div>
        </label>

        {/* Credit Card Payment */}
        <label className="flex items-center p-2 sm:p-3 border rounded-lg cursor-pointer hover:bg-amber-50">
          <input
            type="radio"
            name="paymentMethod"
            value="credit_card"
            checked={paymentMethod === 'credit_card'}
            onChange={handlePaymentMethodChange}
            className="mr-2 sm:mr-3 text-amber-700"
          />
          <div className="flex items-center">
            <div className="bg-yellow-100 text-yellow-800 p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3">
              <i className="fas fa-credit-card text-sm sm:text-base"></i>
            </div>
            <div>
              <div className="font-medium text-sm sm:text-base">Kartu Kredit/Debit</div>
              <div className="text-xs sm:text-sm text-gray-500">Visa, Mastercard, JCB</div>
            </div>
          </div>
        </label>

        {/* Bank Transfer */}
        <label className="flex items-center p-2 sm:p-3 border rounded-lg cursor-pointer hover:bg-amber-50">
          <input
            type="radio"
            name="paymentMethod"
            value="bank_transfer"
            checked={paymentMethod === 'bank_transfer'}
            onChange={handlePaymentMethodChange}
            className="mr-2 sm:mr-3 text-amber-700"
          />
          <div className="flex items-center">
            <div className="bg-blue-100 text-blue-800 p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3">
              <i className="fas fa-university text-sm sm:text-base"></i>
            </div>
            <div>
              <div className="font-medium text-sm sm:text-base">Transfer Bank</div>
              <div className="text-xs sm:text-sm text-gray-500">BCA, Mandiri, BRI, BNI, dll.</div>
            </div>
          </div>
        </label>

        {/* E-Wallet */}
        <label className="flex items-center p-2 sm:p-3 border rounded-lg cursor-pointer hover:bg-amber-50">
          <input
            type="radio"
            name="paymentMethod"
            value="ewallet"
            checked={paymentMethod === 'ewallet'}
            onChange={handlePaymentMethodChange}
            className="mr-2 sm:mr-3 text-amber-700"
          />
          <div className="flex items-center">
            <div className="bg-purple-100 text-purple-800 p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3">
              <i className="fas fa-wallet text-sm sm:text-base"></i>
            </div>
            <div>
              <div className="font-medium text-sm sm:text-base">E-Wallet</div>
              <div className="text-xs sm:text-sm text-gray-500">DANA, GoPay, OVO, LinkAja, ShopeePay</div>
            </div>
          </div>
        </label>
      </div>

      {/* Bank Transfer Details */}
      {paymentMethod === 'bank_transfer' && (
        <div className="mt-4 sm:mt-5 border border-blue-200 rounded-lg overflow-hidden">
          <div className="bg-blue-50 p-2 sm:p-3 border-b border-blue-200">
            <h4 className="font-medium text-blue-800">
              <i className="fas fa-info-circle mr-2"></i>
              Pilih Bank untuk Transfer
            </h4>
          </div>

          <div className="p-3 sm:p-4 space-y-3">
            {bankAccounts.map((account, index) => (
              <div key={index} className="border rounded-lg p-3 bg-white">
                <div className="flex items-center mb-2">
                  <span className="font-medium mr-2">{account.bank}</span>
                  <Image 
                    src={account.logo} 
                    width={40} 
                    height={20} 
                    alt={account.bank} 
                    className="h-5 w-auto" 
                  />
                </div>

                <div className="flex justify-between items-center mb-1">
                  <div className="text-gray-700 text-sm">Nomor Rekening:</div>
                  <div className="font-mono font-medium">{account.accountNumber}</div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-gray-700 text-sm">Atas Nama:</div>
                  <div>{account.accountName}</div>
                </div>

                <button
                  className="mt-2 w-full bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm flex items-center justify-center"
                  onClick={() => {
                    navigator.clipboard.writeText(account.accountNumber);
                    alert(`Nomor rekening ${account.bank} berhasil disalin!`);
                  }}
                >
                  <i className="fas fa-copy mr-1"></i> Salin Nomor
                </button>
              </div>
            ))}

            <div className="text-sm text-gray-600 p-2 bg-blue-50 rounded">
              <p><i className="fas fa-exclamation-circle mr-1 text-blue-600"></i>
                Setelah melakukan pembayaran, silakan kirim bukti transfer ke WhatsApp kami.</p>
            </div>
          </div>
        </div>
      )}

      {/* E-Wallet QR Codes */}
      {paymentMethod === 'ewallet' && (
        <div className="mt-4 sm:mt-5 border border-purple-200 rounded-lg overflow-hidden">
          <div className="bg-purple-50 p-2 sm:p-3 border-b border-purple-200">
            <h4 className="font-medium text-purple-800">
              <i className="fas fa-qrcode mr-2"></i>
              Pilih E-Wallet untuk Pembayaran
            </h4>
          </div>

          <div className="p-3 sm:p-4">
            <div className="flex overflow-x-auto gap-3 pb-2">
              {qrPayments.map((payment, index) => (
                <div key={index} className="border rounded-lg p-3 bg-white flex-shrink-0 w-36 flex flex-col items-center">
                  <div className="font-medium mb-2 text-center">{payment.name}</div>
                  <div className="relative w-24 h-24 mb-2 border">
                    <Image
                      src={payment.qrImage}
                      alt={`QR Code ${payment.name}`}
                      fill
                      className="object-contain p-1"
                      onClick={() => handleQRClick(payment)}
                    />
                  </div>
                  <button 
                    className="w-full bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
                    onClick={() => handleQRClick(payment)}
                  >
                    Perbesar QR
                  </button>
                </div>
              ))}
            </div>

            <div className="text-sm text-gray-600 p-2 mt-3 bg-purple-50 rounded">
              <p><i className="fas fa-info-circle mr-1 text-purple-600"></i>
                Scan QR code di atas menggunakan aplikasi e-wallet pilihan Anda.</p>
            </div>
          </div>
        </div>
      )}

      {/* QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 max-w-sm w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">{showQRModal.name}</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="relative w-full aspect-square mb-4">
              <Image
                src={showQRModal.qrImage}
                alt={`QR Code ${showQRModal.name}`}
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(showQRModal.name);
                alert(`QR Code ${showQRModal.name} siap untuk dipindai!`);
              }}
              className="w-full bg-amber-100 text-amber-800 px-4 py-2 rounded"
            >
              <i className="fas fa-check-circle mr-2"></i>
              Siap Dipindai
            </button>
          </div>
        </div>
      )}

      {/* Order Summary */}
      <div className="mt-4 sm:mt-6 bg-amber-50 p-3 sm:p-4 rounded-lg">
        <h4 className="font-medium mb-2 text-sm sm:text-base">Ringkasan Pesanan</h4>
        <div className="space-y-2 text-xs sm:text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>Rp {totalPrice.toLocaleString('id-ID')}</span>
          </div>

          {customerDetails.orderType === 'delivery' && (
            <div className="flex justify-between">
              <span>Biaya Pengantaran</span>
              <span>Rp 15.000</span>
            </div>
          )}

          <div className="border-t pt-2 mt-2 font-bold flex justify-between">
            <span>Total</span>
            <span>Rp {(totalPrice + (customerDetails.orderType === 'delivery' ? 15000 : 0)).toLocaleString('id-ID')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}