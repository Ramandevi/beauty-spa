import { Star, Sparkles } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Simran K.",
      review:
        "From the moment I walked in, I was treated like royalty. The staff is super professional and friendly. The massage therapy was heavenly and the salon services were top-notch. Will definitely be visiting again!",
    },
    {
      name: "Pooja T.",
      review:
        "Absolutely loved my experience at Jardo Spa & Salon! The ambiance was so peaceful and calming. My facial and hair spa left me feeling refreshed and glowing. Highly recommend to anyone looking for a quality self-care session!",
    },
    {
      name: "Ananya R.",
      review:
        "Jardo has truly set a new standard for spa and salon services. The manicure and pedicure were detailed and luxurious. Loved the personal attention and clean, beautiful space. Worth every penny!",
    },
  ];

  return (
    <div className="bg-white min-h-screen">

      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-pink-600">
              Happy Customers
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Client
            <span className="block bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mt-2">
              Testimonials
            </span>
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Hear what our happy customers say about their experience at Jardo
            Spa & Beauty.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
       
          <div className="text-center mb-12">
            <p className="text-pink-600 font-semibold text-lg mb-2">
              Happy Customer
            </p>

            <div className="flex justify-center items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-yellow-400"
                />
              ))}
              <span className="ml-2 text-gray-700 font-semibold">5/5</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Clients Say
            </h2>
          </div>

       
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-pink-100"
              >
               
                <div className="flex mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

            
                <p className="text-gray-600 italic leading-8 mb-6">
                  “{review.review}”
                </p>

             
                <h3 className="text-xl font-semibold text-pink-600">
                  {review.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}