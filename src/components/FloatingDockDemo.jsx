import React, { useMemo } from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const iconClassName = "h-[3rem] w-[3rem] text-neutral-500 dark:text-neutral-300";

  const links = useMemo(
    () => [
      {
        title: "Instagram",
        icon: <IconBrandInstagram className={iconClassName} />,
        href: "https://www.instagram.com",
      },
      {
        title: "LinkedIn",
        icon: <IconBrandLinkedin className={iconClassName} />,
        href: "https://www.linkedin.com",
      },
      {
        title: "Twitter",
        icon: <IconBrandX className={iconClassName} />,
        href: "https://www.twitter.com",
      },
      {
        title: "GitHub",
        icon: <IconBrandGithub className={iconClassName} />,
        href: "https://github.com",
      },
    ],
    []
  );

  return (
    <div className="flex items-start mt-auto justify-start h-0 w-full md:w-[41%]">
      <FloatingDock mobileClassName="translate-y-10" items={links} />
    </div>
  );
}
