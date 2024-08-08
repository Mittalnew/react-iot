import React, { useState } from 'react';
import { FaHome, FaSearch, FaUser, FaMoon, FaSun, FaArrowRight } from 'react-icons/fa';
import useScrollDirection from './useScrollDirection';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const isVisible = useScrollDirection();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real application, you would apply the dark mode to the entire app here
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`${
        darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500'
      } text-white shadow-lg py-6 px-8 flex items-center justify-between backdrop-blur-md bg-opacity-90 transition-all duration-300 fixed w-full z-50 ${
        isVisible ? 'top-0' : '-top-24'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">TO<sapn className="text-[#19f754]">DO</sapn><span className='text-[50px] text-[#fff]'>+</span></h1>
      </div>

      {/* Center Tabs */}
      <nav className="flex flex-1 justify-center space-x-8 relative">
        {[
          { name: 'Today News', id: 'todayNews' },
          { name: 'Add Todo', id: 'addTodo' }
        ].map((item) => (
          <div
            key={item.name}
            className="relative group"
          >
            <button 
              onClick={() => scrollToSection(item.id)}
              className="text-xl hover:text-yellow-300 focus:outline-none transition-colors duration-300 flex items-center px-4 py-2 border-2 border-white rounded-md"
            >
              {item.name === 'Today News' && (
                <span className="mr-2 relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              )}
              <span className="relative pr-6">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </span>
              <FaArrowRight className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-yellow-300" />
            </button>
          </div>
        ))}
      </nav>

      {/* Search, Profile, and Dark Mode Toggle */}
      <div className="flex items-center space-x-6">
        <button className="text-white hover:text-yellow-300 focus:outline-none text-xl font-semibold transition-colors duration-300">
          <FaSearch />
        </button>
        <button className="text-white hover:text-yellow-300 focus:outline-none text-xl font-semibold transition-colors duration-300">
          <FaUser />
        </button>
        <button
          onClick={toggleDarkMode}
          className="text-white hover:text-yellow-300 focus:outline-none text-xl font-semibold transition-colors duration-300"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;