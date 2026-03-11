'use client'

import { motion } from 'framer-motion'

const steps = [
  'Video Topic Analysis',
  'Curiosity Gap Creation',
  'Visual Hierarchy Design',
  'Emotion Amplification',
  'Mobile Optimization',
  'CTR Testing'
]

export default function ProcessSection() {
  return (
    <section className="section-wrap">
      <h2 className="mb-10 text-4xl md:text-6xl">How I Engineer Click-Worthy Thumbnails</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step}
            className="glass relative rounded-xl p-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <p className="mb-2 text-ytYellow">0{i + 1}</p>
            <p>{step}</p>
            {i < steps.length - 1 && <div className="absolute -right-2 top-1/2 hidden h-0.5 w-4 bg-ytRed md:block" />}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
