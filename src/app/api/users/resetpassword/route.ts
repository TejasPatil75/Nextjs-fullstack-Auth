import { connect } from "@/dbConfig/dbConfig";
import { NextRequest , NextResponse} from "next/server";
import User from "@/models/userModel"
import { error } from "console";
import bcrypt from "bcryptjs";


connect() ;

export async function POST(request : NextRequest){

    try {
        const reqBody = await request.json()
        const {token , password} = reqBody ;

        const user = await User.findOne( {
            forgotPasswordToken: token ,
            forgotPasswordTokenExpiry: {$gt: Date.now()}
        })

        if(!user){
            return NextResponse.json({error: "Invalid token"} , {status:400})
        }
        console.log(user) ;

        // hash the new password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        user.password = hashedPassword ;
        user.forgotPasswordToken = undefined ;
        user.forgotPasswordTokenExpiry = undefined ;
        await user.save() ;

        return NextResponse.json({
            message: "Password reset successfully" ,
            success: true 
        })

    } catch (error:any) {
        return NextResponse.json({error: error.message} , {status: 500})
    }
}