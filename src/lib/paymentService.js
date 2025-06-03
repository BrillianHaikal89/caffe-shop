/**
 * Service untuk menangani pembayaran dengan Midtrans
 */
export const createMidtransTransaction = async(orderDetails, cartItems, totalPrice) => {
    try {
        // Format items untuk Midtrans
        const items = cartItems.map(item => ({
            id: item.id.toString(),
            price: Math.round(item.price),
            quantity: item.quantity,
            name: item.name.substring(0, 50), // Midtrans membatasi panjang nama
            category: 'Food & Beverage'
        }));

        // Tambahkan delivery fee jika ada
        if (orderDetails.orderType === 'delivery') {
            items.push({
                id: 'delivery-fee',
                price: 15000,
                quantity: 1,
                name: 'Biaya Pengantaran',
                category: 'Delivery'
            });
        }

        // Format nama pelanggan untuk Midtrans
        const nameParts = orderDetails.name.split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(' ') || '-';

        const response = await fetch('http://localhost:3001/create-transaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                orderId: orderDetails.orderId,
                amount: totalPrice + (orderDetails.orderType === 'delivery' ? 15000 : 0),
                customerDetails: {
                    first_name: firstName,
                    last_name: lastName,
                    email: orderDetails.email || `${orderDetails.orderId}@allthetimecoffee.com`,
                    phone: orderDetails.phone,
                    billing_address: {
                        first_name: firstName,
                        last_name: lastName,
                        phone: orderDetails.phone,
                        address: orderDetails.deliveryAddress || 'Takeaway',
                        city: 'Jakarta',
                        postal_code: '12345',
                        country_code: 'IDN'
                    },
                    shipping_address: {
                        first_name: firstName,
                        last_name: lastName,
                        phone: orderDetails.phone,
                        address: orderDetails.deliveryAddress || 'Takeaway',
                        city: 'Jakarta',
                        postal_code: '12345',
                        country_code: 'IDN'
                    }
                },
                items
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating transaction:', error);
        throw new Error('Gagal membuat transaksi pembayaran. Silakan coba lagi.');
    }
};

/**
 * Generate WhatsApp receipt link
 */
export const generateReceiptWhatsAppLink = (orderDetails, cartItems, subtotal, deliveryFee = 0) => {
    const total = subtotal + deliveryFee;
    const phone = orderDetails.phone.replace(/^0/, '62');

    let message = `Halo, berikut detail pesanan Anda:\n\n` +
        `*Nomor Pesanan:* ${orderDetails.orderId}\n` +
        `*Nama:* ${orderDetails.name}\n` +
        `*Metode:* ${orderDetails.orderType === 'delivery' ? 'Pengantaran' : 'Ambil di Tempat'}\n`;

    if (orderDetails.deliveryAddress) {
        message += `*Alamat:* ${orderDetails.deliveryAddress}\n`;
    }

    message += `\n*Detail Pesanan:*\n`;

    cartItems.forEach(item => {
        message += `- ${item.name} x${item.quantity}: Rp ${(item.price * item.quantity).toLocaleString('id-ID')}\n`;
    });

    if (deliveryFee > 0) {
        message += `- Biaya Pengantaran: Rp ${deliveryFee.toLocaleString('id-ID')}\n`;
    }

    message += `\n*Subtotal:* Rp ${subtotal.toLocaleString('id-ID')}\n` +
        `*Total:* Rp ${total.toLocaleString('id-ID')}\n\n` +
        `Metode Pembayaran: ${orderDetails.paymentMethod === 'cash' ? 'Tunai' : 
                         orderDetails.paymentMethod === 'credit_card' ? 'Kartu Kredit/Debit' : 
                         orderDetails.paymentMethod === 'bank_transfer' ? 'Transfer Bank' : 
                         'E-Wallet'}\n\n` +
        `Terima kasih telah memesan di All The Time Coffee!`;

    if (orderDetails.notes) {
        message += `\n\n*Catatan:* ${orderDetails.notes}`;
    }

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};