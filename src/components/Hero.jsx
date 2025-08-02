import { motion } from "framer-motion";
import heroImg from "../assets/profile1.jpg"; // <-- replace with your actual hero image filename

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center bg-dark px-6 pt-24"
    >
      {/* Left Side: Text */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mt-10 md:mt-0">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-light"
        >
          Hi, I'm <span className="text-primary">Jericho Canlas</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-2 text-xl md:text-2xl text-primary font-semibold"
        >
          Full Stack Web Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 text-light/80 max-w-xl"
        >
          Passionate about building interactive and responsive web applications. I enjoy creating seamless user experiences with modern technologies.
        </motion.p>

        <motion.a
          href="#projects"
          className="mt-8 bg-primary text-dark px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          View My Work
        </motion.a>
      </div>

      {/* Right Side: Hero Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        <img
          src={heroImg}
          alt="Jericho Canlas"
          className="w-64 md:w-80 rounded-full border-4 border-primary shadow-lg"
        />
      </motion.div>
    </section>
  );
}