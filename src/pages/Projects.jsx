import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Vehicle Detection with MobileNetV3 SSD',
    link: 'https://github.com/SpimJO/Vehicle-Detection-using-MobileNetV3-SSD-Algorithm-Applied-to-Portable-Traffic-Controller',
    description: 'Python-based vehicle detection using MobileNetV3 SSD with OpenCV.',
    tags: ['Python', 'OpenCV', 'Machine Learning', 'Javascript']
  },
  {
    title: 'Attendance System (Laravel)',
    description: 'A web app to generate seminar attendance and certificates using Laravel.',
    tags: ['PHP', 'Laravel', 'MySQL', 'Blade']
  },
  {
    title: 'Restaurant Responsive Page',
    link: 'https://github.com/SpimJO/Restaurant-Responsive-Page',
    description: 'A modern restaurant UI layout with responsive HTML and CSS.',
    tags: ['HTML', 'CSS', 'SASS']
  },
  {
    title: 'Cars Page',
    link: 'https://github.com/SpimJO/Cars-Page',
    description: 'Simple frontend UI showcasing car models.',
    tags: ['HTML', 'CSS', 'SASS', 'Javascript']
  },
  {
    title: 'Hotel Page',
    link: 'https://github.com/SpimJO/Hotel-Page',
    description: 'Hotel landing page with clean layout using HTML and CSS.',
    tags: ['HTML', 'CSS', 'SASS']
  },
  {
    title: 'Login UI Purple',
    link: 'https://github.com/SpimJO/Login-UI-purple',
    description: 'A purple-themed login form design.',
    tags: ['HTML', 'CSS', 'SASS']
  },
  {
    title: 'Jwork Landing Page',
    link: 'https://github.com/SpimJO/JworkLandingPage',
    description: 'Professional landing page layout for job/work-related use.',
    tags: ['HTML', 'CSS', 'Responsive', 'SASS']
  },
  {
    title: 'CC-TechProj',
    link: 'https://github.com/SpimJO/CC-TechProj',
    description: 'A student tech project using HTML and CSS.',
    tags: ['HTML', 'CSS', 'SASS']
  },
];

export default function Projects({ id }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-20">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="p-6 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white shadow hover:shadow-lg border transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-200 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-200 px-2 py-1 rounded"
              >
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
              >
                View on GitHub →
              </a>
            )}
      </motion.div>
        ))}
      </div>
    </section>
  );
}