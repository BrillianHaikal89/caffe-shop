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
      
      {/* Bagian Keunggulan */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-amber-900">Apa yang Membuat Kami Istimewa</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Keunggulan 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover-lift">
              <div className="text-amber-700 text-5xl mb-6 flex justify-center">
                <i className="fas fa-coffee"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Biji Premium</h3>
              <p className="text-gray-600 text-center">
                Kami mendapatkan biji kopi dari perkebunan etis di seluruh dunia, menjamin kualitas terbaik di setiap cangkir.
              </p>
            </div>
            
            {/* Keunggulan 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover-lift">
              <div className="text-amber-700 text-5xl mb-6 flex justify-center">
                <i className="fas fa-hands"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Dibuat dengan Cinta</h3>
              <p className="text-gray-600 text-center">
                Barista kami memiliki passion di bidangnya, menciptakan minuman sempurna setiap saat.
              </p>
            </div>
            
            {/* Keunggulan 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover-lift">
              <div className="text-amber-700 text-5xl mb-6 flex justify-center">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Ramah Lingkungan</h3>
              <p className="text-gray-600 text-center">
                Kami berkomitmen pada keberlanjutan dengan kemasan kompos dan inisiatif pengurangan sampah.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bagian Item Menu Unggulan */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-amber-900">Item Signature Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cobalah spesialitas kopi dan camilan favorit yang membuat pelanggan selalu kembali.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Item 1 */}
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <div className="relative h-64">
                <Image 
                  src="/images/menu/coffee1.jpg"
                  alt="Racikan Signature"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">Racikan Signature</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Racikan rumah kami dengan sentuhan cokelat, karamel, dan secuil citrus.
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
                  Espresso dengan susu panas, sirup vanila, dan taburan karamel.
                </p>
              </div>
            </div>
            
            {/* Item 3 */}
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <div className="relative h-64">
                <Image 
                  src="/images/menu/pastry1.jpg"
                  alt="Croissant Mentega"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">Croissant Mentega</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Lapisan renyah bermentega yang dipanggang hingga keemasan.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/menu" className="btn-primary inline-flex items-center">
              Lihat Menu Lengkap <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimoni */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-amber-900">Kata Pelanggan Kami</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Testimoni 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 -left-5 text-amber-700 text-5xl opacity-20">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="italic text-gray-600 mb-6 relative z-10 text-lg">
                "Kafe terbaik di kota! Kopi susu signature mereka luar biasa, dan suasananya sempurna untuk bekerja maupun bersantai."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 font-bold mr-4">
                  B
                </div>
                <div>
                  <p className="font-semibold text-amber-900">Brillian</p>
                  <p className="text-gray-500 text-sm">Pelanggan Setia</p>
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
            
            {/* Testimoni 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 -left-5 text-amber-700 text-5xl opacity-20">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="italic text-gray-600 mb-6 relative z-10 text-lg">
                "Saya mengunjungi kafe ini setiap pagi. Pastri mereka baru dipanggang dan kopi selalu luar biasa. Staf bahkan hafal pesanan saya!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 font-bold mr-4">
                  H
                </div>
                <div>
                  <p className="font-semibold text-amber-900">Haikal</p>
                  <p className="text-gray-500 text-sm">Pengunjung Harian</p>
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
      
      {/* Bagian Galeri */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6 text-amber-900">Pengalaman di Kafe Kami</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Masuki dunia seni kopi dan suasana nyaman kami
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-60 rounded-lg overflow-hidden">
              <Image 
                src="/images/gallery1.jpg" 
                alt="Interior kafe" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-60 rounded-lg overflow-hidden">
              <Image 
                src="/images/gallery2.jpg" 
                alt="Persiapan kopi" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-60 rounded-lg overflow-hidden">
              <Image 
                src="/images/gallery3.jpg" 
                alt="Seni latte" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-60 rounded-lg overflow-hidden">
              <Image 
                src="/images/gallery4.jpg" 
                alt="Tempat duduk kafe" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Bagian Kunjungi Kami */}
      <section className="py-20 bg-amber-900 text-white relative">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/cafe-pattern.jpg"
            alt="Pola latar belakang"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8">Kunjungi Kami Hari Ini</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <i className="fas fa-map-marker-alt text-4xl mb-4"></i>
              <p className="text-xl">Jl.Cimareme, Kabupaten Bandung Barat</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <i className="fas fa-clock text-4xl mb-4"></i>
              <p className="mb-2">Senin - Jumat: 07.00 - 20.00</p>
              <p>Sabtu - Minggu: 08.00 - 22.00</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <i className="fas fa-phone text-4xl mb-4"></i>
              <p className="text-xl">(+62) 859-5112-3949</p>
            </div>
          </div>
          
          <a 
            href="https://maps.app.goo.gl/nszcA53vKJAsNjrZ8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-amber-900 px-8 py-3 rounded-full font-bold hover:bg-amber-100 transition duration-300 text-lg"
          >
            Dapatkan Petunjuk Arah
          </a>
          
          {/* Updated Social Media Section - Instagram and WhatsApp only */}
          <div className="mt-12 flex justify-center space-x-8">
            <a 
              href="https://www.instagram.com/allthetimecoffee_/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-200 transition-colors flex flex-col items-center"
            >
              <i className="fab fa-instagram text-3xl mb-1"></i>
              <span className="text-sm">Instagram</span>
            </a>
            <a 
              href="https://wa.me/6285951123949" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-200 transition-colors flex flex-col items-center"
            >
              <i className="fab fa-whatsapp text-3xl mb-1"></i>
              <span className="text-sm">WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
      
      {/* Bagian Newsletter */}
      <section className="py-16 bg-amber-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-amber-900">Tetap Terhubung</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Berlangganan newsletter kami untuk penawaran spesial, item menu baru, dan acara kafe.
          </p>
          
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Alamat email Anda" 
              className="flex-grow p-3 rounded-l-lg border-2 border-amber-300 focus:outline-none focus:border-amber-700"
            />
            <button className="bg-amber-700 text-white px-6 py-3 rounded-r-lg hover:bg-amber-800 transition duration-300">
              Berlangganan
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}