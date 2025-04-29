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
    <div className=" relative w-full mt-0">
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
      <section
        className="relative h-screen text-white flex items-center justify-center"
        
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-800 opacity-77"  > <GlobeDemo/></div>
       
       
        
      
      </section>
      <section className="relative h-screen text-white flex items-center justify-center">
      <ClientSlider/>
      </section>
      <section className="relative min-h-screen w-full h-full">
  <StickyScrollRevealDemo />
</section>


     <Footer/>
    </>
  );
};

export default NavbarDemo;
