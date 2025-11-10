// src/components/services/ServiceCard.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import ServiceIcon from './ServiceIcon'
import Button from '../ui/Button' // <- reused Button

export default function ServiceCard({ service, onViewDetails, onEnquire }) {
  const navigate = useNavigate()

  function handleBook(e) {
    e?.preventDefault()
    try { localStorage.setItem('prefillService', service.title) } catch (err) {}
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    navigate(ROUTES.CONTACT, { state: { prefillService: service.title } })
  }

  return (
    <article
      aria-labelledby={`service-${service.id}`}
      className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-5 shadow-sm hover:shadow-md transition"
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className="flex-shrink-0 w-12 h-12 rounded-md flex items-center justify-center
                     bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700"
        >
          <ServiceIcon name={service.icon} className="w-6 h-6 text-gray-800 dark:text-gray-100" />
        </div>

        <div className="flex-1 min-w-0">
          <h3
            id={`service-${service.id}`}
            className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate"
            title={service.title}
          >
            {service.title}
          </h3>

          <p className="mt-1 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
            {service.desc}
          </p>

          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {/* View (keeps original look via className override) */}
              <Button
                as="button"
                variant="outline"
                size="sm"
                onClick={() => onViewDetails(service.id)}
                aria-label={`View details for ${service.title}`}
                className="text-xs px-3 py-1 rounded-md bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-100 hover:bg-gray-200 transition"
              >
                View
              </Button>

              {/* Enquire (keeps original look via className override) */}
              <Button
                as="button"
                variant="ghost"
                size="sm"
                onClick={() => onEnquire(service)}
                aria-label={`Enquire about ${service.title}`}
                className="text-xs px-3 py-1 rounded-md bg-transparent border border-yellow-500 text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/10 transition"
              >
                Enquire
              </Button>
            </div>

            <button
              onClick={handleBook}
              className="text-xs font-medium text-gray-700 dark:text-gray-200 hover:underline"
              aria-label={`Book ${service.title}`}
            >
              Book this service →
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
