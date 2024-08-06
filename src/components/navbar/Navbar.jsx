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
      </div>
    </nav>
    </>
  );
};

export default Navbar;
