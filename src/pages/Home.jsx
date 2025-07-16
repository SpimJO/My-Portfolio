import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import profilePic from '../assets/profile1.jpg';
import resumePDF from '../assets/Canlas-Resume.pdf';

export default function Home({ id }) {
  return (
    <section id={id} className="flex flex-col items-center justify-center text-center min-h-screen px-4 md:px-10 py-20 bg-white">
      <motion.img
        src={profilePic}
        alt="Jericho Canlas"
        className="w-72 h-58 object-cover border-4 border-black shadow-lg mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-2 text-black"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Hi, I’m <span className="text-blue-600">Jericho Canlas</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-lg md:text-xl font-medium text-gray-600 mb-6"
      >
        <Typewriter
          options={{
            strings: ['Full Stack Web Developer', 'Frontend Developer', 'Backend Developer'],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
          }}
        />
      </motion.div>

      <motion.a
        href={resumePDF}
        download="Jericho_Canlas_CV.pdf"
        className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        Download CV
      </motion.a>
    </section>
  );
}