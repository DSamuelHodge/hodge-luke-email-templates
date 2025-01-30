# Hodge Luke Email Templates

A collection of React Email templates for Hodge Luke corporate communications.

## Available Templates

1. Corporate Signature
2. Newsletter (coming soon)
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

## Contributing

1. Create a new branch for your template
2. Add your template to the `templates` directory
3. Update the README.md with template information
4. Submit a pull request

## License

MIT