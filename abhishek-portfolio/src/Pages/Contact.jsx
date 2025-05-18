import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../Components/Header';
import Footer from '../Components/Footer'; 
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending Your Message...")
    const formData = new FormData(e.target);

    formData.append("access_key", import.meta.env.VITE_FORM_API);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setStatus("Message sent successfully! I’ll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
      e.target.reset();
    } else {
      console.log("Error", data);
      setStatus(data.message);
    }

    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex flex-col relative overflow-hidden">
      <Header />
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 opacity-10 rounded-full filter blur-3xl -translate-x-1/2 translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 opacity-10 rounded-full filter blur-3xl translate-x-1/4 -translate-y-1/4"></div>

      <div className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 pt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg w-full space-y-10"
        >
          {/* Hero Section */}
          <div className="text-center">
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl sm:text-6xl font-extrabold tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-300">
                Let’s Talk
              </span>
            </motion.h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-300">
              I’m here to help! Drop me a message, and I’ll get back to you soon.
            </p>
          </div>

          {/* Contact Form */}
          <motion.div
            className="bg-[#1e293b] p-8 rounded-2xl shadow-xl border border-cyan-500/20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f172a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f172a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500 transition-all duration-300"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-[#0f172a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500 transition-all duration-300"
                  placeholder="Your Message"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, backgroundColor: '#06b6d4' }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-cyan-500 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg"
              >
                Send Message
              </motion.button>
            </form>
            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-cyan-400 text-center mt-4"
              >
                {status}
              </motion.p>
            )}
          </motion.div>

          {/* Contact Details */}
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-cyan-400">Other Ways to Reach Me</h2>
            <p className="text-gray-300">
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:your-email@example.com" className="hover:text-cyan-400 transition-colors">
                abhishek.gupta.150803@gmail.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;