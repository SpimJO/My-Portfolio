import React from 'react';

const projects = [
  {
    title: 'Vehicle Detection with MobileNetV3 SSD',
    link: 'https://github.com/SpimJO/Vehicle-Detection-using-MobileNetV3-SSD-Algorithm-Applied-to-Portable-Traffic-Controller',
    description: 'Python-based vehicle detection using MobileNetV3 SSD with OpenCV.',
  },
  {
    title: 'Attendance System (Laravel)',
    description: 'A web app to generate seminar attendance and certificates using Laravel.',
  },
  {
    title: 'Restaurant Responsive Page',
    link: 'https://github.com/SpimJO/Restaurant-Responsive-Page',
    description: 'A modern restaurant UI layout with responsive HTML and CSS.',
  },
  {
    title: 'Cars Page',
    link: 'https://github.com/SpimJO/Cars-Page',
    description: 'Simple frontend UI showcasing car models.',
  },
  {
    title: 'Hotel Page',
    link: 'https://github.com/SpimJO/Hotel-Page',
    description: 'Hotel landing page with clean layout using HTML and CSS.',
  },
  {
    title: 'Login UI Purple',
    link: 'https://github.com/SpimJO/Login-UI-purple',
    description: 'A purple-themed login form design.',
  },
  {
    title: 'Jwork Landing Page',
    link: 'https://github.com/SpimJO/JworkLandingPage',
    description: 'Professional landing page layout for job/work-related use.',
  },
  {
    title: 'CC-TechProj',
    link: 'https://github.com/SpimJO/CC-TechProj',
    description: 'A student tech project using HTML and CSS.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-700">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 text-blue-600 hover:underline"
              >
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}