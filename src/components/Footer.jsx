
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-[#8B5036] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About */}
          <div>
          <img
                src="/image1.avif"
                alt="Logo"
                className="w-14 h-14 object-contain"
              />

            <p className="mt-4 text-gray-300 hover:text-[#d1cea3] leading-7">
              I am a frontend developer focused on creating modern,
              responsive and user-friendly websites using React and
              Tailwind CSS.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center
                rounded-full bg-white hover:bg-[#d1cea3]
                transition duration-300"
              >
                <FaFacebook color="blue-300"/>
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center
                rounded-full bg-white hover:bg-[#d1cea3]
                transition duration-300"
              >
                <FaLinkedin color="blue-200"/>
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center
                rounded-full bg-white hover:bg-[#d1cea3]
                transition duration-300"
              >
                <SiGmail color="red-100"/>
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center
                rounded-full bg-white hover:bg-[#d1cea3]
                transition duration-300"
              >
                <FaWhatsapp  color="green-300 "/>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#DDDBBB] mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-[#d1cea3] transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-[#d1cea3] transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="text-gray-300 hover:text-[#d1cea3] transition"
                >
                  Products
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-[#d1cea3] transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-[#DDDBBB] mb-5">
              Services
            </h3>

            <ul className="space-y-3">
              <li className="text-gray-300 hover:text-[#d1cea3] transition">
                React Development
              </li>

              <li className="text-gray-300 hover:text-[#d1cea3] transition">
                Responsive Websites
              </li>

              <li className="text-gray-300 hover:text-[#d1cea3] transition">
                Tailwind CSS
              </li>

              <li className="text-gray-300 hover:text-[#d1cea3] transition">
                UI Development
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-[#DDDBBB] mb-5">
              Contact Me
            </h3>

            <ul className="space-y-4 text-gray-300 ">

              <li className="flex items-center hover:text-[#d1cea3] gap-3">
                <span className="text-gray-300"></span>
                <span>shahroz.ahmed489@gmail.com</span>
              </li>

              <li className="flex items-center hover:text-[#d1cea3] gap-3">
                <span className="text-gray-300"></span>
                <span>03038054884</span>
              </li>

              <li className="flex items-center hover:text-[#d1cea3] gap-3">
                <span className="text-gray-300"></span>
                <span>Pakistan</span>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white">

        <div className="max-w-7xl mx-auto px-6 py-5
        flex flex-col md:flex-row
        items-center justify-between gap-3">

          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()}  All rights reserved.
          </p>

          <p className="text-sm text-gray-300">
            Designed & Built with  using React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

