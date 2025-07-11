"use client"

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { UserCircle2, Quote, ArrowLeft, ArrowRight } from 'lucide-react'

export const TestimonialCarousel = ({ testimonials }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
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
      <div className="embla__buttons">
        <button className="embla__button embla__button--prev" onClick={scrollPrev}>
          <ArrowLeft size={24} />
        </button>
        <button className="embla__button embla__button--next" onClick={scrollNext}>
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  )
} 