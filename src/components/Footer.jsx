import React from 'react';
import { FaXTwitter, FaInstagram, FaTiktok } from 'react-icons/fa6';
import { FaFeatherAlt } from 'react-icons/fa';
import "./Footer.css";
import { FloatingDockDemo } from './FloatingDockDemo';

const Footer = () => {
  return (
    <>
      <footer className="relative bg-gradient-to-t from-[#00042A] to-gray-900 text-white px-2 py-3 font-sans z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between py-7 gap-12 relative z-10">
          {/* Left Section */}
          <div className="container  max-w-lg space-y-4">
            {/* Logo and Title */}
            <div className="flex items-center  pt-4 gap-3">
              <div className="bg-yellow-400 h-10 w-10 flex items-center justify-center rounded-full">
                <FaFeatherAlt className="text-black text-xl" />
              </div>
              <h1 className="text-lg font-semibold">Interview Coder</h1>
            </div>
            {/* Description */}
            <p className="text-gray-300 pr-4 pt-2 text-sm leading-relaxed">
              Interview Coder is a desktop app designed to help job seekers ace technical interviews
              by providing real-time assistance with coding questions.
            </p>
            {/* Social Icons */}
          </div>
          {/* Right Section: Legal and Pages */}
          <div className="grid grid-cols-2 p-5 items-left gap-10 text-sm">
            {/* Legal */}
            <div className="pl-5">
              <h3 className="font-bold mb-3">Legal</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:underline">Refund Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:underline">Cancellation Policy</a></li>
              </ul>
            </div>

            {/* Pages */}
            <div className="pl-5">
              <h3 className="font-bold mb-3">Pages</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:underline">Contact Support</a></li>
                <li><a href="#" className="hover:underline">Create account</a></li>
                <li><a href="#" className="hover:underline">Login to account</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Floating chat icon bottom-right */}
        <div className='flex flex-row justify-between p-[20px] '>
              <div className="absolute bottom-4 right-4 z-20">
                <button className="bg-yellow-400 hover:bg-yellow-300 h-12 w-12 rounded-full flex items-center justify-center shadow-lg mb-6">
                  <svg viewBox="0 0 32 32" width="22" height="22" fill="black">
                    <path d="M4 4h24v20H9l-5 5V4z"></path>
                  </svg>
                </button>
              </div>
              <div className='mb-[30px]'>
                <FloatingDockDemo/>
              </div>
          </div>
        {/* Background Text */}
        <h1 className="footer-title-background">
          Interview Coder
        </h1>
        {/* Copyright */}
      </footer>
      <div className="bg-[#00042A] text-center text-gray-500 text-sm py-1">
        © 2023 Interview Coder. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
