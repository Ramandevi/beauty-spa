import { Users, Award, Calendar, ThumbsUp } from "lucide-react";
import aboutImg from "../assets/aboutImg.webp";

export default function About({ onBookNow }) {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-2 gap-12 items-center">

           <div>

              <h1 className="text-5xl font-bold mb-4">
                About Jardo Spa & Beauty
              </h1>

              <h2 className="text-2xl font-semibold text-pink-500 mb-6">
                Jardo Spa & Salon – The Best Relaxation Therapy
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                Highly Trained Experts: Our skilled therapists and stylists are
                passionate professionals with years of experience.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                Premium Products: We use only trusted, high-quality products for
                skin, hair, and body care.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                Relaxing Ambience: A peaceful and luxurious environment designed for relaxation.
              </p>

              <p className="text-gray-600 text-lg mb-6">
                Personalized Care: Every service is tailored to your individual needs.
              </p>

              <button
                onClick={onBookNow}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-medium shadow-md transition"
              >
                BOOK APPOINTMENT
              </button>

             <div className="grid grid-cols-2 gap-4 mt-10">
                {[
                  { icon: Users, label: "Expert Staff", value: "25+" },
                  { icon: Award, label: "Awards Won", value: "15+" },
                  { icon: Calendar, label: "Years Serving", value: "8" },
                  { icon: ThumbsUp, label: "Satisfied Clients", value: "98%" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-4 text-center shadow-sm"
                  >
                    <stat.icon className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-pink-500">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-3xl opacity-20"></div>

              <img
                src={aboutImg}
                alt="Spa Interior"
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}