import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

// Your SendGrid API Key will go here
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const msg = {
      to: email,
      from: 'sonuat98@gmail.com', // Use your verified sender email
      subject: "Welcome to Sohan Reddy's GBP Expert Newsletter!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1d1c1d; font-size: 32px;">Welcome to the Community! 🎉</h1>
          
          <p style="font-size: 18px; line-height: 1.6;">
            Thank you for subscribing to my newsletter! As a Google Business Profile Expert, 
            I'm excited to share exclusive tips, industry updates, and proven strategies 
            that will help your business thrive in local search.
          </p>

          <div style="background: #f6f6f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="font-size: 18px; margin-bottom: 10px;">What you'll receive:</p>
            <ul style="font-size: 16px; line-height: 1.6;">
              <li>Monthly GBP optimization tips</li>
              <li>Early access to new Google features</li>
              <li>Case studies and success stories</li>
              <li>Suspension prevention strategies</li>
            </ul>
          </div>

          <p style="font-size: 18px; line-height: 1.6;">
            If you ever need professional help with your Google Business Profile, 
            don't hesitate to reach out!
          </p>

          <p style="font-size: 18px; line-height: 1.6; margin-top: 30px;">
            Best regards,<br>
            Sohan Reddy<br>
            Google Business Profile Expert
          </p>
        </div>
      `
    };

    await sgMail.send(msg);

    return NextResponse.json(
      { 
        success: true,
        message: "Thank you for subscribing! Please check your email for a welcome message."
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: error.response?.body?.errors?.[0]?.message || error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
} 