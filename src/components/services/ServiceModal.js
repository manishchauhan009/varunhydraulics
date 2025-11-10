// src/components/services/ServiceModal.jsx
import React, { useEffect, useRef } from 'react'
import ServiceIcon from './ServiceIcon'
import Button from '../ui/Button'
import { SITE_CONFIG } from '../../constants/siteConfig'

export default function ServiceModal({ service, onClose }) {
  const closeBtnRef = useRef(null)
  const dialogRef = useRef(null)
  const previouslyFocused = useRef(null)

  useEffect(() => {
    previouslyFocused.current = document.activeElement
    if (closeBtnRef.current) closeBtnRef.current.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
      // basic focus trap
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
        if (focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      try { previouslyFocused.current?.focus?.() } catch (err) { }
    }
  }, [onClose])

  function handleBackdropClick(e) {
    if (e.target === dialogRef.current) onClose?.()
  }

  if (!service) return null

  const phoneLink = SITE_CONFIG.contact.phoneLink
  const phoneDisplay = SITE_CONFIG.contact.phone
  const whatsapp = SITE_CONFIG.social.whatsapp || `https://wa.me/${phoneLink}`

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`service-modal-title-${service.id}`}
      onClick={handleBackdropClick}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />

      {/* Modal wrapper */}
      <div
        className="relative w-full md:w-[min(920px,96%)] mx-auto"
        style={{
          maxHeight: 'calc(100vh - 4rem)',
          display: 'flex',
          flexDirection: 'column',
          margin: '0 0.5rem',
        }}
      >
        {/* Card */}
        <div
          className="flex flex-col h-full bg-transparent rounded-2xl md:rounded-2xl overflow-hidden shadow-2xl mx-4 mb-4"
          style={{ height: '100%' }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 p-4 md:p-4 bg-gradient-to-r from-yellow-400 to-yellow-500">
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-lg bg-white/95 dark:bg-slate-800/80 flex items-center justify-center shadow-sm flex-shrink-0">
                <ServiceIcon name={service.icon} className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>

              <div className="min-w-0">
                <h3
                  id={`service-modal-title-${service.id}`}
                  className="text-lg md:text-xl font-extrabold text-black dark:text-white truncate"
                >
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-black/70 dark:text-white/80 max-w-xl truncate">
                  {service.desc}
                </p>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-3">
              {/* Call button */}
              <a
                href={`tel:${phoneLink}`}
                className="px-6 py-3 bg-white text-black border border-black dark:border-slate-700 rounded-lg font-semibold inline-flex items-center justify-center"
              >
                Call Now
              </a>

              {/* Close Button */}
              <Button
                ref={closeBtnRef}
                onClick={onClose}
                aria-label="Close details"
                variant="secondary"
                size="sm"
                className="w-10 h-10 p-0 rounded-lg"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>

          {/* Content */}
          <div
            className="bg-white dark:bg-slate-900 p-5 md:p-7 overflow-auto"
            style={{ maxHeight: 'calc(100vh - 120px)' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">What we do</h4>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.details}
                </p>

                <ul className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300">
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

              {/* Right column */}
              <div className="flex flex-col gap-4">
                <div className="p-3 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-slate-700">
                  <div className="text-xs text-gray-500 dark:text-gray-400">Estimated turnaround</div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100 mt-1">Same day / 1–3 days</div>
                </div>

                <div className="p-3 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-slate-700">
                  <div className="text-xs text-gray-500 dark:text-gray-400">Quick contact</div>
                  <a href={`tel:+${phoneLink}`} className="font-semibold text-gray-900 dark:text-gray-100 inline-block mt-1">
                    {phoneDisplay}
                  </a>

                  <div className="mt-3 flex flex-col sm:flex-row gap-3">
                    <Button
                      as="a"
                      href="#contact"
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto"
                      onClick={() => {
                        try { localStorage.setItem('prefillService', service.title) } catch (err) { }
                        onClose?.()
                        const el = document.getElementById('contact')
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                      }}
                    >
                      Book Service
                    </Button>

                    <Button
                      as="button"
                      variant="outline"
                      size="md"
                      className="w-full sm:w-auto"
                      onClick={() => {
                        const msg = encodeURIComponent(`Hello Varun Hydraulics — I'm interested in "${service.title}"`)
                        window.open(`${whatsapp}?text=${msg}`, '_blank')
                      }}
                    >
                      Message
                    </Button>
                  </div>
                </div>

                <div className="text-xs text-gray-500 dark:text-gray-400">
                  We provide follow-up support after every repair — satisfaction guaranteed.
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-5 flex flex-col sm:flex-row justify-end gap-3">
              <Button
                onClick={onClose}
                variant="outline"
                size="md"
                className="w-full sm:w-auto"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
