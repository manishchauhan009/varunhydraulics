import React from "react"
import { useNavigate } from "react-router-dom"

export default function Hero() {
  const navigate = useNavigate()

  function handleBook(e) {
    e?.preventDefault()
    // navigate to contact page (no in-page auto-scroll)
    navigate("/contact")
  }

  return (
    <section className="bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-3 bg-yellow-50 dark:bg-yellow-900/10 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="currentColor" />
              </svg>
              Fast on-site hydraulic help
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
              We keep your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-yellow-300 dark:to-yellow-500">
                forklifts & hydraulics
              </span>{" "}
              running — reliable, fast, professional.
            </h1>

            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
              Expert diagnostics, transparent quotes and rapid on-site repairs — trusted by warehouses and factories across the region. Same-day visits where available.
            </p>

            {/* Feature chips */}
            <div className="mt-6 flex flex-wrap gap-3">
              <FeatureChip
                title="On-site Repairs"
                desc="Mobile techs & spare parts"
                icon={
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2M8 7h8M8 11h8"/>
                  </svg>
                }
              />
              <FeatureChip
                title="Pump & Cylinder"
                desc="Repair & rebuild"
                icon={
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20"/>
                  </svg>
                }
              />
              <FeatureChip
                title="Maintenance Plans"
                desc="Reduce downtime"
                icon={
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"/><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                }
              />
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <button
                onClick={handleBook}
                className="inline-flex items-center gap-2 px-4 py-3 bg-yellow-600 text-black font-semibold rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                aria-label="Book service"
              >
                Book Service
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <a
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-3 border rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-800 transition"
              >
                View Services
              </a>

              {/* trust/quick stats */}
              <div className="ml-0 sm:ml-4 mt-3 sm:mt-0 text-sm text-gray-500 dark:text-gray-300">
                <span className="font-semibold text-gray-800 dark:text-gray-100">15+</span> years experience ·{" "}
                <span className="font-semibold text-gray-800 dark:text-gray-100">1000+</span> jobs completed
              </div>
            </div>
          </div>

          {/* RIGHT - visual card */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 dark:ring-white/5">
              <img
                src="/assets/hero-forklift.jpg"
                alt="Technician repairing forklift"
                className="w-full h-80 object-cover"
              />
              {/* subtle dark overlay for readability in dark mode */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent dark:from-black/40 dark:to-transparent" />
            </div>

            {/* floating badge */}
            <div className="absolute -top-4 -left-4 flex items-center gap-3 bg-white dark:bg-slate-800/95 px-3 py-2 rounded-xl shadow-md border border-gray-100 dark:border-slate-700">
              <svg className="w-5 h-5 text-yellow-600" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z" fill="currentColor" />
              </svg>
              <div className="text-sm">
                <div className="font-semibold text-gray-900 dark:text-gray-100">Fast response</div>
                <div className="text-xs text-gray-500 dark:text-gray-300">Same-day support (where available)</div>
              </div>
            </div>

            {/* subtle overlay card bottom-left with contact quick actions */}
            <div className="absolute -bottom-6 left-6 w-64 bg-white/90 dark:bg-slate-800/80 backdrop-blur rounded-xl p-3 shadow-md border border-gray-100 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-300">Emergency Line</div>
                  <a href="tel:+919998748236" className="font-semibold text-gray-900 dark:text-gray-100">+91 999 874 8236</a>
                </div>
                <button
                  onClick={handleBook}
                  className="inline-block px-3 py-2 bg-black text-white rounded-lg text-sm hover:opacity-95 transition"
                >
                  Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- small subcomponent: FeatureChip ---------- */
function FeatureChip({ title, desc, icon }) {
  return (
    <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-lg px-3 py-2 text-sm">
      <div className="text-yellow-600 shrink-0">{icon}</div>
      <div>
        <div className="font-medium text-gray-800 dark:text-gray-100">{title}</div>
        <div className="text-xs text-gray-500 dark:text-gray-300">{desc}</div>
      </div>
    </div>
  )
}
