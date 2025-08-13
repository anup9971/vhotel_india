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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor tellus vel mauris scelerisque accumsan.
            Maecenas quis nunc sed sapien dignissim pulvinar.
          </p>

          <p className="text-gray-800 md:text-gray-200 mb-8">
            Se d at gravida ligula, eget hendrerit nisi. Pellentesque et congue mauris, posuere finibus risus.
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
          {/* Discount Circle */}
          <div className="absolute -top-6 -left-6 bg-[#480200] bg-opacity-80 rounded-full w-40 h-40 flex flex-col items-center justify-center text-white">
            <span className="text-sm uppercase">Up to</span>
            <span className="text-4xl font-bold">30%</span>
            <span className="text-xs uppercase">On Selected Rooms</span>
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
