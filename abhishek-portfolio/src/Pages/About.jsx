import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Components/Header';
import profileImage from '../assets/react.svg';
import Footer from '../Components/Footer';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl w-full text-center space-y-12"
        >
          {/* Profile Section */}
          <div className="flex flex-col items-center">
            {/* <motion.img
              src={profileImage}
              alt="Abhishek Gupta"
              className="w-40 h-40 rounded-full mb-6 border-4 border-cyan-400 shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            /> */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              About <span className="text-cyan-400">Me</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
              I'm Abhishek Gupta, a dedicated developer passionate about crafting efficient and scalable solutions. With expertise in DSA, Web Development, and Freelancing, I enjoy tackling complex challenges and continuously honing my skills.
            </p>
          </div>

          {/* Education Section */}
          <div className="w-full">
            <h2 className="text-3xl font-semibold mb-8 text-cyan-400">Education</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                className="bg-[#1e293b] p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-shadow"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
               >
                <h3 className="text-xl font-bold mb-2">College</h3>
                <p className="text-gray-300">National Institute of Technology, Silchar, Assam</p>
                <p className="text-gray-300">2022- 2026</p>
                <p className="text-gray-300">B.Tech in Computer Science, CGPA: 8.16</p>
              </motion.div>
              <motion.div
                className="bg-[#1e293b] p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-shadow"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2">High School (10th)</h3>
                <p className="text-gray-300">Anglo Vedic Sr. Sec. School, Bahjoi, UttarPradesh</p>
                <p className="text-gray-300">2018 - 2019</p>
                <p className="text-gray-300">Percentage: 93.4%</p>
              </motion.div>
              <motion.div
                className="bg-[#1e293b] p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-shadow"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-2">Intermediate (12th)</h3>
                <p className="text-gray-300">Anglo Vedic Sr. Sec. School, Bahjoi, UttarPradesh</p>
                <p className="text-gray-300">2021 - 2022</p>
                <p className="text-gray-300">Percentage: 92.4%</p>
              </motion.div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="w-full">
            <h2 className="text-3xl font-semibold mb-8 text-cyan-400">Skills</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Tailwind CSS', 'MongoDB','SQL', 'Express', 'Data Structures','Algorithms','Operating System','Computer Networks','DBMS'].map((skill) => (
                <motion.span
                  key={skill}
                  className="bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-cyan-500 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * Math.random() }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
          </div>
          <Footer/>
    </div>
  );
}

export default About;
