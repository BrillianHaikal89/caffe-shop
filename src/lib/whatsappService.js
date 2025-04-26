/**
 * Format phone number for WhatsApp API
 * 
 * @param {String} phoneNumber - The phone number to format
 * @returns {String} Formatted phone number with country code
 */
export const formatPhoneNumber = (phoneNumber) => {
    // Remove any non-digit characters
    let cleaned = ('' + phoneNumber).replace(/\D/g, '');
    
    // Check if the number already has country code
    if (cleaned.startsWith('62')) {
      return cleaned;
    }
    
    // Remove leading zero if exists
    if (cleaned.startsWith('0')) {
      cleaned = cleaned.substring(1);
    }
    
    // Add Indonesia country code (62)
    return `62${cleaned}`;
  };
  
  /**
   * Generate a WhatsApp message URL with receipt information
   * 
   * @param {Object} orderDetails - Customer and order details
   * @param {Array} cartItems - Items in the cart
   * @param {Number} totalPrice - Total order price
   * @param {Number} deliveryFee - Delivery fee (if applicable)
   * @returns {String} WhatsApp deep link URL with pre-filled message
   */
  export const generateReceiptWhatsAppLink = (orderDetails, cartItems, totalPrice, deliveryFee = 0) => {
    // Format the current date and time
    const now = new Date();
    const formattedDate = now.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
    const formattedTime = now.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit'
    });
    
    // Generate unique order number
    const orderNumber = `ATT${Math.floor(Math.random() * 10000)}`;
    
    // Build the receipt message
    let message = `*STRUK PEMBELIAN*\n`;
    message += `*All The Time Café*\n\n`;
    message += `Tanggal: ${formattedDate}\n`;
    message += `Jam: ${formattedTime}\n`;
    message += `No. Pesanan: ${orderNumber}\n\n`;
    
    // Customer details
    message += `*Detail Pelanggan*\n`;
    message += `Nama: ${orderDetails.name}\n`;
    message += `Telepon: ${orderDetails.phone}\n`;
    
    // Order type
    message += `\n*Jenis Pesanan*\n`;
    message += orderDetails.orderType === 'pickup' ? 'Ambil Sendiri\n' : 'Pengantaran\n';
    
    // Delivery address if applicable
    if (orderDetails.orderType === 'delivery' && orderDetails.deliveryAddress) {
      message += `Alamat: ${orderDetails.deliveryAddress}\n`;
    }
    
    // Payment method
    message += `\n*Metode Pembayaran*\n`;
    if (orderDetails.paymentMethod === 'cash') {
      message += 'Tunai\n';
    } else if (orderDetails.paymentMethod === 'transfer') {
      message += 'Transfer Bank\n';
    } else if (orderDetails.paymentMethod === 'ewallet') {
      message += 'E-Wallet\n';
    }
    
    // Customer notes if any
    if (orderDetails.notes && orderDetails.notes.trim()) {
      message += `\n*Catatan Pesanan*\n${orderDetails.notes}\n`;
    }
    
    // Order items
    message += `\n*Detail Pesanan*\n`;
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x${item.quantity} = Rp ${(item.price * item.quantity).toLocaleString('id-ID')}\n`;
    });
    
    // Order summary
    message += `\n*Ringkasan Biaya*\n`;
    message += `Subtotal: Rp ${totalPrice.toLocaleString('id-ID')}\n`;
    
    // Add delivery fee if applicable
    if (orderDetails.orderType === 'delivery') {
      message += `Biaya Pengantaran: Rp ${deliveryFee.toLocaleString('id-ID')}\n`;
    }
    
    // Total amount
    const grandTotal = totalPrice + (orderDetails.orderType === 'delivery' ? deliveryFee : 0);
    message += `*Total: Rp ${grandTotal.toLocaleString('id-ID')}*\n\n`;
    
    // Thank you message
    message += `Terima kasih telah memesan di All The Time Café! Silakan tunjukkan struk ini saat pengambilan atau kedatangan pengantar.\n\n`;
    message += `Jika ada pertanyaan lebih lanjut, silakan hubungi kami di nomor ini.`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Format the phone number with country code
    const formattedPhone = formatPhoneNumber(orderDetails.phone);
    
    // Create WhatsApp deep link with pre-filled message
    return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
  };