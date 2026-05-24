function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">Shireesha</h1>

        <ul className="flex gap-8 text-lg">
          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 cursor-pointer transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 cursor-pointer transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 cursor-pointer transition duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 cursor-pointer transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 cursor-pointer transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
