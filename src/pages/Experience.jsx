import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Wireless Access for Health (WAH)',
    role: 'Web Developer Intern',
    duration: 'June 2024 – August 2024',
    description:
      'Developed a web-based attendance system using PHP Laravel, implemented automated email delivery of seminar certificates, managed data with TablePlus (NoSQL), collaborated in a 4-person team on backend logic and API integration, and gained hands-on experience with web hosting, Git/GitHub, and real-world Laravel development.',
    tech: ['PHP', 'Laravel', 'NoSQL', 'Git', 'TablePlus'],
  }//,
  //{
   // company: 'Future Opportunity',
   // role: 'Open for Offers',
   // duration: 'Coming Soon',
   // description:
   //   'This space is reserved for your next exciting opportunity. Stay tuned for what’s next!',
   // tech: ['React', 'Tailwind', 'Next.js', 'MongoDB'],
 // }
];

export default function Experience({ id }) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-6 py-20">
      <motion.h2
        className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Work Experience
      </motion.h2>

      <div className="relative border-l border-gray-300 dark:border-gray-600">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="mb-12 ml-6 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] top-2">
                <span className="absolute inline-flex w-3 h-3 bg-blue-600 rounded-full animate-ping opacity-80"></span>
                <span className="relative inline-flex w-3 h-3 bg-blue-600 rounded-full border-2 border-gray-300 dark:border-gray-600"></span>
            </div>

            {/* Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{exp.duration}</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {exp.role}
              </h3>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{exp.company}</span>
              </div>

              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
