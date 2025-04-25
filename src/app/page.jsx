import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-amber-900">What Makes Us Special</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover-lift">
              <div className="text-amber-700 text-5xl mb-6 flex justify-center">
                <i className="fas fa-coffee"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Premium Beans</h3>
              <p className="text-gray-600 text-center">
                We source our beans from ethical farms around the world, ensuring the highest quality in every cup.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover-lift">
              <div className="text-amber-700 text-5xl mb-6 flex justify-center">
                <i className="fas fa-hands"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Crafted with Love</h3>
              <p className="text-gray-600 text-center">
                Our skilled baristas are passionate about their craft, creating perfect beverages every time.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover-lift">
              <div className="text-amber-700 text-5xl mb-6 flex justify-center">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Eco-Friendly</h3>
              <p className="text-gray-600 text-center">
                We're committed to sustainability with compostable packaging and reduced waste initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Menu Items Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-amber-900">Our Signature Items</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Try our most loved coffee specialties and treats that keep our customers coming back.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Item 1 */}
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <div className="relative h-64">
                <Image 
                  src="/images/menu/coffee1.jpg"
                  alt="Signature Blend"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">Signature Blend</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Our house blend with notes of chocolate, caramel, and a hint of citrus.
                </p>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <div className="relative h-64">
                <Image 
                  src="/images/menu/coffee3.jpg"
                  alt="Caramel Macchiato"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">Caramel Macchiato</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Espresso with steamed milk, vanilla syrup, and caramel drizzle.
                </p>
              </div>
            </div>
            
            {/* Item 3 */}
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <div className="relative h-64">
                <Image 
                  src="/images/menu/pastry1.jpg"
                  alt="Butter Croissant"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">Butter Croissant</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Flaky, buttery layers baked to golden perfection.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/menu" className="btn-primary inline-flex items-center">
              View Full Menu <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-amber-900">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 -left-5 text-amber-700 text-5xl opacity-20">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="italic text-gray-600 mb-6 relative z-10 text-lg">
                "The best café in town! Their signature latte is to die for, and the atmosphere is perfect for both work and relaxation."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 font-bold mr-4">
                  SJ
                </div>
                <div>
                  <p className="font-semibold text-amber-900">Sarah Johnson</p>
                  <p className="text-gray-500 text-sm">Regular Customer</p>
                </div>
                <div className="ml-auto text-amber-500">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 -left-5 text-amber-700 text-5xl opacity-20">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="italic text-gray-600 mb-6 relative z-10 text-lg">
                "I visit this café every morning. Their pastries are freshly baked and the coffee is consistently excellent. The staff remembers my order!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 font-bold mr-4">
                  MC
                </div>
                <div>
                  <p className="font-semibold text-amber-900">Michael Chen</p>
                  <p className="text-gray-500 text-sm">Daily Visitor</p>
                </div>
                <div className="ml-auto text-amber-500">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6 text-amber-900">Our Café Experience</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Step into our world of coffee artistry and cozy ambiance
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-60 rounded-lg overflow-hidden">
              <Image 
                src="/images/gallery1.jpg" 
                alt="Café interior" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-60 rounded-lg overflow-hidden">
              <Image 
                src="/images/gallery2.jpg" 
                alt="Coffee preparation" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-60 rounded-lg overflow-hidden">
              <Image 
                src="/images/gallery3.jpg" 
                alt="Latte art" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-60 rounded-lg overflow-hidden">
              <Image 
                src="/images/gallery4.jpg" 
                alt="Café seating" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Visit Us Section */}
      <section className="py-20 bg-amber-900 text-white relative">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/cafe-pattern.jpg"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8">Visit Us Today</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <i className="fas fa-map-marker-alt text-4xl mb-4"></i>
              <p className="text-xl">123 Coffee Street, Café City</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <i className="fas fa-clock text-4xl mb-4"></i>
              <p className="mb-2">Monday - Friday: 7AM - 8PM</p>
              <p>Saturday - Sunday: 8AM - 10PM</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <i className="fas fa-phone text-4xl mb-4"></i>
              <p className="text-xl">(555) 123-4567</p>
            </div>
          </div>
          
          <button className="bg-white text-amber-900 px-8 py-3 rounded-full font-bold hover:bg-amber-100 transition duration-300 text-lg">
            Get Directions
          </button>
          
          <div className="mt-12 flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-amber-200 transition-colors">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-amber-200 transition-colors">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-amber-200 transition-colors">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-amber-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-amber-900">Stay Updated</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for special offers, new menu items, and café events.
          </p>
          
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow p-3 rounded-l-lg border-2 border-amber-300 focus:outline-none focus:border-amber-700"
            />
            <button className="bg-amber-700 text-white px-6 py-3 rounded-r-lg hover:bg-amber-800 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}