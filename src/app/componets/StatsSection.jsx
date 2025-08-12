"use client";

const stats = [
  { number: "7+", label: "LUXURIOUS HOTELS" },
  { number: "2K+", label: "TRAVELERS REVIEWS" },
  { number: "250+", label: "HAPPY FACES" },
  { number: "150+", label: "PEOPLES TO SERVE YOU" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#FAF8F4] mb-15 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center gap-8 px-4">
        {stats.map((item, index) => (
          <div key={index}>
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-500">
              {item.number}
            </h2>
            <p className="mt-2 text-gray-700 text-sm md:text-base font-medium tracking-wide">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
