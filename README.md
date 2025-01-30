# Hodge Luke Email Templates

A collection of React Email templates for Hodge Luke corporate communications.

## Available Templates

1. Corporate Signature - Professional email signature with company branding
2. Newsletter - Smart brevity style newsletter
3. Welcome Email (coming soon)
4. Project Update (coming soon)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Preview templates at http://localhost:3000

## Usage

### Corporate Signature

```javascript
import { Resend } from 'resend';
import { CorporateSignature } from './templates/CorporateSignature';

const resend = new Resend('re_YOUR_API_KEY');

await resend.emails.send({
  from: 'Derrick Hodge <derrick@hodgeluke.com>',
  to: ['recipient@example.com'],
  subject: 'Message from Hodge Luke',
  react: <CorporateSignature />
});
```

### Newsletter

```javascript
import { NewsletterTemplate } from './templates/NewsletterTemplate';

// Configure your newsletter content
const newsletter = {
  headline: "Digital Transformation Weekly",
  mainStory: {
    title: "Your Main Story",
    whatToKnow: "Key Points",
    whyItMatters: "Impact Statement",
    bigPicture: "Broader Context"
  },
  quickInsights: [
    {
      title: "Insight Title",
      point: "Key Point",
      impact: "Business Impact"
    }
  ],
  clientSuccess: {
    title: "Success Story Title",
    brief: "Brief Description",
    results: ["Result 1", "Result 2", "Result 3"]
  }
};

// Send the newsletter
await sendEmail({
  to: 'recipient@example.com',
  subject: 'Your Newsletter Subject',
  template: NewsletterTemplate,
  templateProps: newsletter
});
```

## Utility Functions

The repository includes a `sendEmail` utility function that provides error handling and consistent email sending:

```javascript
import { sendEmail } from './src/utils/sendEmail';

await sendEmail({
  to: 'recipient@example.com',
  subject: 'Subject',
  template: TemplateComponent,
  templateProps: {} // Optional props for the template
});
```

## Contributing

1. Create a new branch for your template
2. Add your template to the `templates` directory
3. Update the README.md with template information
4. Submit a pull request

## License

MIT