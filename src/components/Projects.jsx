import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
// Import icons from react-icons
import { SiPython, SiMysql, SiPostman, SiSqlite, SiXampp, SiLaravel, SiVite, SiFramer, SiThreedotjs } from "react-icons/si";
import { FaReact, FaPhp } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="p-8" id="Projects">
      <h2 className="uppercase font-semibold my-10 text-center text-lime-300 text-3xl lg:text-8xl">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              className="glowing-border p-1 rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative mb-4 overflow-hidden rounded-xl shadow-lg bg-dark-card transform transition-transform duration-300">
                {/* Main Content */}
                <div className="relative p-6 rounded-xl bg-[#1a1a1a] z-10">
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="h-auto w-full object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg md:text-2xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-md text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technology Icons */}
                  <div className="flex space-x-4 mt-4 text-gray-300">
                    {project.id === 1 && <SiPython size={24} />}
                    {project.id === 2 && (
                      <>
                        <FaReact size={24} />
                        <SiVite size={24} />
                        <SiFramer size={24} />
                        <SiThreedotjs size={24} />
                      </>
                    )}
                    {project.id === 3 && (
                      <>
                        <SiLaravel size={24} />
                        <FaPhp size={24} />
                        <SiMysql size={24} />
                        <SiPostman size={24} />
                        <SiSqlite size={24} />
                        <SiXampp size={24} />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
