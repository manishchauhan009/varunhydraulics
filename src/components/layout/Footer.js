import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-slate-700 py-6 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Varun Hydraulics</div>
    </footer>
  )
}
