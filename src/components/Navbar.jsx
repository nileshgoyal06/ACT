import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-extrabold text-blue-600 hover:text-blue-800 transition"
        >
          ACT 🚀
        </Link>

        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/solutions" className="hover:text-blue-500 transition">
            Solutions
          </Link>
          <Link to="/pricing" className="hover:text-blue-500 transition">
            Pricing
          </Link>
          <Link to="/faqs" className="hover:text-blue-500 transition">
            FAQs
          </Link>
          <Link to="/contact" className="hover:text-blue-500 transition">
            Contact
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-600 text-xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-white shadow-md rounded-b-lg">
          <Link
            to="/solutions"
            onClick={toggleMenu}
            className="block py-2 text-sm font-medium hover:text-blue-600"
          >
            Solutions
          </Link>
          <Link
            to="/pricing"
            onClick={toggleMenu}
            className="block py-2 text-sm font-medium hover:text-blue-600"
          >
            Pricing
          </Link>
          <Link
            to="/faqs"
            onClick={toggleMenu}
            className="block py-2 text-sm font-medium hover:text-blue-600"
          >
            FAQs
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="block py-2 text-sm font-medium hover:text-blue-600"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
