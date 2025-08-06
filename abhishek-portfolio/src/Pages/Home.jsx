import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import profileImage from '../assets/mineImg.jpeg';
import Footer from '../Components/Footer';
function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex flex-col">
      <Header /> 
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center flex flex-col items-center"
        >
          <img
            src={profileImage}
            alt="Abhishek Gupta"
            className="w-50 h-50 rounded-full mb-6 border-2 border-cyan-400"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-cyan-400">Abhishek Gupta</span>
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-gray-300">
            I'm a passionate developer skilled in
            <span className="text-cyan-300 font-semibold"> DSA</span>, 
            <span className="text-cyan-300 font-semibold"> Web Development</span>, and 
            <span className="text-cyan-300 font-semibold"> Freelancing</span>. I build elegant, efficient, and scalable solutions for real-world problems.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/projects')}
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg"
          >
            View My Work
          </motion.button>
        </motion.div>
          </div>
          <Footer/>
    </div>
  );
}

export default Home;