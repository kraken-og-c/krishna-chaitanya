'use client'

import { motion } from 'framer-motion'
import { Brain, Contrast, Eye, Focus, Lightbulb, Sparkles, Smartphone } from 'lucide-react'

const cards = [
  { title: 'Curiosity Gap', desc: 'Leave just enough mystery to force a click.', icon: Lightbulb },
  { title: 'Emotional Trigger', desc: 'Facial expressions and tension raise click urgency.', icon: Brain },
  { title: 'Visual Contrast', desc: 'High contrast makes thumbnails pop in noisy feeds.', icon: Contrast },
  { title: 'Story in One Frame', desc: 'One clear conflict instantly communicates value.', icon: Sparkles },
  { title: 'Mobile-First Design', desc: 'Readable at phone size where most clicks happen.', icon: Smartphone },
  { title: 'Pattern Interrupt', desc: 'Unexpected color/shape stops scrolling behavior.', icon: Eye },
  { title: 'Viewer Attention Hooks', desc: 'Lead eye flow toward title + key subject.', icon: Focus }
]

export default function PsychologySection() {
  return (
    <section className="section-wrap">
      <h2 className="mb-10 text-4xl md:text-6xl">The Psychology Behind High CTR Thumbnails</h2>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, i) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.06 }}
            className="glass rounded-2xl p-5"
          >
            <card.icon className="mb-4 text-ytYellow" />
            <h3 className="mb-2 text-2xl">{card.title}</h3>
            <p className="text-sm text-white/80">{card.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
