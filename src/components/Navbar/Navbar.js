import React, { useState } from 'react';
import { FaHome, FaCompass, FaBell, FaEnvelope, FaSearch, FaUser, FaMoon, FaSun } from 'react-icons/fa';
import useScrollDirection from './useScrollDirection';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const isVisible = useScrollDirection();


  const navItems = [
    { name: 'Home', icon: FaHome },
    { name: 'Explore', icon: FaCompass },
    { name: 'Notifications', icon: FaBell },
    { name: 'Messages', icon: FaEnvelope },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real application, you would apply the dark mode to the entire app here
  };

  return (
    <header 
    className={`${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500'
    } text-white shadow-lg py-6 px-8 flex items-center justify-between backdrop-blur-md bg-opacity-90 transition-all duration-300 fixed w-full z-50 ${
      isVisible ? 'top-0' : '-top-24'
    }`}
  >      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">MyApp</h1>
      </div>

      {/* Center Navigation Options */}
      <nav className="flex flex-1 justify-center space-x-12 relative">
        {navItems.map((item, index) => (
          <div
            key={item.name}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <button className="text-xl hover:text-yellow-300 focus:outline-none transition-colors duration-300 flex items-center">
              <item.icon className="mr-2" />
              <span className="relative">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>

            {/* Dropdown Menu */}
            {hoveredIndex === index && (
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg transition-all duration-300 ease-in-out z-10`}
              >
                <div className="p-4 space-y-2">
                  {item.name === 'Home' && (
                    <div>
                      <a href="#" className="relative block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition duration-200 ease-in-out group">
                        Home Option 1
                        <span className="absolute left-0 top-1/2 transform -translate-x-8 -translate-y-1/2 transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                          &#8594;
                        </span>
                      </a>
                      <a href="#" className="relative block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition duration-200 ease-in-out group">
                        Home Option 2
                        <span className="absolute left-0 top-1/2 transform -translate-x-8 -translate-y-1/2 transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                          &#8594;
                        </span>
                      </a>
                      <a href="#" className="relative block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition duration-200 ease-in-out group">
                        Home Option 3
                        <span className="absolute left-0 top-1/2 transform -translate-x-8 -translate-y-1/2 transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                          &#8594;
                        </span>
                      </a>
                    </div>
                  )}
                  {item.name === 'Explore' && (
                    <div>
                      <a href="#" className="relative block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-md transition duration-200 ease-in-out group">
                        Explore Option 1
                        <span className="absolute left-0 top-1/2 transform -translate-x-8 -translate-y-1/2 transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                          &#8594;
                        </span>
                      </a>
                      <a href="#" className="relative block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-md transition duration-200 ease-in-out group">
                        Explore Option 2
                        <span className="absolute left-0 top-1/2 transform -translate-x-8 -translate-y-1/2 transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                          &#8594;
                        </span>
                      </a>
                      <a href="#" className="relative block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-md transition duration-200 ease-in-out group">
                        Explore Option 3
                        <span className="absolute left-0 top-1/2 transform -translate-x-8 -translate-y-1/2 transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                          &#8594;
                        </span>
                      </a>
                    </div>
                  )}
                  {item.name === 'Notifications' && (
                    <div>
                      <a href="#" className="relative block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-yellow-900 rounded-md transition duration-200 ease-in-out group">
                        Notification Option 1
                        <span className="absolute left-0 top-1/2 transform -translate-x-8 -translate-y-1/2 transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                          &#8594;
                        </span>
                      </a>
                      <a href="#" className="relative block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-yellow-900 rounded-md transition duration-200 ease-in-out group">
                        Notification Option 2
                        <span className="absolute left-0 top-1/2 transform -translate-x-8 -translate-y-1/2 transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                          &#8594;
                        </span>
                      </a>
                      <a href="#" className="relative block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-yellow-900 rounded-md transition duration-200 ease-in-out group">
                        Notification Option 3
                        <span className="absolute left-0 top-1/2 transform -translate-x-8 -translate-y-1/2 transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                          &#8594;
                        </span>
                      </a>
                    </div>
                  )}
                  {item.name === 'Messages' && (
                    <div>
                      <a href="#" className="relative block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900 rounded-md transition duration-200 ease-in-out group">
                        Message Option 1
                        <span className="absolute left-0 top-1/2 transform -translate-x-8 -translate-y-1/2 transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                          &#8594;
                        </span>
                      </a>
                      <a href="#" className="relative block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900 rounded-md transition duration-200 ease-in-out group">
                        Message Option 2
                        <span className="absolute left-0 top-1/2 transform -translate-x-8 -translate-y-1/2 transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                          &#8594;
                        </span>
                      </a>
                      <a href="#" className="relative block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900 rounded-md transition duration-200 ease-in-out group">
                        Message Option 3
                        <span className="absolute left-0 top-1/2 transform -translate-x-8 -translate-y-1/2 transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                          &#8594;
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
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
