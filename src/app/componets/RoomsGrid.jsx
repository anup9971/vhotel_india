"use client";
import Image from "next/image";
import { FaBed, FaPaw, FaTv, FaWifi, FaUtensils } from "react-icons/fa";

const hotels = [
  {
    name: " V Hotel The Grand Shoba",
    image: "/home/slider1.jpg",
    link: "https://www.vhotelthegrandshoba.com/",
    icons: [<FaBed />, <FaPaw />, <FaTv />, <FaUtensils />, <FaWifi />],
  },
  {
    name: "V Hotel TSSG",
    image: "/home/slider6.jpg",
    link: "https://www.vhoteltssg.com/",
    icons: [<FaBed />, <FaPaw />, <FaTv />, <FaUtensils />, <FaWifi />],
  },
  {
    name: "Hotel Delhi Airport Plaza",
    image: "/home/slider2.jpg",
    link: "https://www.hoteldelhiairportplaza.com/",
    icons: [<FaPaw />, <FaBed />, <FaTv />, <FaUtensils />, <FaWifi />],
  },
  {
    name: "Hotel  Near Delhi Airport",
    image: "/home/slider3.jpg",
    link: "https://www.hotelneardelhiairport.com/",
    icons: [<FaBed />, <FaPaw />, <FaTv />, <FaUtensils />, <FaWifi />],
  },
  {
    name: "Hotel Delhi Airport ",
    image: "/home/slider4.jpg",
    link: "https://www.hoteldelhiairport.com/",
    icons: [<FaBed />, <FaPaw />, <FaTv />, <FaUtensils />, <FaWifi />],
  },
  {
    name: "Hotel Annexe",
    image: "/home/slider5.jpg",
    link: "#",
    icons: [<FaBed />, <FaPaw />, <FaTv />, <FaUtensils />, <FaWifi />],
  },
  {
    name: "Hotel Port View",
    image: "/home/slider6.jpg",
    link: "#",
    icons: [<FaBed />, <FaPaw />, <FaTv />, <FaUtensils />, <FaWifi />],
  },
  {
    name: "Hotel in Mahipalpur",
    image: "/home/slider7.jpg",
    link: "#",
    icons: [<FaBed />, <FaPaw />, <FaTv />, <FaUtensils />, <FaWifi />],
  },
   {
    name: "Hotel Near Yashobhoomi",
    image: "/home/slider10.jpg",
    link: "#",
    icons: [<FaBed />, <FaPaw />, <FaTv />, <FaUtensils />, <FaWifi />],
  },
];

export default function HotelGrid() {
  return (
    <>
    <div className="bg-[#fdf4d7e0]">
      <p className="text-xl text-center pt-15 text-[#480200]">Our Luxury Hotels</p>
      <p className="text-center text-2xl text-black md:text-4xl pb-5 ">Experience Comfort Across Our Hotels</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-5 gap-6 p-4">
      {hotels.map((hotel, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-md shadow-lg"
        >
          {/* Image */}
          <Image
            src={hotel.image}
            alt={hotel.name}
            width={500}
            height={350}
            className="w-full h-64 object-cover transform  "
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#0000007a] bg-opacity-30 group-hover:bg-opacity-50 transition"></div>

          {/* Border */}
          {/* <div className="absolute inset-4 border border-white"></div> */}

          
          <div className="absolute top-11 right-0 bg-[#2a1105] text-white text-xs rotate-25 origin-top-right px-2 py-1">
                ★ Special Offer
              </div>


          {/* Text content */}
          <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-white z-10">
            <h2 className="text-lg font-semibold mb-2">{hotel.name}</h2>
            <div className="flex space-x-2 text-[#ffffff] text-sm mb-4">
              {hotel.icons.map((icon, i) => (
                <span key={i}>{icon}</span>
              ))}
            </div>
            <a
              href={hotel.link} target="_blank"
              className="px-3 py-1 border border-white text-xs hover:bg-[#480200] hover:border-black transition"
            >
              CLICK HERE
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
    
    </>
  );
}
