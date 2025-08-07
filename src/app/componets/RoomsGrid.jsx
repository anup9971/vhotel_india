// components/RoomGrid.tsx
const rooms = [
  {
    type: 'BEST PRICE',
    image: '/home/slider1.jpg',
    label: 'BEST PRICE',
  },
  {
    type: 'ALL INCLUDED',
    title: 'Single Room with Ocean View',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit phasellus.',
    price: '$ 75,20',
    bg: 'bg-[#5d8da6]',
  },
  {
    image: '/home/slider2.jpg',
  },
  {
    type: 'SUMMER PROMO',
    title: "Family Room with Children's Room",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit phasellus.',
    price: '$ 62,60',
    bg: 'bg-[#03204c]',
  },
  {
    type: 'HALF BOARD',
    title: 'Luxury Suite with Sauna & Terrace',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit phasellus.',
    price: '$ 89,24',
   
    bg: 'bg-[#5d8da6]',
  },
  {
    image: '/home/slider3.jpg',
  },
  {
    type: 'PET ALLOWED',
    title: 'Mini Apartment with Kitchen',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit phasellus.',
    price: '$ 83,20',
 bg: 'bg-[#03204c]',
    labelRight: 'SALE',
  },
  {
    image: '/home/slider4.jpg',
    label: 'NEW',
  },
];

export default function RoomGrid() {
  return (
    <div className="grid grid-cols-1 pt-15 bg-white sm:grid-cols-2 lg:grid-cols-4 gap-0">
      {rooms.map((room, i) => (
        <div key={i} className="relative h-[300px] md:h-[400px] overflow-hidden">
          {/* Image card */}
          {room.image ? (
            <div className="h-full w-full">
              <img
                src={room.image}
                alt="room"
                className="w-full h-full object-cover"
              />
              {room.label && (
                <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 uppercase">
                  {room.label}
                </span>
              )}
            </div>
          ) : (
            // Text block card
            <div
              className={`flex flex-col justify-center items-center text-center h-full p-6 text-white ${room.bg || 'bg-[#2B3D59]'}`}
            >
              <div className="absolute top-2 left-2 text-xs uppercase tracking-wide">
                {room.type}
              </div>
              {room.labelRight && (
                <div className="absolute top-2 right-2 text-xs uppercase tracking-wide">
                  {room.labelRight}
                </div>
              )}
              <h3 className="text-lg font-semibold mb-2">{room.title}</h3>
              <p className="text-sm mb-4">{room.description}</p>
              <div className="bg-white text-black px-4 py-1 text-sm font-medium rounded">
                {room.price}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
