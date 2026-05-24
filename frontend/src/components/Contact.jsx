import axios from "axios";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/api/contact/", formData);

      alert("Message Sent Successfully");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <section id="contact" className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-3xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I'm currently looking for opportunities as a Python Full Stack
              Developer. Feel free to connect with me for collaboration,
              projects, or job opportunities.
            </p>

            <div className="space-y-4">
              <p className="text-gray-300">📧 shireeshabhukya66@gmail.com</p>
              <p className="text-gray-300">📍 Hyderabad, Telangana</p>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/shireeshabhukya66"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-400 text-cyan-400 px-5 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/shireesha-bhukya-4a96202bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-400 text-cyan-400 px-5 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-cyan-400/10 hover:shadow-xl transition duration-300"
          >
            <div className="mb-6">
              <label className="block mb-2 text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition duration-300"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition duration-300"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-gray-300">Message</label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-400 text-black py-3 rounded-lg font-semibold hover:bg-cyan-300 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
