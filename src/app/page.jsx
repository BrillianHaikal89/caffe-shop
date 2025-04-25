import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      
      {/* Features Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">What Makes Us Special</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-amber-700 text-4xl mb-4">
                <i className="fas fa-coffee"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Beans</h3>
              <p className="text-gray-600">
                We source our beans from ethical farms around the world, ensuring the highest quality in every cup.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-amber-700 text-4xl mb-4">
                <i className="fas fa-hands"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Crafted with Love</h3>
              <p className="text-gray-600">
                Our skilled baristas are passionate about their craft, creating perfect beverages every time.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-amber-700 text-4xl mb-4">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">
                We're committed to sustainability with compostable packaging and reduced waste initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic text-gray-600 mb-4">
                "The best café in town! Their signature latte is to die for, and the atmosphere is perfect for both work and relaxation."
              </p>
              <p className="font-semibold">- Sarah Johnson</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic text-gray-600 mb-4">
                "I visit this café every morning. Their pastries are freshly baked and the coffee is consistently excellent."
              </p>
              <p className="font-semibold">- Michael Chen</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Visit Us Section */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Visit Us Today</h2>
          <p className="text-xl mb-8">123 Coffee Street, Café City</p>
          <p className="text-lg mb-4">Monday - Friday: 7AM - 8PM</p>
          <p className="text-lg mb-8">Saturday - Sunday: 8AM - 10PM</p>
          <button className="bg-white text-amber-900 px-6 py-3 rounded-full font-bold hover:bg-amber-100 transition duration-300">
            Get Directions
          </button>
        </div>
      </section>
    </main>
  );
}