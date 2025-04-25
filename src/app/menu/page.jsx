'use client';

import React, { useState, useEffect } from 'react';
import { menuData } from '../../lib/data';
import Image from 'next/image';
import BookMenu from '../../components/BookMenu';
import Cart from '../../components/Cart';

export default function Menu() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Update cart totals when the cart changes
  useEffect(() => {
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    const price = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    setTotalItems(itemCount);
    setTotalPrice(price);
  }, [cart]);

  // Add item to cart
  const addToCart = (item) => {
    setCart(currentCart => {
      // Check if item is already in cart
      const existingItemIndex = currentCart.findIndex(cartItem => cartItem.id === item.id);
      
      if (existingItemIndex >= 0) {
        // Item exists, increment quantity
        const updatedCart = [...currentCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1
        };
        return updatedCart;
      } else {
        // Item doesn't exist, add it with quantity 1
        return [...currentCart, { ...item, id: `${item.name}-${Date.now()}`, quantity: 1 }];
      }
    });
  };

  // Update item quantity in cart
  const updateCartItem = (id, quantity) => {
    setCart(currentCart => {
      if (quantity <= 0) {
        // Remove item if quantity is 0 or less
        return currentCart.filter(item => item.id !== id);
      } else {
        // Update quantity
        return currentCart.map(item => 
          item.id === id ? { ...item, quantity } : item
        );
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(currentCart => currentCart.filter(item => item.id !== id));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      {/* Banner Menu */}
      <div className="relative h-80">
        <Image
          src="/images/menu-banner.jpg"
          alt="Banner Menu Kami"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-shadow">Menu Kami</h1>
        </div>
      </div>

      {/* Floating cart button */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-amber-700 hover:bg-amber-800 text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center"
      >
        <i className="fas fa-shopping-cart text-2xl mr-2"></i>
        <span className="font-bold">{totalItems}</span>
        {totalItems > 0 && (
          <span className="ml-3 bg-white text-amber-900 px-2 py-1 rounded-full text-sm font-bold">
            Rp {totalPrice.toLocaleString('id-ID')}
          </span>
        )}
      </button>

      {/* Cart sidebar */}
      <Cart 
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        updateQuantity={updateCartItem}
        removeItem={removeFromCart}
        clearCart={clearCart}
        totalPrice={totalPrice}
      />

      {/* Book Menu */}
      <main className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-amber-900">Dibuat dengan Passion</h2>
            <p className="text-gray-700 text-lg">
              Temukan pilihan premium kopi, minuman segar, dan hidangan lezat yang kami pilih dengan 
              bahan-bahan terbaik. Setiap item di menu kami disiapkan dengan penuh perhatian untuk 
              memastikan pengalaman yang menyenangkan bagi para tamu kami.
            </p>
          </div>
          
          {/* Book Menu Component */}
          <BookMenu menuData={menuData} addToCart={addToCart} />
        </div>
      </main>
      
      {/* Panggilan Aksi */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Memesan?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kunjungi kami di toko atau pesan secara online untuk pengambilan atau pengiriman.
          </p>
          <button 
            className="bg-white text-amber-900 px-8 py-3 rounded-full font-bold hover:bg-amber-100 transition duration-300"
            onClick={() => setIsCartOpen(true)}
          >
            Lihat Pesanan Anda
          </button>
        </div>
      </section>
    </>
  );
}