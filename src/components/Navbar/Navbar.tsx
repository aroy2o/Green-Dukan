import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Store", path: "/store" },
    { name: "Features", path: "/features" },
    { name: "Blogs", path: "/blogs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="w-full backdrop-blur-md bg-white/30 shadow-sm px-6 md:px-10 lg:px-48 py-4 flex items-center justify-between fixed top-0 left-0 z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img src="/src/assets/Logo.svg" alt="Green Dukan" className="h-8 w-8" />
        <span className="text-xl font-semibold text-green-800">
          Green <span className="text-yellow-800">Dukan</span>
        </span>
      </Link>

      {/* Hamburger (mobile) */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle Menu">
        {isOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
      </button>

      {/* Nav Links (desktop) */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
        {navLinks.map((link, idx) => (
          <li key={idx}>
            <Link
              to={link.path}
              className={`hover:text-green-700 transition-colors duration-200 ${
                isActive(link.path) ? "text-green-700 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Icons (desktop) */}
      <div className="hidden md:flex items-center space-x-4">
        <Search className="icon-style" />
        <User className="icon-style" />
        <Heart className="icon-style" />
        <div className="bg-green-700 p-2 rounded-full">
          <ShoppingCart className="w-5 h-5 text-white cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu with animation and outside click detection */}
      <div
        ref={menuRef}
        className={`absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-md px-6 py-4 md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                to={link.path}
                className={`block hover:text-green-700 transition ${
                  isActive(link.path) ? "text-green-700 font-semibold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons below nav links on mobile */}
        <div className="flex justify-around pt-4 border-t border-gray-200 mt-4">
          <Search className="icon-style" />
          <User className="icon-style" />
          <Heart className="icon-style" />
          <div className="bg-green-700 p-2 rounded-full">
            <ShoppingCart className="w-5 h-5 text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
