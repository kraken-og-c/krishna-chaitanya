'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const SplineShowcase = dynamic(() => import('@/components/SplineShowcase'), { ssr: false })

const stats = ['CTR Optimized Designs', 'Viewer Attention Psychology', 'High Engagement Visuals']

export default function HeroSection() {
  return (
    <section className="section-wrap grid min-h-screen items-center gap-10 lg:grid-cols-2">
      <div className="space-y-7">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-ytYellow">
          YouTube Growth-Focused Thumbnail Design
        </motion.p>
        <h1 className="text-5xl leading-tight md:text-7xl">Thumbnails Engineered for Clicks</h1>
        <p className="max-w-xl text-lg text-white/80">
          I design high CTR YouTube thumbnails using psychology, visual hierarchy, and curiosity-driven
          storytelling.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="rounded-full bg-ytRed px-7 py-3 font-semibold transition hover:-translate-y-1">View Portfolio</button>
          <button className="rounded-full border border-ytYellow px-7 py-3 font-semibold text-ytYellow transition hover:bg-ytYellow hover:text-black">
            Get a Thumbnail
          </button>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat}
              className="glass rounded-xl p-4 text-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <p className="text-2xl text-ytRed">{88 + i * 4}%</p>
              <p>{stat}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <SplineShowcase />
    </section>
  )
}
