import {
  ArrowRight,
  Star,
  Heart,
  Clock,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

import homeImg from "../assets/homeImg.webp";
import homeImg2 from "../assets/homeImg2.webp";
import homeImg3 from "../assets/homeImg3.webp";
import homeImg4 from "../assets/homeImg4.webp";

export default function Home({ onBookNow }) {
  const features = [
    {
      icon: Star,
      title: "Premium Rooms",
      desc: "Luxuriously designed treatment rooms for complete comfort.",
    },
    {
      icon: Heart,
      title: "Personalized Care",
      desc: "Tailored spa experiences to suit your needs.",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      desc: "Open 7 days a week for your convenience.",
    },
    {
      icon: Shield,
      title: "Certified Experts",
      desc: "Professional and highly trained therapists.",
    },
  ];

  const contentSections = [
    {
      title: "Deep Cleansing Facial Massage",
      description:
        "Indulge in our signature facials and advanced skin treatments that hydrate, nourish, and renew your skin.",
      image: homeImg,
      reverse: false,
    },
    {
      title: "Spa Treatments & Massage In Mohali",
      description:
        "Escape the stress of everyday life with luxurious spa therapies and aromatherapy sessions.",
      image: homeImg2,
      reverse: true,
    },
    {
      title: "Salon Services",
      description:
        "Transform your look with professional hair services including cuts, styling, coloring, and nourishing treatments.",
      image: homeImg3,
      reverse: false,
    },
  ];

  return (
    <div className="bg-white">

      <section className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="space-y-6">
              <p className="text-pink-500 font-semibold uppercase tracking-[0.35em] text-sm">
                Massage & Spa
              </p>

              <h1 className="text-5xl font-bold leading-tight">
                Experience The Secrets Of
                <span className="block bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Rejuvenation
                </span>
              </h1>

              <p className="text-gray-600 text-lg">
                Professional Saloon & Spa Center in Mohali
              </p>

              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={onBookNow}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2"
                >
                  BOOK APPOINTMENT
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  to="/services"
                  className="border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-full font-semibold"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div>
              <img
                src={homeImg4}
                alt=""
                className="rounded-3xl w-full h-[500px] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-pink-50 rounded-3xl p-8 text-center"
              >
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-10 h-10 text-pink-500" />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-24">

          {contentSections.map((item, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                item.reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-lg leading-8 mb-6">
                  {item.description}
                </p>

                <button
                  onClick={onBookNow}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full"
                >
                  BOOK APPOINTMENT
                </button>
              </div>

              <div>
                <img
                  src={item.image}
                  alt=""
                  className="rounded-3xl w-full h-[420px] object-cover shadow-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}