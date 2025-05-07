import React, { useRef, useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  // Refs for left and right content
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // Track if screen is desktop size
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 1024px)').matches : false
  );

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const listener = () => setIsDesktop(media.matches);
    media.addEventListener('change', listener);
    setIsDesktop(media.matches);
    return () => media.removeEventListener('change', listener);
  }, []);

  // Wheel handler for left content (native event)
  const handleLeftWheel = useCallback((e) => {
    const right = rightRef.current;
    if (!right) return;
    const delta = e.deltaY;
    const atTop = right.scrollTop === 0;
    const atBottom = Math.ceil(right.scrollTop + right.clientHeight) >= right.scrollHeight;
    // If scrolling up and not at top, or down and not at bottom, scroll right content
    if ((delta < 0 && !atTop) || (delta > 0 && !atBottom)) {
      e.preventDefault();
      e.stopPropagation();
      right.scrollBy({ top: delta, behavior: "auto" });
    }
    // else, let the event bubble (whole component scrolls)
  }, []);

  // Attach native wheel event with passive: false, only on desktop
  useEffect(() => {
    const left = leftRef.current;
    if (!left || !isDesktop) return;
    left.addEventListener("wheel", handleLeftWheel, { passive: false });
    return () => {
      left.removeEventListener("wheel", handleLeftWheel, { passive: false });
    };
  }, [handleLeftWheel, isDesktop]);

  return (
    <div className="relative bg-[#00042A] block leading-[1.2] overflow-x-auto no-scrollbar ">
      <div className="ml-0 lg:ml-[140px] pl-0 lg:pl-[20px] pt-[20px] lg:pt-[40px] w-full lg:w-100 mx-auto block rounded-[12px] overflow-x-auto ">
        {/*main div */}
        <div className="flex flex-col lg:flex-row flex-wrap items-start gap-[20px] lg:gap-[30px] bg-[rgba(249,249,249,0.0)] ">
          {/*left content */}
          <div
            ref={leftRef}
            className="w-full lg:max-w-[41%] pt-0 pr-0 pl-[5px] lg:pl-0 lg:pr-[30px] sticky lg:top-[100px] flex flex-1 items-center justify-center text-left mb-[30px] lg:mb-0"
          >
            <div className="flex flex-col gap-y-[24px] lg:gap-y-[40px] w-full ">
              <div className="font-semibold block box-border tracking-0 text-[clamp(1rem,_5vw,_2rem)] text-[1.5rem] lg:text-[2.8rem] leading-[1.2] ">
                <div className="text-[#00B9FF] mb-[0.5em] text-[1rem] lg:text-[1.2rem]"> WHY DIGITAL SILK? </div>
                <h2 className="text-white mb-[0.5em] relative block text-inherit font-inherit leading-inherit m-0 z-1 ">
                  Discover Our Expertise as a Web Design Company
                </h2>
              </div>
              <div className="block box-border text-[#FFFFFF] w-full leading-[1.5] font-normal font-sans text-base lg:text-xl mt-0 py-0 pr-0">
                <p className="mx-0 mt-0 ">
                  As a full-service web design agency, we handle all your digital needs under one roof.
                  Our custom web design services include thorough research and planning, bespoke designs and digital
                  strategies tailored to grow your reach, drive traffic and encourage engagement.
                </p>
              </div>
              <div className="flex flex-wrap items-start overflow-x-auto gap-y-0 gap-x-[16px] lg:gap-x-[30px]">
                <div className="block box-border ml-0 lg:ml-[-8vh] w-full lg:w-[110vw] mb-[24px] lg:mb-[40px]">
                  <div className="block box-border ">
                    <picture>
                      <source srcSet="https://www.digitalsilk.com/wp-content/uploads/2024/09/Explore-Our-Web-Design-Services-1.png.webp" type="image/webp" />
                      <img decoding="async" className="c-image__src" loading="lazy" src="https://www.digitalsilk.com/wp-content/uploads/2024/09/Explore-Our-Web-Design-Services-1.png" alt="Explore Our Web Design Services" width="950" height="500" data-eio="p" />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*right content */}
          <div
            ref={rightRef}
            className="w-full lg:max-w-[calc(58%-30px)] bg-[#00042A] pb-[20px] lg:pb-[30px] pr-[4px] lg:pr-0 flex h-auto lg:h-[100vh] items-center justify-center lg:items-start lg:justify-start md:items-center md:justify-center text-left overflow-y-auto no-scrollbar"
          >
            <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start md:items-center md:justify-center gap-y-[24px] lg:gap-y-[40px] w-full">
              {content.map((item, index) => {
                const motionDivProps = {
                  key: item.title + index,
                  className: cn(
                    "transition-all duration-0 ease-in-out transform justify-center text-white",
                  " group flex flex-col gap-[20px] p-[16px] h-[420px] sm:h-[380px] z-20 border border-white/20 relative overflow-hidden",
                    "w-[90vw] sm:w-[400px] md:w-full lg:w-[600px]",
                    "max-w-[95vw] sm:max-w-[400px] lg:max-w-[750px]",
                    "bg-[#0A0E32]"
                  ),
                  initial: {
                    opacity: 0.6
                  },
                  whileHover: isDesktop
                    ? {
                        opacity: 1,
                        backgroundColor: "#fff",
                        color: "#0f172a",
                        transition: { duration: 0.0, ease: "easeOut" }
                      }
                    : {}
                };
                
                
                if (isDesktop) {
                  motionDivProps.whileHover = {
                    opacity: 1,
                    width: 750,
                    left: 0,
                    backgroundColor: "#fff",
                    color: "#0f172a",
                    transition: { duration: 0.0, ease: "easeOut" },
                  };
                }
                return (
                  <motion.div {...motionDivProps}>
                    {/* Glow image in bottom-right, only visible on hover */}
                    <img
                      src="https://www.digitalsilk.com/wp-content/themes/digitalsilk/assets/_dist/images/glow_borders-mod.png"
                      alt="glow border"
                      className="absolute bottom-0 right-0 w-80 h-70 object-contain pointer-events-none select-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden lg:block"
                      style={{ zIndex: 14}}
                    />
                    <motion.div className={cn("")}>
                      <img src={`${item.image}`} className="" />
                    </motion.div>
                    <motion.h2
                      className={cn(
                        "text-2xl font-bold transition-colors relative z-10 text-white group-hover:text-slate-700"
                      )}
                    >
                      {item.title}
                    </motion.h2>
                    {/* image only visible on hover */}
                    <motion.div>
                      <img src={`${item.picture}`}
                        className="absolute bottom-[90px] right-[100px] w-80 h-70 object-contain pointer-events-none select-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden lg:block"
                        style={{ zIndex: 1 }} />
                    </motion.div>
                    <motion.p
                      className={cn(
                        "w-full max-w-full break-words  transition-colors relative z-10 text-white group-hover:text-slate-700 pb-[5px]"
                      )}
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

