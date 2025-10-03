import { NextRequest , NextResponse } from "next/server" ;
import { sendEmail } from "@/helpers/mailer";

export async function POST(request: NextRequest){
    try {
        const { user , emailType}  = await request.json()
        console.log(user);
        const id = user._id ;
        const email = user.email ;

        //send reset password email
        await sendEmail({email , emailType, userId: id})
        
        return NextResponse.json({
            message: `${emailType === 'VERIFY' ? "verify user Email sent" : "reset password Email sent" }` ,
            success: true,
        })

    } catch (error:any) {
        console.log("Email not sent") ;
        return NextResponse.json({error: error.message} , {status: 500})
        
    }
}