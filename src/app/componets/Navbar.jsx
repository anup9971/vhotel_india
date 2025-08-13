"use client";

import { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTripadvisor } from "react-icons/fa";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [isHotelsOpen, setIsHotelsOpen] = useState(false); // Mobile dropdown toggle

  return (
    <div className="bg-white">
      <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/home/logo.png"
              alt="Vishwanatha Logo"
              width={250}
              height={50}
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="space-x-6 hidden md:flex items-center">
          <Link href="/" className="hover:text-yellow-400">HOME</Link>
          <Link href="/about" className="hover:text-yellow-400">ABOUT US</Link>

          {/* OUR HOTELS Dropdown */}
          <div className="relative group">
            <button className="hover:text-yellow-400">OUR HOTELS</button>
            <div className="absolute left-0 mt-2 z-20 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 invisible group-hover:visible min-w-[200px]">
              <Link href="https://www.vhotelthegrandshoba.com/" target="_blank" className="block px-4 py-2 hover:bg-gray-100">V Hotel The Grand Shoba</Link>
              <Link href="https://www.vhoteltssg.com/" target="_blank" className="block px-4 py-2 hover:bg-gray-100">V Hotel TSSG</Link>
              <Link href="https://www.hoteldelhiairportplaza.com/" target="_blank" className="block px-4 py-2 hover:bg-gray-100">Hotel Delhi Airport Plaza</Link>
              <Link href="https://www.hotelneardelhiairport.com/" target="_blank" className="block px-4 py-2 hover:bg-gray-100">Hotel Near Delhi Airport</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Hotel Annexe</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Hotel Port View</Link>
              <Link href="https://www.hoteldelhiairport.com/" target="_blank" className="block px-4 py-2 hover:bg-gray-100">Hotel Delhi Airport</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Hotel in Mahipalpur</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Hotel Near Yashobhoomi</Link>
              
            </div>
          </div>

          <Link href="/amenities" className="hover:text-yellow-400">AMENITIES</Link>
          <Link href="/reservations" className="hover:text-yellow-400">RESERVATIONS</Link>
          <Link href="/contact-us" className="hover:text-yellow-400">CONTACT US</Link>
        </nav>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <a href="https://www.facebook.com/people/V-Hospitality/pfbid08bQHVRYTLdp5ZNeBaaSwmNJK96eTx4vo3NJXQAhr1Lq41Z5mywMoP1hZ5gLJFNLwl/" className="hover:text-yellow-400"><FaFacebook /></a>
          <a href="https://www.instagram.com/vhoteltssg/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#" className="hover:text-yellow-400"><FaInstagram /></a>
          <a href="https://www.youtube.com/watch?v=UixEVGN09YU" className="hover:text-yellow-400"><FaYoutube /></a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4">
          <Link href="/" className="block hover:text-yellow-400">HOME</Link>
          <Link href="/about" className="block hover:text-yellow-400">ABOUT US</Link>

          {/* Mobile OUR HOTELS Dropdown */}
          <div>
            <button
              onClick={() => setIsHotelsOpen(!isHotelsOpen)}
              className="w-full text-left hover:text-yellow-400"
            >
              OUR HOTELS
            </button>
            {isHotelsOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link href="https://www.vhotelthegrandshoba.com/" target="_blank" className="block px-4 py-2 hover:bg-gray-100">V Hotel The Grand Shoba</Link>
              <Link href="https://www.vhoteltssg.com/" target="_blank" className="block px-4 py-2 hover:bg-gray-100">V Hotel TSSG</Link>
              <Link href="https://www.hoteldelhiairportplaza.com/" target="_blank" className="block px-4 py-2 hover:bg-gray-100">Hotel Delhi Airport Plaza</Link>
              <Link href="https://www.hotelneardelhiairport.com/" target="_blank" className="block px-4 py-2 hover:bg-gray-100">Hotel Near Delhi Airport</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Hotel Annexe</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Hotel Port View</Link>
              <Link href="https://www.hoteldelhiairport.com/" target="_blank" className="block px-4 py-2 hover:bg-gray-100">Hotel Delhi Airport</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Hotel in Mahipalpur</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Hotel Near Yashobhoomi</Link>
              </div>
            )}
          </div>

          <Link href="/amenities" className="block hover:text-yellow-400">AMENITIES</Link>
          <Link href="/reservations" className="block hover:text-yellow-400">RESERVATIONS</Link>
          <Link href="/contact-us" className="block hover:text-yellow-400">CONTACT US</Link>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-4">
            <a href="https://www.facebook.com/people/V-Hospitality/pfbid08bQHVRYTLdp5ZNeBaaSwmNJK96eTx4vo3NJXQAhr1Lq41Z5mywMoP1hZ5gLJFNLwl/" className="hover:text-yellow-400"><FaFacebook /></a>
          <a href="https://www.instagram.com/vhoteltssg/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#" className="hover:text-yellow-400"><FaInstagram /></a>
          <a href="https://www.youtube.com/watch?v=UixEVGN09YU" className="hover:text-yellow-400"><FaYoutube /></a>
        
          </div>
        </div>
      )}
    </div>
  );
}
