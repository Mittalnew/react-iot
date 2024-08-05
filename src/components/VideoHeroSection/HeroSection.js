import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="https://cdn.pixabay.com/video/2024/06/10/216134_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute z-20 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-30 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to MyApp</h1>
        <p className="text-xl mb-8">Discover amazing features and possibilities</p>
        <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;