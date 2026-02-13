import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json() as ContactFormData;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing Gmail configuration');
      return NextResponse.json(
        { success: false, message: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create a transporter object using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'educatenepalinitiative123@gmail.com',
      cc: 'nischalsb2003@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      previewUrl: nodemailer.getTestMessageUrl(info)
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Allow': 'POST, OPTIONS',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
