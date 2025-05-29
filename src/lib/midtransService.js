export const initializeMidtrans = (orderDetails, cart, totalPrice, onSuccess) => {
    return new Promise((resolve, reject) => {
        // Check if Midtrans is already loaded
        if (window.snap) {
            proceedWithPayment();
            return;
        }

        // Load Midtrans script dynamically
        const script = document.createElement('script');
        script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
        script.setAttribute('data-client-key', 'YOUR_MIDTRANS_CLIENT_KEY');
        script.onload = () => proceedWithPayment();
        script.onerror = () => reject(new Error('Failed to load Midtrans script'));
        document.body.appendChild(script);

        function proceedWithPayment() {
            try {
                // Prepare transaction details
                const transactionDetails = {
                    transaction_details: {
                        order_id: orderDetails.orderId,
                        gross_amount: totalPrice + (orderDetails.orderType === 'delivery' ? 15000 : 0),
                    },
                    customer_details: {
                        first_name: orderDetails.name,
                        phone: orderDetails.phone,
                        email: orderDetails.email || '',
                        shipping_address: orderDetails.orderType === 'delivery' ? {
                            address: orderDetails.deliveryAddress
                        } : undefined
                    },
                    item_details: cart.map(item => ({
                        id: item.id,
                        price: item.price,
                        quantity: item.quantity,
                        name: item.name
                    }))
                };

                // Add delivery fee if needed
                if (orderDetails.orderType === 'delivery') {
                    transactionDetails.item_details.push({
                        id: 'delivery',
                        price: 15000,
                        quantity: 1,
                        name: 'Biaya Pengantaran'
                    });
                }

                // Launch Midtrans payment
                window.snap.pay(transactionDetails, {
                    onSuccess: function(result) {
                        onSuccess(result);
                        resolve(result);
                    },
                    onPending: function(result) {
                        console.log('Payment pending:', result);
                        // You might want to handle pending payments differently
                        resolve(result);
                    },
                    onError: function(result) {
                        console.error('Payment error:', result);
                        reject(result);
                    },
                    onClose: function() {
                        console.log('Payment popup closed without finishing');
                        reject(new Error('Payment closed by user'));
                    }
                });
            } catch (error) {
                reject(error);
            }
        }
    });
};