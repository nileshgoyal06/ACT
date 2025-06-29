import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaLinkedinIn, FaTwitter, FaYoutube, FaComments } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0e1a2b] text-white px-6 pt-10 pb-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        <div>
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <FaComments className="text-white" /> Chat With Sales
          </h3>
          <p className="flex items-center gap-2 mb-2">
            <FaPhone className="text-blue-400" /> 123456789
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-blue-400" /> sales@avyuktcoretech.com
          </p>
        </div>

        <div>
          <h3 className="text-teal-400 font-semibold mb-4">Solutions</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/solutions" className="hover:text-blue-400 transition">
                Custom Development
              </Link>
            </li>
            <li>
              <Link to="/solutions" className="hover:text-blue-400 transition">
                eCommerce Platforms
              </Link>
            </li>
            <li>
              <Link to="/solutions" className="hover:text-blue-400 transition">
                Online Store Setup
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-teal-400 font-semibold mb-4">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Avyukt Core Technology
      </div>
    </footer>
  );
};

export default Footer;
