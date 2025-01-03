import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='relative overflow-hidden font-sans mt-4 px-6 py-12 mb-7 bg-gradient-to-r from-black to-gray-600'>
      {/* Background Image */}
      <div className='absolute inset-0 opacity-30'>
        <Image
          alt="Flower banner"
          src="/OIP (6).jpeg"
          width={1036}
          height={200}
          className='object-cover w-full h-full'
          priority
        />
      </div>

      {/* Content */}
      <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center'>
        <h2 className='text-white sm:text-5xl font-bold mb-4'>Fresh Flowers, Just for You</h2>
        <p className='text-white text-lg text-center mb-6 max-w-xl'> Explore our exquisite collection of bouquets and arrangements for every occasion.</p>
        <button
          type='button'
          className='bg-[black] text-white text-sm font-semibold py-3 px-6 rounded shadow hover:bg-white hover:text-black transition duration-200'
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
