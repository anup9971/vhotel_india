import Image from "next/image";

export default function RoomServiceSection() {
  return (
    <section className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/home/slider1.jpg')" }}>
      {/* Black Transparent Overlay */}
      <div className="absolute inset-0 bg-[#00000031] bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Text Section */}
        <div className="text-white max-w-xl">
          <p className="tracking-widest text-sm uppercase mb-3">Daily Sanification</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Room Service</h2>
          <p className="text-gray-800 md:text-gray-200 mb-6">
          Step into our thoughtfully designed rooms, where elegance meets comfort. Each room is equipped with modern amenities, plush bedding, and a serene ambiance to ensure you feel at home. Whether you're here for business or leisure, our service ensures a peaceful stay with 24/7 room assistance, high-speed Wi-Fi, and in-room dining options.
          </p>

          <div>
            {/* <p className="mb-2 font-semibold">Payment Options:</p> */}
            {/* <div className="flex gap-3">
              <Image src="/visa.png" alt="Visa" width={50} height={30} />
              <Image src="/paypal.png" alt="PayPal" width={50} height={30} />
              <Image src="/mastercard.png" alt="Mastercard" width={50} height={30} />
              <Image src="/stripe.png" alt="Stripe" width={50} height={30} />
            </div> */}
          </div>
        </div>

        {/* Right Image with Discount Badge */}
        <div className="relative flex-shrink-0">
          <div className="absolute md:top-[-170px] md:left-4  bg-[#480200] bg-opacity-80 rounded-full w-40 h-40 flex flex-col items-center justify-center text-white">
            <span className="text-3xl font-serif uppercase">Up to</span>
            <span className="text-4xl font-serif font-bold">30%</span>
            <span className="text-xs  font-serif uppercase">On Selected Rooms</span>
          </div>

          {/* Towels Image */}
          {/* <Image
            src="/home/towels.png"
            alt="Towels"
            width={350}
            height={350}
            className="rounded-lg shadow-lg"
          /> */}
        </div>
      </div>
    </section>
  );
}
