import React, { useState, useEffect, useRef } from 'react';
import { RiArrowDownSFill } from "react-icons/ri";

export const FeaturedProject = () => {
    const [showMore, setShowMore] = useState(false);
    const componentRef = useRef(null);

    const handleHideExamples = () => {
        setShowMore(false);
        componentRef.current?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
    <div ref={componentRef} className='flex justify-center items-center flex-col'>
        <div className='relative flex flex-col lg:flex-row gap-[20px] px-[15px] w-full'>
            {/*left side */}
            <div className=' flex flex-col gap-[30px] p-[5px] '>
                <div className='w-full cursor-pointer relative group'>
                    <img src="../src/assets/project-1.png" />
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div className='bg-black/50 rounded-full lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] flex items-center justify-center'>
                            <p className='text-white font-bold text-center text-md lg:text-xl break-words px-2'>Click to view project</p>
                        </div>
                    </div>
                </div>
                <div className='w-full cursor-pointer relative group'>
                    <img src='../src/assets/projet-2.png' />
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div className='bg-black/50 rounded-full lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] flex items-center justify-center'>
                            <p className='text-white font-bold text-center text-md lg:text-xl break-words px-2'>Click to view project</p>
                        </div>
                    </div>
                </div>
                <div className='w-full cursor-pointer relative group'>
                    <img src='../src/assets/project-3.png' />
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div className='bg-black/50 rounded-full lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] flex items-center justify-center'>
                            <p className='text-white font-bold text-center text-md lg:text-xl break-words px-2'>Click to view project</p>
                        </div>
                    </div>
                </div>
                {showMore ? 
                    <div className='w-full cursor-pointer relative group'>
                        <img src='../src/assets/project-4.png' />
                        <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <div className='bg-black/50 rounded-full lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] flex items-center justify-center'>
                                <p className='text-white font-bold text-center text-md lg:text-xl break-words px-2'>Click to view project</p>
                            </div>
                        </div>
                    </div> 
                : <></>}
            </div>
            {/*right side */}
            <div className=' flex flex-col gap-[30px] p-[5px] '>
                <div className='w-full cursor-pointer relative group'>
                    <img src='../src/assets/project-5.png' />
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div className='bg-black/50 rounded-full lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] flex items-center justify-center'>
                            <p className='text-white font-bold text-center text-md lg:text-xl break-words px-2'>Click to view project</p>
                        </div>
                    </div>
                </div>
                <div className='w-full cursor-pointer relative group'>
                    <img src='../src/assets/project-6.png' />
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div className='bg-black/50 rounded-full lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] flex items-center justify-center'>
                            <p className='text-white font-bold text-center text-md lg:text-xl break-words px-2'>Click to view project</p>
                        </div>
                    </div>
                </div>
                <div className='w-full cursor-pointer relative group'>
                    <img src='../src/assets/project-7.png' />
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div className='bg-black/50 rounded-full lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] flex items-center justify-center'>
                            <p className='text-white font-bold text-center text-md lg:text-xl break-words px-2'>Click to view project</p>
                        </div>
                    </div>
                </div>
                {showMore ? 
                    <div className='w-full cursor-pointer relative group'>
                        <img src='../src/assets/project-8.png' />
                        <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <div className='bg-black/50 rounded-full lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] flex items-center justify-center'>
                                <p className='text-white font-bold text-center text-md lg:text-xl break-words px-2'>Click to view project</p>
                            </div>
                        </div>
                    </div> 
                : <></>}
            </div>
        </div>
        {/*highlighted section*/}
        <div className='h-[10px] mb-5 w-full relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-[#04E4FF] to-transparent'></div>
        </div>
        {/*button */}
        <div className='py-[10px] px-[5px] font-bold'>
            <a className='uppercase text-lg flex flex-row items-center gap-2 text-white hover:text-[#0ab7dd] text-center group cursor-pointer' >
                {showMore ? 
                    <p onClick={handleHideExamples}>Hide Examples</p> :
                    <p onClick={() => setShowMore(true)}>Load More Examples</p>
                }
                <RiArrowDownSFill 
                    size={25} 
                    className="transform transition-transform duration-300 ease-in-out group-hover:rotate-[-90deg]"
                />
            </a>
        </div>
    </div>
    )
}