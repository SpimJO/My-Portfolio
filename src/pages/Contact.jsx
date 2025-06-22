import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="p-8">
      <h2 className="text-2xl font-bold">Contact</h2>
      <form action="https://formspree.io/f/your-id" method="POST" className="mt-6 space-y-4 max-w-md">
        <input type="text" name="name" placeholder="Your Name" className="border p-2 w-full" required />
        <input type="email" name="email" placeholder="Your Email" className="border p-2 w-full" required />
        <textarea name="message" rows="4" placeholder="Your Message" className="border p-2 w-full" required></textarea>
        <button type="submit" className="bg-black text-white px-4 py-2">Send</button>
      </form>
      <div className="mt-6">
        <p>📞 09267733629</p>
        <p>📧 jerichocanlas65@gmail.com</p>
      </div>
    </section>
  );
}