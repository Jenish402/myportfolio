// src/components/UnderConstruction.jsx
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/webwait.json';
import Navbar from '../components/Navbar';

const UnderConstruction = () => {
  return (
    <div className='flex items-center'>
      <div className='sticky top-0'>
        <Navbar />
      </div>
      <div className="w-full -h-screen flex flex-col items-center justify-center bg-white px-4 text-center z-[999] relative">
        <div className="w-[500px]">
          <Lottie animationData={animationData} loop={true} />
        </div>
        <h1 className="text-3xl font-bold mt-4">🚧 Page Under Construction</h1>
        <p className="mt-2 text-gray-600">I'm working on something awesome. Please check back soon!</p>
      </div>
    </div>
  );
};

export default UnderConstruction;
