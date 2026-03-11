'use client'

import Image from 'next/image'
import { useState } from 'react'

const studies = [
  { before: '4.2%', after: '8.7%', growth: '+107%', views: '+212K views' },
  { before: '5.1%', after: '9.4%', growth: '+84%', views: '+160K views' }
]

export default function CaseStudySection() {
  const [slider, setSlider] = useState(55)

  return (
    <section className="section-wrap">
      <h2 className="mb-8 text-4xl md:text-6xl">CTR Case Studies</h2>
      <div className="grid gap-8 lg:grid-cols-2">
        {studies.map((study, i) => (
          <article key={i} className="glass rounded-2xl p-4">
            <div className="relative mb-4 h-64 overflow-hidden rounded-xl">
              <Image src={`https://images.unsplash.com/photo-15${5420000 + i * 500}?auto=format&fit=crop&w=1200&q=80`} alt="After" fill className="object-cover" />
              <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${slider}%` }}>
                <Image
                  src={`https://images.unsplash.com/photo-15${5350000 + i * 400}?auto=format&fit=crop&w=1200&q=80`}
                  alt="Before"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <div className="absolute inset-y-0 w-1 bg-ytYellow" style={{ left: `${slider}%` }} />
            </div>
            <input type="range" min={0} max={100} value={slider} onChange={(e) => setSlider(Number(e.target.value))} className="mb-4 w-full" />
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p>CTR before: {study.before}</p>
              <p>CTR after: {study.after}</p>
              <p className="text-ytYellow">CTR increase: {study.growth}</p>
              <p>{study.views}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
