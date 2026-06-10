"use client";

import { useState, useEffect } from "react";
import { RiMenuLine, RiCloseLine, RiMusicLine } from "react-icons/ri";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(8,8,8,0.85)" : "rgba(8,8,8,0.45)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(72,72,64,0.6)"
          : "1px solid rgba(72,72,64,0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-groove-white rounded-full flex items-center justify-center group-hover:bg-groove-accent transition-colors duration-300">
            <RiMusicLine className="text-groove-black text-sm" />
          </div>
          <span className="font-display text-2xl tracking-wider text-groove-white">
            THE GROOVE STUDIO
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-groove-gray-300 hover:text-groove-white text-sm font-medium tracking-widest uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-5 py-2 bg-groove-white text-groove-black text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-groove-accent transition-colors duration-200"
            >
              Book Session
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle — fixed: explicit type, z-index, pointer-events */}
        <button
          type="button"
          className="md:hidden relative z-50 flex items-center justify-center w-10 h-10 text-groove-white cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <RiCloseLine style={{ fontSize: "1.6rem" }} />
          ) : (
            <RiMenuLine style={{ fontSize: "1.6rem" }} />
          )}
        </button>
      </div>

      {/* Mobile Menu — always rendered, animated via max-height */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "400px" : "0px",
          background: "rgba(8,8,8,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: menuOpen ? "1px solid rgba(72,72,64,0.4)" : "none",
        }}
      >
        <ul className="flex flex-col gap-0 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-4 text-groove-gray-200 text-lg font-medium tracking-widest uppercase border-b border-groove-gray-700 hover:text-groove-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-5 pb-2">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-groove-white text-groove-black text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-groove-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Book Session
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
