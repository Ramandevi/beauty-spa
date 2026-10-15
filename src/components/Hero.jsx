import cardImg1 from "../assets/cardImg1.webp";
import homeImg from "../assets/homeImg.webp";
import aboutImg from "../assets/homeImg2.webp";
import DeepTissue from "../assets/DeepTissue.webp";
import Aromatherapy from "../assets/homeImg3.webp";

export default function Gallery({ onBookNow }) {
  const images = [
    cardImg1,
    homeImg,
    aboutImg,
    DeepTissue,
    Aromatherapy,
  ];

  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Spa Gallery</h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
            Explore our peaceful ambiance and premium treatments.
          </p>

          <button
            onClick={onBookNow}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Book Appointment
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 group"
            >
              <img
                src={img}
                   fetchPriority="high"
                alt={`Gallery ${index + 1}`}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}