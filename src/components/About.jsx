import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-lg overflow-hidden h-96">
              <Image
                src="/images/about.jpg"
                alt="Our café story"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-amber-900">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2018, Aroma Haven began as a small passion project by two friends 
              who shared a love for exceptional coffee and creating community spaces.
            </p>
            <p className="text-gray-700 mb-4">
              What started as a tiny corner shop has now grown into a beloved local café
              that maintains its commitment to quality, sustainability, and creating a 
              warm atmosphere where everyone feels welcome.
            </p>
            <p className="text-gray-700 mb-6">
              We personally select each coffee bean from ethical sources around the world,
              roast them to perfection in small batches, and train our baristas in the art
              of crafting the perfect cup every time.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden relative">
                <Image
                  src="/images/founder1.jpg"
                  alt="Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden relative">
                <Image
                  src="/images/founder2.jpg"
                  alt="Co-founder"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-medium">
                Alex & Jamie, Founders
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}