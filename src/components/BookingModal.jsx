import { useState } from "react";
import { X } from "lucide-react";

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    time: "",
  });

 
  if (!isOpen) return null;


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Booking Confirmed!\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Service: ${formData.service}\n` +
        `Date: ${formData.date}\n` +
        `Time: ${formData.time}`
    );

   
    setFormData({
      name: "",
      email: "",
      service: "",
      date: "",
      time: "",
    });

   
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl">
   
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

       
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          Book Appointment
        </h2>
        <p className="text-gray-500 mb-6">
          Fill in your details and reserve your session.
        </p>

    
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          >
            <option value="">Select Service</option>
            <option value="Swedish Massage">Swedish Massage</option>
            <option value="Deep Tissue">Deep Tissue</option>
            <option value="Hot Stone">Hot Stone</option>
            <option value="Aromatherapy">Aromatherapy</option>
            <option value="Hydrating Facial">Hydrating Facial</option>
            <option value="Body Scrub">Body Scrub</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
}