import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-6">
      <div className="w-6 h-6 border-4 border-t-4 border-gray-300 border-t-purple-600 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
