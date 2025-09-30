import { NextRequest , NextResponse } from "next/server" ;
import { sendEmail } from "@/helpers/mailer";

export async function POST(request: NextRequest){
    try {
        const data = await request.json()
        console.log(data);
        const id = data._id ;
        const email = data.email ;

        //send reset password email
        await sendEmail({email , emailType: "RESET", userId: id})
        
        
        return NextResponse.json({
            message: "reset password Email sent " ,
            success: true,
        })

    } catch (error:any) {
        console.log("reset password email not sent") ;
        return NextResponse.json({error: error.message} , {status: 500})
        
    }
}