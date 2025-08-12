import Image from 'next/image'
import React from 'react'
import About from '../componets/About'

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
    <About/>
    </>
  )
}
