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
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Convert resume file to a Buffer for attachment
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, 
      port: 465, 
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptionsToCompany = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `${job_title} - ${full_name}`,
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

    const mailOptionsToApplicant = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Job Vortex - Application for ${job_title}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <p>Hi <strong>${full_name}</strong>,</p>
          
          <p>Thank you for applying for the position of <strong>${job_title}</strong> at Job Vortex.</p>
          
          <p>We have received your application, and our recruitment team will review your resume. If you are shortlisted for an interview or if we require additional information, a recruiter will reach out to you.</p>
    
          <p><strong>We aim to provide an update on your application within three weeks.</strong></p>
    
          <p>If you have any questions in the meantime, feel free to contact us.</p>
    
          <p style="margin-top: 20px;"><strong>Best regards,</strong><br>
          <span style="color: #2c3e50;">Job Vortex Recruitment Team</span></p>
        </div>
      `,
    };
    

    await transporter.sendMail(mailOptionsToCompany);
    await transporter.sendMail(mailOptionsToApplicant);

    return NextResponse.json(
      { message: "Application submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
