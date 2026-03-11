'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

const SplineShowcase = dynamic(() => import('@/components/SplineShowcase'), { ssr: false })

const points = [
  'Emotion trigger',
  'Curiosity gap',
  'Visual hierarchy',
  'Contrast element',
  'Focus object'
]

export default function BreakdownSection() {
  const [tip, setTip] = useState('Strong emotional expressions increase viewer click probability.')

  return (
    <section className="section-wrap grid gap-8 lg:grid-cols-2">
      <div>
        <h2 className="mb-4 text-4xl md:text-6xl">Interactive 3D Thumbnail Breakdown</h2>
        <p className="mb-6 text-white/80">Rotate the mockup and hover points to inspect psychological layers built for click behavior.</p>
        <div className="glass rounded-2xl p-4 text-ytYellow">{tip}</div>
        <div className="mt-5 flex flex-wrap gap-3">
          {points.map((point) => (
            <button
              key={point}
              onMouseEnter={() => setTip(`${point}: engineered to maximize recommendation feed click-through behavior.`)}
              className="glass rounded-full px-4 py-2 text-sm hover:border-ytRed"
            >
              {point}
            </button>
          ))}
        </div>
      </div>
      <SplineShowcase className="h-full" />
    </section>
  )
}
