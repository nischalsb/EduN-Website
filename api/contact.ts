import nodemailer from 'nodemailer';

function cors(res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(req: any, res: any) {
  cors(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { name, email, subject, message } = body || {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return res.status(500).json({ success: false, message: 'Server email configuration missing' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const to = process.env.GMAIL_TO || process.env.GMAIL_USER;
    const cc = 'nischalsb2003@gmail.com';

    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to,
      cc,
      replyTo: email,
      subject: `[Contact Form] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<h2>New Contact Form Submission</h2>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <h3>Message:</h3>
             <p>${String(message).replace(/\n/g, '<br>')}</p>`,
    });

    return res.status(200).json({ success: true, message: 'Message sent', id: info.messageId });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: 'Failed to send message', error: err?.message || 'Unknown error' });
  }
}
