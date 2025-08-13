
import mongoose, { model, models, Schema } from "mongoose";

const ContactSchema =  new Schema({
    name:{
        type:String,
        required :[true, "Name  Field Is Required "]
    },
    phone:{
        type:String,
        required:[true, "Phone Number  Field Is Required"]
    },
     hotels:{
        type:String,
        required:[true, "Hotels Field Is Required"]
    },

      noOfRooms:{
        type:Number,
        required:[true, "No. Of Room sField Is Required"]
    },
      checkIn:{
        type:String,
        required:[true, "Check-In Date Field Is Required"]
    },
     checkOut:{
        type:String,
        required:[true, "Check-Out Date Field Is Required"]
    },
    adult:{
        type:String,
        required:[true, "Adults Field Is Required"]
    },
    child:{
        type:String,
        required:[true, "Child Field Is Required"]
    },
    message:{
        type:String,

    }

})

export default  models.Contact || model("Contact", ContactSchema)