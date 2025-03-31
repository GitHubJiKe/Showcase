import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src="https://source.unsplash.com/random/1600x900/?product,tech" 
          alt="Product showcase"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Innovation at Your Fingertips
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-cta"
          >
            <button className="btn btn-primary">Shop Now</button>
            <button className="btn btn-secondary">Learn More</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}