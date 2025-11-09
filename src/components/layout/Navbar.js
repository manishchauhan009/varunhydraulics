import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import ThemeToggle from '../ui/ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
   <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
           <ThemeToggle />
          {/* Brand */}
          <Link to={ROUTES.HOME} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-sm">
              {/* simple logo initials */}
              <span className="font-bold text-black">VH</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold leading-4">Varun Hydraulics</div>
              <div className="text-xs text-gray-600">Forklift & Hydraulic Service</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to={ROUTES.SERVICES}>Services</NavLink>
            <NavLink to={ROUTES.ABOUT}>About</NavLink>
            <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
          </nav>

          {/* Right: CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 text-black rounded-lg font-medium shadow-sm hover:shadow-md transition"
            >
              Book Service
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="inline-flex md:hidden items-center justify-center w-10 h-10 rounded-lg border hover:bg-gray-50 transition"
            >
              <HamburgerIcon open={open} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (slide-down) */}
      <div
        className={`md:hidden transform origin-top transition-all duration-250 ease-out overflow-hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 pb-6">
          <div className="mt-4 p-4 bg-white rounded-lg shadow-lg border">
            <nav className="flex flex-col gap-3">
              <MobileLink to={ROUTES.SERVICES} onClick={() => setOpen(false)}>Services</MobileLink>
              <MobileLink to={ROUTES.ABOUT} onClick={() => setOpen(false)}>About</MobileLink>
              <MobileLink to={ROUTES.CONTACT} onClick={() => setOpen(false)}>Contact</MobileLink>
            </nav>

            <div className="mt-4 border-t pt-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500">Emergency Line</div>
                <a href="tel:+9198XXXXXXX" className="font-semibold text-gray-900">+91 98X XXX XXXX</a>
              </div>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center px-3 py-2 bg-black text-white rounded-lg"
              >
                Request
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

/* ---------- small helper components ---------- */

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="relative text-sm text-gray-700 hover:text-yellow-600 transition font-medium"
    >
      {children}
    </Link>
  )
}

function MobileLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block w-full text-left px-3 py-2 rounded hover:bg-gray-50 transition text-gray-800 font-medium"
    >
      {children}
    </Link>
  )
}

function HamburgerIcon({ open }) {
  return (
    <svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="none" aria-hidden>
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
