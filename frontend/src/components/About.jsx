function About() {
    return (
        <section id="about" className="bg-gray-950 text-white py-24">
            <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

                <div className="flex justify-center">
                    <img 
                       src="https://cdn-icons-png.flaticon.com/512/6062/6062646.png"
                       alt="about"
                       className="w-80 hover:scale-105 transition duration-500"
                    />
                </div>

                <div>
                    <h2 className="text-4xl font-bold mb-6">
                        About <span className="text-cyan-400">Me</span>
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        I am a Python Full Stack Developer passionate about building
                        responsive and user-friendly web applications.
                    </p>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        I enjoy solving problems, learning new technologies,
                        and building full-stack applications that provide great 
                        user experience.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;