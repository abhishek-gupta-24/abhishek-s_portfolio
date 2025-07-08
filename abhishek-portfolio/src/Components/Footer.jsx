import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center space-y-4">

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-base sm:text-lg">
          {[
            { href: "https://github.com/abhishek-gupta-24", label: "GitHub" },
            { href: "https://www.linkedin.com/in/abhishek-gupta-5b2307242/", label: "LinkedIn" },
            { href: "https://leetcode.com/u/abhishek399/", label: "LeetCode" },
            { href: "https://www.instagram.com/abhiii_gupta_24/", label: "Instagram" },
          ].map(({ href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-cyan-400 transition duration-200 ease-in-out"
            >
              {label}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm sm:text-base text-center">
          © {new Date().getFullYear()} Abhishek Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
