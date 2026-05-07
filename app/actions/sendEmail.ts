"use server";

import nodemailer from "nodemailer";

const sendEmail = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required" };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Message from ${name}`,
      replyTo: email,
      text: `
        Name: ${name}
        Email: ${email}

        Message: ${message}
      `,
    });

    return { success: true };
  } catch (error) {
    console.log("Email error", error);
    return { success: false, error: "Failed to send email" };
  }
};

export default sendEmail;
