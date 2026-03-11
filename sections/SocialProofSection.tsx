import Image from 'next/image'

const quotes = [
  'After switching thumbnails, our CTR increased significantly.',
  'Our recommendation traffic doubled in under 30 days.',
  'The thumbnails finally match our brand and drive clicks.'
]

export default function SocialProofSection() {
  return (
    <section className="section-wrap">
      <h2 className="mb-8 text-4xl md:text-6xl">Trusted by Growth-Obsessed Creators</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {quotes.map((quote, i) => (
          <article key={quote} className="glass rounded-2xl p-5">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src={`https://images.unsplash.com/photo-15${4460000 + i * 123}?auto=format&fit=crop&w=200&q=80`}
                alt="creator avatar"
                width={52}
                height={52}
                className="rounded-full border border-ytRed shadow-glow"
              />
              <div>
                <p>Creator {i + 1}</p>
                <p className="text-xs text-white/60">YouTube Channel</p>
              </div>
            </div>
            <p className="text-white/80">“{quote}”</p>
          </article>
        ))}
      </div>
    </section>
  )
}
