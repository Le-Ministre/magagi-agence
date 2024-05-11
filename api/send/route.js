// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


const sendEmail = async (name, email, subject, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailData = {
    from: email,
    to: process.env.EMAIL,
    subject: `Message From ${email}`,
    text: subject + " | Sent from: " + email,
    html: `<div>${subject}</div><p>Sent from:${name}</p><p>${email}</p>
    <div>${message}</idv>`,
  };

 
  try {
    const emailSent = await transporter.sendMail(mailData);
    if (emailSent) return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export async function POST(req, res) {
  const data  =await req.json()
  const emailSend = await sendEmail(
    data.name,
    data.email,
    data.subject,
    data.message
  );
  console.log(data);
  if (emailSend) {
    return NextResponse.json(
      { success: true, message: "Envoyé avec succès" },
      { status: 200, statusText: "success" }
    );
  } else
    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500, statusText: "an error occured" }
    );
}


