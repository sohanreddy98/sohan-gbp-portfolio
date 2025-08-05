"use client"

import { useState, useEffect } from 'react'
import { X, Mail, Calendar, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { initEmailJS, sendConsultationEmail } from '@/utils/email-service'

export default function EmailModal({ isOpen, onClose, emailType }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  // Initialize EmailJS when component mounts
  useEffect(() => {
    initEmailJS()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email || !name.trim()) {
      setError('Please provide both your name and email address.')
      return
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      // Send the consultation email
      await sendConsultationEmail({ name, email }, emailType)
      
      setIsSuccess(true)
      
      // Close modal after 3 seconds
      setTimeout(() => {
        onClose()
        setIsSuccess(false)
        setEmail('')
        setName('')
      }, 3000)
      
    } catch (err) {
      setError('Failed to send email. Please try again or contact us directly.')
    } finally {
      setIsLoading(false)
    }
  }

  const getModalContent = () => {
    if (emailType === 'call') {
      return {
        title: 'Book Your Free 15-Min Consultation',
        subtitle: 'Get expert guidance on your Google Business Profile issues',
        icon: <Calendar style={{ width: '32px', height: '32px', color: '#3b82f6' }} />,
        description: 'I\'ll send you a detailed consultation request template and get back to you within 24 hours to schedule our call.'
      }
    } else {
      return {
        title: 'Send Detailed Email Consultation',
        subtitle: 'Get comprehensive help with your Google Business Profile',
        icon: <Mail style={{ width: '32px', height: '32px', color: '#10b981' }} />,
        description: 'I\'ll send you a detailed email template with your information and respond with expert guidance within 24 hours.'
      }
    }
  }

  const content = getModalContent()

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)'
            }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{
              position: 'relative',
              backgroundColor: 'hsl(var(--card))',
              borderRadius: 'var(--radius)',
              maxWidth: '400px',
              width: '100%',
              padding: '1.5rem',
              border: '1px solid hsl(var(--border))',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              zIndex: 10000
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                padding: '0.5rem',
                borderRadius: '50%',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'hsl(var(--muted))'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <X style={{ width: '20px', height: '20px', color: 'hsl(var(--muted-foreground))' }} />
            </button>

            {!isSuccess ? (
              <>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                    {content.icon}
                  </div>
                  <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'hsl(var(--foreground))',
                    marginBottom: '0.5rem'
                  }}>
                    {content.title}
                  </h2>
                  <p style={{
                    color: 'hsl(var(--muted-foreground))',
                    fontSize: '0.875rem'
                  }}>
                    {content.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p style={{
                  color: 'hsl(var(--muted-foreground))',
                  fontSize: '0.875rem',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  {content.description}
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label htmlFor="name" style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: 'hsl(var(--foreground))',
                      marginBottom: '0.5rem'
                    }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: 'var(--radius)',
                        fontSize: '1rem',
                        backgroundColor: 'hsl(var(--background))',
                        color: 'hsl(var(--foreground))',
                        transition: 'border-color 0.3s, box-shadow 0.3s'
                      }}
                      placeholder="Enter your full name"
                      disabled={isLoading}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'hsl(var(--primary))'
                        e.target.style.boxShadow = '0 0 0 3px hsl(var(--primary) / 0.1)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'hsl(var(--border))'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: 'hsl(var(--foreground))',
                      marginBottom: '0.5rem'
                    }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: 'var(--radius)',
                        fontSize: '1rem',
                        backgroundColor: 'hsl(var(--background))',
                        color: 'hsl(var(--foreground))',
                        transition: 'border-color 0.3s, box-shadow 0.3s'
                      }}
                      placeholder="your.email@example.com"
                      disabled={isLoading}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'hsl(var(--primary))'
                        e.target.style.boxShadow = '0 0 0 3px hsl(var(--primary) / 0.1)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'hsl(var(--border))'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>

                  {error && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem',
                      backgroundColor: 'hsl(var(--destructive) / 0.1)',
                      border: '1px solid hsl(var(--destructive) / 0.2)',
                      borderRadius: 'var(--radius)'
                    }}>
                      <AlertCircle style={{ width: '20px', height: '20px', color: 'hsl(var(--destructive))', flexShrink: 0 }} />
                      <p style={{ color: 'hsl(var(--destructive))', fontSize: '0.875rem' }}>{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    style={{
                      width: '100%',
                      backgroundColor: 'hsl(var(--primary))',
                      color: 'hsl(var(--primary-foreground))',
                      fontWeight: '600',
                      padding: '0.75rem 1.5rem',
                      borderRadius: 'var(--radius)',
                      border: 'none',
                      cursor: isLoading ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      opacity: isLoading ? 0.6 : 1
                    }}
                    onMouseEnter={(e) => {
                      if (!isLoading) {
                        e.target.style.transform = 'translateY(-1px)'
                        e.target.style.boxShadow = '0 10px 25px hsl(var(--primary) / 0.2)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isLoading) {
                        e.target.style.transform = 'translateY(0)'
                        e.target.style.boxShadow = 'none'
                      }
                    }}
                  >
                    {isLoading ? (
                      <>
                        <div style={{
                          width: '20px',
                          height: '20px',
                          border: '2px solid white',
                          borderTop: '2px solid transparent',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite'
                        }} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send style={{ width: '20px', height: '20px' }} />
                        Send Consultation Request
                      </>
                    )}
                  </button>
                </form>

                {/* Footer */}
                <p style={{
                  fontSize: '0.75rem',
                  color: 'hsl(var(--muted-foreground))',
                  textAlign: 'center',
                  marginTop: '1rem'
                }}>
                  By submitting, you agree to receive a consultation email from Sohan Reddy.
                </p>
              </>
            ) : (
              /* Success State */
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: 'hsl(var(--primary) / 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'successPulse 2s ease-in-out infinite'
                  }}>
                    <CheckCircle style={{ width: '32px', height: '32px', color: 'hsl(var(--primary))' }} />
                  </div>
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'hsl(var(--foreground))',
                  marginBottom: '0.5rem'
                }}>
                  Email Sent Successfully!
                </h3>
                <p style={{
                  color: 'hsl(var(--muted-foreground))',
                  fontSize: '0.875rem'
                }}>
                  I've sent you a detailed consultation template. Check your email and I'll respond within 24 hours.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
} 