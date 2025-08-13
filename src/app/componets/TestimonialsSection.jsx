"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Mr. Shakir Khan",
    // role: "Managing Director",
    image: "/images/testimonial.jpg",
    content:
      "Food quality is very good.Also I want to share review on hotel staff,supportive behavior and hospitality are very good.",
  },
  {
    name: "Surender Bhatti",
    // role: "CEO, Company",
    image: "/images/testimonial.jpg",
    content:
      "The staff at  V Hotel TSSG  were incredibly welcoming and helpful throughout our stay room was very clean and comfortable.",
  },
  {
    name: "Satyam Kumar",
    // role: "Project Manager",
    image: "/images/testimonial.jpg",
    content:
      "Food was awesome , very tasty and service was also better. I would like thank to all staff . Good manners.",
  },
   {
    name: "Subodh Nayak",
    // role: "CEO, Company",
    image: "/images/testimonial.jpg",
    content:
      "𝐕𝐞𝐫𝐲 𝐧𝐞𝐚𝐫 𝐭𝐨 𝐀𝐢𝐫𝐩𝐨𝐫𝐭. 𝐓𝐡𝐞𝐲 𝐜𝐚𝐧 𝐛𝐨𝐨𝐤 𝐭𝐡𝐞 𝐫𝐨𝐨𝐦 𝐛𝐲 𝐩𝐡𝐨𝐧𝐞. 𝐒𝐞𝐫𝐯𝐢𝐜𝐞 𝐢𝐬 𝐯𝐞𝐫𝐲 𝐠𝐨𝐨𝐝. 𝐑𝐨𝐨𝐦 𝐚𝐥𝐬𝐨 𝐢𝐧 𝐧𝐞𝐠𝐥𝐢𝐠𝐢𝐛𝐥𝐞 𝐩𝐫𝐢𝐜𝐞.",
  },
  {
    name: "Naveen Yadav",
    // role: "Project Manager",
    image: "/images/testimonial.jpg",
    content:
      "Great place to stay & conducting meetings.Food quality is very good  tasty.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h3 className="text-yellow-600 font-semibold text-lg">Testimonials</h3>
      <h2 className="text-4xl font-bold text-gray-800 mb-12">What Clients Say</h2>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col sm:flex-row gap-4 text-left items-center sm:items-start">
                {/* <img
                  src={t.image}
                  alt={t.name}
                  className="w-24 h-24 rounded-md object-cover"
                /> */}
                <div>
                  <p className="text-sm text-gray-700 mb-4">{t.content}</p>
                  <div className="flex text-yellow-500 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={16} />
                    ))}
                  </div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
