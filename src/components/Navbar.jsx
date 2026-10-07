
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#DDDBBB] border-b border-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          <div className="flex items-center">
            <a href="#home">
              <img
                src="/image1.avif"
                alt="Logo"
                className="w-14 h-14 object-contain"
              />
            </a>
          </div>

          <ul className="hidden md:flex items-center gap-8">

            <li>
              <a
                href="#home"
                className="relative text-gray-800 font-medium hover:text-[#8B5036] transition duration-300
                after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0
                after:bg-[#a19b4e] after:transition-all after:duration-300
                hover:after:w-full"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="relative text-gray-800 font-medium hover:text-[#8B5036] transition duration-300
                after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0
                after:bg-[#a19b4e] after:transition-all after:duration-300
                hover:after:w-full"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#products"
                className="relative text-gray-800 font-medium hover:text-[#8B5036] transition duration-300
                after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0
                after:bg-[#a19b4e] after:transition-all after:duration-300
                hover:after:w-full"
              >
                Products
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="relative text-gray-800 font-medium hover:text-[#8B5036] transition duration-300
                after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0
                after:bg-[#a19b4e] after:transition-all after:duration-300
                hover:after:w-full"
              >
                Contact
              </a>
            </li>

          </ul>

          <div className="hidden md:flex items-center gap-3">

            <button
              className="px-5 py-2.5 rounded-lg border-2 border-[#8B5036]
              text-[#8B5036] font-semibold
              hover:bg-[#8B5036] hover:text-white
              transition duration-300"
            >
              Contact Me
            </button>

            <button
              className="px-5 py-2.5 rounded-lg
              bg-[#8B5036] text-gray-900 font-semibold
              hover:bg-[#d1cea3]
              hover:shadow-lg
              transition duration-300"
            >
              E-mail
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

