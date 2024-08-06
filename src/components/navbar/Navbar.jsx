import React from 'react';
import logo from '../../assets/logo.png'; 

const Navbar = () => {
  return (
    <>
    <nav className="bg-white shadow-md fixed top-0 inset-x-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-10 w-auto pl-6" />
          <span className="text-xl font-bold text-black">
            Heatmap
          </span>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
