import React, { useState } from "react";
import { Link } from "react-router-dom";

const linkStyle = { textDecoration: "none" };

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  /* 🔑  Add “Anki” to your common nav array once,
         so we don’t duplicate strings in two places. */
  const navItems = ["Education", "Work", "Projects", "Contact", "Anki"];

  return (
    <header className="bg-black text-[#FF9F1C] p-4 flex flex-col md:flex-row items-center justify-between relative">
      {/* Title + hamburger */}
      <div className="flex w-full justify-between items-center md:w-auto">
        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="#FF9F1C" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        <div className="flex-grow text-center md:text-left">
          <Link to="/" className="text-xl md:text-2xl text-[#FF9F1C]" style={linkStyle}>
            Shourya Saklecha
          </Link>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-4 mt-2 md:mt-0 ml-auto">
        {navItems.map((item) => (
          <Link
            key={item.toLowerCase()}
            to={`/${item.toLowerCase() === "anki" ? "anki" : item.toLowerCase()}`}
            className="hover:text-orange-400"
            style={linkStyle}
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg z-10">
          <div className="flex justify-between p-2">
            <h2 className="text-xl text-[#FF9F1C]">Menu</h2>
            <button onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="#FF9F1C" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col p-2">
            {navItems.map((item) => (
              <Link
                key={item.toLowerCase()}
                to={`/${item.toLowerCase() === "anki" ? "anki" : item.toLowerCase()}`}
                className="py-2 hover:text-orange-400"
                style={linkStyle}
                onClick={() => setIsOpen(false)}   /* close dropdown on navigate */
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
