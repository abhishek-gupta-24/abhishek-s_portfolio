import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Projects() {
  const projects = [
    {
      title: "TrackMyGrowth",
      description:
        "A personal progress tracking platform that visualizes your development in problem-solving across Codeforces, LeetCode, GeeksforGeeks, and CodeChef. Includes user profiles and dynamic data graphs.",
      tech: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB", "Chart.js", "JWT", "bcrypt.js"],
      github: "https://github.com/abhishek-gupta-24/TrackMyGrowth",
      live: "https://track-my-growth-frontend.vercel.app",
      },
      {
        title: "File Compressor",
        description:
          "A web-based file compression tool that allows users to upload .txt files and download compressed versions using the Huffman Coding algorithm. The project implements lossless data compression by analyzing character frequencies. It also supports decompression, allowing users to restore the original text file.",
        tech: ["React", "TailwindCSS", "Node.js", "Express", "multer","C++"],
        github: "https://github.com/abhishek-gupta-24/File-Compressor",
        live: "https://file-compressor-git-main-abhishek-guptas-projects-505703e1.vercel.app/",
      },
      
      {
        title: "Blog Website",
        description:
          "This Blog Website enables users to create, read, update, and delete (CRUD) blog posts. Users can write new posts, edit existing ones, and delete entries as needed, all through a clean and intuitive interface.",
        tech: ["HTML", "CSS", "JavaScript", "Express","Node.js"],
        github: "https://github.com/abhishek-gupta-24/mini_quora",
        live: "",
      },


  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex flex-col">
      <Header />
      <div className="flex-1 py-16 px-4 sm:px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">
            My <span className="text-cyan-400">Projects</span>
          </h1>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            A collection of projects that showcase my skills in full-stack development, data visualization, and problem-solving automation.
          </p>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-[#1e293b] rounded-2xl p-6 shadow-md hover:shadow-cyan-500/30 transition-all duration-300 border border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-700/70 text-white px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-lg transition"
                  >
                    GitHub
                        </motion.a>
                {project.live ?
                    <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="bg-cyan-600 hover:bg-cyan-500 text-white text-sm px-4 py-2 rounded-lg transition"
                    >
                    Live Demo
                    </motion.a>:""}

                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
