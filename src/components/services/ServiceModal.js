// src/components/services/ServiceModal.jsx
import React, { useEffect, useRef } from 'react'
import ServiceIcon from './ServiceIcon'

export default function ServiceModal({ service, onClose }) {
  const closeBtnRef = useRef(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    // focus close button for accessibility
    if (closeBtnRef.current) closeBtnRef.current.focus()

    // close on Escape
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  // click outside to close
  function handleBackdropClick(e) {
    if (e.target === dialogRef.current) onClose?.()
  }

  if (!service) return null

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`service-modal-title-${service.id}`}
      onClick={handleBackdropClick}
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* modal card */}
      <div className="relative w-full max-w-3xl transform transition-all duration-200 scale-100">
        <div className="overflow-hidden rounded-2xl shadow-2xl">
          {/* Header / Visual */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 p-6 md:p-8
                          bg-gradient-to-r from-yellow-400 to-yellow-600">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-white/90 dark:bg-slate-900/70 flex items-center justify-center shadow">
                <ServiceIcon name={service.icon} className="w-7 h-7 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <h3 id={`service-modal-title-${service.id}`} className="text-lg md:text-xl font-extrabold text-black dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-black/70 dark:text-white/80 max-w-xl">
                  {service.desc}
                </p>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-3">
              <a
                href="tel:+919998748236"
                className="inline-flex items-center gap-2 px-3 py-2 bg-white text-black rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition"
              >
                Call Now
              </a>

              <button
                ref={closeBtnRef}
                onClick={onClose}
                aria-label="Close details"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-black/90 text-white hover:bg-black transition"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-slate-900 px-6 md:px-8 py-6 md:py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">What we do</h4>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.details}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-yellow-600 dark:text-yellow-400">•</span>
                    <span>On-site inspection & transparent estimate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-yellow-600 dark:text-yellow-400">•</span>
                    <span>Genuine parts & professional replacement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-yellow-600 dark:text-yellow-400">•</span>
                    <span>Pressure & load testing for verified performance</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-slate-700">
                  <div className="text-xs text-gray-500 dark:text-gray-400">Estimated turnaround</div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100 mt-1">Same day / 1–3 days</div>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-slate-700">
                  <div className="text-xs text-gray-500 dark:text-gray-400">Quick contact</div>
                  <a href="tel:+919998748236" className="font-semibold text-gray-900 dark:text-gray-100 inline-block mt-1">+91 999 874 8236</a>

                  <div className="mt-4 flex gap-3">
                    <a
                      href="#contact"
                      onClick={() => {
                        try { localStorage.setItem('prefillService', service.title) } catch (err) {}
                        onClose?.()
                        // scroll if contact exists (page-dependent)
                        const el = document.getElementById('contact')
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 text-black rounded-md font-medium shadow-sm hover:scale-[1.01] transition"
                    >
                      Book Service
                    </a>

                    <button
                      onClick={() => {
                        // open whatsapp as quick contact
                        const phone = '919998748236'
                        const msg = encodeURIComponent(`Hello Varun Hydraulics — I'm interested in "${service.title}"`)
                        window.open(`https://wa.me/${phone}?text=${msg}`, '_blank')
                      }}
                      className="inline-flex items-center gap-2 px-3 py-2 border rounded-md text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
                    >
                      Message
                    </button>
                  </div>
                </div>

                {/* optional extra: small note */}
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  We provide follow-up support after every repair — satisfaction guaranteed.
                </div>
              </div>
            </div>

            {/* Actions row */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-md border border-gray-200 dark:border-slate-700 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
