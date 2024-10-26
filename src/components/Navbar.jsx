"use client"

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import {
  MenuAlt1Icon,
  XIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#f8f4ED] text-gray-800 shadow-lg">
      <div className="flex justify-between items-center p-6 max-w-screen-xl mx-auto w-full"> 
        {/* Left */}
        <Image src="/images/weddingLogo.png" alt="Wedding Logo" width={150} height={150} />

        {/* Right Side Desktop Navigation Screen*/}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-purple-600 transition-colors">PHOTOGRAPHY</Link>
          <Link href="/" className="hover:text-purple-600 transition-colors">FILMS</Link>
          <Link href="/" className="hover:text-purple-600 transition-colors">PRE-WEDDINGS</Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center hover:text-purple-600 transition-colors"
            >
              <span>MORE</span>
              <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 left-1/2 transform -translate-x-1/2 z-10 bg-white rounded shadow-lg mt-1 w-48">
                <Link href="/" className="block px-4 py-2 hover:bg-gray-200 transition-colors">Weddings Samples</Link>
                <Link href="/" className="block px-4 py-2 hover:bg-gray-200 transition-colors">Insta Highlights</Link>
                <Link href="/" className="block px-4 py-2 hover:bg-gray-200 transition-colors">Album Samples</Link>
              </div>
            )}
          </div>
          <Link href="/" className="hover:text-purple-600 transition-colors">CONTACT</Link>
        </div>

        {/* Toggler */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="p-4 focus:outline-none">
            <MenuAlt1Icon className="w-6 h-6 text-purple-600" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity">
          <div className="fixed inset-0 bg-[#f8f4ED] p-6 transform transition-transform duration-300 ease-in-out w-3/4 max-w-md"> {/* Increased padding */}
            <button onClick={toggleSidebar} className="text-gray-800">
              <XIcon className="w-6 h-6" />
            </button>
            <div className="flex flex-col items-center mt-4 space-y-4"> 
              <Link href="/" className="text-lg hover:text-purple-600 transition-colors">Photography</Link>
              <Link href="/" className="text-lg hover:text-purple-600 transition-colors">Films</Link>
              <Link href="/" className="text-lg hover:text-purple-600 transition-colors">Pre-Weddings</Link>
                <Link href="/" className="text-lg hover:text-purple-600 transition-colors">Contact</Link>
              <div className="relative">
                <button onClick={toggleDropdown} className="flex items-center text-lg hover:text-purple-600 transition-colors">
                  <span>More</span>
                  <ChevronRightIcon className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'transform rotate-90' : ''}`} />
                </button>
                {isDropdownOpen && (
                  <div className="absolute p-4 left-1/2 transform -translate-x-1/2 flex flex-col space-y-2 bg-white mt-1 rounded w-64">
                    <Link href="/" className="hover:bg-gray-200 px-2 py-1 transition-colors text-lg">Weddings Samples</Link>
                    <Link href="/" className="hover:bg-gray-200 px-2 py-1 transition-colors text-lg">Insta Highlights</Link>
                    <Link href="/" className="hover:bg-gray-200 px-2 py-1 transition-colors text-lg">Album Samples</Link>
                  </div>
                )}
              </div>
            
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
