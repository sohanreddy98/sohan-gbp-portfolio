"use client"

import {
  Award, BarChart, Briefcase, Calendar, CheckCircle, Clock, Coins, Factory,
  Globe, HeartHandshake, HelpCircle, LifeBuoy, Linkedin, LocateFixed, Lock,
  Mail, Phone, Rocket, ShieldCheck, Sparkles, Star, Target, ThumbsUp, MapPin,
  TrendingUp, UserCheck, Verified, Waves, UserCircle2, Quote, MessageSquare, XCircle, Building2, Network, Diamond, ArrowLeft, ArrowRight, Zap, AlertTriangle, Facebook, Instagram, Twitter, MessageCircle
} from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TestimonialCarousel } from '@/components/testimonial-carousel'
import { useState } from 'react'

const testimonialsData = [
  {
    quote: "Managing 5 childcare locations on GBP was chaos. Sohan not only fixed our verification issues across all branches but streamlined everything. Our parent inquiries have increased by 40% since he took over!",
    name: "Sarah Davies",
    company: "Director, Bright Future Childcare"
  },
  {
    quote: "A competitor was hitting us with fake negative reviews, and we were dropping in the rankings fast. Sohan got the fraudulent reviews removed and helped us implement a system that has since boosted our rating from 3.8 to 4.9 stars.",
    name: "Tom Richardson",
    company: "Owner, Precision Auto Works"
  },
  {
    quote: "Our high-end services weren't attracting the right clients from local search. Sohan's optimization was a game-changer. We've seen a 200% increase in calls from qualified local patients. It's been transformative.",
    name: "Dr. Emily Carter",
    company: "The Carter Wellness Clinic"
  },
  {
    quote: "We were invisible online. Sohan built our GBP from scratch and within three months, we were ranking in the local 3-pack for our main keywords. The phone hasn't stopped ringing since. Absolutely essential for any new business.",
    name: "Marcus Holloway",
    company: "Founder, Urban Bloom Cafe"
  },
  {
    quote: "The constant algorithm changes were impossible to keep up with. Sohan provides ongoing management that keeps us ahead of the curve. It's the best investment we've made in our local marketing.",
    name: "Alisha Khan",
    company: "Operations, Summit Properties"
  },
  {
    quote: "I thought I knew GBP, but Sohan's audit revealed so much we were missing. His strategic adjustments to our services, posts, and Q&A have led to a measurable increase in direct bookings.",
    name: "David Lee",
    company: "Co-owner, Riverside B&B"
  }
]

