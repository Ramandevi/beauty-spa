import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-pink-400 mb-4">
              Beauty Spa
            </h3>
            <p className="text-gray-400">
              Your sanctuary of peace and relaxation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Testimonials
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <FaFacebook className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <FaInstagram className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <FaTwitter className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <FaYoutube className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>

            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-pink-500 mb-2"
            />

            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-1">
            Made with{" "}
            <FaHeart className="w-4 h-4 text-pink-500" /> by Beauty Spa
          </p>
        </div>
      </div>
    </footer>
  );
}