// src/components/ui/ThemeToggle.jsx
import React, { useEffect, useState } from 'react'

const STORAGE_KEY = 'vh_theme'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // initial: check localStorage, then system preference, else light
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'dark' || (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }, [])

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    if (next === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    try { localStorage.setItem(STORAGE_KEY, next) } catch (e) {}
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:scale-[1.03] transition"
    >
      {theme === 'dark' ? (
        // sun (light) icon in dark mode
        <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none"><path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" /></svg>
      ) : (
        // moon icon in light mode
        <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )}
    </button>
  )
}
