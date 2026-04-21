'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactMessage(formData: FormData) {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const company = formData.get('company') as string;
  const message = formData.get('message') as string;

  if (!firstName || !lastName || !email || !message) {
    return { error: 'Please fill out all required fields.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Nestbotics Contact Form <onboarding@resend.dev>',
      to: 'nestboticsllc@gmail.com',
      replyTo: email,
      subject: `New Contact Request from ${firstName} ${lastName}`,
      text: `New Contact Request\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nMessage:\n${message}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { error: 'Failed to send message. Please try again later.' };
    }

    return { success: true };
  } catch (err) {
    console.error('Exception sending email:', err);
    return { error: 'An unexpected error occurred.' };
  }
}
