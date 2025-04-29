"use client";

import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[3rem] space-y-7  ">
      

      <TypewriterEffectSmooth words={words} />


     

     
    </div>
  );
}

export default TypewriterEffectSmoothDemo;
