import { useEffect, useState } from "react";

const FloatingNav = () => {
  const [scrolled, setScrolled] = useState(false);

  // Optimize scroll listener with requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "mt-6 h-16" : "h-20"
      } backdrop-blur bg-black/40 border-b border-neutral-800 rounded-xl max-w-7xl mx-auto flex items-center justify-between px-6`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-yellow-400 p-2 rounded-full">
          <img
            src="/src/assets/react.svg"
            alt="logo"
            className="w-6 h-6"
            loading="lazy" // Lazy load logo
          />
        </div>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-10 text-white font-medium">
        {["Proof", "Help", "Pricing"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-yellow-300"
          >
            {item}
          </a>
        ))}
      </div>
      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button className="text-white">Login</button>
        <button className="bg-yellow-400 hover:brightness-110 text-black font-semibold px-4 py-2 rounded-full shadow-[0_0_12px_#ff0] transition-all duration-300">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default FloatingNav;
