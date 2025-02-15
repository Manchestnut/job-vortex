import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, company_name, job_title, message } = await req.json();

    if (!name || !email || !company_name || !job_title || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptionsToCompany = {
      from: process.env.EMAIL_USER,
      to: "luke.manongsong@gmail.com", // Job Vortex email
      subject: "New Employer Inquiry",
      html: `
        <div style="background-color: #f4f4f4; padding: 20px;">
          <div style="max-width: 600px; background: #ffffff; padding: 20px; border-radius: 8px; margin: auto; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);">
            <h2 style="color: #2c3e50; text-align: center;">New Employer Inquiry</h2>
            <p style="font-size: 16px; color: #333;">You have received a new message from an employer.</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Company:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${company_name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Position:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${job_title}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Message:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${message}</td>
              </tr>
            </table>
            <p style="font-size: 16px; color: #333;">Please review and follow up as necessary.</p>
            <p style="font-size: 16px; color: #333;"><strong>Job Vortex System</strong></p>
          </div>
        </div>
      `,
    };
    
    const mailOptionsToEmployer = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Job Vortex - Message Received",
      html: `
        <div style="background-color: #f4f4f4; padding: 20px;">
          <div style="max-width: 600px; background: #ffffff; padding: 20px; border-radius: 8px; margin: auto; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);">
            <h2 style="color: #2c3e50; text-align: center;">Job Vortex</h2>
            <p style="font-size: 16px; color: #333;">Hi ${name},</p>
            <p style="font-size: 16px; color: #555;">
              Thank you for reaching out to <strong>Job Vortex</strong>. We have received your message and will respond within <strong>3 business days</strong>.
            </p>
            <p style="font-size: 16px; color: #555;">We appreciate your patience and look forward to assisting you.</p>
            <p style="font-size: 16px; color: #333;">Best Regards,<br><strong>Job Vortex Team</strong></p>
          </div>
        </div>
      `,
    };
    

    await transporter.sendMail(mailOptionsToCompany);
    await transporter.sendMail(mailOptionsToEmployer);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
