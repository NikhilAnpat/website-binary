"use client";

import { memo, useMemo } from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const TypewriterEffectSmoothDemo = () => {
  const words = useMemo(() => [
    { text: "Build", className: baseClass },
    { text: "awesome", className: baseClass },
    { text: "apps", className: baseClass },
    { text: "with", className: baseClass },
    {
      text: "Aceternity.",
      className: `${baseClass} text-blue-500 dark:text-blue-500`,
    },
  ], []);

  return (
    <div className="flex items-center justify-center">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
};
const baseClass = "text-lg md:text-2xl lg:text-5xl";

export default memo(TypewriterEffectSmoothDemo);
