import Image from 'next/image'
import React from 'react'
import { IoMail } from "react-icons/io5";
import { FaEarthAmericas, FaPhoneVolume } from 'react-icons/fa6'
import { MdLocationOn } from 'react-icons/md';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export default function page() {
  return (
    <>
       <div className="w-full bg-white">
               <div className="relative w-full h-[400px]">
                 <Image
                   src="/home/slider10.jpg" // Save the uploaded image in public/reception.jpg
                   alt="Hotel Reception"
                   fill
                   className="object-cover"
                   priority
                 />
               </div>
        </div>

     <div class="md:grid  grid-cols-4 gap-4 p-8 bg-white">

         <div className='flex flex-col mb-8 items-center justify-center text-center shadow-lg h-45 bg-white'>
            <FaPhoneVolume className='text-[#ed552d] hover:text-[#4d4ae7] text-4xl mb-2' />
            <p className='text-gray-800 font-medium'>Call Us</p>
            <p className="mb-2 text-gray-600">
                +91-9811344557, 9811226576, <br /> 9871026576
            </p>
          </div>

         <div className='flex flex-col mb-8 items-center justify-center text-center shadow-lg h-45 bg-white'>
             <IoMail className='text-[#ed552d] hover:text-[#4d4ae7] text-4xl mb-2 ' />
             <p className='text-gray-800 font-medium'>Email Us</p>
             <a className=" text-gray-600 mb-2 " href="mailto:info@vhotelindia.com"> info@vhotelindia.com</a>
         </div>
         <div className='flex flex-col mb-8 items-center justify-center text-center shadow-lg h-45 bg-white'>
              <MdLocationOn className='text-[#ed552d] hover:text-[#4d4ae7] text-4xl mb-2 ' />
               <p className='text-gray-800 font-medium'>Address</p>
               <p  className=" text-gray-600 mb-2 ">  New Delhi</p>
         </div>
         <div className='flex flex-col mb-8 items-center justify-center text-center shadow-lg h-45 bg-white'>
               <FaEarthAmericas className='text-[#ed552d] hover:text-[#4d4ae7] text-4xl mb-2 ' />
                <p className='text-gray-800 font-medium'>Website</p>
                <a className=" text-gray-600 mb-2 " href="http://www.vhotelindia.com" target="_blank" rel="noopener noreferrer">   www.vhotelindia.com</a>
         </div>
    </div>

     <div className="bg-[#fdfbf6] py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Google Map */}
        <div className="w-full h-80">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=v%20hotel%20india%20Plot%20No.%20L-701%2F1%20Mahipalpur%20Extension%20Delhi%20Transit%20New%20Delhi%2C%20Delhi%20110037%20India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          {/* Reception */}
          <div className="flex items-start gap-4">
            <div className="bg-[#2d2c7a] text-white p-3 rounded-full text-xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700">Reception</h4>
              <a href="tel:+919871026576" className="text-blue-600 hover:underline">
                +91-9871026576
              </a>
            </div>
          </div>

          {/* Call Us 1 */}
          <div className="flex items-start gap-4">
            <div className="bg-[#2d2c7a] text-white p-3 rounded-full text-xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700">Call Us</h4>
              <a href="tel:+919811226576" className="text-blue-600 hover:underline">
                +91-9811226576
              </a>
            </div>
          </div>

          {/* Call Us 2 */}
          <div className="flex items-start gap-4">
            <div className="bg-[#2d2c7a] text-white p-3 rounded-full text-xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700">Call Us</h4>
              <a href="tel:+91981344557" className="text-blue-600 hover:underline">
                +91-9811344557
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="bg-[#2d2c7a] text-white p-3 rounded-full text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700">Address</h4>
              <p className="text-gray-600">
                Plot No. L-701/1 Mahipalpur Extension Delhi Transit New Delhi, Delhi 110037 India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
