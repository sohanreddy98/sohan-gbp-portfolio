"use client"

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { UserCircle2, Quote } from 'lucide-react'

export const TestimonialCarousel = ({ testimonials }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Auto-scroll every 4 seconds
  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 2500)
    return () => clearInterval(interval)
  }, [emblaApi])

  // Update selected index on scroll
  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi])

  return (
    <div className="testimonial-carousel">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {testimonials.map((testimonial, index) => (
            <div className="embla__slide" key={index}>
              <div className="testimonial-card">
                <div className="testimonial-icon"><Quote /></div>
                <blockquote>{testimonial.quote}</blockquote>
                <div className="testimonial-author">
                  <UserCircle2 size={40} className="author-avatar" />
                  <div>
                    <p className="author-name">{testimonial.name}</p>
                    <p className="author-company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__dots">
        {testimonials.map((_, idx) => (
          <div
            key={idx}
            className={`embla__dot${selectedIndex === idx ? ' embla__dot--active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
} 