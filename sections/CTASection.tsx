import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-wrap pb-28">
      <div className="rounded-3xl border border-ytRed/30 bg-gradient-to-br from-ytRed/30 to-black p-10 text-center shadow-glow">
        <h2 className="mb-4 text-4xl md:text-6xl">Let&apos;s Make Your Videos Impossible to Ignore</h2>
        <div className="mb-6 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-ytRed px-8 py-3 font-semibold">Hire Me</button>
          <button className="rounded-full border border-ytYellow px-8 py-3 font-semibold text-ytYellow">Request a Sample Thumbnail</button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-white/80">
          <a href="mailto:hello@thumbnailengine.com">Email</a>
          <a href="#">Twitter</a>
          <a href="#">Discord</a>
        </div>
        <ArrowRight className="mx-auto mt-6 animate-pulse text-ytYellow" />
      </div>
    </section>
  )
}
