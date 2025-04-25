import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image with coffee bean decoration */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden h-[500px] shadow-xl">
              <Image
                src="/images/about.jpg"
                alt="Our café story"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-700 rounded-full flex items-center justify-center shadow-lg z-10">
              <i className="fas fa-coffee text-white text-3xl"></i>
            </div>
            
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center shadow-lg opacity-80">
              <i className="fas fa-mug-hot text-white text-2xl"></i>
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <h2 className="text-4xl font-bold mb-8 text-amber-900 relative">
              Our Story
              <span className="block w-20 h-1 bg-amber-700 mt-4"></span>
            </h2>
            
            <p className="text-gray-700 mb-6 text-lg">
              Founded in 2018, Aroma Haven began as a small passion project by two friends 
              who shared a love for exceptional coffee and creating community spaces.
            </p>
            
            <p className="text-gray-700 mb-6 text-lg">
              What started as a tiny corner shop has now grown into a beloved local café
              that maintains its commitment to quality, sustainability, and creating a 
              warm atmosphere where everyone feels welcome.
            </p>
            
            <p className="text-gray-700 mb-8 text-lg">
              We personally select each coffee bean from ethical sources around the world,
              roast them to perfection in small batches, and train our baristas in the art
              of crafting the perfect cup every time.
            </p>
            
            <div className="flex items-center space-x-6 mt-8">
              <div className="w-16 h-16 rounded-full overflow-hidden relative border-2 border-amber-700">
                <Image
                  src="/images/founder1.jpg"
                  alt="Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden relative border-2 border-amber-700">
                <Image
                  src="/images/founder2.jpg"
                  alt="Co-founder"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-medium text-amber-900">
                Alex & Jamie, Founders
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}