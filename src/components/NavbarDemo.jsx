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
import { useState } from "react";
import Footer from "./Footer";
import TypewriterEffectSmoothDemo from "./TypewriterEffectSmoothDemo";
import { GlobeDemo } from "./GlobeDemo";
import ClientSlider from "./ClientSlider";
import { StickyScrollRevealDemo } from "./StickyScrollRevealDemo";
import { ProjectDesigns } from "./ui/ProjectDesigns";
import Content from '../components/ui/Content.jsx';



function NavbarDemo() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className=" bg-gradient-to-b from-[#000A32] to-gray-800   w-full mt-0">
        <Navbar>
          {/* <h2 className="text-white text-cente">this</h2> */}
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <NavbarButton variant="secondary" >Login</NavbarButton>
              <NavbarButton variant="primary">Book a call</NavbarButton>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            </MobileNavHeader>

            <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300">
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full">
                  Login
                </NavbarButton>
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full">
                  Book a call
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
        <DummyContent />
        {/* Navbar */}
      </div>
    </>
  );
}



const DummyContent = () => {

  return (
    <>
      <section className="relative min-h-screen text-white  flex items-center justify-center">
        <div className="absolute inset-0 opacity-77"> <GlobeDemo /></div>
      </section>
      <section>
        <ProjectDesigns />
      </section>
      <section className="relative  text-white flex items-center justify-center">
        <ClientSlider />
      </section>
      <section className="relative min-h-screen w-full h-full">
        <StickyScrollRevealDemo />
      </section>

      
        
      <Content/>
      <Footer />
    </>
  );
};

export default NavbarDemo;
