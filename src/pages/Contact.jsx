import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Find us Here",
      detail:
        "Jardo Spa & Beauty - Best Spa in Mohali, 2nd Floor, Sohana E Rd, near Yes Bank, Sector 78, Sahibzada Ajit Singh Nagar, Punjab 140308",
    },
    {
      icon: Phone,
      title: "Get In Touch",
      detail: "7973436485 / 9780736485",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "gursharnatwal089@gmail.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      detail: "Mon - Sun: 10:00 AM - 9:00 PM",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(236,72,153,0.08),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.08),_transparent_40%)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-pink-600">
                Contact Jardo Spa & Beauty
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              We'd Love To
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Hear From You
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Contact us for appointments, inquiries, and personalized spa &
              beauty services in Mohali.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* LEFT SIDE */}
            <div className="space-y-8">
              <div>
                <span className="text-sm uppercase tracking-wider font-semibold text-pink-500">
                  Contact Us
                </span>

                <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
                  Jardo Spa & Beauty
                </h2>

                <p className="text-gray-600 leading-8">
                  Visit our luxurious spa and salon in Mohali for premium
                  relaxation, beauty, and wellness treatments.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-5">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white rounded-3xl p-6 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-7">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className="bg-white rounded-3xl shadow-2xl border border-pink-100 p-8 md:p-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Contact Us
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we’ll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* First + Last Name */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Leave a message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP SECTION */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-pink-100">
            <iframe
              title="Jardo Spa & Beauty Location"
              src="https://www.google.com/maps?q=Jardo%20Spa%20%26%20Beauty%20Mohali&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}