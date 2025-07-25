import React, { useState } from "react";
import DarkModeToggle from './DarkModeToggle';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300">
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-black dark:text-white">Jericho Canlas</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 text-black dark:text-white transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 text-black dark:text-white transition">About</a></li>
          <li><a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 text-black dark:text-white transition">Work History</a></li>
          <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 text-black dark:text-white transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 text-black dark:text-white transition">Contact</a></li>
        </ul>

        {/* Dark mode toggle + mobile icon */}
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <button onClick={toggleMenu} className="md:hidden text-black dark:text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-2 bg-white dark:bg-gray-800">
          <li><a href="#home" onClick={toggleMenu} className="block text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
          <li><a href="#about" onClick={toggleMenu} className="block text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
          <li><a href="#experience" onClick={toggleMenu} className="block text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Work History</a></li>
          <li><a href="#projects" onClick={toggleMenu} className="block text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="block text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
        </ul>
      )}
    </header>
  );
}
