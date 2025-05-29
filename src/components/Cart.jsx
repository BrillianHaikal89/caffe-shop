'use client';

import React, { useState } from 'react';
import CartItem from './cart/CartItem';
import CartEmpty from './cart/CartEmpty';
import CartDetailsForm from './cart/CartDetailsForm';
import CartPayment from './cart/CartPayment';
import CartConfirmation from './cart/CartConfirmation';
import CartProgress from './cart/CartProgress';
import CartNavigation from './cart/CartNavigation';

const DELIVERY_FEE = 15000;

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
      <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
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
        <CartProgress checkoutStep={checkoutStep} />

        {/* Content based on checkout step */}
        <div className="overflow-y-auto" style={{ height: 'calc(100% - 158px)' }}>
          {/* Cart Items */}
          {checkoutStep === 'cart' && (
            <>
              {cart.length === 0 ? (
                <CartEmpty onClose={onClose} />
              ) : (
                <div className="divide-y">
                  {cart.map((item) => (
                    <CartItem 
                      key={item.id} 
                      item={item} 
                      updateQuantity={updateQuantity} 
                      removeItem={removeItem} 
                    />
                  ))}
                </div>
              )}
            </>
          )}

          {/* Customer Details Form */}
          {checkoutStep === 'details' && (
            <CartDetailsForm 
              customerDetails={customerDetails} 
              handleInputChange={handleInputChange} 
            />
          )}

          {/* Payment Options */}
          {checkoutStep === 'payment' && (
            <CartPayment 
              paymentMethod={paymentMethod}
              handlePaymentMethodChange={handlePaymentMethodChange}
              customerDetails={customerDetails}
              totalPrice={totalPrice}
            />
          )}

          {/* Order Confirmation */}
          {checkoutStep === 'confirmation' && (
            <CartConfirmation
              customerDetails={customerDetails}
              paymentMethod={paymentMethod}
              totalPrice={totalPrice}
              cart={cart}
              handleOrderComplete={handleOrderComplete}
            />
          )}
        </div>

        {/* Footer with action buttons */}
        <CartNavigation
          checkoutStep={checkoutStep}
          setCheckoutStep={setCheckoutStep}
          totalPrice={totalPrice}
          cart={cart}
          customerDetails={customerDetails}
          isProceedDisabled={isProceedDisabled}
        />
      </div>
    </>
  );
}