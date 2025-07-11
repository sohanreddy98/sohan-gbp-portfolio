"use client"

import {
  Award, BarChart, Briefcase, Calendar, CheckCircle, Clock, Coins, Factory,
  Globe, HeartHandshake, HelpCircle, LifeBuoy, Linkedin, LocateFixed, Lock,
  Mail, Phone, Rocket, ShieldCheck, Sparkles, Star, Target, ThumbsUp,MapPin,
  TrendingUp, UserCheck, Verified, Waves, UserCircle2, Quote, MessageSquare, XCircle, Building2, Network, Diamond, ArrowLeft, ArrowRight, Zap, AlertTriangle
} from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TestimonialCarousel } from '@/components/testimonial-carousel'

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
              <a href="https://wa.me/+911234567890" className="whatsapp-btn">
                <Phone size={16} /> WhatsApp
              </a>
              <a href="https://www.linkedin.com/in/reddysohan/" className="linkedin-btn">
                <Linkedin size={16} /> LinkedIn
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
            <h1>Sohan Reddy | GBP Expert</h1>
            <div className="hero-subtitle">Suspension Recovery • Verification Specialist • Bulk Management</div>
            <p className="hero-description">I'm Sohan Reddy, a top-rated expert dedicated to solving your most complex Google Business Profile challenges—from rapid suspension recovery to strategic optimization for maximum local visibility.</p>
            <div className="hero-cta">
              <a href="#contact" className="cta-primary">
                <ShieldCheck size={20} /> Get Free Expert Analysis
              </a>
              <a href="https://wa.me/+911234567890" className="cta-secondary">
                <MessageSquare size={20} /> WhatsApp Me Now
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
                  <div className="stat-icon-wrapper">
                    <TrendingUp size={36} className="stat-icon" />
                  </div>
                  <h3 className="stat-number">2,500+</h3>
                  <p className="stat-title">Profiles Recovered</p>
                </div>
                <div className="stat-back">
                  <h4>Proven Recovery</h4>
                  <p>Restoring your business's lifeline with a proven track record of success against any suspension type.</p>
                </div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-item-inner">
                <div className="stat-front">
                  <div className="stat-icon-wrapper">
                    <UserCheck size={36} className="stat-icon" />
                  </div>
                  <h3 className="stat-number">850+</h3>
                  <p className="stat-title">Businesses Verified</p>
                </div>
                <div className="stat-back">
                  <h4>Verification Mastery</h4>
                  <p>Navigating the complexities of verification to get your business on the map, fast and hassle-free.</p>
                </div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-item-inner">
                <div className="stat-front">
                  <div className="stat-icon-wrapper">
                    <ThumbsUp size={36} className="stat-icon" />
                  </div>
                  <h3 className="stat-number">98.7%</h3>
                  <p className="stat-title">Success Rate</p>
                </div>
                <div className="stat-back">
                  <h4>Consistent Results</h4>
                  <p>An industry-leading success rate means peace of mind and dependable outcomes for your business.</p>
                </div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-item-inner">
                <div className="stat-front">
                  <div className="stat-icon-wrapper">
                    <Clock size={36} className="stat-icon" />
                  </div>
                  <h3 className="stat-number">24-48h</h3>
                  <p className="stat-title">Average Recovery</p>
                </div>
                <div className="stat-back">
                  <h4>Speed & Urgency</h4>
                  <p>Minimizing your downtime and revenue loss by getting your profile back online with incredible speed.</p>
                </div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-item-inner">
                <div className="stat-front">
                  <div className="stat-icon-wrapper">
                    <Globe size={36} className="stat-icon" />
                  </div>
                  <h3 className="stat-number">India</h3>
                  <p className="stat-title">Verification Specialist</p>
                </div>
                <div className="stat-back">
                  <h4>Specialized Expertise</h4>
                  <p>Deep knowledge of regional verification challenges ensures your business gets listed correctly in India.</p>
                </div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-item-inner">
                <div className="stat-front">
                  <div className="stat-icon-wrapper">
                    <Briefcase size={36} className="stat-icon" />
                  </div>
                  <h3 className="stat-number">100+</h3>
                  <p className="stat-title">Multi-Location Clients</p>
                </div>
                <div className="stat-back">
                  <h4>Enterpriseaaa Ready</h4>
                  <p>Expertly managing GBP for franchises and businesses with 100+ locations, ensuring brand consistency at scale.</p>
                </div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-item-inner">
                <div className="stat-front">
                  <div className="stat-icon-wrapper">
                    <Star size={36} className="stat-icon" />
                  </div>
                  <h3 className="stat-number">5-Star</h3>
                  <p className="stat-title">Client Rating</p>
                </div>
                <div className="stat-back">
                  <h4>Exceptional Service</h4>
                  <p>Committed to excellence, reflected in consistent 5-star feedback from satisfied clients worldwide.</p>
                </div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-item-inner">
                <div className="stat-front">
                  <div className="stat-icon-wrapper">
                    <Calendar size={36} className="stat-icon" />
                  </div>
                  <h3 className="stat-number">8+</h3>
                  <p className="stat-title">Years Experience</p>
                </div>
                <div className="stat-back">
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
                src="/anna.png"
                alt="Sohan Reddy - Google Business Profile Expert"
                width={500}
                height={500}
                className="about-image"
              />
            </motion.div>
            <div className="about-content">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>A Passion for Solving Google's Toughest Challenges.</h2>
              <p className="section-subtitle" style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '2rem' }}>
                For over a decade, I've been navigating the complex and ever-changing landscape of Google Business Profile. My journey began with a simple goal: to help businesses claim their rightful space in the digital world. Today, as a Google Gold Product Expert, I've had the privilege of restoring thousands of profiles, verifying businesses across the globe, and empowering companies to thrive in local search.
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
              <div className="problem-icon"><XCircle /></div>
              <h3>Profile Suspended Without Warning</h3>
              <p>Your Google Business Profile got suspended and you're losing customers every day. Traditional appeals take weeks or get rejected. I specialize in fast-track suspension recovery with proven strategies that work.</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon"><HelpCircle /></div>
              <h3>Verification Stuck in Processing</h3>
              <p>Waiting weeks for Google to verify your business? Phone verification not working? Postcard never arrived? I have direct methods to expedite verification for any business type.</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon"><Factory /></div>
              <h3>Managing 10+ Locations</h3>
              <p>Chain businesses and franchises struggle with bulk verification and management. I provide enterprise-level solutions with streamlined processes for unlimited locations.</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon"><Phone /></div>
              <h3>Phone Verification Issues (India)</h3>
              <p>Phone numbers stuck in verification loop, especially in India? I have specialized solutions for Indian businesses and know exactly how to resolve regional verification challenges.</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon"><TrendingUp /></div>
              <h3>Poor Local Search Ranking</h3>
              <p>Your competitors appear first in local search while you're invisible? I optimize profiles for maximum visibility, better rankings, and increased customer actions.</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon"><Coins /></div>
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
              <div className="badge-icon-wrapper">
                <Award size={32} />
              </div>
              <h3 className="badge-title">Gold Product Expert</h3>
              <p className="badge-description">Officially recognized by Google for exceptional product mastery. This prestigious status is held by less than 1% of experts worldwide.</p>
            </div>
            <div className="badge-card">
              <div className="badge-icon-wrapper">
                <HeartHandshake size={32} />
              </div>
              <h3 className="badge-title">Official Google Partner</h3>
              <p className="badge-description">A verified partner with demonstrated ad skill and expertise, meeting Google's high standards for client growth and performance.</p>
            </div>
            <div className="badge-card">
              <div className="badge-icon-wrapper">
                <Rocket size={32} />
              </div>
              <h3 className="badge-title">Top Rated Plus on Upwork</h3>
              <p className="badge-description">Achieved Top Rated Plus status, representing the top 3% of talent on the world's largest freelance platform for proven client success.</p>
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

      <section className="case-studies">
        <div className="container">
          <h2 className="section-title">Success Stories That Speak Volumes</h2>
          <p className="section-subtitle">I turn complex problems into powerful results. Here's a closer look at how.</p>
          <div className="case-studies-grid">
            <div className="case-study-card">
              <div className="case-study-header">
                <Building2 size={20} className="case-study-icon" />
                <span>Restaurant Chain</span>
              </div>
              <h3 className="case-study-main-title">47 Locations Verified in 3 Days</h3>
              <div className="case-study-details">
                <div className="case-study-challenge">
                  <h4><AlertTriangle size={18} /> The Challenge</h4>
                  <p>A multi-state restaurant chain with 47 new locations was stuck in a verification loop for 8 months. Traditional methods failed repeatedly, costing them millions in lost revenue.</p>
                </div>
                <div className="case-study-solution">
                  <h4><Zap size={18} /> The Solution</h4>
                  <p>Leveraged high-level partner support channels, prepared a master verification file, and executed a coordinated submission. All 47 profiles were verified and live within 72 hours.</p>
                </div>
              </div>
            </div>
            <div className="case-study-card">
              <div className="case-study-header">
                <Star size={20} className="case-study-icon" />
                <span>5-Star Hotel</span>
              </div>
              <h3 className="case-study-main-title">Negative Review Attack Neutralized</h3>
              <div className="case-study-details">
                <div className="case-study-challenge">
                  <h4><AlertTriangle size={18} /> The Challenge</h4>
                  <p>A luxury hotel was targeted by a coordinated negative review attack, causing their 5-star rating to plummet to 3.7. Bookings dropped by 60% as trust eroded.</p>
                </div>
                <div className="case-study-solution">
                  <h4><Zap size={18} /> The Solution</h4>
                  <p>Documented the attack pattern and submitted a detailed policy violation report. Over 80 fraudulent reviews were removed, and I helped launch a review generation campaign that restored their rating to 4.8.</p>
                </div>
              </div>
            </div>
            <div className="case-study-card">
              <div className="case-study-header">
                <Briefcase size={20} className="case-study-icon" />
                <span>Corporate Law Firm</span>
              </div>
              <h3 className="case-study-main-title">Hijacked Listing & Brand Identity Restored</h3>
              <div className="case-study-details">
                <div className="case-study-challenge">
                  <h4><AlertTriangle size={18} /> The Challenge</h4>
                  <p>A prestigious law firm's main office listing was hijacked by a malicious actor who changed the firm's name, phone, and website, redirecting valuable leads to a competitor.</p>
                </div>
                <div className="case-study-solution">
                  <h4><Zap size={18} /> The Solution</h4>
                  <p>Immediately initiated an ownership conflict resolution process, providing legal documentation to prove ownership. The listing was restored within 24 hours and secured with advanced security settings.</p>
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
              <div className="service-icon"><ShieldCheck /></div>
              <h3>Emergency Suspension Recovery</h3>
              <p>Fast-track recovery for suspended profiles using advanced appeal strategies and direct Google contacts.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><CheckCircle /></div>
              <h3>Express Verification Services</h3>
              <p>Skip the waiting and get your business verified quickly through proven methods.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><Factory /></div>
              <h3>Bulk Location Management</h3>
              <p>Enterprise solutions for businesses with multiple locations and franchise operations.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><MapPin /></div>
              <h3>India Region Specialist</h3>
              <p>Specialized services for Indian businesses facing unique verification and compliance challenges.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><Target /></div>
              <h3>Profile Optimization & SEO</h3>
              <p>Complete optimization to maximize visibility, rankings, and customer engagement.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><BarChart /></div>
              <h3>Google Ads Integration</h3>
              <p>High-converting Google Ads campaigns designed to drive sales, walk-ins, and brand awareness.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container">
          <h2 className="section-title" style={{ color: 'white' }}>Stay Ahead of Google's Updates</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Subscribe to my newsletter for exclusive tips on GBP, local SEO, and suspension prevention.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Ready to Fix Your Google Business Profile?</h2>
          <p className="section-subtitle">Choose your preferred method to get in touch for a free, no-obligation consultation.</p>
          <div className="contact-methods">
            <a href="#" className="contact-card">
              <div className="contact-icon"><Calendar /></div>
              <h3>Book a Free Call</h3>
              <p>Schedule a 15-min call to discuss your case directly.</p>
            </a>
            <a href="https://wa.me/+911234567890" className="contact-card">
              <div className="contact-icon"><Phone /></div>
              <h3>WhatsApp Now</h3>
              <p>Get an instant response for urgent suspension issues.</p>
            </a>
            <a href="#" className="contact-card">
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
              <h4>Quick Links</h4>
              <a href="#services">Services</a><br />
              <a href="#case-studies">Success Stories</a><br />
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a><br />
              <a href="#">Terms of Service</a>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <a href="https://wa.me/+911234567890">WhatsApp</a><br />
              <a href="https://www.linkedin.com/in/reddysohan/">LinkedIn</a>
            </div>
          </div>
          <p>&copy; 2024 Sohan Reddy. All rights reserved.</p>
        </div>
      </footer>

      <a href="https://wa.me/+911234567890" className="fab">
        <MessageSquare />
      </a>
    </>
  )
} 