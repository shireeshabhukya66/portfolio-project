function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Python",
    "Django",
    "Django REST Framework",
    "REST APIs",
    "MySQL",
    "Git",
    "GitHub",
  ];

  return (
    <section id="skills" className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-8">
          {skills.map((skills, index) => (
            <div
              key={index}
              className="bg-gray-900 border-gray-800 rounded-xl p-7 text-center hover:border-cyan-400 hover:scale-105 hover:shadow-cyan-400/20 transition duration-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-200">{skills}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
