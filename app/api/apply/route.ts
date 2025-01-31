import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const full_name = formData.get("full_name") as string;
    const email = formData.get("email") as string;
    const contact_number = formData.get("contact_number") as string;
    const resume = formData.get("resume") as File;
    const job_title = formData.get("job_title") as string;

    if (!full_name || !email || !contact_number || !resume || !job_title) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Convert resume file to a Buffer for attachment
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    // Use dynamic job_title in the subject
    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to: process.env.RECIPIENT_EMAIL, 
      subject: `New Job Application for ${job_title} - ${full_name}`, // Dynamic subject
      text: `You received a new job application for ${job_title}.

      Name: ${full_name}
      Email: ${email}
      Contact Number: ${contact_number}

      Attached is the applicant's resume.
      `,
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
          contentType: resume.type,
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Application submitted successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
