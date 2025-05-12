import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";



const caseStudiesData = {
  hp: {
    title: "HP needed to implement a global rewards program.",
    timeframe: "In 6 months",
    stats: [
      { value: "40k", label: "active members inside the program" },
      { value: "56%", label: "of customers are repeat customers" },
    ],
    logo: "https://www.digitalsilk.com/wp-content/uploads/2022/07/hp-logo.svg",
    darkLogo:
      "https://www.digitalsilk.com/wp-content/uploads/2022/07/bo-logo-dark.svg",
    bgImage:
      "https://www.digitalsilk.com/wp-content/uploads/2022/10/cc-preview2.jpg",
    caseStudyLink: "READ HP CASE STUDY",
    logoWidth: "70",
    logoHeight: "71",
  },
  xerox: {
    title:
      "Xerox needed a new strategy and website to capture B2B leads for their new printer technologies.",
    timeframe: "In 6 months",
    stats: [
      { value: "20%", label: "sales increase for Xerox Versalink" },
      { value: "43%", label: "conversion rate for nurtured leads" },
    ],
    logo: "https://www.digitalsilk.com/wp-content/uploads/2022/07/xerox-logo.svg",
    darkLogo:
      "https://www.digitalsilk.com/wp-content/uploads/2022/07/xerox-logo-dark.svg",
    bgImage:
      "https://www.digitalsilk.com/wp-content/uploads/2022/10/xerox-bg-tall.jpg",
    caseStudyLink: "READ XEROX CASE STUDY",
    logoWidth: "134",
    logoHeight: "31",
  },
  doforms: {
    title:
      "doForms, provider of data collection mobile forms, needed a more user-friendly and SEO optimized website to grow conversions.",
    timeframe: "In 2 months",
    stats: [
      { value: "22%", label: "increase in new traffic" },
      { value: "1.5k", label: "new organic keywords" },
    ],
    logo: "https://www.digitalsilk.com/wp-content/uploads/2022/11/doForms-logo-blue.svg",
    darkLogo:
      "https://www.digitalsilk.com/wp-content/uploads/2022/11/doForms-logo-dark-blue.svg",
    bgImage:
      "https://www.digitalsilk.com/wp-content/uploads/2022/11/Web-design-case-study-Doforms.jpg",
    caseStudyLink: "READ doFORMS CASE STUDY",
    logoWidth: "160",
    logoHeight: "53",
  },
  fieldedge: {
    title:
      "FieldEdge, a leading provider of field management solutions, needed to redesign their website to improve performance and attract more prospects.",
    timeframe: "Shortly after launch",
    stats: [
      { value: "19%", label: "increase in overall traffic" },
      { value: "50%", label: "faster loading speed" },
    ],
    logo: "https://www.digitalsilk.com/wp-content/uploads/2022/11/FieldEdge-logo-blue.svg",
    darkLogo:
      "https://www.digitalsilk.com/wp-content/uploads/2022/11/FieldEdge-logo-dark-blue.svg",
    bgImage:
      "https://www.digitalsilk.com/wp-content/uploads/2022/11/fieldedge-main.jpg",
    caseStudyLink: "READ FieldEdge CASE STUDY",
    logoWidth: "160",
    logoHeight: "39",
  },
  miami: {
    title:
      "Miami Country Day School (MCDS), a top private school in Miami, wanted to grow online visibility and on-site engagement with a redesigned website.",
    timeframe: "Shortly after launch",
    stats: [
      { value: "32%", label: "decrease in bounce rates" },
      { value: "15%", label: "increase in organic traffic" },
    ],
    logo: "https://www.digitalsilk.com/wp-content/uploads/2022/11/MCDS-logo-blue.svg",
    darkLogo:
      "https://www.digitalsilk.com/wp-content/uploads/2022/11/MCDS-logo-dark-blue.svg",
    bgImage:
      "https://www.digitalsilk.com/wp-content/uploads/2022/11/Web-design-case-study-mcds.jpg",
    caseStudyLink: "READ MCDS CASE STUDY",
    logoWidth: "139",
    logoHeight: "50",
  },
};

