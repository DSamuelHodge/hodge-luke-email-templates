import { Html, Head, Body, Container, Text, Section, Heading } from "@react-email/components";

const EngagementLetterEmail = ({
  clientName = "Client Name",
  projectName = "Digital Transformation Project",
  startDate = new Date().toLocaleDateString(),
  scope = [
    "Digital strategy assessment and roadmap development",
    "Technology infrastructure modernization",
    "Process automation implementation"
  ],
  deliverables = [
    "Comprehensive digital transformation strategy",
    "Implementation timeline and milestones",
    "Technology stack recommendations",
    "ROI projections and metrics"
  ],
  investment = {
    amount: "$75,000",
    terms: "50% upon signing, 25% at midpoint, 25% upon completion"
  },
  timeline = "12 weeks",
  nextSteps = [
    "Review and sign the attached formal agreement",
    "Schedule kick-off meeting",
    "Complete initial assessment questionnaire"
  ]
}) => {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", padding: "20px" }}>
        <Container style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px" }}>
          {/* Header */}
          <Section>
            <Heading style={{ color: "#007bff", fontSize: "24px" }}>Hodge Luke</Heading>
            <Text style={{ fontStyle: "italic", color: "#666" }}>"Connecting People to Digital Intelligence"</Text>
            <Text style={{ fontSize: "12px", color: "#999" }}>{startDate}</Text>
          </Section>

          {/* Client Info */}
          <Section>
            <Text>{clientName}</Text>
            <Text style={{ fontWeight: "bold" }}>Re: {projectName} - Letter of Engagement</Text>
          </Section>

          {/* Introduction */}
          <Section>
            <Text>Dear {clientName},</Text>
            <Text>
              Thank you for choosing Hodge Luke as your digital transformation partner. We are excited to work with you on <b>{projectName}</b>. 
              This letter outlines our engagement terms and project specifications.
            </Text>
          </Section>

          {/* Project Scope */}
          <Section>
            <Heading style={{ fontSize: "18px" }}>Project Scope</Heading>
            <ul>
              {scope.map((item, index) => (
                <li key={index} style={{ marginBottom: "8px", color: "#007bff" }}>
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          {/* Deliverables */}
          <Section>
            <Heading style={{ fontSize: "18px" }}>Key Deliverables</Heading>
            <ul>
              {deliverables.map((item, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>{item}</li>
              ))}
            </ul>
          </Section>

          {/* Investment & Timeline */}
          <Section>
            <Heading style={{ fontSize: "18px" }}>Investment and Timeline</Heading>
            <Text><b>Project Investment:</b> {investment.amount}</Text>
            <Text><b>Payment Terms:</b> {investment.terms}</Text>
            <Text><b>Project Timeline:</b> {timeline}</Text>
          </Section>

          {/* Next Steps */}
          <Section>
            <Heading style={{ fontSize: "18px" }}>Next Steps</Heading>
            <ul>
              {nextSteps.map((step, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  <b>{index + 1}.</b> {step}
                </li>
              ))}
            </ul>
          </Section>

          {/* Closing */}
          <Section>
            <Text>
              We look forward to partnering with you on this transformative journey. If you have any questions, please don't hesitate to reach out.
            </Text>
            <Text>Best regards,</Text>
            <Text><b>Derrick Hodge</b></Text>
            <Text>Founder & CEO</Text>
            <Text>Hodge Luke</Text>
          </Section>

          {/* Footer */}
          <Section style={{ fontSize: "12px", color: "#999", borderTop: "1px solid #ddd", paddingTop: "10px" }}>
            <Text>5460 Franklin St, Hilliard, OH 43026</Text>
            <Text>Office: +1 (380) 213-8745 | Direct: +1 (614) 407-4920</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EngagementLetterEmail;
