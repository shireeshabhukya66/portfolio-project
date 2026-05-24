function Hero() {
  return (
    <section id="home" className="bg-black text-white min-h-screen flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-cyan-400">Shireesha</span>
          </h2>

          <h3 className="text-3xl font-semibold mb-6 text-gray-300">
            Python Full Stack Developer
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
            I build responsive full stack web applications using React.js,
            Django, REST APIs, and MySQL.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition duration-300"
            >
              View Projects
            </a>
            <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition duration-300">
              Contact Me
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
            alt="developer"
            className="w-80 hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;


