import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <section id="education">
      <h2 className="my-10 text-center text-3xl lg:text-8xl">
        My Educational Journey
      </h2>
      <div className="mx-auto max-w-6xl">
        {EDUCATION.map((education, id) => (
          <div key={id} className="mx-4 mb-20">
            <h2 className="font-medium lg:text-2xl text-center">
              {education.institution}
            </h2>
            <div className="flex justify-between">
              <p className="py-4 tracking-wide lg:text-xl">
                {education.degree}
              </p>
              <p className="py-4 lg:text-xl">
                {education.year}
              </p>
            </div>
            <p className="font-sans text-gray-400 text-justify">
              {education.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
