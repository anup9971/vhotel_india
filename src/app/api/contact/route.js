import {db_connect} from "@/app/api/lib/db_connect"
import { createContact } from "../controller/contactController"
import { NextResponse } from "next/server";

export const POST = async(req)=> {
    try {
        await db_connect();
        return await createContact(req)
    } catch (error) {
           return  NextResponse.json(
            { success:false, message :"Method not allow " , error : error.message},
            {status:405}
           )
    }
}