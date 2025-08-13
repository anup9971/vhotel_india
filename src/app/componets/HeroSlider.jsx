"use client"
import React from 'react'
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
export default function HeroSlider() {
 
   const slides = [
  { 
    src: "/home/slider1.jpg",
    title: "V HOTEL THE GRAND SHOBA",
    description: "Experience comfort and elegance in our luxury suites.",
    url:"https://www.vhotelthegrandshoba.com/"
  },
  {
    src: "/home/slider2.jpg",
    title: "HOTEL DELHI AIRPORT",
    description: "Stylish and modern decor to make your stay memorable.",
    url:"https://www.hoteldelhiairport.com/"
  },
  {
    src: "/home/slider3.jpg",
    title: "HOTEL NEAR DELHI AIRPORT",
    description: "Relax in our beautifully designed lounge areas.",
    url:"https://www.hotelneardelhiairport.com/"
  },
  {
    src: "/home/slider4.jpg",
    title: "V HOTEL TSSG",
    description: "Relax in our beautifully designed lounge areas.",
    url:"https://www.vhoteltssg.com/"
  },
  {
    src: "/home/slider4.jpg",
    title: "HOTEL DELHI AIRPORT PLAZA",
    description: "Relax in our beautifully designed lounge areas.",
    url:"https://www.hoteldelhiairportplaza.com/"
  },
  {
    src: "/home/slider6.jpg",
    title: "HOTEL VIEW PORT",
    description: "Relax in our beautifully designed lounge areas.",
    url:"/"
  },
  {
    src: "/home/slider7.jpg",
    title: "HOTEL YASHOBHOOMI",
    description: "Relax in our beautifully designed lounge areas.",
    url:"/"
  },
  {
    src: "/home/slider8.jpg",
    title: "HOTEL IN MAHIPALPUR",
    description: "Relax in our beautifully designed lounge areas.",
    url:"/"
  },
  {
    src: "/home/slider9.jpg",
    title: "HOTEL THE GRAND SHOBA",
    description: "Relax in our beautifully designed lounge areas.",
    url:"/"
  },
  {
    src: "/home/slider10.jpg",
    title: "HOTEL RESIDENCY",
    description: "Relax in our beautifully designed lounge areas.",
    url:"/"
  },

];
    const [currentImage, setCurrentImage] = useState(0);
    
      const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % slides.length);
      };
    
      const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + slides.length) % slides.length);
      };
  return (
    <>
   <section className="relative w-full mt-0   overflow-hidden">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="min-w-full h-[80vh] relative flex items-center justify-center" key={index}>
              <Image src={slide.src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" className="z-0" />
              <div className="absolute bg-[#11111141] bg-opacity-50 text-white p-6 rounded-lg max-w-xl text-center z-10">
                <h2 className="text-[22px] md:text-3xl font-bold mb-2">{slide.title}</h2>
                <p className="text-md">{slide.description}</p>
                 <Link href={slide.url}>
                 <div className="bg-amber-600 w-35 m-auto mt-5 hover:bg-amber-700  p-2 rounded-xl text-white">Book Now</div>
              </Link>
              </div>
             
            </div>
          ))}
        </div>
        <button onClick={prevImage} className="absolute top-1/2 text-white left-4 transform -translate-y-1/2 bg-[#11111179] p-2 rounded-full shadow">
          <ChevronLeft  size={24} />
        </button>
        <button onClick={nextImage} className="absolute  text-white top-1/2 right-4 transform -translate-y-1/2 bg-[#11111179]  p-2 rounded-full shadow">
          <ChevronRight size={24} />
        </button>
      </section>
    
    </>
  )
}
