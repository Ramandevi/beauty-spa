import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBookingModal = () => setIsBookingOpen(true);
  const closeBookingModal = () => setIsBookingOpen(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">

        <Navbar onBookNow={openBookingModal} />

        <main className="flex-grow">
          <Routes>

            <Route
              path="/"
              element={<Home onBookNow={openBookingModal} />}
            />

           <Route
              path="/about"
              element={<About onBookNow={openBookingModal} />}
            />

            <Route
              path="/services"
              element={<Services onBookNow={openBookingModal} />}
            />

            <Route
              path="/gallery"
              element={<Gallery onBookNow={openBookingModal} />}
            />

            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </main>

       <Footer />

        <BookingModal
          isOpen={isBookingOpen}
          onClose={closeBookingModal}
        />

      </div>
    </BrowserRouter>
  );
}