import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../components/ui/resizable-navbar";
import { useState, lazy, Suspense, memo } from "react";

const Footer = lazy(() => import("./Footer")); // Lazy-loaded
const ClientSlider = lazy(() => import("./ClientSlider"));

import TypewriterEffectSmoothDemo from "./TypewriterEffectSmoothDemo";
import { GlobeDemo } from "./GlobeDemo";
import { StickyScrollRevealDemo } from "./StickyScrollRevealDemo";
import { ProjectDesigns } from "./ui/ProjectDesigns";
const Content = lazy(() => import("./ui/Content")); // Lazy-loaded
// import Content from "../components/ui/Content.jsx";

const NavbarDemo = () => {
  const navItems = [
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#000A32] to-gray-800 w-full mt-0">
      <Navbar>
        {/* Desktop */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <MemoizedDummyContent />
    </div>
  );
};

// Wrap DummyContent with React.memo
const DummyContent = () => {
  return (
    <>
      <section className="relative min-h-screen text-white items-center justify-center">
            <Suspense fallback={<div className="text-white text-center py-6">Loading GlobeDemo...</div>}>
        <div className="absolute inset-0 opacity-77">
          <GlobeDemo />
        </div>
         </Suspense>
      </section>

    <Suspense fallback={<div className="text-white">Loading clients...</div>}>
    <section>
      <ProjectDesigns />
    </section>
      </Suspense> 

      <section className="relative text-white flex items-center justify-center">
        <Suspense fallback={<div className="text-white">Loading clients...</div>}>
          <ClientSlider />
        </Suspense>
      </section>

        <Suspense fallback={<div className="text-white">Loading StickyScrollReveal...</div>}>
      <section className="relative min-h-screen w-full h-full">
        <StickyScrollRevealDemo />
      </section>
       </Suspense>

      <Suspense fallback={<div className="text-white text-center py-6">Loading Content...</div>}>
        <Content />
      </Suspense>

      <Suspense fallback={<div className="text-white text-center py-6">Loading footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

const MemoizedDummyContent = memo(DummyContent);

export default memo(NavbarDemo);
