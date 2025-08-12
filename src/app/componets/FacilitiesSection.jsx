import React from 'react'

export const metadata = {
  title: "Services & Amenities | Hotel Delhi Airport Plaza",
  description: "Explore our multi-cuisine restaurant, conference hall, on-call doctor, and more luxury services available at Hotel Delhi Airport Plaza.",
  robots: "index, follow"
}

const services = [
  { id:1,
    title: "Multi-Cuisine Restaurant",
    description: "Craving something familiar or eager to try new flavors? Our kitchen dishes up a colorful blend of cuisines, all freshly prepared when you order.",
    icon: "/home/Amenities-multi-resto.png"
  },
  {  
    id:2,
    title: "Conference Hall",
    description: "Need space to brainstorm or host a meeting? Our hall is spacious, easy to set up, and packed with the tech you’ll need to stay focused no stress, just ready to go.",
    icon: "/home/Amenities-conference.png",
    bg:"#fff7f7"
  },
  {
    id:3,
    title: "Doctor On Call",
    description: "Aches, chills, or just not feeling right? Let us know, and a doctor will be available quickly no waiting around..",
    icon: "/home/Amenities-doctor.png"
  },
  {
    id:4,
    title: "Safe Deposit Locker",
    description: "Worried about your passport or valuables? Store them safely in your locker and enjoy your stay without missing a beat.",
    icon: "/home/Amenities-locker.png",
    bg:"#fff7f7"
  },
    {
        id:5,
    title: "Parking Facility",
    description: "Skip the parking headaches. Pull the right, park next to the hotel, and start your day easily.",
    icon: "/home/Amenities-parking.png"
  },
    {
        id:6,
    title: "Power backup system",
    description: "Power outage? Not here. Our backup system kicks in rapidly, so the lights remain on and life becomes seamless.",
    icon: "/home/Amenities-electric-generator.png",
    bg:"#fff7f7"
  },
    {
        id:7,
    title: "Lift Facility",
    description: "Heavy stuff or tired legs? Our lifts are clean, efficient, and ready to take you where you need to go.",
    icon: "/home/Amenities-lift-sign.png",
    
  },
    {
        id:8,
    title: "Hot & Cold water",
    description: "Whether you are starting your day with a hot shower or cooling in the evening, reliable hot and cold water is always available in your room.",
    icon: "/home/Amenities-cold.png",
    bg:"#fff7f7"
  },
    {
        id:9,
    title: "Telephone & TV",
    description: "Need to make a quick call or rest with a show? Each room has a phone and a TV, which has a lot of channels for your entertainment. Laundry services, spilled coffee, or packing light? Your clothes will be prepared, cleaned, folded, and cared for in the laundry service.",
    icon: "/home/Amenities-videocall.png"
  },
    {
        id:10,
    title: "Laundry Services",
    description: "These are services offered by out hotel to clean and care for guests' clothing and other fabrics, either for a fee or free of charge.",
    icon: "/home/Amenities-laundry-machine.png",
    bg:"#fff7f7"
  },  {
    id:11,
    title: "Travel Desk",
    description: "Looking for local adventures or needing a ride? Our travel desk offers tips, books, and rides, and helps you create a great day out.",
    icon: "/home/Amenities-information-desk.png"
  },
    {
        id:12,
    title: "Car Rental",
    description: "Want to go off-grid? We can help you rent a car simple arrangements, flexible for your schedule.",
    icon: "/home/Amenities-rental-car.png",
    bg:"#fff7f7"
  },
     {
        id:13,
    title: "All Payment Modes Accepted",
    description: "Card, cash, swipe, or tap we accept it all. Checking out is seamless and stress-free.",
    icon: "/home/Amenities-payment-method.png"
  },

     {
        id:14,
    title: "24-Hour Room Service",
    description: "Late-night cravings or early breakfasts? Just call, and we’ll bring what you need right to your door anytime.",
    icon: "/home/Amenities-room-service.png",
    bg:"#fff7f7"
  },

     {
        id:15,
    title: "Airport Pickup*",
    description: "Arriving tired or late? We’ve got you covered. Enjoy our free airport pickup and arrive relaxed and ready.",
    icon: "/home/Amenities-transporting.png"
  },

     {
        id:16,
    title: "Wi-Fi/Internet facility",
    description: "Need to check emails or stream a show? Our fast, free Wi‑Fi covers the whole hotel no endless sign-ins or passwords required.",
    icon: "/home/Amenities-free-wifi.png",
    bg:"#fff7f7"
  },


]

export default function Amenities() {
  return (
    <section className="w-full  overflow-hidden py-16 px-4 md:px-20 bg-white text-center">
      <h2 className="text-sm font-semibold text-[#f5bc27] uppercase tracking-wide mb-2">
        Our Services
      </h2>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
       Best Facilities
      </h1>
   

      <div className="grid grid-cols-1 bg-white sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10" >
        {services.map((service, index) => (
          <div
            key={index}
            style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
            className={`${service.bg? "bg-[#fff7f7]": "bg-white"} hover:shadow-2xl  transition duration-300 ease-in-out rounded-lg p-6  group hover:-translate-y-1 `}
          >
            <img
              src={service.icon}
              title={service.title}
              alt={`Amenities ${service.title}`}
              className="mx-auto  h-9 mb-1 group-hover:scale-110 transition duration-300"
            />
            <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
