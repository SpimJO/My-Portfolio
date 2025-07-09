import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/1000081995.png';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLaravel, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiSass } from 'react-icons/si';

export default function About({ id }) {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-2xl" />, level: '81%' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-2xl" />, level: '81%' },
    { name: 'Sass', icon: <SiSass className="text-pink-500 text-2xl" />, level: '50%' },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-2xl" />, level: '58%' },
    { name: 'React.js', icon: <FaReact className="text-cyan-500 text-2xl" />, level: '33%' },
    { name: 'PHP', icon: <FaPhp className="text-indigo-500 text-2xl" />, level: '30%' },
    { name: 'Laravel', icon: <FaLaravel className="text-red-500 text-2xl" />, level: '42%' },
    { name: 'Python', icon: <FaPython className="text-blue-400 text-2xl" />, level: '57%' },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400 text-2xl" />, level: '31%' },
    { name: 'MySQL', icon: <SiMysql className="text-blue-700 text-2xl" />, level: '40%' },
    { name: 'Flask', icon: <FaPython className="text-gray-600 text-2xl" />, level: '56%' },
  ];

  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-20">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div>
          <img
            src={profilePic}
            alt="Jericho Canlas"
            className="w-full max-w-xs mx-auto rounded shadow mb-6"
          />
          <p className="text-gray-700 mb-4 leading-relaxed">
            I'm a Computer Science graduate passionate about learning web development.
            With basic experience in frontend and backend tools like HTML, CSS, JavaScript, Laravel, React, and Flask.
          </p>
          <p className="text-gray-700">
            I thrive in team environments, love solving real-world problems with code,
            and am always excited to learn new technologies to improve my craft.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4 bg-gray-100 p-3 rounded shadow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                {skill.icon}
                <div className="w-full">
                  <div className="flex justify-between text-sm font-medium">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-300 h-2 rounded">
                    <div
                      className="bg-blue-500 h-2 rounded"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}