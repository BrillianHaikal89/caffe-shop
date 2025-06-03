import React, { useEffect, useState } from 'react';
import { createMidtransTransaction, generateReceiptWhatsAppLink } from '../../lib/paymentService';

export default function CartConfirmation({ 
  customerDetails, 
  paymentMethod, 
  totalPrice, 
  cart,
  handleOrderComplete 
}) {
  const [orderNumber] = useState(`ATT${Date.now().toString().slice(-6)}`);
  const [isProcessing, setIsProcessing] = useState(true);
  const [paymentUrl, setPaymentUrl] = useState(null);
  const [error, setError] = useState(null);
  const [whatsappSent, setWhatsappSent] = useState(false);

  // Proses pembayaran ketika komponen mount
  useEffect(() => {
    const processPayment = async () => {
      try {
        // Untuk metode non-cash, buat transaksi Midtrans
        if (paymentMethod !== 'cash') {
          const transaction = await createMidtransTransaction(
            { 
              ...customerDetails, 
              orderId: orderNumber,
              paymentMethod 
            },
            cart,
            totalPrice
          );
          
          if (transaction.token) {
            setPaymentUrl(transaction.redirect_url);
            // Buka halaman pembayaran di tab baru
            window.open(transaction.redirect_url, '_blank');
          }
        }

        // Kirim struk WhatsApp jika ada nomor telepon
        if (customerDetails.phone && customerDetails.phone.trim()) {
          const whatsappLink = generateReceiptWhatsAppLink(
            { 
              ...customerDetails, 
              orderId: orderNumber,
              paymentMethod 
            },
            cart, 
            totalPrice, 
            customerDetails.orderType === 'delivery' ? 15000 : 0
          );
          
          window.open(whatsappLink, '_blank');
          setWhatsappSent(true);
        }
      } catch (err) {
        console.error('Error processing payment:', err);
        setError(err.message || 'Terjadi kesalahan saat memproses pembayaran. Silakan coba lagi.');
      } finally {
        setIsProcessing(false);
      }
    };

    processPayment();
  }, []);

  const renderPaymentStatus = () => {
    if (isProcessing) {
      return (
        <>
          <div className="mb-4 sm:mb-6 text-amber-500 text-4xl sm:text-6xl">
            <i className="fas fa-spinner fa-spin"></i>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Memproses Pembayaran...</h3>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            Sedang memproses pembayaran Anda, harap tunggu sebentar...
          </p>
        </>
      );
    }

    if (error) {
      return (
        <>
          <div className="mb-4 sm:mb-6 text-red-500 text-4xl sm:text-6xl">
            <i className="fas fa-exclamation-circle"></i>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Gagal Memproses Pembayaran</h3>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            {error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded mb-4"
          >
            Coba Lagi
          </button>
        </>
      );
    }

    return (
      <>
        <div className="mb-4 sm:mb-6 text-green-500 text-4xl sm:text-6xl">
          <i className="fas fa-check-circle"></i>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-2">Terima Kasih!</h3>
        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
          {paymentMethod === 'cash'
            ? 'Pesanan Anda telah dikonfirmasi. Kami telah mengirimkan struk pembelian ke WhatsApp Anda.'
            : 'Pesanan Anda telah dikonfirmasi. Silakan selesaikan pembayaran di halaman yang telah dibuka.'}
        </p>
      </>
    );
  };

  return (
    <div className="p-3 sm:p-4 text-center">
      {renderPaymentStatus()}

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
              {paymentMethod === 'credit_card' && 'Kartu Kredit/Debit'}
              {paymentMethod === 'bank_transfer' && 'Transfer Bank'}
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

      {paymentUrl && (
        <button
          onClick={() => window.open(paymentUrl, '_blank')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4"
        >
          <i className="fas fa-external-link-alt mr-2"></i>
          Buka Halaman Pembayaran
        </button>
      )}

      {whatsappSent && (
        <div className="mb-4 text-sm text-green-600">
          <i className="fas fa-check-circle mr-1"></i>
          Struk pembelian telah dikirim ke WhatsApp Anda
        </div>
      )}

      <button
        onClick={handleOrderComplete}
        className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded"
      >
        Kembali ke Menu
      </button>
    </div>
  );
}