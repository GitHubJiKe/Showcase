import { FaBolt, FaShieldAlt, FaSync, FaWifi } from 'react-icons/fa'
import { motion } from 'framer-motion'

const features = [
  {
    icon: <FaBolt size={40} />,
    title: "Fast Performance",
    description: "Lightning-fast processing for seamless user experience"
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Secure",
    description: "Enterprise-grade security to protect your data"
  },
  {
    icon: <FaSync size={40} />,
    title: "Sync Across Devices",
    description: "Access your content from anywhere on any device"
  },
  {
    icon: <FaWifi size={40} />,
    title: "Cloud Connected",
    description: "Automatic cloud backups and updates"
  }
]

export default function FeatureHighlights() {
  return (
    <section className="section feature-highlights">
      <div className="container">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}