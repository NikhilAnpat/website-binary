import { useEffect, useState } from "react";

 const FloatingNav=()=> {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full mx-12 z-50 transition-all duration-300 ${
        scrolled ? "mt-6 h-16" : "h-20"
      } backdrop-blur bg-black/40 border-b border-neutral-800 rounded-xl mx-auto max-w-7xl flex items-center justify-between px-6`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-yellow-400 p-2 rounded-full">
          <img src="./src/assets/react.svg" alt="logo" className="w-6 h-6" />
        </div>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-10 text-white font-medium">
        <a href="#proof" className="hover:text-yellow-300">Proof</a>
        <a href="#help" className="hover:text-yellow-300">Help</a>
        <a href="#pricing" className="hover:text-yellow-300">Pricing</a>
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-4">
        <button className="text-white">Login</button>
        <button className="bg-yellow-400 hover:brightness-110 text-black font-semibold px-4 py-2 rounded-full shadow-[0_0_12px_#ff0] transition-all duration-300">
          Sign up
        </button>
      </div>
    </nav>
  );
}
export default FloatingNav;