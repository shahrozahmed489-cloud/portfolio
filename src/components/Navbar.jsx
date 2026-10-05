
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#5D50E1] border-b border-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          <div className="flex items-center">
            <a href="#home">
              <img
                src="/image.png"
                alt="Logo"
                className="w-14 h-14 object-contain"
              />
            </a>
          </div>

          <ul className="hidden md:flex items-center gap-8">

            <li>
              <a
                href="#home"
                className="relative text-white font-medium hover:text-gray-800 transition duration-300
                after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0
                after:bg-blue-600 after:transition-all after:duration-300
                hover:after:w-full"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="relative text-white font-medium hover:text-gray-800 transition duration-300
                after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0
                after:bg-blue-600 after:transition-all after:duration-300
                hover:after:w-full"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#products"
                className="relative text-white font-medium hover:text-gray-800 transition duration-300
                after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0
                after:bg-blue-600 after:transition-all after:duration-300
                hover:after:w-full"
              >
                Products
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="relative text-white font-medium hover:text-gray-800 transition duration-300
                after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0
                after:bg-blue-600 after:transition-all after:duration-300
                hover:after:w-full"
              >
                Contact
              </a>
            </li>

          </ul>

          <div className="hidden md:flex items-center gap-3">

            <button
              className="px-5 py-2.5 rounded-lg border-2 border-blue-600
              text-blue-600 font-semibold
              hover:bg-blue-600 hover:text-white
              transition duration-300"
            >
              Contact Me
            </button>

            <button
              className="px-5 py-2.5 rounded-lg
              bg-blue-600 text-white font-semibold
              hover:bg-blue-700
              hover:shadow-lg
              transition duration-300"
            >
              E-mail
            </button>

          </div>

          <button
            className="md:hidden text-3xl text-gray-700
            hover:text-blue-600 transition duration-300"
          >
            ☰
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

