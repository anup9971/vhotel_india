import Image from "next/image";
import About from "./componets/About";
import RoomsGrid from "./componets/RoomsGrid";
import RoomPricing from "./componets/RoomPricing";
import FacilitiesSection from "./componets/FacilitiesSection";
import TestimonialsSection from "./componets/TestimonialsSection";
import StatsSection from "./componets/StatsSection";
import HeroSlider from "./componets/HeroSlider";
import RoomServiceSection from "./componets/RoomServiceSection";
import SplitSlider from "./componets/SplitSlider";

export default function Home() {
  return (
    <>
    <SplitSlider/>
    {/* <HeroSlider/> */}
    <About/>
    <RoomServiceSection/>
    <RoomsGrid/>
    <RoomPricing/>
    <FacilitiesSection/>
    <TestimonialsSection/>
    <StatsSection/>
    
    </>
  );
}
