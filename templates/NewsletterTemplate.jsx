import React from 'react';

const NewsletterTemplate = ({ 
  headline = "Digital Transformation Weekly",
  date = new Date().toLocaleDateString(),
  mainStory = {
    title: "AI Implementation Surges in Mid-Market Companies",
    whatToKnow: "Mid-sized businesses are adopting AI at 2x the rate of last year",
    whyItMatters: "This shift signals a democratization of AI technology, making it crucial for businesses to adapt or risk falling behind.",
    bigPicture: "The trend shows AI is no longer just for enterprise - it's becoming a fundamental business tool across all sectors."
  },
  quickInsights = [
    {
      title: "Cloud Migration Trends",
      point: "73% of businesses accelerated their cloud adoption in Q4",
      impact: "Faster deployment, reduced costs"
    },
    {
      title: "Cybersecurity Focus",
      point: "New compliance requirements coming in March",
      impact: "Updated security protocols needed"
    }
  ],
  clientSuccess = {
    title: "Manufacturing Firm Cuts Costs by 40%",
    brief: "How our digital transformation strategy delivered results",
    results: ["Automated 60% of manual processes", "Reduced error rates by 85%", "Improved customer satisfaction scores"]
  }
}) => {
  return (
    <div className="font-sans max-w-2xl mx-auto bg-white">
      {/* Header */}
      <div className="bg-blue-600 p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">{headline}</h1>
        <p className="text-sm">{date} • 3 min read</p>
      </div>

      {/* Main Story */}
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold mb-4">{mainStory.title}</h2>
        
        <div className="mb-4">
          <h3 className="text-blue-600 font-semibold mb-2">What to know:</h3>
          <p className="text-gray-800">{mainStory.whatToKnow}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-blue-600 font-semibold mb-2">Why it matters:</h3>
          <p className="text-gray-800">{mainStory.whyItMatters}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded">
          <h3 className="text-blue-600 font-semibold mb-2">The big picture:</h3>
          <p className="text-gray-800">{mainStory.bigPicture}</p>
        </div>
      </div>

      {/* Quick Insights */}
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold mb-4">Quick Insights</h2>
        {quickInsights.map((insight, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <h3 className="text-blue-600 font-semibold mb-2">{insight.title}</h3>
            <p className="text-gray-800 mb-1">{insight.point}</p>
            <p className="text-sm text-gray-600">Impact: {insight.impact}</p>
          </div>
        ))}
      </div>

      {/* Client Success Story */}
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold mb-4">Client Success Spotlight</h2>
        <h3 className="text-blue-600 font-semibold mb-2">{clientSuccess.title}</h3>
        <p className="text-gray-800 mb-3">{clientSuccess.brief}</p>
        <div className="bg-gray-50 p-4 rounded">
          <h4 className="text-blue-600 font-semibold mb-2">Key Results:</h4>
          <ul className="list-none">
            {clientSuccess.results.map((result, index) => (
              <li key={index} className="mb-2 text-gray-800">
                ▶ {result}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 p-6">
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Hodge Luke</h2>
          <p className="text-gray-600 italic">"Connecting People to Digital Intelligence"</p>
        </div>
        
        <div className="text-sm text-gray-600">
          <p className="mb-2">5460 Franklin St, Hilliard, OH 43026</p>
          <p>
            <a href="#" className="text-blue-600 hover:text-blue-800">Update preferences</a> • 
            <a href="#" className="text-blue-600 hover:text-blue-800 ml-2">Unsubscribe</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterTemplate;