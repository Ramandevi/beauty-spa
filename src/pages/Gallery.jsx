import cardImg1 from "../assets/cardImg1.webp";
import homeImg from "../assets/homeImg.webp";
import aboutImg from "../assets/homeImg2.webp";
import DeepTissue from "../assets/DeepTissue.webp";
import Aromatherapy from "../assets/homeImg3.webp";
import homeImg4 from "../assets/homeImg4.webp";

export default function Gallery({ onBookNow }) {

  const images = [
  cardImg1,
  homeImg,
  aboutImg,
  DeepTissue,
  Aromatherapy,
  homeImg4,
];

  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Spa Gallery
          </h1>

          <p className="text-gray-600 text-lg">
            Explore our peaceful ambiance and premium treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={img}
                alt=""
                className="w-full h-72 object-cover hover:scale-110 duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}