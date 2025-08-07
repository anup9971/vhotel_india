import Image from "next/image";
import About from "./componets/About";
import RoomsGrid from "./componets/RoomsGrid";
import RoomPricing from "./componets/RoomPricing";

export default function Home() {
  return (
    <>
    <About/>
    <RoomsGrid/>
    <RoomPricing/>
    
    </>
  );
}
