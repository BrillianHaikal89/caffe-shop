'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Number of items to display per page
const ITEMS_PER_PAGE = 3;

export default function BookMenu({ menuData, addToCart }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [bookPages, setBookPages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Use ref to track window resize events
  const bookContainerRef = useRef(null);
  
  // Check if we're on mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  // Process menuData to create book pages
  useEffect(() => {
    const pages = [];
    
    // First page is the cover
    pages.push({ type: 'cover' });
    
    // Table of contents
    pages.push({ 
      type: 'toc', 
      categories: menuData.map(category => ({
        name: category.name,
        itemCount: category.items.length
      }))
    });
    
    // Process each category
    menuData.forEach(category => {
      // Split category items into chunks of ITEMS_PER_PAGE
      const itemChunks = [];
      for (let i = 0; i < category.items.length; i += ITEMS_PER_PAGE) {
        itemChunks.push(category.items.slice(i, i + ITEMS_PER_PAGE));
      }
      
      // Create a page for each chunk
      itemChunks.forEach((chunk, index) => {
        pages.push({
          type: 'category',
          name: category.name,
          description: index === 0 ? category.description : null, // Only show description on first page
          items: chunk,
          pageNumber: index + 1, // Page number within category
          totalPages: itemChunks.length // Total pages for this category
        });
      });
    });
    
    setBookPages(pages);
    
    // For mobile, we show one page at a time
    if (isMobile) {
      setTotalPages(pages.length);
    } else {
      // For desktop, we show two pages at a time (left and right)
      setTotalPages(Math.ceil(pages.length / 2));
    }
  }, [menuData, isMobile]);
  
  // Go to next page with animation
  const nextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 500);
    }
  };
  
  // Go to previous page with animation
  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 500);
    }
  };

  // Get current display page(s)
  const getCurrentPages = () => {
    if (isMobile) {
      // On mobile, only show one page
      return [bookPages[currentPage]];
    } else {
      // On desktop, show left and right pages
      return [
        bookPages[(currentPage * 2) - 1],
        bookPages[currentPage * 2]
      ];
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Book Navigation */}
      <div className="flex justify-between w-full max-w-5xl mb-6">
        <button 
          onClick={prevPage} 
          disabled={currentPage === 0}
          className={`px-2 sm:px-4 py-2 rounded-full flex items-center ${
            currentPage === 0 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-amber-700 text-white hover:bg-amber-800'
          }`}
        >
          <i className="fas fa-chevron-left mr-1 sm:mr-2"></i> 
          <span className="hidden sm:inline">Halaman Sebelumnya</span>
          <span className="sm:hidden">Sebelumnya</span>
        </button>
        
        <div className="text-amber-900 font-medium">
          {currentPage > 0 ? 
            isMobile ? 
              `Halaman ${currentPage} dari ${totalPages - 1}` : 
              `Halaman ${currentPage} dari ${totalPages - 1}` 
            : 'Sampul'}
        </div>
        
        <button 
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className={`px-2 sm:px-4 py-2 rounded-full flex items-center ${
            currentPage === totalPages - 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-amber-700 text-white hover:bg-amber-800'
          }`}
        >
          <span className="hidden sm:inline">Halaman Berikutnya</span>
          <span className="sm:hidden">Berikutnya</span>
          <i className="fas fa-chevron-right ml-1 sm:ml-2"></i>
        </button>
      </div>
      
      {/* Book Container */}
      <div 
        ref={bookContainerRef}
        className="relative w-full max-w-5xl flex justify-center perspective-1000"
        style={{ height: isMobile ? '600px' : '800px' }}
      >
        {/* Mobile Book View */}
        {isMobile && (
          <div 
            className={`w-full h-full ${
              isFlipping ? 'animate-page-flip-mobile' : ''
            }`}
          >
            {/* Cover Page */}
            {currentPage === 0 && (
              <div className="w-full h-full bg-amber-800 rounded-lg shadow-xl book-shadow">
                <div className="flex flex-col items-center justify-center text-white p-6 h-full">
                  <h1 className="text-4xl font-bold mb-6 text-center gold-foil">All The Time Café</h1>
                  <div className="relative w-32 h-32 mb-6">
                    <Image
                      src="/logo.png"
                      alt="All The Time Café"
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                  <h2 className="text-2xl font-medium mb-4 text-center">Menu</h2>
                  <p className="text-lg text-center mb-8">
                    Dibuat dengan passion dan bahan-bahan terbaik
                  </p>
                  
                  <div className="border-t border-amber-500 w-24 mb-6"></div>
                  
                  <button 
                    onClick={nextPage}
                    className="px-6 py-3 bg-white text-amber-900 rounded-full hover:bg-amber-100 transition-colors font-bold flex items-center"
                  >
                    Buka Menu <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-6 left-6">
                  <i className="fas fa-coffee text-amber-500 text-3xl"></i>
                </div>
                <div className="absolute top-6 right-6">
                  <i className="fas fa-mug-hot text-amber-500 text-3xl"></i>
                </div>
              </div>
            )}
            
            {/* Regular Page */}
            {currentPage > 0 && (
              <div className="w-full h-full bg-amber-50 rounded-lg shadow-xl p-5 sm:p-6 book-shadow page-curl paper-texture">
                <div className="h-full flex flex-col">
                  {/* Page number */}
                  <div className="text-center text-amber-700 italic mb-3">
                    Halaman {currentPage}
                  </div>
                  
                  {/* Page content */}
                  <div className="flex-1 overflow-hidden">
                    {renderBookPage(bookPages[currentPage], addToCart, true)}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Desktop Book View */}
        {!isMobile && (
          <>
            {/* Book Cover */}
            {currentPage === 0 && (
              <div className={`absolute inset-0 bg-amber-800 rounded-lg shadow-xl book-shadow ${
                isFlipping ? 'animate-page-flip-right' : ''
              }`}>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-10">
                  <h1 className="text-5xl font-bold mb-8 gold-foil">All The Time Café</h1>
                  <div className="relative w-40 h-40 mb-8">
                    <Image
                      src="/logo.png"
                      alt="All The Time Café"
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                  <h2 className="text-3xl font-medium mb-6">Menu</h2>
                  <p className="text-xl text-center max-w-md mb-12">
                    Dibuat dengan passion dan bahan-bahan terbaik untuk pengalaman kopi yang tak terlupakan
                  </p>
                  
                  <div className="border-t border-amber-500 w-24 mb-8"></div>
                  
                  <button 
                    onClick={nextPage}
                    className="px-8 py-3 bg-white text-amber-900 rounded-full hover:bg-amber-100 transition-colors font-bold flex items-center"
                  >
                    Buka Menu <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-10 left-10">
                  <i className="fas fa-coffee text-amber-500 text-4xl"></i>
                </div>
                <div className="absolute top-10 right-10">
                  <i className="fas fa-mug-hot text-amber-500 text-4xl"></i>
                </div>
                
                {/* Book spine effect */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-amber-900 rounded-l-lg book-spine"></div>
              </div>
            )}
            
            {/* Menu Pages */}
            {currentPage > 0 && currentPage < totalPages && (
              <div className={`w-full h-full flex ${
                isFlipping ? 'animate-page-flip' : ''
              }`}>
                {/* Left Page */}
                <div className="flex-1 bg-amber-50 rounded-l-lg shadow-xl border-r border-amber-200 p-8 page-curl paper-texture">
                  <div className="h-full flex flex-col">
                    {/* Page number */}
                    <div className="text-right text-amber-700 italic mb-4">
                      {currentPage * 2 - 1}
                    </div>
                    
                    {/* Page content */}
                    {renderBookPage(bookPages[(currentPage * 2) - 1], addToCart, false)}
                  </div>
                </div>
                
                {/* Right Page */}
                <div className="flex-1 bg-amber-50 rounded-r-lg shadow-xl p-8 page-curl paper-texture">
                  <div className="h-full flex flex-col">
                    {/* Page number */}
                    <div className="text-left text-amber-700 italic mb-4">
                      {currentPage * 2}
                    </div>
                    
                    {/* Page content */}
                    {renderBookPage(bookPages[currentPage * 2], addToCart, false)}
                  </div>
                </div>
                
                {/* Book binding effect */}
                <div className="absolute left-1/2 top-0 bottom-0 w-4 -ml-2 bg-gradient-to-r from-amber-300 to-amber-100 rounded-sm z-10 shadow-inner book-spine"></div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

// Function to render different page types
function renderBookPage(page, addToCart, isMobile) {
  if (!page) return null;
  
  switch (page.type) {
    case 'toc':
      return <TableOfContents categories={page.categories} isMobile={isMobile} />;
    case 'category':
      return <MenuCategoryPage 
        name={page.name} 
        description={page.description} 
        items={page.items} 
        pageNumber={page.pageNumber}
        totalPages={page.totalPages}
        addToCart={addToCart}
        isMobile={isMobile}
      />;
    default:
      return null;
  }
}

// Table of Contents component
function TableOfContents({ categories, isMobile }) {
  return (
    <div className="flex flex-col h-full">
      <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-amber-900 mb-4 sm:mb-8 text-center`}>
        Daftar Isi
      </h2>
      
      <div className="flex-1 overflow-auto">
        <ul className="space-y-3 sm:space-y-4">
          {categories.map((category, index) => (
            <li key={index} className="flex items-center">
              <span className={`${isMobile ? 'text-base' : 'text-lg'} text-amber-900`}>{category.name}</span>
              <div className="flex-1 border-b border-dotted border-amber-300 mx-2"></div>
              <span className="text-amber-700">{category.itemCount} item</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-auto pt-4 sm:pt-6 text-center text-amber-900">
        <i className="fas fa-utensils mr-2"></i>
        <span className="italic">Selamat menikmati</span>
      </div>
    </div>
  );
}

// Menu Category Page component
function MenuCategoryPage({ name, description, items, pageNumber, totalPages, addToCart, isMobile }) {
  return (
    <div className="flex flex-col h-full">
      {/* Show category name and description only on first page */}
      {pageNumber === 1 && (
        <>
          <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-amber-900 mb-2 sm:mb-4 text-center`}>
            {name}
          </h2>
          {description && (
            <p className="text-gray-700 text-center mb-3 sm:mb-6 text-sm sm:text-base">
              {description}
            </p>
          )}
        </>
      )}
      
      {/* Show continuation notice on subsequent pages */}
      {pageNumber > 1 && (
        <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-amber-900 mb-3 sm:mb-6 text-center`}>
          {name} <span className="font-normal text-sm">({pageNumber} dari {totalPages})</span>
        </h3>
      )}
      
      <div className="flex-1 overflow-hidden">
        <div className="space-y-4 sm:space-y-6">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-white rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-shadow"
            >
              {isMobile ? (
                // Mobile layout for menu items
                <>
                  <div className="flex items-start mb-3">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden mr-3">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h3 className="text-base font-semibold text-amber-900 pr-2">{item.name}</h3>
                        <span className="text-amber-900 font-bold whitespace-nowrap">
                          Rp {item.price.toLocaleString('id-ID')}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 text-xs">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {item.isVegan && (
                        <span className="bg-green-100 text-green-800 text-xs px-1 py-0.5 rounded flex items-center">
                          <i className="fas fa-leaf text-xs mr-1"></i> Vegan
                        </span>
                      )}
                      {item.isGlutenFree && (
                        <span className="bg-blue-100 text-blue-800 text-xs px-1 py-0.5 rounded flex items-center">
                          <i className="fas fa-wheat-alt text-xs mr-1"></i> Bebas Gluten
                        </span>
                      )}
                    </div>
                    
                    <button 
                      onClick={() => addToCart(item)}
                      className="bg-amber-700 hover:bg-amber-800 text-white px-3 py-1 rounded text-sm flex items-center transition-colors"
                    >
                      <i className="fas fa-plus mr-1"></i> Tambah
                    </button>
                  </div>
                </>
              ) : (
                // Desktop layout for menu items
                <>
                  <div className="flex items-start mb-4">
                    <div className="relative w-20 h-20 rounded-md overflow-hidden mr-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="text-lg font-semibold text-amber-900">{item.name}</h3>
                        <span className="text-amber-900 font-bold">
                          Rp {item.price.toLocaleString('id-ID')}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {item.isVegan && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded flex items-center">
                          <i className="fas fa-leaf mr-1"></i> Vegan
                        </span>
                      )}
                      {item.isGlutenFree && (
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded flex items-center">
                          <i className="fas fa-wheat-alt mr-1"></i> Bebas Gluten
                        </span>
                      )}
                    </div>
                    
                    <button 
                      onClick={() => addToCart(item)}
                      className="bg-amber-700 hover:bg-amber-800 text-white px-3 py-1 rounded text-sm flex items-center transition-colors"
                    >
                      <i className="fas fa-plus mr-1"></i> Tambah
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}