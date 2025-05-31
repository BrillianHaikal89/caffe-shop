import React, { useEffect } from 'react';
import { generateReceiptWhatsAppLink } from '../../lib/whatsappService';

/**
 * Order confirmation component for the cart
 */
export default function CartConfirmation({ 
  customerDetails, 
  paymentMethod, 
  totalPrice, 
  cart,
  handleOrderComplete 
}) {
  // Generate a random order number
  const orderNumber = `ATT${Math.floor(Math.random() * 10000)}`;
  
  // Send WhatsApp receipt when component mounts
  useEffect(() => {
    // Make sure there's a valid phone number before trying to send
    if (!customerDetails.phone || !customerDetails.phone.trim()) {
      console.warn('No phone number provided for WhatsApp receipt');
      return;
    }
    
    try {
      // Combine all order details
      const orderDetails = {
        ...customerDetails,
        paymentMethod,
        orderId: orderNumber
      };
      
      // Generate WhatsApp link with receipt
      const whatsappLink = generateReceiptWhatsAppLink(
        orderDetails, 
        cart, 
        totalPrice, 
        customerDetails.orderType === 'delivery' ? 15000 : 0
      );
      
      // Open WhatsApp with the pre-filled receipt in a new tab
      window.open(whatsappLink, '_blank');
    } catch (error) {
      console.error('Error sending WhatsApp receipt:', error);
      alert('Terjadi kesalahan saat mengirim struk ke WhatsApp. Silakan cek nomor telepon Anda.');
    }
  }, []);
  
  return (
    <div className="p-3 sm:p-4 text-center">
      <div className="mb-4 sm:mb-6 text-green-500 text-4xl sm:text-6xl">
        <i className="fas fa-check-circle"></i>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold mb-2">Terima Kasih!</h3>
      <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
        Pesanan Anda telah dikonfirmasi. Kami telah mengirimkan struk pembelian ke WhatsApp Anda.
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