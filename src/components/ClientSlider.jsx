import React from 'react';
import Slider from 'react-slick';
import './Clientslider.css';

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
  pauseOnHover: false
};

const sliderSettingsRTL = {
  ...sliderSettingsLTR,
  rtl: true
};

const ClientSlider = () => {
  return (
    <div className="fullscreen-slider">
      <div className="content">
        <h2 className="title">CLIENTS ACROSS INDUSTRIES</h2>
        <h1 className="subtitle">Full-Service Web Design Agency</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. <br />
          <strong>We create custom solutions that grow brands online</strong>
        </p>
      </div>
      <div className="slider-section">
        <Slider {...sliderSettingsLTR} className="client-slider">
          {clients.map((client, index) => (
            <div key={index} className="client-box">
              <img src={client.logo} alt={client.name} className="client-logo" />
              <p>{client.name}</p>
            </div>
          ))}
        </Slider>

        <Slider {...sliderSettingsRTL} className="client-slider">
          {clients.map((client, index) => (
            <div key={index} className="client-box">
              <img src={client.logo} alt={client.name} className="client-logo" />
              <p className='client-name'>{client.name}</p>
            </div>
          ))}
        </Slider>
      </div>

      <div className="button-container">
        <button className="glow-btn">Get Started</button>
      </div>
    </div>
  );
};
export default ClientSlider;
