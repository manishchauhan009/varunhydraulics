import React from 'react'
import { useTheme } from '../../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="p-2 rounded-md border hover:bg-gray-100 dark:hover:bg-slate-800 transition"
    >
      {isDark ? (
        // sun icon when dark (to switch to light)
        <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none">
          <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      ) : (
        // moon icon when light (to switch to dark)
        <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="none">
          <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}
