// src/components/services/ServiceIcon.jsx
import React from 'react'

/**
 * ServiceIcon
 * - name: one of the service keys (wrench, settings, battery, truck, pump, cylinder,
 *         link, sliders, calendar, flash, toolbox, hammer, droplet, package, clipboard)
 * - className: tailwind classes for size and color, e.g. "w-6 h-6 text-gray-700 dark:text-gray-100"
 */
export default function ServiceIcon({ name, className = 'w-6 h-6 text-gray-700 dark:text-gray-100' }) {
  const c = className

  switch (name) {
    case 'wrench':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M21 5.5l-3.5 3.5a4 4 0 01-5.66 0L9 6.66" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 21a9 9 0 0112-12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )

    case 'settings':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.4 15a1 1 0 00.2 1.1l.2.2a1 1 0 010 1.4l-1 1a1 1 0 01-1.4 0l-.2-.2a1 1 0 00-1.1-.2 1 1 0 00-.7.9V20a1 1 0 01-1 1h-1a1 1 0 01-1-1v-.2a1 1 0 00-.7-.9 1 1 0 00-1.1.2l-.2.2a1 1 0 01-1.4 0l-1-1a1 1 0 010-1.4l.2-.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )

    case 'battery':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="2" y="6.5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M22 10v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )

    case 'truck':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 7h11v8H3z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 12h4l3 3v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="7.5" cy="18.5" r="1.5" fill="currentColor"/>
          <circle cx="18.5" cy="18.5" r="1.5" fill="currentColor"/>
        </svg>
      )

    case 'pump':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="7" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M21 11v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          <circle cx="21" cy="9" r="1.2" fill="currentColor"/>
        </svg>
      )

    case 'cylinder':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <ellipse cx="12" cy="6.5" rx="6" ry="2" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M6 6.5v11c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2v-11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )

    case 'link':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M10 14a4 4 0 005.66 0l2.12-2.12a4 4 0 00-5.66-5.66L10 8.34" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 10a4 4 0 00-5.66 0L6.22 12.12a4 4 0 005.66 5.66L14 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )

    case 'sliders':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 6h8M4 12h12M4 18h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="14" cy="6" r="1.4" fill="currentColor"/>
          <circle cx="12" cy="12" r="1.4" fill="currentColor"/>
          <circle cx="7" cy="18" r="1.4" fill="currentColor"/>
        </svg>
      )

    case 'calendar':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      )

    case 'flash':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )

    case 'toolbox':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="7" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )

    case 'hammer':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M14 3l7 7-5 5-7-7 5-5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 14l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )

    case 'droplet':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 3s6 6.5 6 10a6 6 0 11-12 0c0-3.5 6-10 6-10z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )

    case 'package':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M21 16V8a2 2 0 00-1-1.73L13 2a2 2 0 00-2 0L4 6.27A2 2 0 003 8v8a2 2 0 001 1.73L11 22a2 2 0 002 0l8-4.27A2 2 0 0021 16z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.27 6.96L12 11l8.73-4.04" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )

    case 'clipboard':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M9 2h6a2 2 0 012 2v2H7V4a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="5" y="6" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )

    default:
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/>
        </svg>
      )
  }
}
