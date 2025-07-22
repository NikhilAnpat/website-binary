import React, { useEffect, lazy, Suspense, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCogs, FaMobileAlt, FaShieldAlt } from "react-icons/fa";
import { FaChartLine, FaCloud, FaLightbulb, FaRocketchat, FaUsers } from "react-icons/fa6";
import CountUp from "react-countup";


const NavbarDemo = lazy(() => import("../NavbarDemo"));
const Footer = lazy(() => import("../Footer"));

function Features() {

 const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false, // This line disables the arrows
  pauseOnHover: false,
  draggable: false,
  swipe: false,
};

  useEffect(() => {
    AOS.init({ duration: 1000  , once: true });
  }, []);

  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
  {
    icon: <FaRocketchat />,
    title: "Speed",
    desc: "Boost your workflow with our blazing-fast performance.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    desc: "Cutting-edge tools to keep you ahead of the curve.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security",
    desc: "Your data is protected with enterprise-grade security.",
  },
  {
    icon: <FaChartLine />,
    title: "Growth",
    desc: "Tools designed to help your business scale efficiently.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile-Friendly",
    desc: "Access everything from any device, anywhere, anytime.",
  },
  {
    icon: <FaCogs />,
    title: "Customization",
    desc: "Easily tailor tools to match your unique workflow.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud-Based",
    desc: "Everything you need lives in the cloud - fast, secure, always up.",
  },
  {
    icon: <FaUsers />,
    title: "Collaboration",
    desc: "Seamlessly collaborate with your team in real-time.",
  },
];


  const imageUrls = [
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
];


  return (
    <div className="bg-gradient-to-b from-[#000A32] to-gray-900 text-white">
      <Suspense fallback={<div className="text-white p-4">Loading Navbar...</div>}>
        <NavbarDemo />
      </Suspense>

      {/* Hero Section */}
      <section className="relative min-h-screen py-24 px-4 sm:px-8 md:px-16 text-center bg-gradient-to-br from-[#1f1f47] via-[#1c3d72] to-[#14142b] text-white">
    <div className="relative z-10">
      <h1 className="text-5xl font-extrabold mb-4" data-aos="fade-up">
        Welcome to the Future of <span className="text-blue-400">Work</span>
      </h1>
      <p
        className="text-gray-300 text-lg max-w-2xl mx-auto mb-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Supercharge your team with our powerful, secure, and scalable platform.
      </p>
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
        data-aos="zoom-in"
      >
        Get Started
      </button>
    </div>

    <div
      className="absolute inset-0 z-0 opacity-30 pointer-events-none"
      aria-hidden="true"
    >
      <Slider {...settings}>
        {imageUrls.map((url, idx) => (
          <div key={idx}>
            <img
              src={url}
              alt={`Slide ${idx + 1}`}
              className="w-full h-[696px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  </section>


      {/* Feature Section */}
       <section className="py-24 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-down">
          Explore Our <span className="text-blue-400">Features</span>
        </h2>
        <p className="text-gray-300 mb-12" data-aos="fade-up">
          Tools tailored for productivity, intelligence, and growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`cursor-pointer bg-[#0a0a23] hover:bg-[#111132] transition duration-300 rounded-2xl p-6 shadow-lg border border-gray-700 transform hover:scale-105 
                ${activeFeature === index ? 'glow-border' : ''}`}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              onClick={() => setActiveFeature(index)}
            >
              <div className="text-4xl mb-4 text-blue-300 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-300">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-[#0f0f2f] text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8" data-aos="fade-up">Trusted by Thousands</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {["+10K Users", "99.9% Uptime", "500+ Teams", "$50M Revenue"].map((stat, i) => (
              <div key={i} className="text-white" data-aos="zoom-in" data-aos-delay={i * 150}>
                <p className="text-4xl font-extrabold text-blue-400">{stat}</p>
                <p className="text-sm text-gray-400">{["Users", "Uptime", "Teams", "Revenue"][i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Suspense fallback={<div className="text-white p-4">Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Features;
