import React from "react";
import DarkModeToggle from './DarkModeToggle';


export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300">
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-black dark:text-white">Jericho Canlas</h1>
          <ul className="flex space-x-6 text-sm font-medium">
          <li><a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 text-black dark:text-white transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 text-black dark:text-white transition">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 text-black dark:text-white transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 text-black dark:text-white transition">Contact</a></li>
        </ul>
  <DarkModeToggle />
</nav>
    </header>
  );
}