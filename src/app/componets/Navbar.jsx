"use client";

import { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTripadvisor } from "react-icons/fa"; // Use react-icons instead of FontAwesome <i>
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          {/* <span className="text-xl font-bold">
            Vishwanatha HOSPITALITY PVT. LTD.
          </span> */}
        </div>

        {/* Desktop Nav */}
        <nav className="space-x-6 hidden md:flex">
          <a href="/" className="hover:text-yellow-400">HOME</a>
          <a href="/about" className="hover:text-yellow-400">ABOUT US</a>
          <a href="/amenities" className="hover:text-yellow-400">OUR HOTELS</a>
          <a href="/amenities" className="hover:text-yellow-400">AMENITIES</a>
          {/* <a href="#" className="hover:text-yellow-400">RESERVATIONS</a> */}
          <a href="/contact-us" className="hover:text-yellow-400">CONTACT US</a>
        </nav>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-yellow-400"><FaFacebook /></a>
          <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
          <a href="#" className="hover:text-yellow-400"><FaTripadvisor /></a>
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
          <a href="/" className="block hover:text-yellow-400">HOME</a>
          <a href="/about" className="block hover:text-yellow-400">ABOUT US</a>
          <a href="#" className="block hover:text-yellow-400">OUR HOTELS</a>
          <a href="/amenities" className="block hover:text-yellow-400">AMENITIES</a>
          {/* <a href="#" className="block hover:text-yellow-400">RESERVATIONS</a> */}
          <a href="/contact-us" className="block hover:text-yellow-400">CONTACT US</a>
          {/* Social Icons */}
          <div className="flex space-x-4 pt-4">
            <a href="#" className="hover:text-yellow-400"><FaFacebook /></a>
            <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400"><FaTripadvisor /></a>
          </div>
        </div>
      )}
    </div>
  );
}
