import { Resend } from "resend";
import { render } from "@react-email/render";
import EngagementLetterEmail from "./templates/EngagementLetterEmail.jsx"; // updated path

import 'dotenv/config';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEngagementLetter = async () => {
  try {
    const emailHtml = render(EngagementLetterEmail({ 
      clientName: "John Doe", 
      projectName: "AI Automation Project" 
    }));
    
    const response = await resend.emails.send({
      from: "Derrick Hodge <copilot@hodgedomain.com>",
      to: "dshodge2020@outlook.com",
      subject: "Engagement Letter - AI Automation Project",
      html: emailHtml,
    });
    console.log("Email Sent Successfully!", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

sendEngagementLetter();
