"use client";

import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
      className:"text-lg md:text-2xl lg:text-5xl "
    },
    {
      text: "awesome",
      className:"text-lg md:text-2xl lg:text-5xl  "
    },
    {
      text: "apps",
      className:"text-lg md:text-2xl lg:text-5xl "
    },
    {
      text: "with",
      className:"text-lg md:text-2xl lg:text-5xl "
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500 text-lg md:text-2xl lg:text-5xl ",
    },
  ];

  return (
    <div className="flex items-center justify-center  ">
      

      <TypewriterEffectSmooth words={words} />


     

     
    </div>
  );
}

export default TypewriterEffectSmoothDemo;
