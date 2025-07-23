import React from 'react';
import NavbarDemo from '../NavbarDemo';
import Footer from '../Footer';

const Contact = () => {
  return (
    <>
    <NavbarDemo/>
    <section className="bg-[#0f0f2f]  min-h-screen py-20 text-white" id="contact">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div data-aos="fade-right" className="space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            <span className="text-blue-400">Let’s</span> Talk
          </h2>
          <p className="text-gray-300">
            Whether you have a question or just want to say hi — we’re here to chat.
          </p>
          <img
            src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_23-2148234799.jpg"
            alt="Contact Illustration"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>

        {/* Right Side - Form */}
        <form data-aos="fade-left" className="space-y-6 bg-[#1a1a3d] p-8 rounded-xl shadow-lg">
          <div>
            <label className="block mb-2 text-sm font-semibold text-blue-400">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 rounded-lg bg-[#0f0f2f] text-white border border-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold text-blue-400">Email</label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full p-4 rounded-lg bg-[#0f0f2f] text-white border border-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold text-blue-400">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full p-4 rounded-lg bg-[#0f0f2f] text-white border border-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transform transition duration-300"
          >
            Send Message 
          </button>
        </form>
      </div>
    </section>  
    </>
  );
};

export default Contact;
