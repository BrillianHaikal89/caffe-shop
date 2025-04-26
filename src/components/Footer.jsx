import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  // Pre-filled WhatsApp message (URL encoded)
  const whatsappMessage = encodeURIComponent("Halo, saya ingin menu minuman favorit di caffe all the time dong");
  const whatsappLink = `https://wa.me/6285951123949?text=${whatsappMessage}`;

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Dekorasi gelombang */}
        <div className="relative -mt-24 mb-12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-gray-900">
            <path d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,133.3C672,139,768,117,864,128C960,139,1056,181,1152,176C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo dan Tentang */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <Image 
                  src="/logo_nb.png" 
                  alt="All The Time Café" 
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-2xl font-bold">All The Time</span>
            </div>
            <p className="text-gray-400 mb-6">
              Sudut nyaman Anda untuk pengalaman kopi premium dan camilan lezat.
            </p>
            {/* Updated social media section - Instagram and WhatsApp with pre-filled message */}
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/allthetimecoffee_/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram" 
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-amber-700 transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp" 
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-amber-700 transition duration-300"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
          {/* Tautan Cepat */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">Tautan Cepat</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center">
                  <i className="fas fa-chevron-right mr-2 text-amber-700 text-xs"></i>
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center">
                  <i className="fas fa-chevron-right mr-2 text-amber-700 text-xs"></i>
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center">
                  <i className="fas fa-chevron-right mr-2 text-amber-700 text-xs"></i>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center">
                  <i className="fas fa-chevron-right mr-2 text-amber-700 text-xs"></i>
                  Kontak
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-amber-500 transition duration-300 flex items-center">
                  <i className="fas fa-chevron-right mr-2 text-amber-700 text-xs"></i>
                  Galeri
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Informasi Kontak */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1 text-amber-700"></i>
                <span className="text-gray-400">Jl.Cimareme, Kabupaten Bandung Barat</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone text-amber-700"></i>
                <span className="text-gray-400">(+62) 859-5112-3949</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-amber-700"></i>
                <span className="text-gray-400">allthetime@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-clock text-amber-700"></i>
                <span className="text-gray-400">Buka 7 hari seminggu</span>
              </li>
            </ul>
          </div>
          
          {/* Jam Buka */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">Jam Buka</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-400">Senin - Jumat</span>
                <span className="text-amber-500">07.00 - 20.00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sabtu</span>
                <span className="text-amber-500">08.00 - 22.00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Minggu</span>
                <span className="text-amber-500">08.00 - 20.00</span>
              </li>
            </ul>
            
            <div className="mt-6 pt-4 border-t border-gray-800">
              <a 
                href="https://maps.app.goo.gl/nszcA53vKJAsNjrZ8" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 transition duration-300 flex items-center"
              >
                <i className="fas fa-map-marked-alt mr-2"></i>
                Dapatkan Petunjuk Arah
              </a>
            </div>
          </div>
        </div>
        
        {/* Hak Cipta */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} All The Time Café. Seluruh hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}