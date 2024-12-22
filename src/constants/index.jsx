import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import dieseldragrace from "../assets/dieseldragrace.webp";
import porto from "../assets/porto.png";
import wasteless from "../assets/wasteless.png";
import TheForestKeeper from "../assets/TheForestKeeper.jpg";
import { link } from "framer-motion/client";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "education", name: "education" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "React, Next.js, Node, MongoDb, Tailwind, MySql, Javascript, C++, Python, Java,";

export const PROJECTS = [
  {
    id: 1,
    title: "Diesel Drag Race Game",
    description:
      "A game about drag racing with diesel trucks. The game is built using Python and the Pygame library.",
    imgSrc: dieseldragrace,
    link: "https://github.com/urbaee/Diesel-Drag-Race",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A personal portfolio website built using React, Vite, and Tailwind CSS.",
    imgSrc: porto,
    link: "https://github.com/pataanggs/port",
  },
  {
    id: 3,
    title: "Wasteless",
    description:
      "WasteLess is an app that helps supermarkets reduce food waste by offering automatic discounts on products nearing their expiration date and donating unsold food. The app targets supermarkets, customers looking for discounted products, and charities accepting food donations.",
    imgSrc: wasteless,
    link: "https://github.com/Aziz097/WasteLess",
  },
  {
    id: 4,
    title: "The Forest Keeper",
    description:
      "The Forest Keeper is a First-Person Action-Adventure Horror game developed by the Malas Ngoding Studio. This game explores the mysteries of the Sumatera jungle, blending tense gameplay mechanics and an emotionally-driven story of redemption.",
    imgSrc: TheForestKeeper,
    link:"https://malasngodingco.itch.io/the-forest-keeper",
  },
];

export const ABOUT =
  "As a passionate third-year Informatics Engineering student at ITERA, I am deeply engaged in coding and specialize in developing efficient and innovative software solutions. With a solid foundation in both front-end and back-end technologies, I excel in creating dynamic and responsive web applications. My skill set includes working with programming languages like JavaScript, Python, and frameworks such as React and Node.js. I am also proficient in database management systems, including MongoDB and SQL. I am committed to continuous learning and staying updated with industry advancements, enabling me to implement cutting-edge technologies in my projects.";

export const EDUCATION = [
  {
    institution: "ITERA (Institut Teknologi Sumatera)",
    degree: "College Student",
    year: "2022 - Present",
    description:
      "Currently pursuing a degree in Informatics Engineering. Engaged in advanced coursework and projects related to software development, data structures, algorithms, and modern programming practices.",
  },
  {
    institution: "96 Senior High School Jakarta",
    degree: "Senior High School Diploma",
    year: "2019 - 2022",
    description:
      "Completed senior high school focusing on science and technology. Participated in various extracurricular activities and projects related to programming and technology.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://discord.gg/qByfFJWhzS",
    icon: (
      <FaDiscord
        fontSize={26}
        className="transition-transform transform hover:scale-125 hover:rotate-12 hover:text-lime-300 hover:shadow-xl hover:animate-bounce"
      />
    ),
  },
  {
    href: "https://www.instagram.com/pataangg/",
    icon: (
      <FaInstagram
        fontSize={26}
        className="transition-transform transform hover:scale-125 hover:rotate-12 hover:text-lime-300 hover:shadow-xl hover:animate-bounce"
      />
    ),
  },
  {
    href: "https://github.com/pataanggs",
    icon: (
      <FaGithub
        fontSize={26}
        className="transition-transform transform hover:scale-125 hover:rotate-12 hover:text-lime-300 hover:shadow-xl hover:animate-bounce"
      />
    ),
  },
  {
    href: "https://www.linkedin.com/in/kartagamafathan/",
    icon: (
      <FaLinkedin
        fontSize={26}
        className="transition-transform transform hover:scale-125 hover:rotate-12 hover:text-lime-300 hover:shadow-xl hover:animate-bounce"
      />
    ),
  },
];


export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, I'd love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out me via email or other social media to discuss how we can work together to achieve your goals.",
  email: "kartagama.fathan@gmail.com",
};
