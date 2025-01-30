import React from 'react';

const EngagementLetterTemplate = ({
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
    <div className="font-sans max-w-2xl mx-auto bg-white p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-600 mb-2">Hodge Luke</h1>
        <p className="text-gray-600 italic mb-4">"Connecting People to Digital Intelligence"</p>
        <p className="text-sm text-gray-500">{new Date().toLocaleDateString()}</p>
      </div>

      {/* Client Info */}
      <div className="mb-8">
        <p className="mb-1">{clientName}</p>
        <p className="text-gray-700">Re: {projectName} - Letter of Engagement</p>
      </div>

      {/* Introduction */}
      <div className="mb-8">
        <p className="mb-4">Dear {clientName},</p>
        <p className="mb-4 text-gray-700">
          Thank you for choosing Hodge Luke as your digital transformation partner. We are excited to work with you on {projectName}. This letter outlines our engagement terms and project specifications.
        </p>
      </div>

      {/* Project Scope */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Project Scope</h2>
        <div className="bg-gray-50 p-4 rounded">
          <ul className="list-none">
            {scope.map((item, index) => (
              <li key={index} className="mb-2">
                <span className="text-blue-600 mr-2">▶</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Deliverables */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Key Deliverables</h2>
        <ul className="list-none">
          {deliverables.map((item, index) => (
            <li key={index} className="mb-2 text-gray-700">
              <span className="text-blue-600 mr-2">✓</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Investment and Timeline */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Investment and Timeline</h2>
        <div className="bg-gray-50 p-4 rounded">
          <p className="mb-2"><span className="font-semibold">Project Investment:</span> {investment.amount}</p>
          <p className="mb-2"><span className="font-semibold">Payment Terms:</span> {investment.terms}</p>
          <p><span className="font-semibold">Project Timeline:</span> {timeline}</p>
        </div>
      </div>

      {/* Next Steps */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
        <ul className="list-none">
          {nextSteps.map((step, index) => (
            <li key={index} className="mb-2 text-gray-700">
              <span className="text-blue-600 mr-2">{index + 1}.</span> {step}
            </li>
          ))}
        </ul>
      </div>

      {/* Closing */}
      <div className="mb-8">
        <p className="mb-4">
          We look forward to partnering with you on this transformative journey. If you have any questions, please don't hesitate to reach out.
        </p>
        <p className="mb-4">Best regards,</p>
        <p className="font-semibold">Derrick Hodge</p>
        <p>Founder & CEO</p>
        <p>Hodge Luke</p>
      </div>

      {/* Footer */}
      <div className="text-sm text-gray-500 border-t pt-4">
        <p>5460 Franklin St, Hilliard, OH 43026</p>
        <p>Office: +1 (380) 213-8745 | Direct: +1 (614) 407-4920</p>
      </div>
    </div>
  );
};

export default EngagementLetterTemplate;