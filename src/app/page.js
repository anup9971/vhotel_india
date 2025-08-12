import Image from "next/image";
import About from "./componets/About";
import RoomsGrid from "./componets/RoomsGrid";
import RoomPricing from "./componets/RoomPricing";
import FacilitiesSection from "./componets/FacilitiesSection";
import TestimonialsSection from "./componets/TestimonialsSection";
import StatsSection from "./componets/StatsSection";
import HeroSlider from "./componets/HeroSlider";

export default function Home() {
  return (
    <>
    <HeroSlider/>
    <About/>
    <RoomsGrid/>
    <RoomPricing/>
    <FacilitiesSection/>
    <TestimonialsSection/>
    <StatsSection/>
    
    </>
  );
}
