import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <section className=''>
        <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-full'>
            <Link
              href=""
              className='group relative flex flex-col overflow-hidden rounded pb-4 pt-40 flex-grow px-4'>
              <Image
                alt="Flower 1"
                src="/pexels-nam-quan-nguy-n-459228913-18023783.jpg"
                width={500}
                height={500}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-150 ease-in-out"
              />
              <div className='absolute inset-0'></div>
              <h3 className='z-10 text-white text-2xl bg-black bg-opacity-30'> Flower Bouquet</h3>
            </Link>

            <Link
              href=""
              className='group relative flex flex-col overflow-hidden rounded pb-4 pt-40 flex-grow px-4'>
              <Image
                alt="Flower 2"
                src="/pexels-cottonbro-4123714.jpg"
                width={500}
                height={500}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-150 ease-in-out"
              />
              <div className='absolute inset-0'></div>
              <h3 className='z-10 text-white text-2xl bg-black bg-opacity-30'> Pots</h3>
            </Link>

            <Link
              href=""
              className='group relative flex flex-col overflow-hidden rounded pb-4 pt-40 flex-grow px-4'>
              <Image
                alt="Flower 3"
                src="/OIP (2).jpeg"
                width={500}
                height={500}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-150 ease-in-out"
              />
              <div className='absolute inset-0'></div>
              <h3 className='z-10 text-white text-2xl bg-black bg-opacity-30'> Decors</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