const Content = () => {
  const [activeCase, setActiveCase] = useState("hp");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [activeCase]);

  const handleCardClick = (key) => {
    setActiveCase(key);
    setIsExpanded(true);
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden md:flex-row">
      {/* Mobile Card View */}
      <div className="block w-full bg-[#DAF0FF] overflow-y-auto xl:hidden">
        <div className="p-6 space-y-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-[#1e2a4a] mb-4">Case Studies</h1>
            <h2 className="mb-1 text-xl text-[#1e2a4a] ">From Concept To Market:</h2>
            <p className="text-xl">
              We Engineer Projects For{" "}
              <span className="text-cyan-500">Superior Performance</span>
            </p>
          </div>
          <div className="space-y-6">
            {Object.entries(caseStudiesData).map(([key, data]) => (
              <div key={key} className="relative">
                <div className="relative overflow-hidden rounded-lg cursor-pointer">
                  <div
                    className="relative h-[280px] w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.7)), url(${data.bgImage})`,
                    }}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                      <img
                        src={data.logo}
                        alt={`${key} logo`}
                        className="h-16 mb-8 brightness-0 invert"
                      />
                      {activeCase === key ? (
                        <div
                          className="flex flex-col items-center cursor-pointer"
                          onClick={() => setIsExpanded(false)}
                        >
                          <div className="flex items-center gap-6 text-white">
                            <div className="w-12 h-[1px] bg-white"></div>
                            <span className="text-lg tracking-wider">CLOSE</span>
                            <div className="w-12 h-[1px] bg-white"></div>
                          </div>
                          <span className="mt-2 text-white">▲</span>
                        </div>
                      ) : (
                        <div
                          className="flex flex-col items-center cursor-pointer"
                          onClick={() => {
                            setActiveCase(key);
                            setIsExpanded(true);
                          }}
                        >
                          <div className="flex items-center gap-6 text-white">
                            <div className="w-12 h-[1px] bg-white"></div>
                            <span className="text-lg tracking-wider">CLICK TO VIEW MORE</span>
                            <div className="w-12 h-[1px] bg-white"></div>
                          </div>
                          <span className="mt-2 text-white">▼</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {activeCase === key && isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-gradient-to-b from-[#DBF1FF] to-[#F1F9FF] px-6 py-8"
                  >
                    <div className="space-y-8">
                      <p className="text-xl text-[#1e2a4a] mb-6">{data.title}</p>
                      <p className="text-gray-600">
                        <span className="font-bold">{data.timeframe}</span>
                        , we achieved:
                      </p>
                      <div className="grid grid-cols-1 gap-8">
                        {data.stats.map((stat, index) => (
                          <div key={index} className="text-center">
                            <h3 className="text-[80px] font-bold text-[#00C2FF] leading-none mb-2">
                              {stat.value}
                            </h3>
                            <p className="text-[#1e2a4a] text-sm max-w-[180px] mx-auto">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                      {/* Action Buttons */}
                      <div className="flex flex-col gap-6 mt-12 w-full max-w-[360px] mx-auto px-4">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          className="relative  py-4 text-lg font-bold text-blue-600  transition-all duration-300 overflow-hidden group w-full"
                        >
                          <span className="relative z-10 flex items-center justify-center  text-[14px] md:text-[18px] transition-colors duration-300 group-hover:text-white whitespace-nowrap sm:text-md">
                            {data.caseStudyLink}
                            <span className="inline-block ml-2 transition-transform transform group-hover:translate-x-1">
                              →
                            </span>
                          </span>
                          <div className="absolute inset-0 border-4"
                            style={{
                              borderImage: "linear-gradient(7deg, #009cff 50%, #522ef4 65%, #9537e3 80%)",
                              borderImageSlice: 1,
                            }}
                          />
                          <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full -z-[1]" />
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          className="relative py-4 text-lg font-bold text-blue-600 uppercase transition-all duration-300 overflow-hidden group w-full"
                        >
                          <span className="relative z-10 flex items-center justify-center text-base transition-colors duration-300 group-hover:text-white whitespace-nowrap sm:text-lg">
                            START YOUR PROJECT
                            <span className="inline-block ml-3 transition-transform transform group-hover:translate-x-1">
                              →
                            </span>
                          </span>
                          <div className="absolute inset-0 border-4"
                            style={{
                              borderImage: "linear-gradient(7deg, #009cff 50%, #522ef4 65%, #9537e3 80%)",
                              borderImageSlice: 1,
                            }}
                          />
                          <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full -z-[1]" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View - Your existing code */}
      <div className="flex-row flex-1 hidden xl:flex">
        {/* Left Sidebar with Background Image */}
        <aside className="relative w-full md:w-1/3">
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.7)), url(${caseStudiesData[activeCase].bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: isTransitioning ? 0.9 : 1, // Slightly reduce opacity
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-8">
            <h1
              className="text-[3.5rem] font-bold tracking-tight leading-none mb-16 absolute mx-[280px] mt-[1rem]"
              style={{
                fontFamily: "Inter, sans-serif",
                textShadow: "0px 4px 4px rgba(0,0,0,0.2)",
                width: "max-content",
              }}
            >
              <span className="text-white">Case St</span>
              <span className="text-[#1e2a4a]">udies</span>
            </h1>

            <ul className="mt-[173px] space-y-8 ml-[240px]">
              {Object.entries(caseStudiesData).map(([key, data]) => (
                <li
                  key={key}
                  className={`relative cursor-pointer transition-all duration-300 ${activeCase === key
                    ? "opacity-100"
                    : "opacity-70 hover:opacity-100"
                    }`}
                  onClick={() => setActiveCase(key)}
                >
                  <div
                    className={`flex items-center pl-4 space-x-4 border-b-2 py-4 -mx-8 ${activeCase === key ? "border-cyan-400" : "border-white"
                      }`}
                  >
                    <img
                      src={data.logo}
                      alt={`${key} logo`}
                      width={data.logoWidth}
                      height={data.logoHeight}
                      className={`transition-all duration-300 ${activeCase === key
                        ? "[filter:invert(70%)_sepia(78%)_saturate(757%)_hue-rotate(150deg)_brightness(155%)_contrast(98%)]"
                        : "brightness-0 invert opacity-2.7 hover:opacity-100 hover:[filter:invert(70%)_sepia(78%)_saturate(757%)_hue-rotate(150deg)_brightness(155%)_contrast(98%)]"
                        }`}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <section className="relative w-full p-12 bg-gradient-to-br from-[#DBF1FF] to-[#F1F9FF]  md:w-2/3">
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-24 text-end">
              <h2 className="mb-1 text-xl tracking-tight text-gray-800">
                From Concept To Market:
              </h2>
              <p className="text-xl">
                We Engineer Projects For{" "}
                <span className="text-cyan-500">Superior Performance</span>
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-20"
              >
                {/* Logo and Description */}
                <div className="relative w-full">
                  <div className="flex items-center gap-5">
                    <img
                      src={caseStudiesData[activeCase].darkLogo}
                      alt={`${activeCase} logo`}
                      className="h-[70px] brightness-0"
                    />
                    <div className="w-[12rem] h-[2.5px] bg-cyan-400" />
                    <div className="max-w-[400px]">
                      <p className="mb-6 text-lg leading-snug text-gray-800">
                        {caseStudiesData[activeCase].title}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-bold">
                          {caseStudiesData[activeCase].timeframe}
                        </span>
                        , we achieved:
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-16">
                  <div className="grid grid-cols-2 gap-x-32 md:gap-x-18">
                    {caseStudiesData[activeCase].stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="relative"
                      >
                        <h3 className="mb-4 text-[150px] font-bold text-[#00C2FF] leading-none">
                          {stat.value}
                        </h3>
                        <p className="text-[20px] text-[#1e2a4a] font-medium leading-tight max-w-[180px] mx-5">
                          {stat.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col xl:flex-row gap-6 2xl:gap-24 pt-5 ">
                  {/* Button 1 */}


                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="relative inline-flex items-center justify-center 
                      py-2 sm:py-3 md:py-4 
                          text-sm sm:text-base md:text-lg 
                      tracking-normal sm:tracking-tight 
                            uppercase transition-all duration-300 group overflow-hidden text-blue-600 border-[3px]"
                    style={{
                      borderImage: "linear-gradient(7deg, #009cff 50%, #522ef4 65%, #9537e3 80%)",
                      borderImageSlice: 1,
                    }}
                  >
                    {/* Background Fill on Hover */}
                    <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -z-10" />

                    {/* Button Content */}
                    <span className="relative z-10 flex items-center justify-center 
                      px-2 sm:px-[5px] 
                      text-[10px] sm:text-[12px] md:text-[20px] 
                      text-sm sm:text-base md:text-lg 
                      font-bold whitespace-nowrap transition-colors duration-300 group-hover:text-white">
                      {caseStudiesData[activeCase].caseStudyLink} {/* or START YOUR PROJECT */}
                      <span className="ml-2 transition-transform transform group-hover:translate-x-1">→</span>
                    </span>
                  </motion.button>


                  {/* Button 2 */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="relative inline-flex items-center justify-center 
                      py-2 sm:py-3 md:py-4 
                          text-sm sm:text-base md:text-lg 
                      tracking-normal sm:tracking-tight 
                            uppercase transition-all duration-300 group overflow-hidden text-blue-600 border-[3px]"
                    style={{
                      borderImage: "linear-gradient(7deg, #009cff 50%, #522ef4 65%, #9537e3 80%)",
                      borderImageSlice: 1,
                    }}
                  >
                    {/* Background Fill on Hover */}
                    <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -z-10" />

                    {/* Button Content */}
                    <span className="relative z-10 flex items-center justify-center 
                      px-2 sm:px-[5px] 
                      text-[10px] sm:text-[12px] md:text-[20px] 
                      font-bold whitespace-nowrap transition-colors duration-300 group-hover:text-white">
                      START YOUR PROJECT
                      <span className="ml-2 transition-transform transform group-hover:translate-x-1">→</span>
                    </span>
                  </motion.button>



                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Background Company Logo */}
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.05, y: -150 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-[600px] h-[600px]">
              <img
                src={caseStudiesData[activeCase].darkLogo}
                alt=""
                className="w-full h-full object-contain opacity-1 blur-[1px] filter grayscale"
              />
            </div>
          </motion.div>
        </section >
      </div >
    </div >
  );
};
export default Content;
