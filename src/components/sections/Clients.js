import React, { useRef, useState } from 'react'

const DEFAULT_LOGOS = [
  { src: '/assets/clients/client1.png', alt: 'Client 1' },
  { src: '/assets/clients/client2.png', alt: 'Client 2' },
  { src: '/assets/clients/client3.png', alt: 'Client 3' },
  { src: '/assets/clients/client4.png', alt: 'Client 4' },
  { src: '/assets/clients/client5.png', alt: 'Client 5' },
  { src: '/assets/clients/client6.png', alt: 'Client 6' },
]

export default function Clients({
  title = 'Trusted by local businesses',
  subtitle = "We’ve worked with warehouses, manufacturers and logistics teams across the region.",
  logos = DEFAULT_LOGOS,
}) {
  const scrollerRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const idxRef = useRef(0)

  // helpers
  function scrollToIndex(i) {
    const el = scrollerRef.current
    if (!el) return
    const items = Array.from(el.querySelectorAll('[data-client-item]'))
    if (!items.length) return
    idxRef.current = Math.max(0, Math.min(items.length - 1, i))
    const next = items[idxRef.current]
    if (next) {
      next.scrollIntoView({ behavior: 'smooth', inline: 'center' })
      setCurrent(idxRef.current)
    }
  }

  function handlePrev(e) {
    e?.preventDefault()
    scrollToIndex(idxRef.current - 1)
  }

  function handleNext(e) {
    e?.preventDefault()
    scrollToIndex(idxRef.current + 1)
  }

  return (
    <section className="py-12 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-gray-100">{title}</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{subtitle}</p>
        </div>

        {/* Desktop grid */}
        <div className="mt-8 hidden md:grid md:grid-cols-6 md:gap-6 items-center">
          {logos.map((l, i) => (
            <div
              key={l.src + i}
              className="flex items-center justify-center p-6 rounded-lg bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md transition"
            >
              <img
                src={l.src}
                alt={l.alt || `Client ${i + 1}`}
                className="max-h-14 object-contain filter grayscale transition duration-300 hover:filter-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Mobile carousel (manual only, no auto-scroll) */}
        <div className="md:hidden mt-6 relative">
          {/* Prev / Next buttons */}
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="p-2 rounded-full bg-white/90 dark:bg-slate-800/90 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <svg className="w-5 h-5 text-gray-800 dark:text-gray-100" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div
            ref={scrollerRef}
            className="-mx-4 px-4 overflow-x-auto scroll-pl-4 snap-x snap-mandatory flex gap-4 touch-pan-x"
            aria-label="Client logos carousel"
            role="list"
          >
            {logos.map((l, i) => (
              <div
                key={l.src + i}
                data-client-item
                role="listitem"
                className="snap-center shrink-0 w-40 flex items-center justify-center p-4 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm"
                onFocus={() => { idxRef.current = i; setCurrent(i) }}
              >
                <img
                  src={l.src}
                  alt={l.alt || `Client ${i + 1}`}
                  className="max-h-12 object-contain filter grayscale transition duration-300 hover:filter-none"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={handleNext}
              aria-label="Next"
              className="p-2 rounded-full bg-white/90 dark:bg-slate-800/90 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <svg className="w-5 h-5 text-gray-800 dark:text-gray-100" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {logos.map((_, i) => (
              <button
                key={`dot-${i}`}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to client ${i + 1}`}
                className={`w-2 h-2 rounded-full ${i === current ? 'bg-yellow-600' : 'bg-gray-300 dark:bg-gray-600'}`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-10 max-w-3xl mx-auto text-center">
          <blockquote className="text-gray-700 dark:text-gray-300 italic text-sm md:text-base">
            “Varun Hydraulics reduced our forklift downtime significantly — fast, professional and clear pricing.”
          </blockquote>
          <cite className="block mt-3 text-xs text-gray-500 dark:text-gray-400">— Logistics Manager</cite>
        </div>
      </div>
    </section>
  )
}
