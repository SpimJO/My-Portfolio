import React from 'react';

export default function Contact({ id }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>

      <form
        action="https://formspree.io/f/mldnyawo"  // <- Replace "your-id"
        method="POST"
        className="space-y-4 max-w-md mx-auto"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border border-gray-300 p-3 w-full rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border border-gray-300 p-3 w-full rounded"
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          className="border border-gray-300 p-3 w-full rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          Send
        </button>
      </form>

      <div className="mt-10 text-center text-sm text-gray-600">
        <p>📞 09267733629</p>
        <p>📧 jerichocanlas65@gmail.com</p>
      </div>
    </section>
  );
}