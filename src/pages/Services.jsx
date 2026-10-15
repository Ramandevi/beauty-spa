import {
  Sparkles,
  Flower2,
  Droplets,
  Heart,
} from "lucide-react";

import swedishImg from "../assets/cardImg1.webp";
import deepTissueImg from "../assets/DeepTissue.webp";
import hotStoneImg from "../assets/homeImg.webp";

export default function Services({ onBookNow }) {

  const services = [
    {
      icon: Droplets,
      name: "Facial Massage",
      duration: "Premium Skin Care",
      description:
        "Hydrate, nourish, and renew your skin.",
      image: swedishImg,
    },
    {
      icon: Heart,
      name: "Spa Treatments",
      duration: "Relaxation Therapy",
      description:
        "Luxury spa therapies and aromatherapy sessions.",
      image: deepTissueImg,
    },
    {
      icon: Flower2,
      name: "Salon Services",
      duration: "Hair & Beauty Care",
      description:
        "Professional styling and treatments.",
      image: hotStoneImg,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900">
            Our Services
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={service.image}
                alt=""
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <service.icon className="w-10 h-10 text-pink-500 mb-4" />

                <h3 className="text-2xl font-semibold mb-3">
                  {service.name}
                </h3>

                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                <button
                  onClick={onBookNow}
                  className="text-pink-500 font-semibold"
                >
                  Book Appointment →
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}