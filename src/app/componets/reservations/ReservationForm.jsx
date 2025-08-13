// app/components/ReservationForm.tsx
"use client";

import { useState } from "react";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hotel: "",
    rooms: "",
    checkIn: "",
    checkOut: "",
    adults: "",
    children: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center py-10 px-4 bg-[#fdf4d7e0]">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Reservations</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-[#2a11053b] shadow-lg rounded-2xl p-6 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border placeholder:text-black border-gray-200 text-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border placeholder:text-black border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
        />

        {/* Hotel */}
        <select
          name="hotel"
          value={formData.hotel}
          onChange={handleChange}
          className="w-full border text-black border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
        >
          <option value="" disabled>
            Select Hotel
          </option>
          <option value="Hotel The Grand Shoba">Hotel The Grand Shoba</option>
          <option value="Hotel Annexe">Hotel Annexe</option>
          <option value="Hotel Delhi Airport Plaza">Hotel Delhi Airport Plaza</option>
          <option value="V Hotel TSSG">V Hotel TSSG</option>
          <option value="Hotel Near Delhi Airport">Hotel Near Delhi Airport</option>
          <option value="Hotel Port View">Hotel Port View</option>
          <option value="Hotel in Mahipalpur">Hotel in Mahipalpur</option>
          <option value="Hotel Delhi Airport">Hotel Delhi Airport</option>
          <option value="Hotel Near Yashobhoomi">Hotel Near Yashobhoomi</option>
        </select>

        {/* Rooms */}
        <input
          type="number"
          name="rooms"
          placeholder="Rooms"
          value={formData.rooms}
          onChange={handleChange}
          min="1"
          className="w-full border placeholder:text-black border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
        />

        {/* Check In */}
        <input
          type="date"
          name="checkIn"
          placeholder="Check-In Date"
          value={formData.checkIn}
          onChange={handleChange}
          className="w-full border text-black border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
        />

        {/* Check Out */}
        <input
          type="date"
          name="checkOut"
          placeholder="Check-Out Date"
          value={formData.checkOut}
          onChange={handleChange}
          className="w-full border text-black border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
        />

        {/* Adults */}
        <input
          type="number"
          name="adults"
          placeholder="No. of Adults"
          value={formData.adults}
          onChange={handleChange}
          min="1"
          className="w-full border placeholder:text-black border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
        />

        {/* Children */}
        <input
          type="number"
          name="children"
          placeholder="No. of Children"
          value={formData.children}
          onChange={handleChange}
          min="0"
          className="w-full border placeholder:text-black border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your message (optional)"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full border placeholder:text-black border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none sm:col-span-2"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="sm:col-span-2 w-full bg-[#480200] text-white py-3 rounded-lg font-semibold hover:bg-[#5f1512] transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
