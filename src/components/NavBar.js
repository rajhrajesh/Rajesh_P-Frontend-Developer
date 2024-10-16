import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-home sm:border-none">
      <div className="flex items-center">
        <img src="/assets/logo.png" alt="Logo" className="h-6 w-6 md:h-8 md:w-8" />
        <span className="ml-2 text-white text-lg font-bold hidden">EthAi</span>
      </div>

      <div className="hidden md:flex bg-black space-x-12 border-2 border-gray-800 p-4 rounded-3xl w-auto">
        <a href="#FeatureSection" className="text-white hover:text-gray-400">Features</a>
        <a href="#aboutsection" className="text-white hover:text-gray-400">Why Us</a>
        <a href="#TokenomicsSection" className="text-white hover:text-gray-400">Tokenomics</a>
        <a href="#RoadmapSection" className="text-white hover:text-gray-400">Roadmap</a>
      </div>

      <div className="hidden sm:flex space-x-4 items-center">
        <a href="/login" className="text-white">Login</a>
        <a href="/" className="bg-lightblue text-gray-800 px-4 py-2 rounded-lg hover:bg-blue-600">
          Whitepaper
        </a>
      </div>

      <div className="sm:hidden">
        <img src="/assets/menu.png" alt="Menu" className="h-8 w-8" />
      </div>
    </nav>
  );
};

export default Navbar;
