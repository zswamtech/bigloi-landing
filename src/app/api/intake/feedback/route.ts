import { NextResponse } from 'next/server';
export const runtime = 'nodejs';
import nodemailer from 'nodemailer';

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER || 'contacto@bigloi.com',
      pass: process.env.SMTP_PASS || '',
    },
  });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let payload: any = null;
    let csvText: string | null = null;

    if (contentType.includes('application/json')) {
      payload = await request.json();
    } else if (contentType.includes('text/csv') || contentType.includes('text/plain')) {
      csvText = await request.text();
    } else {
      try { payload = await request.json(); } catch { csvText = await request.text(); }
    }

    if (!payload && !csvText) {
      return NextResponse.json({ error: 'Cuerpo vacío o formato no soportado' }, { status: 400 });
    }

    const subject = 'Feedback de personas/consumidores - BigLoI';
    const bodyIntro = '<p>Se recibió un envío de feedback de personas.</p>';

    if (process.env.SMTP_PASS) {
      const transporter = createTransporter();
      const mailOptions: nodemailer.SendMailOptions = {
        from: `BigLoI Intake <${process.env.SMTP_USER || 'contacto@bigloi.com'}>`,
        to: process.env.CONTACT_EMAIL || 'contacto@bigloi.com',
        subject,
        html: `${bodyIntro}${payload ? `<pre>${JSON.stringify(payload, null, 2)}</pre>` : ''}`,
        attachments: csvText ? [{ filename: 'feedback_personas.csv', content: csvText }] : [],
      };
      try { await transporter.sendMail(mailOptions); } catch (e) { console.error('Mail error', e); }
    }

    return NextResponse.json({ success: true });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
