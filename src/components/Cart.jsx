'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Cart({
    cart,
    isOpen,
    onClose,
    updateQuantity,
    removeItem,
    clearCart,
    totalPrice
}) {
    const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart', 'details', 'payment', 'confirmation'
    const [customerDetails, setCustomerDetails] = useState({
        name: '',
        phone: '',
        email: '',
        orderType: 'pickup', // 'pickup' or 'delivery'
        deliveryAddress: '',
        notes: ''
    });
    const [paymentMethod, setPaymentMethod] = useState('cash'); // 'cash', 'transfer', 'ewallet'

    // Bank account details for bank transfer
    const bankAccounts = [
        {
            bank: "BCA",
            accountNumber: "0923456789",
            accountName: "All The Time Coffee"
        },
        {
            bank: "Mandiri",
            accountNumber: "1234567890",
            accountName: "All The Time Coffee"
        }
    ];

    // QR Code payment details
    const qrPayments = [
        {
            name: "DANA",
            qrImage: "/images/payments/dana-qr.png" // This should be replaced with actual QR code image
        },
        {
            name: "GoPay",
            qrImage: "/images/payments/gopay-qr.png" // This should be replaced with actual QR code image
        },
        {
            name: "OVO",
            qrImage: "/images/payments/ovo-qr.png" // This should be replaced with actual QR code image
        }
    ];

    // Handle customer details input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerDetails({
            ...customerDetails,
            [name]: value
        });
    };

    // Handle payment method selection
    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    // Reset cart and checkout process
    const handleOrderComplete = () => {
        clearCart();
        setCheckoutStep('cart');
        setCustomerDetails({
            name: '',
            phone: '',
            email: '',
            orderType: 'pickup',
            deliveryAddress: '',
            notes: ''
        });
        setPaymentMethod('cash');
        onClose();
    };

    // Determine if proceed button should be disabled
    const isProceedDisabled = () => {
        if (checkoutStep === 'cart') {
            return cart.length === 0;
        } else if (checkoutStep === 'details') {
            return !customerDetails.name || !customerDetails.phone ||
                (customerDetails.orderType === 'delivery' && !customerDetails.deliveryAddress);
        }
        return false;
    };
    // This continues from the previous code section

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
                    onClick={onClose}
                ></div>
            )}

            {/* Cart Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out overflow-hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                {/* Header */}
                <div className="bg-amber-800 text-white p-3 sm:p-4 flex justify-between items-center">
                    <h2 className="text-lg sm:text-xl font-bold">
                        {checkoutStep === 'cart' && 'Pesanan Anda'}
                        {checkoutStep === 'details' && 'Detail Pesanan'}
                        {checkoutStep === 'payment' && 'Pembayaran'}
                        {checkoutStep === 'confirmation' && 'Konfirmasi Pesanan'}
                    </h2>
                    <button onClick={onClose} className="text-white hover:text-amber-200 p-1">
                        <i className="fas fa-times text-xl"></i>
                    </button>
                </div>

                {/* Progress indicator */}
                <div className="bg-amber-100 px-2 sm:px-4 py-2">
                    <div className="flex justify-between">
                        <div className={`flex flex-col items-center ${checkoutStep === 'cart' ? 'text-amber-800' : 'text-gray-500'
                            }`}>
                            <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm ${checkoutStep === 'cart' ? 'bg-amber-800 text-white' : 'bg-gray-300'
                                }`}>1</div>
                            <span className="text-xs mt-1">Keranjang</span>
                        </div>

                        <div className="flex-1 flex items-center px-1 sm:px-2">
                            <div className={`h-0.5 w-full ${checkoutStep === 'cart' ? 'bg-gray-300' : 'bg-amber-800'
                                }`}></div>
                        </div>

                        <div className={`flex flex-col items-center ${checkoutStep === 'details' ? 'text-amber-800' : 'text-gray-500'
                            }`}>
                            <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm ${checkoutStep === 'details' || checkoutStep === 'payment' || checkoutStep === 'confirmation'
                                ? 'bg-amber-800 text-white' : 'bg-gray-300'
                                }`}>2</div>
                            <span className="text-xs mt-1">Detail</span>
                        </div>

                        <div className="flex-1 flex items-center px-1 sm:px-2">
                            <div className={`h-0.5 w-full ${checkoutStep === 'details' || checkoutStep === 'cart' ? 'bg-gray-300' : 'bg-amber-800'
                                }`}></div>
                        </div>

                        <div className={`flex flex-col items-center ${checkoutStep === 'payment' || checkoutStep === 'confirmation' ? 'text-amber-800' : 'text-gray-500'
                            }`}>
                            <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm ${checkoutStep === 'payment' || checkoutStep === 'confirmation'
                                ? 'bg-amber-800 text-white' : 'bg-gray-300'
                                }`}>3</div>
                            <span className="text-xs mt-1">Bayar</span>
                        </div>
                    </div>
                </div>

                {/* Content based on checkout step */}
                <div className="overflow-y-auto" style={{ height: 'calc(100% - 158px)' }}>
                    {/* Cart Items */}
                    {checkoutStep === 'cart' && (
                        <>
                            {cart.length === 0 ? (
                                <div className="p-4 sm:p-8 text-center">
                                    <div className="text-amber-800 text-4xl sm:text-5xl mb-4">
                                        <i className="fas fa-shopping-cart"></i>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Keranjang Kosong</h3>
                                    <p className="text-gray-600 mb-6">Tambahkan item dari menu kami untuk mulai memesan.</p>
                                    <button
                                        onClick={onClose}
                                        className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded"
                                    >
                                        Jelajahi Menu
                                    </button>
                                </div>
                            ) : (
                                <div className="divide-y">
                                    {cart.map((item) => (
                                        <div key={item.id} className="p-3 sm:p-4 flex items-start">
                                            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded overflow-hidden mr-2 sm:mr-3">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-medium text-gray-800 text-sm sm:text-base truncate">{item.name}</h3>
                                                <div className="text-amber-800 font-bold mt-1 text-sm sm:text-base">
                                                    Rp {item.price.toLocaleString('id-ID')}
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-end ml-2">
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-gray-400 hover:text-red-500 mb-1 sm:mb-2 p-1"
                                                >
                                                    <i className="fas fa-times"></i>
                                                </button>

                                                <div className="flex items-center border rounded bg-gray-50">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="px-1 sm:px-2 py-1 text-gray-600 hover:bg-gray-200"
                                                    >
                                                        <i className="fas fa-minus text-xs sm:text-sm"></i>
                                                    </button>

                                                    <span className="px-2 sm:px-3 py-1 text-sm">{item.quantity}</span>

                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="px-1 sm:px-2 py-1 text-gray-600 hover:bg-gray-200"
                                                    >
                                                        <i className="fas fa-plus text-xs sm:text-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                    {/* Customer Details Form */}
                    {checkoutStep === 'details' && (
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
                                        Nomor Telepon *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={customerDetails.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                                        required
                                    />
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
                    )}
                    {/* Payment Options */}
                    {checkoutStep === 'payment' && (
                        <div className="p-3 sm:p-4">
                            <h3 className="font-medium mb-3 sm:mb-4">Pilih Metode Pembayaran</h3>

                            <div className="space-y-2 sm:space-y-3">
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

                                <label className="flex items-center p-2 sm:p-3 border rounded-lg cursor-pointer hover:bg-amber-50">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="transfer"
                                        checked={paymentMethod === 'transfer'}
                                        onChange={handlePaymentMethodChange}
                                        className="mr-2 sm:mr-3 text-amber-700"
                                    />
                                    <div className="flex items-center">
                                        <div className="bg-blue-100 text-blue-800 p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3">
                                            <i className="fas fa-university text-sm sm:text-base"></i>
                                        </div>
                                        <div>
                                            <div className="font-medium text-sm sm:text-base">Transfer Bank</div>
                                            <div className="text-xs sm:text-sm text-gray-500">Transfer sebelum pengambilan/pengantaran</div>
                                        </div>
                                    </div>
                                </label>

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
                                            <div className="text-xs sm:text-sm text-gray-500">DANA, GoPay, OVO, dll.</div>
                                        </div>
                                    </div>
                                </label>
                            </div>

                            {/* Show Bank Transfer Details when Transfer is selected */}
                            {paymentMethod === 'transfer' && (
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
                                                    {account.bank === "BCA" && (
                                                        <Image src="/images/payments/bca-logo.png" width={40} height={20} alt="BCA" className="h-5 w-auto" />
                                                    )}
                                                    {account.bank === "Mandiri" && (
                                                        <Image src="/images/payments/mandiri-logo.png" width={40} height={20} alt="Mandiri" className="h-5 w-auto" />
                                                    )}
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
                            {/* Show QR Code when E-Wallet is selected */}
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
                                                        />
                                                    </div>
                                                    <button className="w-full bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
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
                    )}
                    {/* Order Confirmation */}
                    {checkoutStep === 'confirmation' && (
                        <div className="p-3 sm:p-4 text-center">
                            <div className="mb-4 sm:mb-6 text-green-500 text-4xl sm:text-6xl">
                                <i className="fas fa-check-circle"></i>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold mb-2">Terima Kasih!</h3>
                            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                                Pesanan Anda telah dikonfirmasi. Kami telah mengirimkan detail ke nomor telepon Anda.
                            </p>

                            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-6 text-xs sm:text-sm">
                                <div className="text-left">
                                    <div className="mb-3 sm:mb-4">
                                        <div className="text-gray-500">Nomor Pesanan</div>
                                        <div className="font-medium">#ATT{Math.floor(Math.random() * 10000)}</div>
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
                    )}
                </div>
                {/* Footer with action buttons */}
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
                                className={`px-4 sm:px-6 py-2 rounded text-sm sm:text-base ${cart.length === 0
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
                                className={`px-3 sm:px-6 py-2 rounded text-sm sm:text-base ${!customerDetails.name || !customerDetails.phone ||
                                    (customerDetails.orderType === 'delivery' && !customerDetails.deliveryAddress)
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
            </div>
        </>
    );
}