import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import ServiceIcon from './ServiceIcon'

export default function ServiceCard({ service, onViewDetails, onEnquire }) {
  const navigate = useNavigate()

  function handleBook(e) {
    // save prefill for ContactForm (fallback)
    try { localStorage.setItem('prefillService', service.title) } catch (err) {}

    // if #contact exists on this page, scroll to it
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    // otherwise navigate to /contact and pass state so Contact page can prefill immediately
    navigate(ROUTES.CONTACT, { state: { prefillService: service.title } })
  }

  return (
    <article
      className="relative group bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm hover:shadow-xl transform hover:-translate-y-1.5 transition-all duration-300"
      aria-labelledby={`service-${service.id}`}
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/10 dark:to-yellow-900/5 flex items-center justify-center text-yellow-600 group-hover:scale-110 transition-transform duration-300">
            <ServiceIcon name={service.icon} />
          </div>
        </div>

        {/* Title + short desc */}
        <div className="flex-1 min-w-0">
          <h3
            id={`service-${service.id}`}
            className="text-lg font-bold text-gray-900 dark:text-gray-100 tracking-tight"
          >
            {service.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
            {service.desc}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {/* View details */}
          <button
            onClick={() => onViewDetails(service.id)}
            className="inline-flex items-center gap-2 px-3 py-2 bg-black text-white rounded-md text-sm font-medium shadow-sm hover:opacity-95 transition"
            aria-label={`View details for ${service.title}`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H3m12 0l-6 6m6-6l-6-6"
              />
            </svg>
            View
          </button>

          {/* Enquire */}
          <button
            onClick={() => onEnquire(service)}
            className="inline-flex items-center gap-2 px-3 py-2 bg-yellow-500 text-black rounded-md text-sm font-semibold hover:bg-yellow-400 dark:hover:bg-yellow-600 transition"
            aria-label={`Enquire about ${service.title}`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.688 1.688M4 20l4.243-4.243M5.121 17.657L17.657 5.121a3 3 0 014.243 4.243L9.364 21.9a3 3 0 01-1.414.793l-4.95 1.1a.5.5 0 01-.607-.607l1.1-4.95a3 3 0 01.793-1.414z"
              />
            </svg>
            Enquire
          </button>
        </div>

        {/* Book CTA (smart) */}
        <button
          onClick={handleBook}
          className="inline-flex items-center text-sm font-medium text-yellow-600 hover:text-yellow-700 dark:hover:text-yellow-400 transition bg-transparent"
          aria-label={`Book ${service.title}`}
        >
          Book this service
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Hover border highlight */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-400/60 transition-all pointer-events-none" />
    </article>
  )
}
