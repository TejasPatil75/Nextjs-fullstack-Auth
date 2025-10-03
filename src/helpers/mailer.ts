import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    // Generate hashed token
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    // Gmail SMTP Transporter
    const transport = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST, // smtp.gmail.com
      port: Number(process.env.NODEMAILER_PORT), // 465
      secure: true, // use SSL
      auth: {
        user: process.env.NODEMAILER_USER, // your Gmail
        pass: process.env.NODEMAILER_PASS, // App password
      },
    });

    const encodedToken = encodeURIComponent(hashedToken);

    const mailOptions = {
      from: `"Auth App" <${process.env.NODEMAILER_USER}>`,
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${process.env.DOMAIN}/${
        emailType === "VERIFY" ? "verifyemail" : "resetpassword"
      }?token=${encodedToken}">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      }.
      <br>Or copy and paste this link: 
      ${process.env.DOMAIN}/${
        emailType === "VERIFY" ? "verifyemail" : "resetpassword"
      }?token=${encodedToken} </p>`,
    };

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
