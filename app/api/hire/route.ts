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
      to: 'info@jobvortex.com',
      subject: "Employer Inquiry",
      html: `
        <div style="background-color: #f4f4f4; padding: 20px;">
          <div style="max-width: 600px; background: #ffffff; padding: 20px; border-radius: 8px; margin: auto; box-shadow: 0px 4px 8px rgba(0,0,0,0.1); text-align: center;">
            <h2 style="color: #2c3e50;">Employer Inquiry</h2>
            <p style="font-size: 16px; color: #333;">You have received a new message from an employer.</p>
            <table style="width: 100%; border-collapse: collapse; text-align: left;">
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
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <p>Hi <strong>${name}</strong>,</p>
          
          <p>This is a system-generated email to confirm that we have received your message. Someone from our team will respond within this week.</p>

          <p>If you have any questions in the meantime, feel free to contact us at info@jobvortex.com.</p>
          
          <p>We appreciate your patience and look forward to assisting you.</p>
          
          <p style="margin-top: 20px;"><strong>Best regards,</strong><br>
          <span style="color: #2c3e50;">Job Vortex Team</span></p>
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
