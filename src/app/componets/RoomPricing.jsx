// components/RoomPricing.tsx
export default function RoomPricing() {
  const plans = [
    {
      name: 'Small Room',
      price: '5,200',
      features: [
        'Vestibulum maximus el',
        'Quisque vulputate conse',
        'Nunc dictum ligula mollis',
        'Sed vitae tortor sed diam',
      ],
    },
    {
      name: 'Extra Suite',
      price: '7,800',
      features: [
        'Vestibulum maximus el',
        'Quisque vulputate conse',
        'Nunc dictum ligula mollis',
        'Sed vitae tortor sed diam',
      ],
      highlight: true,
      image: '/rooms/highlight.jpg', // add your background image
    },
    {
      name: 'Apartment',
      price: '9,500',
      features: [
        'Vestibulum maximus el',
        'Quisque vulputate conse',
        'Nunc dictum ligula mollis',
        'Sed vitae tortor sed diam',
      ],
    },
  ];

  return (
    <section className="py-20 bg-[#f8f8f8] text-center">
      <p className="uppercase text-xs tracking-widest text-gray-800 mb-2">Our Room Prices</p>
      <h2 className="text-4xl font-serif text-gray-900 font-medium mb-12">The Best Room Prices</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-8 shadow-md rounded-md ${
              plan.highlight
                ? 'bg-[#f5bc27] text-black bg-blend-overlay bg-cover bg-center'
                : 'bg-white text-gray-900'
            }`}
            style={
              plan.highlight && plan.image
                ? { backgroundImage: `url(${plan.image})` }
                : {}
            }
          >
            {plan.highlight && (
              <div className="absolute top-0 right-0 bg-[#6B8CA0] text-white text-xs rotate-25 origin-top-right px-2 py-1">
                ★ Best Offer
              </div>
            )}
            <h3 className="text-2xl font-serif mb-2">{plan.name}</h3>
            <p className="text-xl mb-4">
              <span className="text-sm align-top">₹</span>{' '}
              <span className="text-3xl font-medium">{plan.price}</span>{' '}
              <span className="text-sm">/ night</span>
            </p>
            <ul className="text-sm space-y-2 mb-6 text-left pl-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span>✔</span> <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide border ${
                plan.highlight
                  ? 'bg-white text-black'
                  : 'bg-[#0c1e3c] text-white hover:bg-[#1d3151]'
              }`}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
