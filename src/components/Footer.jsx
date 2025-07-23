import React, { memo } from 'react';
import { FaXTwitter, FaInstagram, FaTiktok } from 'react-icons/fa6';
import { FaFeatherAlt } from 'react-icons/fa';
import './Footer.css';
import { FloatingDockDemo } from './FloatingDockDemo';

const Footer = () => {
  return (
    <>
      <footer className="relative bg-gradient-to-t from-[#00042A] to-gray-900 text-white px-4 sm:px-6 md:px-8 py-6 font-sans z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between py-6 gap-10 md:gap-12 relative z-10">
          
          {/* Left Section */}
          <div className="max-w-lg space-y-4">
            {/* Logo */}
            <div className="flex items-center pt-2 gap-3 text-white">
              <div className="bg-yellow-400 h-10 w-10 flex items-center justify-center rounded-full">
                <FaFeatherAlt className="text-black text-xl" aria-label="Feather Logo" />
              </div>
              <h1 className="text-lg font-semibold">Interview Coder</h1>
            </div>

            {/* Description */}
            <p className="text-gray-300 pr-2 pt-2 text-sm leading-relaxed">
              Interview Coder is a desktop app designed to help job seekers ace technical interviews
              by providing real-time assistance with coding questions.
            </p>
          </div>

          {/* Right Section: Legal and Pages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 text-sm mt-6 md:mt-0 px-2">
            <div>
              <h3 className="font-bold mb-3">Legal</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:underline">Refund Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:underline">Cancellation Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">Pages</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:underline">Contact Support</a></li>
                <li><a href="#" className="hover:underline">Create Account</a></li>
                <li><a href="#" className="hover:underline">Login to Account</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="relative flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 p-4 sm:p-5">
          <div className="relative sm:absolute bottom-4 right-4 z-20">
            <button
              className="bg-yellow-400  hover:bg-yellow-300 h-12 w-12   rounded-full flex items-center justify-center shadow-lg"
              aria-label="Chat Button"
            >
              <svg viewBox="0 0 32 32" width="22" height="22" fill="black">
                <path d="M4 4h24v20H9l-5 5V4z" />
              </svg>
            </button>
          </div>  

          <div className="w-full sm:w-auto py-2 ">
            <FloatingDockDemo />
          </div>
        </div>

        {/* Watermark Text */}
        <h1 className="footer-title-background text-[10vw] sm:text-[6vw] md:text-[4vw] text-white opacity-5 font-bold absolute bottom-10 left-0 right-0 text-center pointer-events-none">
          Interview Coder
        </h1>
        
      </footer>

      {/* Copyright */}
      <div className="bg-[#00042A] text-center text-gray-500 text-xs sm:text-sm py-1 px-2">
        © 2023 Interview Coder. All rights reserved.
      </div>
    </>
  );
};

export default memo(Footer);
