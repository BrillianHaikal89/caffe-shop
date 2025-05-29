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

export default function Cart({ cart, updateQuantity, removeItem, onClose }) {
  const [checkoutStep, setCheckoutStep] = useState('cart');
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    email: '',
    orderType: 'pickup',
    deliveryAddress: '',
    notes: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [orderNumber] = useState(`ATT${Math.floor(Math.random() * 10000)}`);

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleOrderComplete = () => {
    // Reset cart and close
    cart.forEach(item => removeItem(item.id));
    onClose();
  };

  const isProceedDisabled = () => {
    return !customerDetails.name || !customerDetails.phone ||
      (customerDetails.orderType === 'delivery' && !customerDetails.deliveryAddress);
  };

  return (
    <div className="relative h-full flex flex-col">
      <CartProgress checkoutStep={checkoutStep} />
      
      <div className="flex-1 overflow-y-auto pb-16 sm:pb-20">
        {checkoutStep === 'cart' && (
          cart.length === 0 ? (
            <CartEmpty onClose={onClose} />
          ) : (
            <div>
              {cart.map(item => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  updateQuantity={updateQuantity} 
                  removeItem={removeItem} 
                />
              ))}
            </div>
          )
        )}

        {checkoutStep === 'details' && (
          <CartDetailsForm 
            customerDetails={customerDetails} 
            handleInputChange={handleInputChange} 
          />
        )}

        {checkoutStep === 'payment' && (
          <CartPayment
            paymentMethod={paymentMethod}
            handlePaymentMethodChange={handlePaymentMethodChange}
            customerDetails={customerDetails}
            totalPrice={totalPrice}
            cart={cart}
            orderNumber={orderNumber}
            generateReceiptWhatsAppLink={generateReceiptWhatsAppLink}
            handleOrderComplete={handleOrderComplete}
            setCheckoutStep={setCheckoutStep}
          />
        )}

        {checkoutStep === 'confirmation' && (
          <CartConfirmation
            customerDetails={customerDetails}
            paymentMethod={paymentMethod}
            totalPrice={totalPrice}
            orderNumber={orderNumber}
            handleOrderComplete={handleOrderComplete}
          />
        )}
      </div>

      {checkoutStep !== 'payment' && checkoutStep !== 'confirmation' && (
        <CartNavigation
          checkoutStep={checkoutStep}
          setCheckoutStep={setCheckoutStep}
          totalPrice={totalPrice}
          cart={cart}
          customerDetails={customerDetails}
          isProceedDisabled={isProceedDisabled}
        />
      )}
    </div>
  );
}
