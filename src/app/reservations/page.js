import Image from 'next/image'
import React from 'react'
import ReservationForm from '../componets/reservations/ReservationForm'

export default function page() {
  return (
    <>
       <div className="w-full bg-white">
            <div className="relative w-full h-[400px]">
              <Image
                src="/home/slider10.jpg" 
                alt="Hotel Reception"
                fill
                className="object-cover"
                priority
              />
            </div>
        </div>
        <ReservationForm/>
       
    </>
  )
}
