import { CONTACT, SOCIAL_MEDIA_LINKS } from "../constants";

const Contact = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl">
        <p className="uppercase my-10 text-center text-lime-300 font-semibold text-3xl lg:text-8xl">
          Interested in working together?
        </p>
        <p className="p-4 text-center text-xl">{CONTACT.text}</p>
        <p className="my-4 text-center text-2xl font-semibold text-lime-300 lg:pt-6 lg:text-5xl">
          {CONTACT.email}
        </p>
        <p className="my-4 text-center text-2xl font-medium text-lime-300 lg:pt-6 lg:text-5xl">
          {CONTACT.phone}
        </p>
      </div>
      <div className="mt-20 flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="my-8 text-center text-gray-400">
        &copy; Pataangg. All Rights Reserved. {currentYear}
      </p>
    </section>
  );
};

export default Contact;
