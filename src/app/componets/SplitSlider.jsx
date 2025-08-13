"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { src: "/home/slider1.jpg", title: "V Hotel The Grand Shoba", url:"https://www.vhotelthegrandshoba.com/" },
  { src: "/home/slider3.jpg", title: "V Hotel TSSG",url:"https://www.vhoteltssg.com/" },
  { src: "/home/slider2.jpg", title: "Hotel Delhi Airport Plaza",url:"https://www.hoteldelhiairportplaza.com/" },
  { src: "/home/slider4.jpg", title: "Hotel Near Delhi Airport",url:"https://www.hotelneardelhiairport.com/" },
  { src: "/home/slider5.jpg", title: "Hotel Annexe",url:"/" },
  { src: "/home/slider6.jpg", title: "Hotel Port View",url:"/" },
  { src: "/home/slider7.jpg", title: "Hotel in Mahipalpur",url:"/" },
  { src: "/home/slider8.jpg", title: "Hotel Near Yashobhoomi",url:"/" },
  { src: "/home/slider10.jpg", title: "Hotel  Delhi Airport",url:"https://www.hoteldelhiairport.com/" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next"); // "next" or "prev"

  const nextSlide = () => {
    setDirection("next");
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (dir) => ({
      y: dir === "next" ? "-100%" : "100%",
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
    exit: (dir) => ({
      y: dir === "next" ? "100%" : "-100%",
      opacity: 0,
      transition: { duration: 0.8 },
    }),
  };

  return (
    <>
    
     <div className="relative w-full h-[550px] md:h-screen overflow-hidden">
      <AnimatePresence custom={direction}>
        <Link href={slides[index].url} target="_blank" >
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src={slides[index].src}
            alt={slides[index].title}
            fill
            priority
            className="object-cover"
          />

          {/* Black Transparent Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />
          {/* Title */}
          <h1 className="absolute bottom-20  font-serif left-10 z-20 text-white text-3xl md:text-6xl font-bold">
            {slides[index].title}
          </h1>
        </motion.div>
        </Link>
      </AnimatePresence>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-[#00000067] hover:bg-[#00000079] text-white px-4 py-2 rounded-full z-30"
      >
        Prev
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-[#00000067] hover:bg-[#00000079] text-white px-4 py-2 rounded-full z-30"
        >
        Next
      </button>
    </div>
     
    </>
  );
}
