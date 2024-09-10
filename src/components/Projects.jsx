import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section className="p-8" id="Projects">
      <h2 className="uppercase font-semibold my-10 text-center text-lime-300 text-3xl lg:text-8xl">
        My Projects
      </h2>
      <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
        {PROJECTS.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative mb-4 overflow-hidden rounded-lg bg-white shadow-lg">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="h-auto w-full object-cover"
              />
              <div className="absolute m-4 rounded-lg bottom-0 p-8 text-lime-300 backdrop-blur-lg drop-shadow-xl ring-white/35 ring-[1px] ">
                <h3 className="text-lg md:text-3xl font-semibold text-lime-300">{project.title}</h3>
                <p className="text-sm md:text-lg text-white">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
