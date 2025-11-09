import React, { useEffect, useRef } from 'react'

/**
 * Clients section
 * - Place logo images in public/assets/clients/ e.g. public/assets/clients/client1.png
 * - Provide filenames in the `CLIENT_LOGOS` array below (or fetch them dynamically)
 *
 * Usage: import Clients from '../components/sections/Clients' and render <Clients />
 */

const CLIENT_LOGOS = [
  '/assets/clients/client1.jpg',
  '/assets/clients/client2.png',
  '/assets/clients/client3.png',
  '/assets/clients/client4.png',
  '/assets/clients/client5.png',
  '/assets/clients/client6.png',
]

export default function Clients({
  title = 'Trusted by local businesses',
  subtitle = 'We’ve worked with warehouses, manufacturers and logistics teams across the region.',
  autoplay = true,        // set false to disable automatic scroll on small screens
  autoplayDelay = 3000,   // ms between auto scrolls
}) {
  const scrollerRef = useRef(null)
  const idxRef = useRef(0)

  // Simple autoplay for the horizontal scroller on small screens (only when scroller is scrollable)
  useEffect(() => {
    if (!autoplay) return
    const el = scrollerRef.current
    if (!el) return

    let timer = null
    const start = () => {
      if (timer) clearInterval(timer)
      timer = setInterval(() => {
        // if small screen (mobile-like), perform small scroll steps
        // scroll-snap aligns children; we scroll by container width / item width
        const children = Array.from(el.querySelectorAll('[data-client-item]'))
        if (children.length === 0) return
        idxRef.current = (idxRef.current + 1) % children.length
        const next = children[idxRef.current]
        if (next) {
          next.scrollIntoView({ behavior: 'smooth', inline: 'center' })
        }
      }, autoplayDelay)
    }
    start()

    // pause on hover / interaction
    const onEnter = () => { if (timer) clearInterval(timer) }
    const onLeave = () => start()

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('touchstart', onEnter, { passive: true })
    el.addEventListener('mouseleave', onLeave)
    el.addEventListener('touchend', onLeave)

    return () => {
      if (timer) clearInterval(timer)
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('touchstart', onEnter)
      el.removeEventListener('mouseleave', onLeave)
      el.removeEventListener('touchend', onLeave)
    }
  }, [autoplay, autoplayDelay])

  return (
    <section className="py-12 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-gray-100">{title}</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{subtitle}</p>
        </div>

        {/* Logos: grid on md+, horizontal snap on smaller screens */}
        <div className="mt-8">
          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-6 md:gap-6 items-center">
            {CLIENT_LOGOS.map((src, i) => (
              <div key={src + i} className="flex items-center justify-center p-4 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-lg">
                <img src={src} alt={`Client ${i + 1}`} className="max-h-12 object-contain" />
              </div>
            ))}
          </div>

          {/* Mobile carousel */}
          <div
            ref={scrollerRef}
            className="md:hidden mt-3 -mx-4 px-4 overflow-x-auto scroll-pl-4 snap-x snap-mandatory flex gap-4 touch-pan-x"
            aria-label="Client logos carousel"
          >
            {CLIENT_LOGOS.map((src, i) => (
              <div
                key={src + i}
                data-client-item
                className="snap-center shrink-0 w-44 flex flex-col items-center justify-center p-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700"
              >
                <img src={src} alt={`Client ${i + 1}`} className="max-h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Optional testimonial / quote */}
        <div className="mt-10 max-w-3xl mx-auto text-center">
          <blockquote className="text-gray-700 dark:text-gray-300 italic text-sm md:text-base">
            “Varun Hydraulics reduced our forklift downtime significantly — fast, professional and clear pricing.”
          </blockquote>
          <cite className="block mt-3 text-xs text-gray-500 dark:text-gray-400">— Logistics Manager, ACME Warehouse</cite>
        </div>
      </div>
    </section>
  )
}
