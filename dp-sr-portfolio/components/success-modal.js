"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, X } from 'lucide-react'

export default function SuccessModal({ isOpen, onClose, message, title = "Success!" }) {
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
              maxWidth: '450px',
              width: '100%',
              padding: '2rem',
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

            {/* Success Content */}
            <div style={{ textAlign: 'center' }}>
              {/* Success Icon */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'hsl(var(--primary) / 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'successPulse 2s ease-in-out infinite'
                }}>
                  <CheckCircle style={{ width: '40px', height: '40px', color: 'hsl(var(--primary))' }} />
                </div>
              </div>

              {/* Title */}
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'hsl(var(--foreground))',
                marginBottom: '1rem'
              }}>
                {title}
              </h2>

              {/* Message */}
              <div style={{
                color: 'hsl(var(--muted-foreground))',
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '2rem',
                whiteSpace: 'pre-line'
              }}>
                {message}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={onClose}
                  style={{
                    backgroundColor: 'hsl(var(--primary))',
                    color: 'hsl(var(--primary-foreground))',
                    fontWeight: '600',
                    padding: '0.75rem 1.5rem',
                    borderRadius: 'var(--radius)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    fontSize: '0.9rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-1px)'
                    e.target.style.boxShadow = '0 10px 25px hsl(var(--primary) / 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = 'none'
                  }}
                >
                  Got it, thanks!
                </button>
                
                <a
                  href="https://wa.me/+918828216807"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#25D366',
                    color: 'white',
                    fontWeight: '600',
                    padding: '0.75rem 1.5rem',
                    borderRadius: 'var(--radius)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-1px)'
                    e.target.style.boxShadow = '0 10px 25px rgba(37, 211, 102, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = 'none'
                  }}
                >
                  📱 WhatsApp Now
                </a>
              </div>

              {/* Additional Info */}
              <p style={{
                fontSize: '0.75rem',
                color: 'hsl(var(--muted-foreground))',
                marginTop: '1.5rem',
                opacity: 0.8
              }}>
                Need immediate help? Feel free to reach out via WhatsApp for urgent issues.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
} 