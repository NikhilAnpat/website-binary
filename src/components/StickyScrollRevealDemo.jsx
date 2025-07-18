"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

// Import image assets
import card1 from "../assets/card1.svg";
import card2 from "../assets/card2.svg";
import card3 from "../assets/card3.svg";
import card4 from "../assets/card4.svg";
import picture1 from "../assets/website_redesign-min.png3.webp";
import picture2 from "../assets/ux_ui_design-min4.png";
import picture3 from "../assets/responsive_design-min2.png";
import picture4 from "../assets/custom_web_design-min.webp";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-emerald-500 text-white">
        Collaborative Editing
      </div>
    ),
    image: card1,
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. Track every modification in real time and say goodbye to version chaos.",
    content: (
      
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src={picture1}
          width={350}
          height={350}
          loading="lazy"
          className="h-full w-full object-contain"
          alt="Real-time changes demo"
        />
      </div>
    ),
    image: card2,
  },
  {
    title: "Version control",
    description:
      "Stay in sync with automatic updates and no stress of version mismatches. Our platform keeps your team aligned.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500 to-yellow-500 text-white">
        Version control
      </div>
    ),
    image: card3,
  },
  {
    title: "Running out of content",
    description:
      "Keep your work flowing with rich collaboration tools, seamless design control, and a smooth content experience.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-emerald-500 text-white">
        Running out of content
      </div>
    ),
    image: card4,
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full bg-[#00042A] px-0 py-0 relative">
      <StickyScroll content={content} />
    </div>
  );
}
