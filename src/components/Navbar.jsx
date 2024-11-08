"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  MenuAlt1Icon,
  XIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

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
    <nav className="bg-primary text-gray-800 shadow-lg">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto w-full">
        {/* Left */}
        <Image
          src="/images/tei-removebg-preview.png"
          alt="Wedding Logo"
          width={120}
          height={120}
        />

        {/* Right Side Desktop Navigation Screen */}
        <div className="hidden items-center md:flex space-x-8">
          <Link
            href="/stories"
            className="tracking-wide text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            STORIES
          </Link>
          <Link
            href="/films"
            className="tracking-wide text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            FILMS
          </Link>
          <Link
            href="/pre-weddings"
            className="tracking-wide text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            PRE-WEDDINGS
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-gray-500 hover:text-gray-700 transition-colors"
            >
              <span className="tracking-wide text-gray-500 hover:text-gray-700 text-sm">MORE</span>
              <ChevronDownIcon
                className={`w-4 h-4 ml-1 transition-transform ${
                  isDropdownOpen ? "transform rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute  text-gray-500 py-2 mt-4 left-1/2 transform -translate-x-1/2 z-10 bg-white rounded shadow-lg w-48">
                <Link
                  href="/"
                  className="tracking-wider text-gray-500 block text-sm px-4 py-2 hover:bg-gray-200  hover:text-gray-700 transition-colors"
                >
                  WEDDING SAMPLES
                </Link>
                <Link
                  href="/"
                  className="tracking-wider text-gray-500 block text-sm px-4 py-2 hover:bg-gray-200 hover:text-gray-700 transition-colors"
                >
                  INSTA HIGHLIGHTS
                </Link>
                <Link
                  href="/"
                  className="tracking-wider block text-sm px-4 py-2 hover:bg-gray-200 hover:text-gray-700 transition-colors"
                >
                  ALBUM SAMPLES
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/contact"
            className="tracking-wide text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            CONTACT
          </Link>
          <Link
            href="/get-in-touch"
            className="bg-purple-600 text-white text-sm px-3 py-2 rounded hover:bg-purple-700 transition-colors"
          >
            GET IN TOUCH
          </Link>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <FaFacebookF className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <FaTwitter className="w-5 h-5" />
            </Link>
          </div>
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
          <div className="fixed inset-0 bg-primary p-6 transform transition-transform duration-300 ease-in-out w-3/4 max-w-md">
            <button onClick={toggleSidebar} className="text-gray-800">
              <XIcon className="w-6 h-6" />
            </button>
            <div className="flex flex-col items-center mt-4 space-y-4">
              <Link
                href="/stories"
                className="tracking-wide  hover:text-purple-600 transition-colors"
              >
                STORIES
              </Link>
              <Link
                href="/films"
                className="tracking-wide  hover:text-purple-600 transition-colors"
              >
                FILMS
              </Link>
              <Link
                href="/pre-weddings"
                className="tracking-wide  hover:text-purple-600 transition-colors"
              >
                PRE-WEDDINGS
              </Link>
              <Link
                href="/contact"
                className="tracking-wide hover:text-purple-600 transition-colors"
              >
                CONTACT
              </Link>
              <Link
                href="/get-in-touch"
                className="bg-purple-600 text-white px-3 py-2 rounded hover:bg-purple-700 transition-colors"
              >
                GET IN TOUCH
              </Link>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-lg hover:text-purple-600 transition-colors"
                >
                  <span className="tracking-wide">MORE</span>
                  <ChevronRightIcon
                    className={`w-4 h-4 ml-1 transition-transform ${
                      isDropdownOpen ? "transform rotate-90" : ""
                    }`}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute p-2 left-1/2 transform -translate-x-1/2 flex flex-col space-y-2 bg-white mt-2 rounded w-64">
                    <Link
                      href="/"
                      className="tracking-wider hover:bg-gray-200 px-2 py-1 transition-colors"
                    >
                      WEDDING SAMPLES
                    </Link>
                    <Link
                      href="/"
                      className="tracking-wider hover:bg-gray-200 px-2 py-1 transition-colors"
                    >
                      INSTA HIGHLIGHTS
                    </Link>
                    <Link
                      href="/"
                      className="tracking-wider hover:bg-gray-200 px-2 py-1 transition-colors"
                    >
                      ALBUM SAMPLES
                    </Link>
                  </div>
                )}
              </div>
              <div className="flex absolute bottom-8 space-x-6">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="hover:text-purple-600 transition-colors"
                >
                  <FaFacebookF className="w-6 h-6" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="hover:text-purple-600 transition-colors"
                >
                  <FaInstagram className="w-6 h-6" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="hover:text-purple-600 transition-colors"
                >
                  <FaTwitter className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
