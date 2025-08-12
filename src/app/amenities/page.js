import React from 'react'
import FacilitiesSection from "@/app/componets/FacilitiesSection"
import Image from 'next/image'
export default function page() {
  return (
    <>
    <div className="w-full bg-white">
           <div className="relative w-full h-[400px]">
             <Image
               src="/home/slider10.jpg" // Save the uploaded image in public/reception.jpg
               alt="Hotel Reception"
               fill
               className="object-cover"
               priority
             />
           </div>
       </div> 
       <FacilitiesSection/>
    </>
  )
}
