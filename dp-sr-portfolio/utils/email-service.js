import emailjs from '@emailjs/browser'

// EmailJS Configuration
// You'll need to set these up in your EmailJS account
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_q0ld91n', // Your EmailJS service ID
  TEMPLATE_ID: 'template_vqewcvb', // Your EmailJS template ID
  PUBLIC_KEY: '9o_bQ8TbqjD0Q7cs9', // Your EmailJS public key
}

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
}

// Send consultation email
export const sendConsultationEmail = async (userData, emailType) => {
  try {
    const templateParams = {
      to_email: 'Reachsohanreddy@gmail.com', // Sohan's email
      from_name: userData.name,
      from_email: userData.email,
      email_type: emailType,
      consultation_date: new Date().toLocaleDateString(),
      user_agent: navigator.userAgent,
      referrer: document.referrer || 'Direct',
      page_url: window.location.href,
    }

    // Add specific template data based on email type
    if (emailType === 'call') {
      templateParams.subject = '📞 New Consultation Call Request - Google Business Profile Expert'
      templateParams.message = `
New consultation call request received:

👤 Client Name: ${userData.name}
📧 Email: ${userData.email}
📅 Request Date: ${new Date().toLocaleDateString()}
⏰ Request Time: ${new Date().toLocaleTimeString()}
🌐 Source: ${window.location.href}

The client has requested a 15-minute free consultation call to discuss their Google Business Profile challenges.

Please respond within 24 hours to schedule the call.

---
This email was automatically generated from your portfolio website.
      `
    } else {
      templateParams.subject = '📧 New Email Consultation Request - Google Business Profile Expert'
      templateParams.message = `
New email consultation request received:

👤 Client Name: ${userData.name}
📧 Email: ${userData.email}
📅 Request Date: ${new Date().toLocaleDateString()}
⏰ Request Time: ${new Date().toLocaleTimeString()}
🌐 Source: ${window.location.href}

The client has requested detailed email consultation for their Google Business Profile issues.

Please send them a comprehensive consultation template and respond with expert guidance within 24 hours.

---
This email was automatically generated from your portfolio website.
      `
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    )

    return { success: true, data: response }
  } catch (error) {
    console.error('Email sending failed:', error)
    throw new Error('Failed to send email. Please try again.')
  }
}

// Send confirmation email to user (optional)
export const sendConfirmationEmail = async (userData, emailType) => {
  try {
    const templateParams = {
      to_email: userData.email,
      to_name: userData.name,
      email_type: emailType,
      consultation_date: new Date().toLocaleDateString(),
    }

    // You can create a separate template for user confirmation emails
    const confirmationTemplateId = 'YOUR_CONFIRMATION_TEMPLATE_ID' // Optional

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      confirmationTemplateId,
      templateParams
    )

    return { success: true, data: response }
  } catch (error) {
    console.error('Confirmation email sending failed:', error)
    // Don't throw error for confirmation email failure
    return { success: false, error }
  }
} 