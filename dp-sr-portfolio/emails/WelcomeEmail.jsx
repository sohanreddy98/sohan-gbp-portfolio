import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from '@react-email/components';
import * as React from 'react';

export const WelcomeEmail = ({ email }) => (
  <Html>
    <Head />
    <Preview>Welcome to Sohan Reddy's GBP Expert Newsletter!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Welcome to the Community! 🎉</Heading>
        <Text style={text}>
          Hi there,
        </Text>
        <Text style={text}>
          Thank you for subscribing to my newsletter! As a Google Business Profile Expert, 
          I'm excited to share exclusive tips, industry updates, and proven strategies 
          that will help your business thrive in local search.
        </Text>
        <Text style={text}>
          What you'll receive:
          <ul style={list}>
            <li>Monthly GBP optimization tips</li>
            <li>Early access to new Google features</li>
            <li>Case studies and success stories</li>
            <li>Suspension prevention strategies</li>
          </ul>
        </Text>
        <Text style={text}>
          If you ever need professional help with your Google Business Profile, 
          don't hesitate to reach out!
        </Text>
        <Text style={text}>
          Best regards,<br />
          Sohan Reddy<br />
          Google Business Profile Expert
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '580px',
};

const h1 = {
  color: '#1d1c1d',
  fontSize: '32px',
  fontWeight: '700',
  margin: '30px 0',
  padding: '0',
  lineHeight: '42px',
};

const text = {
  color: '#1d1c1d',
  fontSize: '18px',
  lineHeight: '28px',
  margin: '16px 0',
};

const list = {
  marginLeft: '26px',
}; 