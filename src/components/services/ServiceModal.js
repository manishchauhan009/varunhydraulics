import React from 'react'
import ServiceIcon from './ServiceIcon'

export default function ServiceModal({ service, onClose }) {
  if (!service) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-yellow-50 flex items-center justify-center text-yellow-600">
                <ServiceIcon name={service.icon} className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{service.desc}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="ml-4 rounded-full p-2 hover:bg-gray-100 transition"
              aria-label="Close details"
            >
              <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-900">What we do</h4>
              <p className="mt-2 text-sm text-gray-600">{service.details}</p>

              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• On-site inspection & estimate</li>
                <li>• Parts replacement where applicable</li>
                <li>• Pressure & load testing</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-500">Estimated turnaround</div>
                <div className="font-semibold text-gray-900 mt-1">Same day / 1–3 days</div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-500">Quick contact</div>
                <a href="tel:+9198XXXXXXX" className="font-semibold text-gray-900">+91 98X XXX XXXX</a>
                <div className="mt-2">
                  <a
                    href="#contact"
                    onClick={() => localStorage.setItem('prefillService', service.title)}
                    className="inline-block mt-3 px-4 py-2 bg-yellow-600 text-black rounded-md font-medium"
                  >
                    Book Service
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button onClick={onClose} className="px-4 py-2 rounded-md border hover:bg-gray-50">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}