export default function Home() {
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [activeCase, setActiveCase] = useState(null);
  const [hasEnteredSection, setHasEnteredSection] = useState(false);

  const handleWhatsAppCall = (e) => {
    e.preventDefault();
    
    // Check if user is on mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // On mobile, directly initiate WhatsApp call
      window.location.href = 'https://wa.me/+918828216807?text=Hi%20Sohan,%20I%20need%20help%20with%20my%20Google%20Business%20Profile.%20Can%20we%20talk?';
    } else {
      // On desktop/website, ask user to make a call
      const shouldCall = confirm('Would you like to make a WhatsApp call to Sohan?\n\nClick OK to open WhatsApp and start a call.');
      if (shouldCall) {
        window.open('https://wa.me/+918828216807?text=Hi%20Sohan,%20I%20need%20help%20with%20my%20Google%20Business%20Profile.%20Can%20we%20talk?', '_blank');
      }
    }
  };

  const handleCaseHover = (caseNumber) => {
    setActiveCase(caseNumber);
    setHasEnteredSection(true);
  };

  const handleCaseClick = (caseNumber) => {
    // For mobile, toggle the case study
    if (window.innerWidth <= 768) {
      setActiveCase(activeCase === caseNumber ? null : caseNumber);
    }
  };

  const handleSectionEnter = () => {
    if (!hasEnteredSection) {
      setActiveCase(1);
      setHasEnteredSection(true);
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    const email = e.target.email.value;
    
    console.log('Attempting to subscribe:', email);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);
      
      if (response.ok) {
        alert(data.message || 'Thank you for subscribing!');
        e.target.reset();
      } else {
        console.error('Subscription failed:', data);
        alert(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', {
        message: error.message,
        error
      });
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  // Function to copy email template to clipboard
  const copyEmailTemplate = (type) => {
    let subject, body;
    
    if (type === 'call') {
      subject = 'Book 15-Min Free Consultation Call - Google Business Profile Expert';
      body = `Hi Sohan,

I hope this email finds you well. I would like to schedule a 15-minute free consultation call to discuss my Google Business Profile challenges.

My details:
- Name: [Your Name]
- Business Name: [Your Business Name]
- Issue Type: [Suspension/Verification/Bulk Management/Other]
- Preferred Call Time: [Your preferred time and date]

Brief description of my issue:
[Please provide a brief overview of your Google Business Profile challenge]

I look forward to hearing from you and getting expert guidance on resolving this issue.

Best regards,
[Your Name]
[Your Phone Number]`;
    } else {
      subject = 'Google Business Profile Expert Consultation Request';
      body = `Hi Sohan,

I hope this email finds you well. I am reaching out regarding my Google Business Profile and would appreciate your expert guidance.

My details:
- Name: [Your Name]
- Business Name: [Your Business Name]
- Business Type: [Your Industry/Sector]
- Location: [Your City/State]

Current situation:
- Issue Type: [Suspension/Verification/Bulk Management/Profile Optimization/Other]
- When did this start? [Date or timeframe]
- Urgency: [High/Medium/Low]

Detailed description of my issue:
[Please provide a detailed description of your Google Business Profile challenge, including any error messages or specific problems you're facing]

What I hope to achieve:
[Describe your goals and what you hope to accomplish]

I would appreciate your expert advice on the best approach to resolve this issue.

Best regards,
[Your Name]
[Your Phone Number]
[Your Email Address]`;
    }

    // Create complete email template
    const emailTemplate = `To: Reachsohanreddy@gmail.com
Subject: ${subject}

${body}`;

    // Copy to clipboard
    navigator.clipboard.writeText(emailTemplate).then(() => {
      alert('✅ Email template copied to clipboard!\n\n📧 Now open your email app (Gmail, Outlook, Apple Mail, etc.) and paste it there.\n\n📝 Just fill in the [bracketed] information and send!');
    }).catch(() => {
      // Fallback if clipboard fails
      alert(`📧 Email Template:\n\n${emailTemplate}\n\n📋 Please copy this and paste it in your email app.`);
    });
  };

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <ShieldCheck size={28} />
              <span>Sohan Reddy</span>
            </div>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#problems">Issues</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#case-studies">Success Stories</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="cta-header">
              <a href="https://wa.me/+918828216807" className="whatsapp-btn">
                <MessageCircle size={16} /> <span className="btn-text">WhatsApp</span>
              </a>
              <a href="https://www.linkedin.com/in/reddysohan/" className="linkedin-btn">
                <Linkedin size={16} /> <span className="btn-text">LinkedIn</span>
              </a>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>

      <div className="urgent-banner">
        <Rocket size={18} className="inline-block mr-2" />
        Google Business Profile Suspended? Get It Back in 24-48 Hours!
      </div>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Sohan Reddy | Google Business Profile Expert</h1>
            <div className="hero-subtitle">Suspension Recovery • Bulk Management</div>
            <p className="hero-description">I'm Sohan Reddy, a top-rated expert dedicated to solving your most complex Google Business Profile challenges—from rapid suspension recovery to strategic optimization for maximum local visibility.</p>
            <div className="hero-cta">
              <a href="#contact" className="cta-primary">
                <ShieldCheck size={20} /> Get Free Expert Analysis
              </a>
              <a href="https://wa.me/+918828216807" className="cta-secondary">
                <MessageCircle size={20} /> WhatsApp Me Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="social-proof">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-item-inner">
                <div className="stat-front">
                  <div className="stat-icon-wrapper google-blue">
                    <TrendingUp size={36} className="stat-icon google-blue" />
                  </div>
                  <h3 className="stat-number">2,500+</h3>
                  <p className="stat-title">Profiles Recovered</p>
                </div>
                <div className="stat-back google-blue">
                  <h4>Proven Recovery</h4>
                  <p>Restoring your business's lifeline with a proven track record of success against any suspension type.</p>
                </div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-item-inner">
                <div className="stat-front">
                  <div className="stat-icon-wrapper google-red">
                    <UserCheck size={36} className="stat-icon google-red" />
                  </div>
                  <h3 className="stat-number">850+</h3>
                  <p className="stat-title">Businesses Verified</p>
                </div>
                <div className="stat-back google-red">
                  <h4>Verification Mastery</h4>
                  <p>Navigating the complexities of verification to get your business on the map, fast and hassle-free.</p>
                </div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-item-inner">
                <div className="stat-front">
                  <div className="stat-icon-wrapper google-yellow">
                    <ThumbsUp size={36} className="stat-icon google-yellow" />
                  </div>
                  <h3 className="stat-number">98.7%</h3>
                  <p className="stat-title">Success Rate</p>
                </div>
                <div className="stat-back google-yellow">
                  <h4>Consistent Results</h4>
                  <p>An industry-leading success rate means peace of mind and dependable outcomes for your business.</p>
                </div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-item-inner">
                <div className="stat-front">
                  <div className="stat-icon-wrapper google-green">
                    <Clock size={36} className="stat-icon google-green" />
                  </div>
                  <h3 className="stat-number">24-48h</h3>
                  <p className="stat-title">Average Recovery</p>
                </div>
                <div className="stat-back google-green">
                  <h4>Speed & Urgency</h4>
                  <p>Minimizing your downtime and revenue loss by getting your profile back online with incredible speed.</p>
                </div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-item-inner">
                <div className="stat-front">
                  <div className="stat-icon-wrapper google-blue">
                    <Globe size={36} className="stat-icon google-blue" />
                  </div>
                  <h3 className="stat-number">India</h3>
                  <p className="stat-title">Verification Specialist</p>
                </div>
                <div className="stat-back google-blue">
                  <h4>Specialized Expertise</h4>
                  <p>Deep knowledge of regional verification challenges ensures your business gets listed correctly in India.</p>
                </div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-item-inner">
                <div className="stat-front">
                  <div className="stat-icon-wrapper google-red">
                    <Briefcase size={36} className="stat-icon google-red" />
                  </div>
                  <h3 className="stat-number">100+</h3>
                  <p className="stat-title">Multi-Location Clients</p>
                </div>
                <div className="stat-back google-red">
                  <h4>Enterprise Ready</h4>
                  <p>Expertly managing GBP for franchises and businesses with 100+ locations, ensuring brand consistency at scale.</p>
                </div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-item-inner">
                <div className="stat-front">
                  <div className="stat-icon-wrapper google-yellow">
                    <Star size={36} className="stat-icon google-yellow" />
                  </div>
                  <h3 className="stat-number">4.9-Star</h3>
                  <p className="stat-title">Client Rating</p>
                </div>
                <div className="stat-back google-yellow">
                  <h4>Exceptional Service</h4>
                  <p>Committed to excellence, reflected in consistent 5-star feedback from satisfied clients worldwide.</p>
                </div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-item-inner">
                <div className="stat-front">
                  <div className="stat-icon-wrapper google-green">
                    <Calendar size={36} className="stat-icon google-green" />
                  </div>
                  <h3 className="stat-number">8+</h3>
                  <p className="stat-title">Years Experience</p>
                </div>
                <div className="stat-back google-green">
                  <h4>Seasoned Expertise</h4>
                  <p>Leveraging nearly a decade of focused experience to navigate any GBP challenge with confidence and precision.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="achievements-container">
            <p className="achievements-title">Trusted by leading agencies and businesses worldwide</p>
            <div className="marquee">
              <div className="marquee-content" aria-hidden="true">
                <span><Rocket size={20} /> Apex Digital</span>
                <span><Building2 size={20} /> Summit SEO</span>
                <span><Factory size={20} /> QuantumLeap</span>
                <span><Network size={20} /> Momentum Inc.</span>
                <span><Diamond size={20} /> NextGen Corp</span>
                <span><Briefcase size={20} /> Innovate AI</span>
                <span><Globe size={20} /> Global Reach</span>
                <span><TrendingUp size={20} /> Peak Performance</span>
                {/* Duplicate for seamless loop */}
                <span><Rocket size={20} /> Apex Digital</span>
                <span><Building2 size={20} /> Summit SEO</span>
                <span><Factory size={20} /> QuantumLeap</span>
                <span><Network size={20} /> Momentum Inc.</span>
                <span><Diamond size={20} /> NextGen Corp</span>
                <span><Briefcase size={20} /> Innovate AI</span>
                <span><Globe size={20} /> Global Reach</span>
                <span><TrendingUp size={20} /> Peak Performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              className="about-image-container"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="/anna.jpeg"
                alt="Sohan Reddy - Google Business Profile Expert"
                width={500}
                height={500}
                className="about-image"
              />
            </motion.div>
            <div className="about-content">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>A Passion for Solving Google's Toughest Challenges.</h2>
              <p className="section-subtitle" style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '2rem' }}>
                For over a decade, I've been navigating the complex and ever-changing landscape of Google Business Profile. My journey began with a simple goal: to help businesses claim their rightful space in the digital world. Today, as a Google Product Expert, I've had the privilege of restoring thousands of profiles, verifying businesses across the globe, and empowering companies to thrive in local search.
              </p>
              <p>
                My approach is a blend of technical expertise, strategic thinking, and a relentless pursuit of solutions. I don't just fix problems; I build resilient, optimized presences that stand the test of time and algorithm updates. When you work with me, you're not just getting a consultant—you're getting a dedicated partner committed to your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="problems" className="problems">
        <div className="container">
          <h2 className="section-title">Is Your Business Facing These Critical Issues?</h2>
          <p className="section-subtitle">The most common issues I resolve for businesses of all sizes.</p>

          <div className="problems-grid">
            <div className="problem-card">
              <div className="problem-icon google-red"><XCircle className="google-red" /></div>
              <h3>Profile Suspended Without Warning</h3>
              <p>Your Google Business Profile got suspended and you're losing customers every day. Traditional appeals take weeks or get rejected. I specialize in fast-track suspension recovery with proven strategies that work.</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon google-blue"><HelpCircle className="google-blue" /></div>
              <h3>Verification Stuck in Processing</h3>
              <p>Waiting weeks for Google to verify your business? Phone verification not working? Postcard never arrived? I have direct methods to expedite verification for any business type.</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon google-yellow"><Factory className="google-yellow" /></div>
              <h3>Managing 10+ Locations</h3>
              <p>Chain businesses and franchises struggle with bulk verification and management. I provide enterprise-level solutions with streamlined processes for unlimited locations.</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon google-green"><Phone className="google-green" /></div>
              <h3>Phone Verification Issues (India)</h3>
              <p>Phone numbers stuck in verification loop, especially in India? I have specialized solutions for Indian businesses and know exactly how to resolve regional verification challenges.</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon google-blue"><TrendingUp className="google-blue" /></div>
              <h3>Poor Local Search Ranking</h3>
              <p>Your competitors appear first in local search while you're invisible? I optimize profiles for maximum visibility, better rankings, and increased customer actions.</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon google-red"><Coins className="google-red" /></div>
              <h3>Google Ads Not Converting</h3>
              <p>Spending money on Google Ads but not getting quality leads? I create high-converting ad campaigns integrated with optimized Business Profiles for maximum ROI.</p>
            </div>

            
          </div>
        </div>
      </section>

    

      <section className="recognition">
        <div className="container">
          <h2 className="section-title">Official Recognition & Accolades</h2>
          <p className="section-subtitle">My expertise is backed by industry-recognized achievements and a commitment to excellence.</p>
          <div className="recognition-grid">
            <div className="badge-card">
              <div className="badge-icon-wrapper google-blue">
                <Award className="google-blue" size={32} />
              </div>
              <h3 className="badge-title">Google Product Expert</h3>
              <p className="badge-description">Officially recognized by Google for exceptional product mastery. This prestigious status is held by less than 1% of experts worldwide.</p>
            </div>
            <div className="badge-card">
              <div className="badge-icon-wrapper google-red">
                <HeartHandshake className="google-red" size={32} />
              </div>
              <h3 className="badge-title">Official Google Partner</h3>
              <p className="badge-description">A verified partner with demonstrated ad skill and expertise, meeting Google's high standards for client growth and performance.</p>
            </div>
            <div className="badge-card">
              <div className="badge-icon-wrapper google-yellow">
                <Rocket className="google-yellow" size={32} />
              </div>
              <h3 className="badge-title">Top Rated Plus on Upwork</h3>
              <p className="badge-description">Achieved Top Rated Plus status, representing the top 3% of talent on the world's largest freelance platform for proven client success.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="case-studies">
        <div className="container">
          <h2 className="section-title">Success Stories That Speak Volumes</h2>
          <p className="section-subtitle">I turn complex problems into powerful results. Here's a closer look at how.</p>
          
          <div 
            className={`case-studies-split-layout ${hasEnteredSection ? 'has-entered' : ''}`}
            onMouseEnter={handleSectionEnter}
          >
            {/* Desktop: Left Side - Case Study List */}
            <div className="case-studies-list desktop-only">
              <div 
                className={`case-study-item case-color-1 ${activeCase === 1 ? 'active' : ''}`} 
                data-case="1"
                onMouseEnter={() => handleCaseHover(1)}
                onClick={() => handleCaseClick(1)}
              >
                <div className="case-number">01</div>
                <div className="case-content">
                  <h3>47 Locations Live in 72 Hours</h3>
                  <div className="case-metrics">
                    <span className="metric"><Clock size={14} /> 72 Hours</span>
                    <span className="metric"><Building2 size={14} /> 47 Locations</span>
                  </div>
                </div>
                <ArrowRight size={20} className="arrow-icon" />
              </div>

              <div 
                className={`case-study-item case-color-2 ${activeCase === 2 ? 'active' : ''}`} 
                data-case="2"
                onMouseEnter={() => handleCaseHover(2)}
                onClick={() => handleCaseClick(2)}
              >
                <div className="case-number">02</div>
                <div className="case-content">
                  <h3>Suspended Profiles Reinstated</h3>
                  <div className="case-metrics">
                    <span className="metric"><Clock size={14} /> 48 Hours</span>
                    <span className="metric"><Building2 size={14} /> Multiple Locations</span>
                  </div>
                </div>
                <ArrowRight size={20} className="arrow-icon" />
              </div>

              <div 
                className={`case-study-item case-color-3 ${activeCase === 3 ? 'active' : ''}`} 
                data-case="3"
                onMouseEnter={() => handleCaseHover(3)}
                onClick={() => handleCaseClick(3)}
              >
                <div className="case-number">03</div>
                <div className="case-content">
                  <h3>Video Verification Success</h3>
                  <div className="case-metrics">
                    <span className="metric"><Clock size={14} /> 48 Hours</span>
                    <span className="metric"><Building2 size={14} /> Single Profile</span>
                  </div>
                </div>
                <ArrowRight size={20} className="arrow-icon" />
              </div>

              <div 
                className={`case-study-item case-color-4 ${activeCase === 4 ? 'active' : ''}`} 
                data-case="4"
                onMouseEnter={() => handleCaseHover(4)}
                onClick={() => handleCaseClick(4)}
              >
                <div className="case-number">04</div>
                <div className="case-content">
                  <h3>Reinstated After 2 Denied Appeals</h3>
                  <div className="case-metrics">
                    <span className="metric"><Clock size={14} /> 48 Hours</span>
                    <span className="metric"><Building2 size={14} /> Single Profile</span>
                  </div>
                </div>
                <ArrowRight size={20} className="arrow-icon" />
              </div>

              <div 
                className={`case-study-item case-color-5 ${activeCase === 5 ? 'active' : ''}`} 
                data-case="5"
                onMouseEnter={() => handleCaseHover(5)}
                onClick={() => handleCaseClick(5)}
              >
                <div className="case-number">05</div>
                <div className="case-content">
                  <h3>Dead Profile to Ranking Asset</h3>
                  <div className="case-metrics">
                    <span className="metric"><Clock size={14} /> 3 Months</span>
                    <span className="metric"><Building2 size={14} /> Single Profile</span>
                  </div>
                </div>
                <ArrowRight size={20} className="arrow-icon" />
              </div>

              <div 
                className={`case-study-item case-color-6 ${activeCase === 6 ? 'active' : ''}`} 
                data-case="6"
                onMouseEnter={() => handleCaseHover(6)}
                onClick={() => handleCaseClick(6)}
              >
                <div className="case-number">06</div>
                <div className="case-content">
                  <h3>Phone Won't Stop Ringing</h3>
                  <div className="case-metrics">
                    <span className="metric"><Clock size={14} /> 1 Month</span>
                    <span className="metric"><Building2 size={14} /> Single Profile</span>
                  </div>
                </div>
                <ArrowRight size={20} className="arrow-icon" />
              </div>
            </div>

            {/* Desktop: Right Side - Case Study Details */}
            <div className="case-study-details-panel desktop-only">
              {activeCase === null && (
                <div className="case-detail-placeholder">
                  <h3>Select a Case Study</h3>
                  <p>Hover over any case study on the left to view detailed information about the challenge and solution.</p>
                </div>
              )}
              <div className={`case-detail ${activeCase === 1 ? 'active' : ''}`} data-case="1">
                <h3 className="case-detail-title">47 Locations Live in 72 Hours</h3>
                <div className="case-detail-metrics">
                  <div className="metric-badge google-blue">
                    <Clock size={16} />
                    72 Hours
                  </div>
                  <div className="metric-badge google-blue">
                    <Building2 size={16} />
                    47 Locations
                  </div>
                </div>
                <div className="case-detail-content">
                  <div className="case-detail-section">
                    <h4><AlertTriangle size={18} /> Client Challenge</h4>
                    <p>A multi-state restaurant chain with 47 new locations was stuck in a verification loop for over 8 months. Standard methods failed repeatedly, and they were unable to access Google's bulk verification, resulting in lost local visibility and millions in missed revenue.</p>
                  </div>
                  <div className="case-detail-section">
                    <h4><Zap size={18} /> What I Did</h4>
                    <p>I assessed the account's eligibility, helped restructure the business profile to meet Google's bulk verification standards, and prepared a master file for submission. With support from high-level partner channels, I escalated and executed a coordinated verification process, bringing all 47 profiles live within 72 hours.</p>
                  </div>
                </div>
              </div>

              <div className={`case-detail ${activeCase === 2 ? 'active' : ''}`} data-case="2">
                <h3 className="case-detail-title">Suspended Profiles Reinstated & Account Unlocked</h3>
                <div className="case-detail-metrics">
                  <div className="metric-badge google-red">
                    <Clock size={16} />
                    48 Hours
                  </div>
                  <div className="metric-badge google-red">
                    <Building2 size={16} />
                    Multiple Locations
                  </div>
                </div>
                <div className="case-detail-content">
                  <div className="case-detail-section">
                    <h4><AlertTriangle size={18} /> Client Challenge</h4>
                    <p>A large business account faced a major roadblock, multiple Google Business Profiles across locations were suddenly suspended, and the account itself was restricted from making further edits or appeals. The client was unclear on the root cause and unable to manually appeal each profile.</p>
                  </div>
                  <div className="case-detail-section">
                    <h4><Zap size={18} /> What I Did</h4>
                    <p>I conducted a deep audit of the account and identified compliance gaps that had triggered the suspension. After cleaning up the account structure and resolving issues across all affected profiles, I guided the client through a streamlined fix. Within days, the account was reinstated and all suspended profiles were verified and live again.</p>
                  </div>
                </div>
              </div>

              <div className={`case-detail ${activeCase === 3 ? 'active' : ''}`} data-case="3">
                <h3 className="case-detail-title">Video Verification Success After Repeated Failures</h3>
                <div className="case-detail-metrics">
                  <div className="metric-badge google-yellow">
                    <Clock size={16} />
                    48 Hours
                  </div>
                  <div className="metric-badge google-yellow">
                    <Building2 size={16} />
                    Single Profile
                  </div>
                </div>
                <div className="case-detail-content">
                  <div className="case-detail-section">
                    <h4><AlertTriangle size={18} /> Client Challenge</h4>
                    <p>A business was stuck in a loop of failed video call verifications, unable to get their Google Business Profile verified despite multiple attempts. The client was unsure what was causing the rejections and lacked clarity on the verification process.</p>
                  </div>
                  <div className="case-detail-section">
                    <h4><Zap size={18} /> What I Did</h4>
                    <p>I analysed the profile and uncovered critical issues with account details that were likely causing verification failure. After fixing these gaps, I provided clear, step-by-step guidance on how to prepare for and complete the video verification properly. With everything aligned, the client successfully verified their profile on the next attempt.</p>
                  </div>
                </div>
              </div>

              <div className={`case-detail ${activeCase === 4 ? 'active' : ''}`} data-case="4">
                <h3 className="case-detail-title">Reinstated After 2 Denied Appeals</h3>
                <div className="case-detail-metrics">
                  <div className="metric-badge google-green">
                    <Clock size={16} />
                    48 Hours
                  </div>
                  <div className="metric-badge google-green">
                    <Building2 size={16} />
                    Single Profile
                  </div>
                </div>
                <div className="case-detail-content">
                  <div className="case-detail-section">
                    <h4><AlertTriangle size={18} /> Client Challenge</h4>
                    <p>A business profile remained suspended for months even after two appeals. Despite the profile meeting all visible guidelines, the client was stuck in limbo with no clear path to resolution.</p>
                  </div>
                  <div className="case-detail-section">
                    <h4><Zap size={18} /> What I Did</h4>
                    <p>I conducted a thorough audit, identified subtle compliance issues that were being overlooked, and updated the profile accordingly. With a fresh appeal backed by guideline-aligned changes, the profile was reinstated within 48 hours, restoring full visibility and access.</p>
                  </div>
                </div>
              </div>

              <div className={`case-detail ${activeCase === 5 ? 'active' : ''}`} data-case="5">
                <h3 className="case-detail-title">Turning a Dead Profile into a Local Ranking Asset</h3>
                <div className="case-detail-metrics">
                  <div className="metric-badge google-purple">
                    <Clock size={16} />
                    3 Months
                  </div>
                  <div className="metric-badge google-purple">
                    <Building2 size={16} />
                    Single Profile
                  </div>
                </div>
                <div className="case-detail-content">
                  <div className="case-detail-section">
                    <h4><AlertTriangle size={18} /> Client Challenge</h4>
                    <p>A newly created Google Business Profile was barely visible—no local rankings, low engagement, and no leads. The client wasn't sure what was missing.</p>
                  </div>
                  <div className="case-detail-section">
                    <h4><Zap size={18} /> What I Did</h4>
                    <p>I diagnosed the issue as poor optimization and lack of consistent updates. After updating the profile with complete business details, enhancing visuals, and setting up a routine of weekly Google Posts and updates, the profile gradually began gaining visibility, engagement, and better local rankings.</p>
                  </div>
                </div>
              </div>

              <div className={`case-detail ${activeCase === 6 ? 'active' : ''}`} data-case="6">
                <h3 className="case-detail-title">Ads Weren't Working? Now the Phone Won't Stop Ringing</h3>
                <div className="case-detail-metrics">
                  <div className="metric-badge google-orange">
                    <Clock size={16} />
                    1 Month
                  </div>
                  <div className="metric-badge google-orange">
                    <Building2 size={16} />
                    Single Profile
                  </div>
                </div>
                <div className="case-detail-content">
                  <div className="case-detail-section">
                    <h4><AlertTriangle size={18} /> Client Challenge</h4>
                    <p>The brand was running ads through an agency but was facing high CPCs and zero quality leads. The client was losing faith in digital advertising altogether.</p>
                  </div>
                  <div className="case-detail-section">
                    <h4><Zap size={18} /> What I Did</h4>
                    <p>My team ran a quick but honest audit, highlighting gaps in ad strategy, audience targeting, and conversion setup. We offered a refreshed multi-channel approach—blending Google Ads, Local Service Ads, email, and SMS marketing. Within a month, lead flow significantly improved, the phone started ringing again, and the brand finally saw ROI on their ad spend.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Accordion-style Case Studies */}
          <div className="mobile-case-studies">
            <div 
              className={`mobile-case-item ${activeCase === 1 ? 'active' : ''}`}
              onClick={() => handleCaseClick(1)}
            >
              <div className="mobile-case-header">
                <div className="mobile-case-number">01</div>
                <div className="mobile-case-title">47 Locations Live in 72 Hours</div>
                <ArrowRight size={20} className={`mobile-arrow ${activeCase === 1 ? 'rotated' : ''}`} />
              </div>
              <div className={`mobile-case-content ${activeCase === 1 ? 'expanded' : ''}`}>
                <div className="mobile-case-metrics">
                  <div className="metric-badge google-blue">
                    <Clock size={16} />
                    72 Hours
                  </div>
                  <div className="metric-badge google-blue">
                    <Building2 size={16} />
                    47 Locations
                  </div>
                </div>
                <div className="mobile-case-detail-section">
                  <h4><AlertTriangle size={18} /> Client Challenge</h4>
                  <p>A multi-state restaurant chain with 47 new locations was stuck in a verification loop for over 8 months. Standard methods failed repeatedly, and they were unable to access Google's bulk verification, resulting in lost local visibility and millions in missed revenue.</p>
                </div>
                <div className="mobile-case-detail-section">
                  <h4><Zap size={18} /> What I Did</h4>
                  <p>I assessed the account's eligibility, helped restructure the business profile to meet Google's bulk verification standards, and prepared a master file for submission. With support from high-level partner channels, I escalated and executed a coordinated verification process, bringing all 47 profiles live within 72 hours.</p>
                </div>
              </div>
            </div>

            <div 
              className={`mobile-case-item ${activeCase === 2 ? 'active' : ''}`}
              onClick={() => handleCaseClick(2)}
            >
              <div className="mobile-case-header">
                <div className="mobile-case-number">02</div>
                <div className="mobile-case-title">Suspended Profiles Reinstated</div>
                <ArrowRight size={20} className={`mobile-arrow ${activeCase === 2 ? 'rotated' : ''}`} />
              </div>
              <div className={`mobile-case-content ${activeCase === 2 ? 'expanded' : ''}`}>
                <div className="mobile-case-metrics">
                  <div className="metric-badge google-red">
                    <Clock size={16} />
                    48 Hours
                  </div>
                  <div className="metric-badge google-red">
                    <Building2 size={16} />
                    Multiple Locations
                  </div>
                </div>
                <div className="mobile-case-detail-section">
                  <h4><AlertTriangle size={18} /> Client Challenge</h4>
                  <p>A large business account faced a major roadblock, multiple Google Business Profiles across locations were suddenly suspended, and the account itself was restricted from making further edits or appeals. The client was unclear on the root cause and unable to manually appeal each profile.</p>
                </div>
                <div className="mobile-case-detail-section">
                  <h4><Zap size={18} /> What I Did</h4>
                  <p>I conducted a deep audit of the account and identified compliance gaps that had triggered the suspension. After cleaning up the account structure and resolving issues across all affected profiles, I guided the client through a streamlined fix. Within days, the account was reinstated and all suspended profiles were verified and live again.</p>
                </div>
              </div>
            </div>

            <div 
              className={`mobile-case-item ${activeCase === 3 ? 'active' : ''}`}
              onClick={() => handleCaseClick(3)}
            >
              <div className="mobile-case-header">
                <div className="mobile-case-number">03</div>
                <div className="mobile-case-title">Video Verification Success</div>
                <ArrowRight size={20} className={`mobile-arrow ${activeCase === 3 ? 'rotated' : ''}`} />
              </div>
              <div className={`mobile-case-content ${activeCase === 3 ? 'expanded' : ''}`}>
                <div className="mobile-case-metrics">
                  <div className="metric-badge google-yellow">
                    <Clock size={16} />
                    48 Hours
                  </div>
                  <div className="metric-badge google-yellow">
                    <Building2 size={16} />
                    Single Profile
                  </div>
                </div>
                <div className="mobile-case-detail-section">
                  <h4><AlertTriangle size={18} /> Client Challenge</h4>
                  <p>A business was stuck in a loop of failed video call verifications, unable to get their Google Business Profile verified despite multiple attempts. The client was unsure what was causing the rejections and lacked clarity on the verification process.</p>
                </div>
                <div className="mobile-case-detail-section">
                  <h4><Zap size={18} /> What I Did</h4>
                  <p>I analysed the profile and uncovered critical issues with account details that were likely causing verification failure. After fixing these gaps, I provided clear, step-by-step guidance on how to prepare for and complete the video verification properly. With everything aligned, the client successfully verified their profile on the next attempt.</p>
                </div>
              </div>
            </div>

            <div 
              className={`mobile-case-item ${activeCase === 4 ? 'active' : ''}`}
              onClick={() => handleCaseClick(4)}
            >
              <div className="mobile-case-header">
                <div className="mobile-case-number">04</div>
                <div className="mobile-case-title">Reinstated After 2 Denied Appeals</div>
                <ArrowRight size={20} className={`mobile-arrow ${activeCase === 4 ? 'rotated' : ''}`} />
              </div>
              <div className={`mobile-case-content ${activeCase === 4 ? 'expanded' : ''}`}>
                <div className="mobile-case-metrics">
                  <div className="metric-badge google-green">
                    <Clock size={16} />
                    48 Hours
                  </div>
                  <div className="metric-badge google-green">
                    <Building2 size={16} />
                    Single Profile
                  </div>
                </div>
                <div className="mobile-case-detail-section">
                  <h4><AlertTriangle size={18} /> Client Challenge</h4>
                  <p>A business had their Google Business Profile suspended and had already submitted two appeals that were denied. They were losing hope and considering starting over with a new profile, which would mean losing all their reviews and ranking history.</p>
                </div>
                <div className="mobile-case-detail-section">
                  <h4><Zap size={18} /> What I Did</h4>
                  <p>I reviewed the previous appeals and identified the specific issues that were causing the denials. I helped the client prepare a comprehensive appeal that addressed all the concerns and provided additional documentation. Within 48 hours, the profile was reinstated with all reviews and ranking history intact.</p>
                </div>
              </div>
            </div>

            <div 
              className={`mobile-case-item ${activeCase === 5 ? 'active' : ''}`}
              onClick={() => handleCaseClick(5)}
            >
              <div className="mobile-case-header">
                <div className="mobile-case-number">05</div>
                <div className="mobile-case-title">Dead Profile to Ranking Asset</div>
                <ArrowRight size={20} className={`mobile-arrow ${activeCase === 5 ? 'rotated' : ''}`} />
              </div>
              <div className={`mobile-case-content ${activeCase === 5 ? 'expanded' : ''}`}>
                <div className="mobile-case-metrics">
                  <div className="metric-badge google-purple">
                    <Clock size={16} />
                    3 Months
                  </div>
                  <div className="metric-badge google-purple">
                    <Building2 size={16} />
                    Single Profile
                  </div>
                </div>
                <div className="mobile-case-detail-section">
                  <h4><AlertTriangle size={18} /> Client Challenge</h4>
                  <p>A business had a Google Business Profile that was technically live but completely invisible in search results. They were not ranking for any relevant keywords and were losing customers to competitors who were visible in local search.</p>
                </div>
                <div className="mobile-case-detail-section">
                  <h4><Zap size={18} /> What I Did</h4>
                  <p>I conducted a comprehensive audit and identified multiple optimization opportunities. I helped the client implement strategic changes to their profile, including better categorization, optimized content, and improved local SEO practices. Over three months, the profile went from invisible to ranking in the top 3 for their main keywords.</p>
                </div>
              </div>
            </div>

            <div 
              className={`mobile-case-item ${activeCase === 6 ? 'active' : ''}`}
              onClick={() => handleCaseClick(6)}
            >
              <div className="mobile-case-header">
                <div className="mobile-case-number">06</div>
                <div className="mobile-case-title">Phone Won't Stop Ringing</div>
                <ArrowRight size={20} className={`mobile-arrow ${activeCase === 6 ? 'rotated' : ''}`} />
              </div>
              <div className={`mobile-case-content ${activeCase === 6 ? 'expanded' : ''}`}>
                <div className="mobile-case-metrics">
                  <div className="metric-badge google-orange">
                    <Clock size={16} />
                    1 Month
                  </div>
                  <div className="metric-badge google-orange">
                    <Building2 size={16} />
                    Single Profile
                  </div>
                </div>
                <div className="mobile-case-detail-section">
                  <h4><AlertTriangle size={18} /> Client Challenge</h4>
                  <p>The brand was running ads through an agency but was facing high CPCs and zero quality leads. The client was losing faith in digital advertising altogether.</p>
                </div>
                <div className="mobile-case-detail-section">
                  <h4><Zap size={18} /> What I Did</h4>
                  <p>My team ran a quick but honest audit, highlighting gaps in ad strategy, audience targeting, and conversion setup. We offered a refreshed multi-channel approach—blending Google Ads, Local Service Ads, email, and SMS marketing. Within a month, lead flow significantly improved, the phone started ringing again, and the brand finally saw ROI on their ad spend.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">My Core Services</h2>
          <p className="section-subtitle">From crisis recovery to growth optimization - everything you need to dominate local search</p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon google-red"><ShieldCheck className="google-red" /></div>
              <h3>Emergency Suspension Recovery</h3>
              <p>Fast-track recovery for suspended profiles using advanced appeal strategies and direct Google contacts.</p>
            </div>

            <div className="service-card">
              <div className="service-icon google-blue"><CheckCircle className="google-blue" /></div>
              <h3>Express Verification Services</h3>
              <p>Skip the waiting and get your business verified quickly through proven methods.</p>
            </div>

            <div className="service-card">
              <div className="service-icon google-yellow"><Factory className="google-yellow" /></div>
              <h3>Bulk Location Management</h3>
              <p>Enterprise solutions for businesses with multiple locations and franchise operations.</p>
            </div>

            <div className="service-card">
              <div className="service-icon google-green"><MapPin className="google-green" /></div>
              <h3>India Region Specialist</h3>
              <p>Specialized services for Indian businesses facing unique verification and compliance challenges.</p>
            </div>

            <div className="service-card">
              <div className="service-icon google-blue"><Target className="google-blue" /></div>
              <h3>Profile Optimization & SEO</h3>
              <p>Complete optimization to maximize visibility, rankings, and customer engagement.</p>
            </div>

            <div className="service-card">
              <div className="service-icon google-red"><BarChart className="google-red" /></div>
              <h3>Google Ads Integration</h3>
              <p>High-converting Google Ads campaigns designed to drive sales, walk-ins, and brand awareness.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What My Clients Say</h2>
          <p className="section-subtitle">Real feedback from business owners I've had the pleasure to work with.</p>
          <TestimonialCarousel testimonials={testimonialsData} />
        </div>
      </section>

      <section className="newsletter">
        <div className="container">
          <h2 className="section-title" style={{ color: 'white' }}>Stay Ahead of Google's Updates</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Subscribe to my newsletter for exclusive tips on GBP, local SEO, and suspension prevention.</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              name="email"
              placeholder="Enter your email" 
              className="newsletter-input"
              required 
              disabled={isSubscribing}
            />
            <button 
              type="submit" 
              className="newsletter-btn"
              disabled={isSubscribing}
            >
              {isSubscribing ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Ready to Fix Your Google Business Profile?</h2>
          <p className="section-subtitle">Choose your preferred method to get in touch for a free, no-obligation consultation.</p>
          <div className="contact-methods">
            <a 
              href="#"
              className="contact-card"
              onClick={(e) => {
                e.preventDefault();
                copyEmailTemplate('call');
              }}
            >
              <div className="contact-icon"><Calendar /></div>
              <h3>Book a Free Call</h3>
              <p>Schedule a 15-min call to discuss your case directly.</p>
            </a>
            <a href="https://wa.me/+918828216807" className="contact-card">
              <div className="contact-icon"><MessageCircle /></div>
              <h3>WhatsApp Now</h3>
              <p>Get an instant response for urgent suspension issues.</p>
            </a>
            <a 
              href="#"
              className="contact-card"
              onClick={(e) => {
                e.preventDefault();
                copyEmailTemplate('email');
              }}
            >
              <div className="contact-icon"><Mail /></div>
              <h3>Send An Email</h3>
              <p>Provide details of your issue for a comprehensive review.</p>
            </a>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Needed</label>
              <select id="service" name="service">
                <option>Suspension Recovery</option>
                <option>Verification Help</option>
                <option>Bulk Locations</option>
                <option>Profile Optimization</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Briefly describe your issue</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>
            <button type="submit" className="submit-btn">Get Expert Help Now</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Legal</h4>
              <a href="/privacy-policy">Privacy Policy</a><br />
              <a href="#">Terms of Service</a>
            </div>
            <div className="footer-section">
              <h4 style={{ textAlign: 'center', width: '100%' }}>Connect</h4>
              <div className="footer-social-grid">
                <a href="https://wa.me/+918828216807" aria-label="WhatsApp"><MessageCircle size={28} /></a>
                <a href="https://www.linkedin.com/in/reddysohan/" aria-label="LinkedIn"><Linkedin size={28} /></a>
                <a href="https://www.facebook.com/sohan.reddy.716" aria-label="Facebook"><Facebook size={28} /></a>
                <a href="https://www.instagram.com/reddy_sohan/" aria-label="Instagram"><Instagram size={28} /></a>
                <a href="https://x.com/reddy__sohan" aria-label="X (formerly Twitter)"><Twitter size={28} /></a>
                <a href="mailto:Reachsohanreddy@gmail.com" aria-label="Email"><Mail size={28} /></a>
              </div>
            </div>
            <div className="footer-map">
              <h4>Our Location</h4>
              <p>Mumbai, Maharashtra, India</p>
              <iframe
                title="Mumbai Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160982607!2d72.74109995!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63fdc6cb1c7%3A0x1c1b1b1b1b1b1b1b!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '12px', width: '100%', maxWidth: '340px', minHeight: '180px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <p>&copy; 2024 Sohan Reddy. All rights reserved.</p>
        </div>
      </footer>

      <a href="#" className="fab" onClick={handleWhatsAppCall}>
        <MessageCircle />
      </a>
    </>
  )
} 