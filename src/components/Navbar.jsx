import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav className="bg-gray-400/20 backdrop-blur-md border-b border-white/30">
        <div className="w-full px-6 sm:px-8 md:px-10 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold"
          >
            MYPIER
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>

            <Link to="/about" className="hover:text-blue-500">
              About
            </Link>

            <Link to="/services" className="hover:text-blue-500">
              Services
            </Link>

            <Link to="/contact" className="hover:text-blue-500">
              Contact
            </Link>

          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-14 h-14 rounded-full 
                       bg-white/30 backdrop-blur-md 
                       border border-white/40
                       flex items-center justify-center
                       text-3xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>
      </nav>


      {/* ======== MOBILE MENU ======= */}

      {isOpen && (
        <div
          className="md:hidden 
                     absolute top-24 left-5 right-5
                     z-50
                     p-6
                     rounded-3xl
                     bg-white/20
                     backdrop-blur-xl
                     border border-white/40
                     shadow-xl"
        >

          <div className="flex flex-col gap-6">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="w-full py-5
                         rounded-2xl
                         bg-white/30
                         backdrop-blur-md
                         border border-white/40
                         text-center
                         text-2xl
                         text-gray-700
                         hover:bg-white/40"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="w-full py-5
                         rounded-2xl
                         bg-white/30
                         backdrop-blur-md
                         border border-white/40
                         text-center
                         text-2xl
                         text-gray-700
                         hover:bg-white/40"
            >
              About
            </Link>

            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="w-full py-5
                         rounded-2xl
                         bg-white/30
                         backdrop-blur-md
                         border border-white/40
                         text-center
                         text-2xl
                         text-gray-700
                         hover:bg-white/40"
            >
              Services
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-5
                         rounded-2xl
                         bg-white/30
                         backdrop-blur-md
                         border border-white/40
                         text-center
                         text-2xl
                         text-gray-700
                         hover:bg-white/40"
            >
              Contact
            </Link>

          </div>

        </div>
      )}

    </>
  );
}

export default Navbar;