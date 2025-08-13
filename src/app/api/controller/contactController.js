import contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const  createContact= async (req)=> {
     try {
         
         let body = await req.json();
         if(!body.name || !body.phone|| !body.hotels|| !body.noOfRooms|| !body.checkIn|| !body.checkOut || !body.adult|| !body.child){
           return NextResponse.json(
            {success:false, message:" All Field are required"}
           )
         }

         const newContact =  await contact.create(body)

         return NextResponse.json(
          {success:true, message:"Contact created successfully", data:newContact},
           { status: 201 }
         )
        


    //   const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: process.env.SMTP_PORT || 587,
    //   secure: false,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS
    //   }
    // });

    // await transporter.sendMail({
    //   from: `"Hotel Booking" <${process.env.SMTP_USER}>`,
    //   to: email, // Send to customer
    //   subject: "Booking Confirmation",
    //   html: `
    //     <h2>Booking Confirmation</h2>
    //     <p>Dear ${name},</p>
    //     <p>Your booking at <b>${hotels}</b> has been confirmed.</p>
    //     <ul>
    //       <li><b>No of Rooms:</b> ${noOfRooms}</li>
    //       <li><b>Check-In:</b> ${checkIn}</li>
    //       <li><b>Check-Out:</b> ${checkOut}</li>
    //       <li><b>Adults:</b> ${adult}</li>
    //       <li><b>Children:</b> ${child}</li>
    //     </ul>
    //     <p>Message: ${message || "No additional message"}</p>
    //     <p>Thank you for booking with us!</p>
    //   `
    // });


         
     } catch (error) {
         return NextResponse.json(
      { success: false, message: "Record not created", error: error.message },
      { status: 500 }
    );
        
     }
}

