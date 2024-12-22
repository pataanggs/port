import { useState, useEffect } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
// Import icons from react-icons
import {
  SiPython,
  SiMysql,
  SiPostman,
  SiSqlite,
  SiXampp,
  SiLaravel,
  SiVite,
  SiFramer,
  SiThreedotjs,
  SiGodotengine,
  SiBlender,
  SiAdobephotoshop,
} from "react-icons/si";
import { FaReact, FaPhp } from "react-icons/fa";

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Handle next and previous project changes
  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === PROJECTS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? PROJECTS.length - 1 : prevIndex - 1
    );
  };

  const currentProject = PROJECTS[currentProjectIndex];

  // Set up auto-changing of the project card
  useEffect(() => {
    const intervalId = setInterval(handleNext, 3000); // Change every 3 secomds

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <section className="p-8 text-center" id="Projects">
      <h2 className="uppercase font-bold mb-8 text-center text-lime-300 text-4xl lg:text-6xl">
        My Projects
      </h2>
      <div className="relative flex justify-center items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 text-lime-300 hover:text-white transition bg-gray-800 p-2 rounded-full shadow-lg"
        >
          &larr;
        </button>

        {/* Project Card */}
        <motion.div
          key={currentProject.id}
          className="p-1 rounded-xl bg-gradient-to-br from-lime-300 via-lime-500 to-green-600 shadow-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="overflow-hidden rounded-xl bg-[#161b22]">
            <img
              src={currentProject.imgSrc}
              alt={currentProject.title}
              className="w-full h-64 object-cover object-center rounded-t-xl transition-transform duration-300 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {currentProject.title}
              </h3>
              <p className="text-gray-400 mb-4">{currentProject.description}</p>
              <div className="flex flex-wrap gap-3 mt-4 text-gray-300">
                {/* Technology Icons */}
                {currentProject.id === 1 && <SiPython size={24} />}
                {currentProject.id === 2 && (
                  <>
                    <FaReact size={24} />
                    <SiVite size={24} />
                    <SiFramer size={24} />
                    <SiThreedotjs size={24} />
                  </>
                )}
                {currentProject.id === 3 && (
                  <>
                    <SiLaravel size={24} />
                    <FaPhp size={24} />
                    <SiMysql size={24} />
                    <SiPostman size={24} />
                    <SiSqlite size={24} />
                    <SiXampp size={24} />
                  </>
                )}
                {currentProject.id === 4 && (
                  <>
                    <SiGodotengine size={24} />
                    <SiBlender size={24} />
                    <SiAdobephotoshop size={24} />
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 text-lime-300 hover:text-white transition bg-gray-800 p-2 rounded-full shadow-lg"
        >
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default Projects;
