"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Carolina Montoya",
    role: "Managing Director",
    image: "/images/testimonial.jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "John Doe",
    role: "CEO, Company",
    image: "/images/testimonial.jpg",
    content:
      "Amazing service and great experience. Highly recommend to anyone looking for quality work.",
  },
  {
    name: "Sarah Lee",
    role: "Project Manager",
    image: "/images/testimonial.jpg",
    content:
      "They exceeded my expectations and delivered on time. The best team I’ve worked with!",
  },
   {
    name: "John Doe",
    role: "CEO, Company",
    image: "/images/testimonial.jpg",
    content:
      "Amazing service and great experience. Highly recommend to anyone looking for quality work.",
  },
  {
    name: "Sarah Lee",
    role: "Project Manager",
    image: "/images/testimonial.jpg",
    content:
      "They exceeded my expectations and delivered on time. The best team I’ve worked with!",
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
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-24 h-24 rounded-md object-cover"
                />
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
