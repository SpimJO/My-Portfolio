import { useState, useEffect } from "react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      navLinks.forEach(link => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - 100;
          const height = section.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActive(link.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-dark/80 backdrop-blur z-50">
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        {/* Minimal Logo */}
        <h1 className="text-xl font-bold text-primary tracking-wide">Portfolio</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`transition-colors ${
                  active === link.id ? "text-primary" : "text-light hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-light text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-dark flex flex-col items-center gap-6 py-6 md:hidden">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-light hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}