
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0f172a", 
    "#000000", 
    "#171717", 
  ];

  const linearGradients = [
    "linear-gradient(to bottom right,rgb(6, 210, 246),rgb(7, 250, 169))",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right,rgb(246, 106, 6),rgb(245, 185, 7))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-screen w-screen justify-center space-x-20 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10  w-[410px] mb-10 mt-10   rounded-md bg-white hidden lg:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
      <div className="relative flex items-start  px-20 h-[50vh]">
        <div className="max-w-4xl h-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-kg mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          {/* Space for the last item to scroll fully */}
          <div className="h-[20vh]" />
        </div>
      </div>
    </motion.div>
  );
};
