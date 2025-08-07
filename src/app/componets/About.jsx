"use client"
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/home/slider3.jpg",
    title: "Luxury Rooms",
    description: "Experience comfort and elegance in our luxury suites."
  },
  {
    src: "/home/slider4.jpg",
    title: "Modern Interiors",
    description: "Stylish and modern decor to make your stay memorable."
  },
  {
    src: "/home/slider5.jpg",
    title: "Spacious Lounges",
    description: "Relax in our beautifully designed lounge areas."
  }
];

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % slides.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-white">
     

  

      <section className="flex flex-col lg:flex-row items-center gap-12 px-8  max-w-7xl mx-auto">
        <div className="relative w-full md:h-[450px] h-[350px] lg:w-1/2">
          <Image src="/home/slider2.jpg" alt="Resort" width={600} height={800} className="rounded-lg md:h-[450px] h-[350px] w-full object-cover" />
          <div className="absolute bottom-0 left-0 bg-[#5d8da6] text-white p-4 text-center">
            <p className="text-2xl font-bold">+106</p>
            <p className="text-sm tracking-wide">BIG SUITES ROOMS</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="uppercase tracking-wide text-sm text-gray-500 mb-2">Hotel Bayview</p>
          <h2 className="text-3xl font-serif text-gray-900 font-semibold leading-tight mb-6">Most Safe & Rated Hotel in Delhi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600 mb-6">
            <p>At Vishwanath Hospitality Pvt. Ltd., we offer premium hospitality experiences with our collection of hotels conveniently located near the Delhi airport.</p>
            <p>Our commitment to comfort, convenience, and exceptional service ensures that every guest enjoys a seamless stay. Whether you’re traveling for business or leisure, our well-appointed hotels provide modern amenities and personalized care to make your visit memorable.</p>
            {/* <p>Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl condimentum, nec tempor risus.</p> */}
            {/* <p>Curabitur a fringilla eros. Pellentesque eu interdum nulla. Pellentesque porttitor dui nec leo condimentum, et euismod mi mollis.</p> */}
          </div>
          <div className="flex items-center space-x-4">
            <Image src="/manager.jpg" alt="Manager" width={50} height={50} className="rounded-full" />
            <div>
              <p className="font-semibold text-gray-700">Sushil Kuamr Giri</p>
              <p className="text-gray-400 text-sm">Hotel Manager</p>
            </div>
          </div>
          <div className="mt-8 flex items-center space-x-4">
            <div className="bg-[#03204c] text-white px-4 py-2 rounded shadow-lg text-sm font-semibold">
              Hurry up! It's the BEST PRICE!
            </div>
            <div className="relative bg-[#03204c] text-white w-18 h-18 flex items-center justify-center rounded-full shadow-xl">
              <span className="text-xl font-bold">&#8377; 1,999</span>
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1 rounded">NEW</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


