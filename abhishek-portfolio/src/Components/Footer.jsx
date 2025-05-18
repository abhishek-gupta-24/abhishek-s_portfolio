import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-2">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center space-y-3">
        {/* Social Links */}
        <div className="flex space-x-10 text-sm sm:text-base">
          <motion.a
            href="https://github.com/abhishek-gupta-24"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/abhishek-gupta-5b2307242/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://leetcode.com/u/abhishek399/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            LeetCode
          </motion.a>
          <motion.a
            href="https://www.instagram.com/abhiii_gupta_24/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Instagram
          </motion.a>
        </div>
        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Abhishek Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
