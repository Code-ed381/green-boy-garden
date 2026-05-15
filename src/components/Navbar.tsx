"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Music", href: "/music" },
    { name: "Production", href: "/production" },
    { name: "Publishing", href: "/publishing" },
    { name: "Studio", href: "/studio" },
    { name: "About", href: "/about" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-end">
              <div className="flex space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[14px] text-[#888880] hover:text-[#f0f0ec] transition-colors duration-150 font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#888880] hover:text-[#f0f0ec] transition-colors duration-150"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </div>
            <div className="fixed right-0 top-0 h-full w-64 bg-[#0f0f0b] shadow-xl z-50">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#888880] hover:text-[#f0f0ec] transition-colors duration-150"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col space-y-4 px-6 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-[14px] text-[#888880] hover:text-[#f0f0ec] transition-colors duration-150 py-2 font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
