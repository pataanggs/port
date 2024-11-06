import React from 'react';
import { LuImport } from 'react-icons/lu';
import pataangg from '../assets/pataangg.jpg';

const Hero = () => {
  return (
    <section>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none'>
          Fathan <br/> Kartagama 
        </h1>
        <div className='mt-8'>
          <a href='/CV Fathan Andi.pdf' target='_blank' rel='noopener noreferrer' download className='flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400'>
            <span>Download My CV</span>
            <LuImport className='ml-2' />
          </a>
        </div>
        <div className='w-full'>
          <img 
            src={pataangg} 
            alt='Fathan Kartagama' 
            className='mt-8 w-full h-[50vh] lg:h-screen object-cover object-center'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
