import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Types for form data
interface FormData {
  name: string;
  email: string;
  phone?: string;
  organization: string;
  department?: string;
  focus?: string;
  experience?: string;
  collaboration?: string;
  message?: string;
  type: 'university' | 'hospital' | 'government';
}

const stakeholderLabels = {
  university: 'Universidad',
  hospital: 'Hospital',
  government: 'Colaboración e Integración'
};

// Create transporter (will be configured with environment variables)
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || 'contacto@bigloi.com',
      pass: process.env.SMTP_PASS || '', // Esta necesita ser configurada en Vercel
    },
  });
}

export async function POST(request: Request) {
  try {
    const formData: FormData = await request.json();

    // Validation
    if (!formData.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
    }

    if (!formData.name || !formData.organization || !formData.type) {
      return NextResponse.json({ error: 'Campos obligatorios faltantes' }, { status: 400 });
    }

    // Create email content
    const stakeholderType = stakeholderLabels[formData.type];
    const subject = `Nuevo interés en BigLoI - ${stakeholderType}: ${formData.organization}`;

    const emailBody = `
<h2>Nuevo formulario de interés - ${stakeholderType}</h2>

<h3>Información de Contacto:</h3>
<ul>
  <li><strong>Nombre:</strong> ${formData.name}</li>
  <li><strong>Email:</strong> ${formData.email}</li>
  <li><strong>Teléfono:</strong> ${formData.phone || 'No proporcionado'}</li>
  <li><strong>Organización:</strong> ${formData.organization}</li>
  <li><strong>Departamento/Área:</strong> ${formData.department || 'No especificado'}</li>
</ul>

<h3>Información Específica:</h3>
<ul>
  <li><strong>Área de interés:</strong> ${formData.focus || 'No especificado'}</li>
  <li><strong>Experiencia:</strong> ${formData.experience || 'No especificado'}</li>
  <li><strong>Colaboración:</strong> ${formData.collaboration || 'No especificado'}</li>
</ul>

${formData.message ? `<h3>Comentarios adicionales:</h3><p>${formData.message}</p>` : ''}

<hr>
<p><small>Formulario enviado desde la landing page de BigLoI el ${new Date().toLocaleString('es-CO')}</small></p>
    `;

    // Try to send email if SMTP is configured
    if (process.env.SMTP_PASS) {
      try {
        const transporter = createTransporter();

        await transporter.sendMail({
          from: `"BigLoI Landing" <${process.env.SMTP_USER || 'contacto@bigloi.com'}>`,
          to: process.env.CONTACT_EMAIL || 'contacto@bigloi.com',
          subject: subject,
          html: emailBody,
          replyTo: formData.email,
        });

        console.log('Email sent successfully');
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Continue anyway - we don't want to fail the request if email fails
      }
    } else {
      console.log('SMTP not configured, skipping email send');
    }

    // Log the submission (for debugging)
    console.log('Form submission:', {
      type: formData.type,
      organization: formData.organization,
      email: formData.email,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: 'Formulario enviado correctamente'
    });

  } catch (error: any) {
    console.error('Error processing form:', error);
    return NextResponse.json({
      error: 'Error interno del servidor'
    }, { status: 500 });
  }
}