function Projects() {
  const projects = [
    {
      title: "Full Stack E-Commerce App",
      description:
        "Developed a full-stack e-commerce web application using React.js, Django REST Framework, and MySQL. Implemented user authentication with JWT, product listing, cart functionality, protected routes, and REST APIs. Designed responsive UI components using Tailwind CSS and integrated frontend with backend services for dynamic data handling.",
      tech: "React.js, Django REST Framework, MySQL, JWT",
      github:
        "https://github.com/shireeshabhukya66/Fullstack-ecommerce-project",
      image: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
    },

    {
      title: "React Blog Application",
      description:
        "Built a responsive blog application using React.js and Context API with authentication and protected routes. Implemented CRUD operations for blog management, search functionality, and pagination for improved user experience. Managed global authentication state and dynamic content rendering using reusable React components.",
      tech: "React.js, Context API, JSON Server",
      github: "https://github.com/shireeshabhukya66/React-Project",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },

    {
      title: "Online Cake Shop Website",
      description:
        "Designed and developed a responsive cake shop website using HTML, CSS, and JavaScript. Implemented product listing, category filtering, add-to-cart functionality, and responsive layouts for mobile and desktop devices. Added interactive UI elements and client-side form validation for better user interaction.",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/shireeshabhukya66/JS-Project",
      image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    },
  ];

  return (
    <section id="projects" className="bg-gray-950 text-white py-28">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-cyan-400/20 hover:shadow-xl transition duration-300 flex flex-col justify-between h-full"
            >
              <div className="flex justify-center bg-black p-6">
                <img src={project.image} alt={project.title} className="w-32 hover:scale-110 transition duration-300" />
              </div>

              <div className="p-6">
                <div className="min-h-[320px]">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                  <p className="text-gray-400 text-sm mb-4 leading-7">
                    {project.description}
                  </p>

                  <p className="text-cyan-400 text-sm mb-6">{project.tech}</p>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition duration-300"
                  >
                    GitHub
                  </a>

                  <button className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition duration-300">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
