import { Resend } from "@resend/node";
import { render } from "@react-email/render";
import EngagementLetterEmail from "./EngagementLetterEmail.js";

const resend = new Resend(process.env.RESEND_API_KEY); // Store API key securely

const sendEngagementLetter = async () => {
  try {
    const htmlContent = render(<EngagementLetterEmail clientName="John Doe" projectName="AI Automation Project" />);
    
    const response = await resend.emails.send({
      from: "Derrick Hodge <derrick@yourdomain.com>",
      to: "john.doe@example.com",
      subject: "Engagement Letter - AI Automation Project",
      html: htmlContent,
    });

    console.log("Email Sent Successfully!", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

sendEngagementLetter();
