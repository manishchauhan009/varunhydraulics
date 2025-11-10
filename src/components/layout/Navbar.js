// src/components/layout/Navbar.jsx
import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import ThemeToggle from '../ui/ThemeToggle'
import Button from '../ui/Button'               // <-- new
import { SITE_CONFIG } from '../../constants/siteConfig' // <-- new

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  // refs for focus management
  const hamburgerRef = useRef(null)
  const firstMobileLinkRef = useRef(null)
  const mobileMenuRef = useRef(null)

  function handleBook(e) {
    e?.preventDefault()
    setOpen(false)
    navigate(ROUTES.CONTACT)
  }

  // when menu opens, move focus to the first mobile link (or the menu container)
  useEffect(() => {
    if (open) {
      // small timeout to ensure menu is expanded in DOM (optional)
      const id = setTimeout(() => {
        if (firstMobileLinkRef.current) {
          firstMobileLinkRef.current.focus()
        } else if (mobileMenuRef.current) {
          mobileMenuRef.current.focus()
        }
      }, 50)
      return () => clearTimeout(id)
    } else {
      // when closed, return focus to hamburger button so keyboard users aren't lost
      if (hamburgerRef.current) hamburgerRef.current.focus()
    }
  }, [open])

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Theme toggle + Brand */}
          <div className="flex items-center gap-3">
            <Link to={ROUTES.HOME} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-sm">
                <span className="font-bold text-black">{SITE_CONFIG.brandShort}</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-4">{SITE_CONFIG.brandName}</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">{SITE_CONFIG.tagline}</div>
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to={ROUTES.SERVICES}>Services</NavLink>
            <NavLink to={ROUTES.ABOUT}>About</NavLink>
            <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* Book Service -> using Button with same classes as before */}
            <Button
              as="button"
              variant="primary"
              onClick={handleBook}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 text-black rounded-lg font-medium shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            >
              Book Service
            </Button>

            {/* Theme toggle (desktop) */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                ref={hamburgerRef}
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label="Toggle menu"
                className="inline-flex md:hidden items-center justify-center w-10 h-10 rounded-lg border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition"
              >
                <HamburgerIcon open={open} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`md:hidden transform origin-top transition-all duration-200 ease-out overflow-hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        // make menu focusable container as fallback
        tabIndex={-1}
      >
        <div className="container mx-auto px-4 pb-6">
          <div className="mt-4 p-4 bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-gray-100 dark:border-slate-800">
            <nav className="flex flex-col gap-1">
              {/* Give the first link a ref so we can focus it on open */}
              <MobileLink ref={firstMobileLinkRef} to={ROUTES.SERVICES} onClick={() => setOpen(false)}>Services</MobileLink>
              <MobileLink to={ROUTES.ABOUT} onClick={() => setOpen(false)}>About</MobileLink>
              <MobileLink to={ROUTES.CONTACT} onClick={() => setOpen(false)}>Contact</MobileLink>
            </nav>

            <div className="mt-4 border-t border-gray-100 dark:border-slate-800 pt-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Emergency Line</div>
                {/* SITE_CONFIG.contact.phone available in your config */}
                <a href={`tel:${SITE_CONFIG.contact.phoneLink}`} className="font-semibold text-gray-900 dark:text-gray-100">{SITE_CONFIG.contact.phone}</a>
              </div>

              <Button
                as="button"
                variant="secondary"
                onClick={handleBook}
                className="inline-flex items-center px-3 py-2 bg-black text-white rounded-lg hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              >
                Request
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

/* small helpers */
function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="relative text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-yellow-600 transition"
    >
      {children}
    </Link>
  )
}

/* Forward ref so parent can focus first link */
const MobileLink = React.forwardRef(function MobileLink({ to, children, onClick }, ref) {
  return (
    <Link
      ref={ref}
      to={to}
      onClick={onClick}
      className="block w-full text-left px-3 py-2 rounded hover:bg-gray-50 dark:hover:bg-slate-800 transition text-gray-800 dark:text-gray-200 font-medium"
    >
      {children}
    </Link>
  )
})

function HamburgerIcon({ open }) {
  return (
    <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
