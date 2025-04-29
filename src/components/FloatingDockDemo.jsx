import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-[3rem] w-[3rem] text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-[3rem] w-[3rem] text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#", 
    },
    
   
     {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-[3rem] w-[3rem] text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-[3rem] w-[3rem] text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <div className="flex items-start mt-auto justify-start h-[0rem] w-[41%]"> {/* Adjusted the width */}
    <FloatingDock
      mobileClassName="translate-y-10" 
      items={links}
    />
  </div>
  
  );
}
