import React from 'react'

export default function ServiceIcon({ name, className = 'w-6 h-6' }) {
  switch (name) {
    case 'wrench':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M14 3l7 7-4 4-7-7V3zM3 21a9 9 0 0111-11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'pump':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="7" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M21 11v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="21" cy="9" r="1" fill="currentColor" />
        </svg>
      )
    case 'cylinder':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 6v12" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 'calendar':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M16 3v4M8 3v4M3 11h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'flash':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    default:
      return <div className={className} />
  }
}
