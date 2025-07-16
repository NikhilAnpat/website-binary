import React, { useRef, useState, useEffect } from "react";
import { GoStar } from "react-icons/go";
import { PiHandshakeLight } from "react-icons/pi";
import { TfiWallet } from "react-icons/tfi";
import { PiShoppingCartLight } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FeaturedProject1 } from "./FeaturedProject1";

export const ProjectDesigns = () => {
    const [activeButton, setActiveButton] = useState('featured');
    const [isVisible, setIsVisible] = useState(false);
    const [isButtonsVisible, setIsButtonsVisible] = useState(false);
    const textRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Trigger buttons animation after text animation
                    setTimeout(() => {
                        setIsButtonsVisible(true);
                    }, 500);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px'
            }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const getButtonStyles = (buttonName) => {
        const isActive = activeButton === buttonName;
        return `bg-${isActive ? 'white' : 'transperant'} flex flex-col  items-center justify-center w-[120px] h-[120px] 
                lg:w-[140px] lg:h-[140px]
            ${isActive ? 'text-[#1B2C5C]' : 'text-white hover:text-[#0ab7dd]'}
            rounded-lg text-center  cursor-pointer
            group transition-all duration-200 ease-in-out`;
    };

    const getIconStyles = (buttonName) => {
        const isActive = activeButton === buttonName;
        return `${isActive ? 'text-[#1B2C5C]' : 'text-white group-hover:text-[#0ab7dd]'}  transition-colors duration-300 ease-in-out`;
    };

    const getButtonAnimationClass = (index) => {
        const baseClass = "transform transition-all duration-1000 ease-out";
        const delay = index * 200; // 200ms delay between each button
        return `${baseClass} ${isButtonsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`;
    };

    return (
        <div className="pt-[20px] bg-[#1E3075] relative flex flex-col  w-full  justify-center align-center border-b border-white ">
            {/*text section */}
            <div
                ref={textRef}
                className={`text-center relative block z-5 w-full p-[15px] mx-auto transition-all text-white font-sans 
                    transform transition-all duration-1000 ease-out
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
                <div className="text-[1rem] lg:text-[1.2rem]  tracking-normal mb-2 uppercase "> our work</div>
                <h2 className="mx-auto mb-5 text-[clamp(1rem,_5vw,_2rem)] text-[1.5rem] lg:text-[2.8rem] leading-[1.2] font-semibold">Featured Website Design Projects</h2>
                <div className="racking-normal my-0 mb-2 leading-[1.5] font-normal font-sans text-base lg:text-xl">
                    Custom B2C, B2B and eCommerce solutions
                    <br />
                    optimized for traffic, engagement and conversion.
                </div>
            </div>
            {/*bottom section */}
            <div className="relative overflow-visible bg-transperant flex flex-col   gap-[40px] p-[20px] ">
                {/* active button section */}
                <div ref={buttonsRef} className="flex relative justify-center items-center  flex-col  lg:flex-row gap-[20px] border-none bg-transperant p-b-[20px] mx-auto w-[100%]">
                    <div className="flex flex-row gap-[20px]">
                        <div className={`${getButtonStyles('featured')} ${getButtonAnimationClass(0)}`} onClick={() => handleButtonClick('featured')}>
                            <div className={`text-2xl mb-4 ${getIconStyles('featured')}`}><GoStar size={29} /></div>
                            <div className="font-bold uppercase mb-[7px]  text-lg transition-colors duration-300 ease-in-out">Featured</div>
                            {activeButton === 'featured' && <MdKeyboardArrowDown className={getIconStyles('featured')} size={25} />}
                        </div>

                        <div className={`${getButtonStyles('b2b')} ${getButtonAnimationClass(1)}`} onClick={() => handleButtonClick('b2b')}>
                            <div className={`text-2xl mb-4 ${getIconStyles('b2b')}`}><PiHandshakeLight size={35} /></div>
                            <div className="font-bold uppercase mb-[7px]  text-lg transition-colors duration-300 ease-in-out">B2B</div>
                            {activeButton === 'b2b' && <MdKeyboardArrowDown className={getIconStyles('b2b')} size={25} />}
                        </div>
                    </div>
                    <div className="flex flex-row gap-[20px]">
                        <div className={`${getButtonStyles('ecommerce')} ${getButtonAnimationClass(3)}`} onClick={() => handleButtonClick('ecommerce')}>
                            <div className={`text-2xl mb-4 ${getIconStyles('ecommerce')}`}><PiShoppingCartLight size={35} /></div>
                            <div className="font-bold uppercase mb-[7px] text-lg transition-colors duration-300 ease-in-out">Ecommerce</div>
                            {activeButton === 'ecommerce' && <MdKeyboardArrowDown className={getIconStyles('ecommerce')} size={25} />}
                        </div>
                        <div className={`${getButtonStyles('b2c')} ${getButtonAnimationClass(2)}`} onClick={() => handleButtonClick('b2c')}>
                            <div className={`text-2xl mb-4 ${getIconStyles('b2c')}`}><TfiWallet size={29} /></div>
                            <div className="font-bold uppercase mb-[7px]  text-lg transition-colors duration-300 ease-in-out">B2C</div>
                            {activeButton === 'b2c' && <MdKeyboardArrowDown className={getIconStyles('b2c')} size={25} />}
                        </div>                       
                    </div>
                </div>
                {/*project section */}
                <div className="">
                   <FeaturedProject1 category={activeButton} />

                </div>

            </div>
        </div>
    )
}
