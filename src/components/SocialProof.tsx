import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const testimonials = [
  {
    name: "Alex Johnson",
    rating: 5,
    text: "This product has completely transformed my workflow. The performance is outstanding!",
    avatar: "https://source.unsplash.com/random/100x100/?portrait,man"
  },
  {
    name: "Sarah Miller",
    rating: 5,
    text: "I was skeptical at first, but this exceeded all my expectations. Highly recommend!",
    avatar: "https://source.unsplash.com/random/100x100/?portrait,woman"
  },
  {
    name: "Michael Chen",
    rating: 4,
    text: "Great value for the price. The customer support was excellent when I had questions.",
    avatar: "https://source.unsplash.com/random/100x100/?portrait,asian"
  }
]

export default function SocialProof() {
  return (
    <section className="section social-proof">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="reviews-container">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        color={i < testimonial.rating ? "#FFD700" : "#E5E7EB"} 
                      />
                    ))}
                  </div>
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="customer-info">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="avatar"
                    />
                    <span className="customer-name">{testimonial.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}