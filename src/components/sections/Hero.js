import React from "react";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-3 bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {/* small bolt icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="currentColor" />
              </svg>
              Fast on-site hydraulic help
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
              We keep your <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">forklifts & hydraulics</span> running
            </h1>

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Expert diagnostics, transparent quotes and rapid on-site repairs — trusted by warehouses and factories across the city.
            </p>

            {/* Feature chips */}
            <div className="mt-6 flex flex-wrap gap-3">
              <FeatureChip
                title="On-site Repairs"
                desc="Mobile techs & spare parts"
                icon={
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 7h8M8 11h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              />
              <FeatureChip
                title="Pump & Cylinder"
                desc="Repair & rebuild"
                icon={
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              />
              <FeatureChip
                title="Maintenance Plans"
                desc="Reduce downtime"
                icon={
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                }
              />
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-2 py-3 bg-yellow-600 text-black font-semibold rounded-lg shadow-md hover:shadow-xl transition"
              >
                Book Service
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-3 border rounded-lg text-sm font-medium hover:bg-gray-50 transition"
              >
                View Services
              </a>

              {/* trust/quick stats */}
              <div className="ml-0 sm:ml-4 mt-3 sm:mt-0 text-sm text-gray-500">
                <span className="font-semibold text-gray-800">10+</span> years experience · <span className="font-semibold text-gray-800">300+</span> jobs completed
              </div>
            </div>
          </div>

          {/* RIGHT - visual card */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
              <img
                src="/assets/hero-forklift.jpg"
                alt="Technician repairing forklift"
                className="w-full h-80 object-cover"
              />
            </div>

            {/* floating badge */}
            <div className="absolute -top-4 -left-4 flex items-center gap-3 bg-white/95 px-3 py-2 rounded-xl shadow-md border">
              <svg className="w-5 h-5 text-yellow-600" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z" fill="currentColor" />
              </svg>
              <div className="text-sm">
                <div className="font-semibold text-gray-900">Fast response</div>
                <div className="text-xs text-gray-500">Same-day support (where available)</div>
              </div>
            </div>

            {/* subtle overlay card bottom-left with contact quick actions */}
            <div className="absolute -bottom-6 left-6 w-64 bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-md border rounded-xl p-3 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500">Emergency Line</div>
                  <a href="tel:+919998748236" className="font-semibold text-gray-900">+91 999 874 8236</a>
                </div>
                <a href="#contact" className="inline-block px-3 py-2 bg-black text-white rounded-lg text-sm">Request</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- small subcomponent: FeatureChip ---------- */
function FeatureChip({ title, desc, icon }) {
  return (
    <div className="flex items-start gap-3 bg-gray-50 border rounded-lg px-3 py-2 text-sm">
      <div className="text-yellow-600">{icon}</div>
      <div>
        <div className="font-medium text-gray-800">{title}</div>
        <div className="text-xs text-gray-500">{desc}</div>
      </div>
    </div>
  );
}
