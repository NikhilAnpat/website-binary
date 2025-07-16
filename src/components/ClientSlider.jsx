import React from 'react';
import Slider from 'react-slick';
import './Clientslider.css';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const clients = [
  {
    name: 'Google',
    logo: './src/img/g.png'
  },
  {
    name: 'Amazon',
    logo: './src/img/a.png'
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
  },
  {
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
  },
  {
    name: 'Facebook',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
  },
  {
    name: 'Tesla',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg'
  }
];

const sliderSettingsLTR = {
  infinite: true,
  speed: 5000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  rtl: false,
  arrows: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '30px'
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20px'
      }
    }
  ]
};

const sliderSettingsRTL = {
  ...sliderSettingsLTR,
  rtl: true
};

const ClientSlider = () => {
  return (
    <div className="fullscreen-slider ">
      <div className="content ">
        <h2 className="title text-[1rem] lg:text-[1.2rem] ">CLIENTS ACROSS INDUSTRIES</h2>
        <h1 className="subtitle text-[clamp(1rem,_5vw,_2rem)] text-[1.5rem] lg:text-[2.8rem] leading-[1.2] font-semibold">Full-Service Web Design Agency</h1>
        <p className="description leading-[1.5] font-normal font-sans text-base lg:text-xl">
          Lorem ipsum dolor sit amet consectetur. <br />
          <strong>We create custom solutions that grow brands online</strong>
        </p>
      </div>
      <div className="slider-section ">
        <Slider {...sliderSettingsLTR} className="client-slider">
          {clients.map((client, index) => (
            <div key={index} className="client-box ">
              <img src={client.logo} alt={client.name} className="client-logo" loading="lazy" />
              <p>{client.name}</p>
            </div>
          ))}
        </Slider>

        <Slider {...sliderSettingsRTL} className="client-slider">
          {clients.map((client, index) => (
            <div key={index} className="client-box">
              <img src={client.logo} alt={client.name} className="client-logo" loading="lazy" />
              <p className='client-name'>{client.name}</p>
            </div>
          ))}
        </Slider>
      </div>

      <div className="button-container">
        
          <a className="glow-btn">
            <p>Explore All Services </p>

            <MdOutlineKeyboardArrowRight size={20} />
          </a>
        
      </div>
      <div
        className="absolute flex justify-center opacity-45 z-[-5]"
        style={{
          content: '""',
          right: '-10%',
          left: '30%',
          top: '-70%',
          bottom: '-40%',
          background: 'radial-gradient(ellipse at center, #9536e5 0, rgba(149, 54, 229, 0) 80%, rgba(149, 54, 229, 0) 100%)'
        }}
      >
        
      </div>
      <div
        className="absolute opacity-45 z-[-1]"
        style={{
          content: '""',
          left: '-10%',
          right: '30%',
          top: '-30%',
          bottom: '-30%',
          background: 'radial-gradient(ellipse at center, #00b9ff 0, rgba(0, 185, 255, 0) 70%, rgba(0, 185, 255, 0) 100%)'
        }}
      ></div>
    </div>
  );
};
export default ClientSlider;
