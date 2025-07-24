import React from 'react';
import { motion } from 'framer-motion';

export default function Contact({ id }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-20">
      {/* Title animation */}
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>

      {/* Form animation */}
      <motion.form
        action="https://formspree.io/f/mldnyawo" // Replace with your Formspree ID
        method="POST"
        className="space-y-4 bg-white dark:bg-gray-800 p-8 rounded-lg shadow max-w-xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          Send
        </button>
      </motion.form>

      <motion.div
        className="mt-10 text-center text-black-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
    >
  <p>📞 09267733629</p>
  <p>📧 jerichocanlas65@gmail.com</p> 
</motion.div>
    </section>
  );
}