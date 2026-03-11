'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useMemo, useState } from 'react'

const categories = ['All', 'Entertainment', 'Finance', 'Gaming', 'Documentary', 'Tech']

const items = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  title: `Thumbnail Concept ${i + 1}`,
  category: categories[(i % (categories.length - 1)) + 1],
  image: `https://images.unsplash.com/photo-15${5300000 + i * 90}?auto=format&fit=crop&w=900&q=80`
}))

export default function PortfolioSection() {
  const [active, setActive] = useState('All')
  const filtered = useMemo(() => (active === 'All' ? items : items.filter((item) => item.category === active)), [active])

  return (
    <section className="section-wrap">
      <h2 className="mb-8 text-4xl md:text-6xl">Portfolio That Moves Metrics</h2>
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-5 py-2 text-sm transition ${active === cat ? 'bg-ytRed' : 'glass hover:border-ytRed/50'}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.div
              layout
              key={item.id}
              className="group relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ rotateX: 3, rotateY: -3, y: -6 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <Image src={item.image} alt={item.title} width={500} height={700} className="h-72 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 transition group-hover:opacity-100">
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="text-xs text-ytYellow">CTR Improvement: +{(item.id + 2) * 9}%</p>
                  <p className="text-xs">Viewer Engagement: +{(item.id + 2) * 6}%</p>
                  <p className="text-xs">Click Probability: {(item.id + 4) * 8}%</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
