import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ to, subject, template: Template, templateProps = {} }) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Derrick Hodge <derrick@hodgeluke.com>',
      to: Array.isArray(to) ? to : [to],
      subject,
      react: <Template {...templateProps} />,
      tags: [
        {
          name: 'category',
          value: 'corporate_communication'
        }
      ]
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Error sending email:', err);
    return { success: false, error: err.message };
  }
}