# EmailJS Setup Guide

This guide will help you set up EmailJS to enable automated email sending from your portfolio website.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. The free plan includes 200 emails per month, which should be sufficient for your portfolio

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (Reachsohanreddy@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Use this template structure:

### Template Variables:
```
to_email: {{to_email}}
from_name: {{from_name}}
from_email: {{from_email}}
subject: {{subject}}
message: {{message}}
```

### Email Template Content:
```
Subject: {{subject}}

{{message}}

---
Sent from your portfolio website
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to "Account" → "API Keys" in your EmailJS dashboard
2. Copy your **Public Key** (e.g., `user_public_key_123`)

## Step 5: Update Configuration

1. Open `dp-sr-portfolio/utils/email-service.js`
2. Replace the placeholder values with your actual EmailJS credentials:

```javascript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here', // e.g., 'service_abc123'
  TEMPLATE_ID: 'your_template_id_here', // e.g., 'template_xyz789'
  PUBLIC_KEY: 'your_public_key_here', // e.g., 'user_public_key_123'
}
```

## Step 6: Test the Setup

1. Start your development server: `npm run dev`
2. Go to your portfolio website
3. Click "Book a Free Call" or "Send An Email"
4. Fill in the modal and submit
5. Check your email (Reachsohanreddy@gmail.com) for the automated email

## How It Works

1. **User clicks contact button** → Modal opens asking for name and email
2. **User submits form** → EmailJS sends automated email to your address
3. **You receive email** → Contains user details and consultation request
4. **You reply normally** → Using your regular email app

## Email Content

The system will send you emails with:
- User's name and email address
- Type of consultation requested (call or email)
- Date and time of request
- Source page URL
- User agent information

## Troubleshooting

### Common Issues:

1. **"Failed to send email" error**
   - Check your EmailJS credentials
   - Ensure your email service is properly connected
   - Check EmailJS dashboard for any errors

2. **Emails not received**
   - Check spam folder
   - Verify email service connection in EmailJS
   - Check EmailJS usage limits

3. **Template not working**
   - Verify template variables match the code
   - Check template syntax in EmailJS dashboard

## Security Notes

- The public key is safe to expose in frontend code
- EmailJS handles email sending securely
- No sensitive data is stored on your website
- All emails go through EmailJS's secure infrastructure

## Cost

- **Free Plan**: 200 emails/month
- **Paid Plans**: Start at $15/month for 1,000 emails
- Perfect for portfolio websites and small businesses

## Support

- EmailJS Documentation: [docs.emailjs.com](https://docs.emailjs.com/)
- EmailJS Support: Available in dashboard
- GitHub Issues: For code-related problems 