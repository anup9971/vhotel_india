// components/Footer.tsx
import { MdOutlineMail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaEarthAmericas } from "react-icons/fa6";

import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaYoutube,
  FaPhoneAlt,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white text-sm">
      {/* Top */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20 py-10">
        {/* Phone Support */}
        <div>
          <h4 className=" font-semibold mb-2">Information</h4>
          <p className=" flex gap-3 font-medium mb-2 hover:text-[#f5bc27] hover:underline"> <FaPhoneAlt className="text-[#f5bc27]"/> +91 9811344557</p>
          <a className=" flex gap-3 font-medium mb-2 hover:text-[#f5bc27] hover:underline" href="mailto:info@vhotelindia.com"> <MdOutlineMail className="text-[#f5bc27]" />info@vhotelindia.com</a>
          <p  className=" flex gap-3 font-medium mb-2 hover:text-[#f5bc27] hover:underline"> <ImLocation className="text-[#f5bc27]" /> New Delhi</p>
          <a className=" flex gap-3 font-medium mb-2 hover:text-[#f5bc27] hover:underline" href="http://www.vhotelindia.com" target="_blank" rel="noopener noreferrer"> <FaEarthAmericas className="text-[#f5bc27]" />  www.vhotelindia.com</a>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
          <p className="text-xs text-gray-300 uppercase mb-4">Social Media Channels</p>
          <div className="flex gap-4 text-white text-lg">
            <FaInstagram className="hover:text-[#f5bc27] cursor-pointer" />
            <FaTwitter className="hover:text-[#f5bc27] cursor-pointer" />
            <FaFacebookF className="hover:text-[#f5bc27] cursor-pointer" />
            <FaPinterestP className="hover:text-[#f5bc27] cursor-pointer" />
            <FaYoutube className="hover:text-[#f5bc27] cursor-pointer" />
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Write Reviews</h4>
          {/* <p className="text-xs text-gray-300 uppercase mb-4">Sign up for special offers</p> */}
          {/* <form className="flex max-w-sm">
            <input
              type="email"
              placeholder="Insert your email"
              className="w-full px-4 py-2 text-black bg-white rounded-l-md"
            />
            <button
              type="submit"
              className="bg-[#6B8CA0] text-white px-4 py-2 font-semibold text-xs uppercase rounded-r-md"
            >
              Subscribe
            </button>
          </form> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#333333] text-white py-4 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs relative">
        {/* Nav Links */}
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#f5bc27]">
            Home
          </a>
          <a href="#" className="hover:text-[#f5bc27]">
            Services
          </a>
          <a href="#" className="hover:text-[#f5bc27]">
            About
          </a>
          <a href="#" className="hover:text-[#f5bc27]">
            Booking
          </a>
          <a href="#" className="hover:text-[#f5bc27]">
            Contact
          </a>
        </div>

        {/* Logos */}
        <div className="flex gap-6 items-center">
          <span className="text-gray-400 font-serif italic">eighty eight</span>
          <span className="text-gray-400 font-serif italic">ALSONA</span>
        </div>

        {/* Price Badge */}
        <div className="absolute -top-4 right-4 md:static md:ml-auto flex items-center">
          {/* <div className="bg-red-500 text-white text-[10px] px-4 py-2 uppercase tracking-wide rounded-l-md">
            ✓ Hurry up ! It's the BEST PRICE !
          </div> */}
          {/* <div className="bg-[#6B8CA0] text-white px-3 py-2 text-xs rounded-r-full flex flex-col items-center justify-center relative">
            <span className="text-[9px] absolute top-0 right-1">New</span>
            <span className="text-lg font-semibold">$54</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
