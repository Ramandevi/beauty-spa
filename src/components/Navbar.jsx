import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "../assets/logo.webp";

export default function Navbar({ onBookNow }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinkClass = (path) =>
    `transition-colors duration-300 ${
      location.pathname === path
        ? "text-pink-500 font-semibold"
        : "text-gray-700 hover:text-pink-500"
    }`;

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Jardo Spa & Beauty Logo"
            width="140"
            height="140"
            fetchPriority="high"
            className="w-24 h-24 md:w-32 md:h-32 object-contain flex-shrink-0"
          />

          <div className="leading-tight">
            <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Jardo Spa & Beauty
            </h1>

            <p className="text-xs text-gray-500 hidden sm:block">
              Best Spa Center in Mohali
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className={navLinkClass("/")}>
            Home
          </Link>

          <Link to="/about" className={navLinkClass("/about")}>
            About
          </Link>

          <Link to="/services" className={navLinkClass("/services")}>
            Services
          </Link>

          <Link to="/gallery" className={navLinkClass("/gallery")}>
            Gallery
          </Link>

          <Link to="/testimonials" className={navLinkClass("/testimonials")}>
            Testimonials
          </Link>

          <Link to="/contact" className={navLinkClass("/contact")}>
            Contact
          </Link>
        </div>

        {/* DESKTOP BUTTON */}
        <button
          aria-label="Book Appointment"
          onClick={onBookNow}
          className="hidden md:block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/20 hover:scale-105 transition-all duration-300"
        >
          Book Now
        </button>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close Menu" : "Open Menu"}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {open ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t shadow-lg px-4 py-6 flex flex-col gap-4">
          {/* MOBILE LOGO */}
          <div className="flex items-center gap-3 pb-4 border-b">
            <img
              src={logo}
              alt="Jardo Spa & Beauty Logo"
              width="50"
              height="50"
              className="w-10 h-10 object-contain rounded-full"
            />

            <div>
              <h2 className="font-bold text-pink-600">Jardo Spa & Beauty</h2>

              <p className="text-xs text-gray-500">Best Spa Center in Mohali</p>
            </div>
          </div>

          {/* MOBILE LINKS */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className={navLinkClass("/") + " py-2"}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className={navLinkClass("/about") + " py-2"}
          >
            About
          </Link>

          <Link
            to="/services"
            onClick={() => setOpen(false)}
            className={navLinkClass("/services") + " py-2"}
          >
            Services
          </Link>

          <Link
            to="/gallery"
            onClick={() => setOpen(false)}
            className={navLinkClass("/gallery") + " py-2"}
          >
            Gallery
          </Link>

          <Link
            to="/testimonials"
            onClick={() => setOpen(false)}
            className={navLinkClass("/testimonials") + " py-2"}
          >
            Testimonials
          </Link>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className={navLinkClass("/contact") + " py-2"}
          >
            Contact
          </Link>

          {/* MOBILE BUTTON */}
          <button
            aria-label="Book Appointment"
            onClick={() => {
              onBookNow();
              setOpen(false);
            }}
            className="mt-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
