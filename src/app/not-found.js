"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      <h1 className="text-9xl font-extrabold text-red-600">404</h1>
      <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
        Oops! Page not found.
      </p>
      <p className="text-gray-500 mt-2">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
