'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

const metrics = [
  { key: 'Emotion score', value: 91 },
  { key: 'Curiosity score', value: 88 },
  { key: 'Contrast score', value: 94 },
  { key: 'Mobile readability', value: 86 },
  { key: 'Click potential', value: 92 }
]

export default function AnalyzerSection() {
  const [preview, setPreview] = useState<string | null>(null)
  const score = useMemo(() => Math.round(metrics.reduce((sum, m) => sum + m.value, 0) / metrics.length), [])

  return (
    <section className="section-wrap grid gap-10 lg:grid-cols-2">
      <div>
        <h2 className="mb-6 text-4xl md:text-6xl">Thumbnail Click Potential Analyzer</h2>
        <label className="glass mb-6 block cursor-pointer rounded-2xl border-dashed p-6 text-center hover:border-ytRed/70">
          Upload Thumbnail
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) setPreview(URL.createObjectURL(file))
            }}
          />
        </label>
        <div className="space-y-3">
          {metrics.map((metric) => (
            <article key={metric.key} className="glass rounded-xl p-3">
              <div className="mb-1 flex justify-between text-sm">
                <span>{metric.key}</span>
                <span>{metric.value}</span>
              </div>
              <motion.div initial={{ width: 0 }} whileInView={{ width: `${metric.value}%` }} className="h-2 rounded-full bg-ytRed" />
            </article>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-3 text-2xl">Interactive YouTube Feed Mockup</h3>
        <div className="glass rounded-2xl p-4">
          <div className="mb-4 flex items-center justify-between text-sm text-white/70">
            <p>Recommended</p>
            <p className="text-ytYellow">Click Potential: {score}%</p>
          </div>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="mb-3 flex gap-3 rounded-lg bg-white/5 p-2">
              <div className="relative h-20 w-36 overflow-hidden rounded-md bg-black">
                {preview ? (
                  <Image src={preview} alt="Uploaded thumbnail" fill className="object-cover" unoptimized />
                ) : (
                  <div className="grid h-full place-content-center text-xs text-white/50">Your thumbnail</div>
                )}
              </div>
              <div className="text-xs text-white/70">
                <p>How Creators Double CTR in 7 Days</p>
                <p>Growth Lab Channel</p>
                <p>{220 + i * 10}K views • 3 days ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
