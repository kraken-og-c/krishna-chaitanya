'use client'

import { motion } from 'framer-motion'
import { Bell, MousePointerClick, TrendingUp } from 'lucide-react'

const icons = [Bell, MousePointerClick, TrendingUp]

export default function SplineShowcase({ className = '' }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-black/50 ${className}`}>
      <iframe
        title="YouTube CTR Spline Scene"
        src="https://my.spline.design/untitled-15f933b69af16296f6df6f33cf41f2db/"
        className="h-[480px] w-full"
        loading="lazy"
      />
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute right-6 top-6 rounded-full border border-ytRed/40 bg-black/70 p-3 text-ytYellow shadow-glow"
          style={{ top: `${20 + index * 18}%` }}
          animate={{ y: [0, -8, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 4 + index, repeat: Infinity }}
        >
          <Icon className="size-5" />
        </motion.div>
      ))}
    </div>
  )
}
