import React, { useState, useRef } from 'react';
import { RiArrowDownSFill } from "react-icons/ri";

export const FeaturedProject1 = ({ category }) => {
  const [showMore, setShowMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const componentRef = useRef(null);
  const detailSectionRef = useRef(null);

  const handleHideExamples = () => {
    setShowMore(false);
    componentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleCardClick = (img) => {
    const detail = projectDetails.find(p => p.img === img);
    setSelectedImage(detail);
    setTimeout(() => {
      detailSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const images = {
    featured: [
      'project-1.png', 'projet-2.png', 'project-3.png', 'project-4.png',
      'project-5.png', 'project-6.png', 'project-7.png', 'project-8.png',
    ],
    b2b: ['project-5.png', 'project-6.png', 'project-7.png', 'project-8.png'],
    b2c: ['project-5.png', 'project-6.png', 'project-7.png', 'project-8.png'],
    ecommerce: ['project-1.png', 'projet-2.png', 'project-3.png', 'project-4.png'],
  };

  const projectDetails = [  
  {
    img: 'project-1.png',
    logo: 'Remax.png',
    centerImg: 'remix.jpg', // Local file (optional)
    title: 'Empowering Real Estate With Custom Solutions',
    description:
      'The RE/MAX agency in Costa Rica needed to replace their outdated third-party software with a custom solution.'
  },
  {
    img: 'projet-2.png',
    logo: 'northwesternUniverncity.png',
    centerImg: 'https://www.digitalsilk.com/wp-content/uploads/2023/09/custom-web-design-northwestern-university-full-1.jpg.webp',
    title: 'Educational Solutions for Modern Campuses and more',
    description: 'Northwestern University streamlined operations with a robust learning and campus management system.'
  },
  {
    img: 'project-3.png',
    logo: 'BangOlufsen_Logo.png',
    centerImg: 'bo-center.jpg',
    title: 'Luxury Electronics eCommerce Portal',
    description:
      'Bang & Olufsen enhanced their digital sales channel with a custom high-end shopping experience.'
  },
  {
    img: 'project-4.png',
    logo: 'Remax.png',
    centerImg: 'remax-analytics.jpg',
    title: 'Real Estate Analytics Dashboard',
    description:
      'We built a real-time analytics system for RE/MAX to monitor housing trends and agent performance.'
  },

    {
    img: 'project-5.png',
    logo: 'logimg.webp',
    centerImg: 'remax-analytics.jpg',
    title: 'Real Estate Analytics Dashboard',
    description:
      'We built a real-time analytics system for RE/MAX to monitor housing trends and agent performance.'
  },

   {
    img: 'project-6.png',
    logo: 'logoimg1.webp',
    centerImg: 'remax-analytics.jpg',
    title: 'Real Estate Analytics Dashboard',
    description:
      'We built a real-time analytics system for RE/MAX to monitor housing trends and agent performance.'
  },
   {
    img: 'project-7.png',
    logo: 'BangOlufsen_Logo.png',
    centerImg: 'bo-center.jpg',
    title: 'Luxury Electronics eCommerce Portal',
    description:
      'Bang & Olufsen enhanced their digital sales channel with a custom high-end shopping experience.'
  },
   {
    img: 'project-8.png',
    logo: 'Remax.png',
    centerImg: 'bo-center.jpg',
    title: 'Luxury Electronics eCommerce Portal',
    description:
      'Bang & Olufsen enhanced their digital sales channel with a custom high-end shopping experience.'
  },

  
 
];
  const currentImages = images[category] || [];
  const displayImages = showMore ? currentImages : currentImages.slice(0, 6);

  const renderCard = (img) => (
    <div key={img} onClick={() => handleCardClick(img)} className='w-[97%] cursor-pointer relative group'>
      <img src={`../src/assets/${img}`} className="w-full h-auto" />
      <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <div className='bg-black/50 rounded-full lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] flex items-center justify-center'>
          <p className='text-white font-bold text-center text-md lg:text-xl break-words px-2'>Click to view project</p>
        </div>
      </div>
      <img
        src={`../src/assets/${projectDetails.find(p => p.img === img)?.logo}`}
        alt='Client Logo'
        className='absolute bottom-[50px] left-[50px] w-[90px] h-[40px] lg:w-[90px] lg:h-[80px]'
      />
    </div>
  );

  return (
    <div ref={componentRef} className='flex justify-center items-center flex-col'>
      {/* Grid */}
      <div className='relative flex flex-col lg:flex-row gap-[10px] px-[5px] w-full'>
        <div className='flex flex-col gap-[30px] p-[5px] w-full lg:w-1/2'>
          {displayImages.filter((_, i) => i % 2 === 0).map(renderCard)}
        </div>
        <div className='flex flex-col gap-[30px] p-[5px] w-full lg:w-1/2'>
          {displayImages.filter((_, i) => i % 2 !== 0).map(renderCard)}
        </div>
      </div>

      {/* Gradient line */}
      <div className='h-[10px] mb-5 w-full relative'>
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-[#04E4FF] to-transparent'></div>
      </div>

      {/* Load More */}
      {currentImages.length > 6 && (
        <div className='py-[10px] px-[5px] font-bold'>
          <a className='uppercase text-lg flex flex-row items-center gap-2 text-white hover:text-[#0ab7dd] text-center group cursor-pointer'>
            {showMore ? (
              <p onClick={handleHideExamples}>Hide Examples</p>
            ) : (
              <p onClick={() => setShowMore(true)}>Load More Examples</p>
            )}
            <RiArrowDownSFill
              size={25}
              className="transform transition-transform duration-300 ease-in-out group-hover:rotate-[-90deg]"
            />
          </a>
        </div>
      )}

      {/* Detail View */}
      {selectedImage && (
        <div
          ref={detailSectionRef}
          className="w-full mt-10 flex flex-col lg:flex-row text-white rounded-lg overflow-hidden scrollbar-hide"
        >
          {/* Left Thumbnails */}
          <div className="w-full lg:w-1/5 p-4 flex flex-col gap-4">
            {currentImages.slice(0, 4).map((img) => (
              <img
                key={img}
                src={`../src/assets/${img}`}
                alt="Thumbnail"
                className={`cursor-pointer border-2 ${selectedImage.img === img ? 'border-[#04E4FF]' : 'border-transparent'} rounded-md`}
                onClick={() => handleCardClick(img)}
              />
            ))}
          </div>
            {/* Center: Scrollable image */}
            <div className="w-full h-[800px] lg:w-3/5 p-4 max-h-[1000px] bg-blur overflow-y-auto scroll-smooth">
              <img
                src={selectedImage.centerImg.startsWith('http') ? selectedImage.centerImg : `../src/assets/${selectedImage.centerImg}`}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          {/* Right Info Card */}
          <div className="w-full lg:w-1/4 bg-[#121a2c] p-6 flex flex-col justify-between">
            <div>
              <img src={`../src/assets/${selectedImage.logo}`} className="w-32 mb-4" />
              <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300 text-sm">{selectedImage.description}</p>
            </div>
            <div className="mt-6 space-y-2">
              <button className="text-white font-bold-800 px-3 text-2xl">Launch Website &gt;</button>
              <button className="text-[#04E4FF] font-bold-800 px-3 text-2xl">Request a Quote &gt;</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
