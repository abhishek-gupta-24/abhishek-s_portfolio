import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full py-4 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <nav className="max-w-5xl mx-auto flex justify-center sm:justify-around items-center px-6">
        <h1 className="hidden sm:block text-2xl font-bold text-cyan-400">Abhishek Gupta</h1>

        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => navigate('/')}
              className="text-white hover:text-cyan-300 bg-transparent border-none cursor-pointer"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate('/about')}
              className="text-white hover:text-cyan-300 bg-transparent border-none cursor-pointer"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate('/projects')}
              className="text-white hover:text-cyan-300 bg-transparent border-none cursor-pointer"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate('/contact')}
              className="text-white hover:text-cyan-300 bg-transparent border-none cursor-pointer"
            >
              Contact
            </button>
          </li>
          <a href="https://drive.google.com/file/d/1c2__5XCF3aDUpDAMm9SMa-AAqJrSKVd0/view">
          <button class="bg-gradient-to-r bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-0.5 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition duration-300">
            Resume
          </button>
        </a>
        </ul>

      </nav>
    </header>
  );
}

export default Header;