// src/pages/Services.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ServicesGrid from '../components/sections/ServicesGrid'
import { ROUTES } from '../constants/routes' // make sure ROUTES.CONTACT exists

export default function Services() {
  const navigate = useNavigate()

  function scrollToContact(e, prefillService = null) {
    if (e) e.preventDefault()

    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      if (prefillService) {
        try { localStorage.setItem('prefillService', prefillService) } catch (err) {}
      }
      return
    }
    const state = prefillService ? { prefillService } : undefined
    navigate(ROUTES.CONTACT, { state })
  }

  return (
    <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* ===== Page Hero Section ===== */}
      <section className="relative overflow-hidden">
        {/* decorative gradient: lighter in light mode, subtle in dark mode */}
        <div className="absolute inset-0
                        bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-95
                        " />

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-black dark:text-white">Our Services</h1>
          <p className="max-w-2xl mx-auto text-lg text-black/75 dark:text-gray-200/90">
            Reliable, transparent, and efficient — we specialize in forklift and hydraulic
            system repair, rebuild, and maintenance.
          </p>
        </div>

        {/* subtle background pattern that adapts to color mode */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10 text-white dark:text-white/10"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 800 400"
          aria-hidden
        >
          <g fill="none" stroke="currentColor" strokeWidth="0.5">
            <path d="M0 200 Q400 400 800 200 Q400 0 0 200Z" />
          </g>
        </svg>
      </section>

      {/* ===== Company Overview Section ===== */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Comprehensive Forklift & Hydraulic Solutions
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              At <span className="font-semibold text-yellow-600 dark:text-yellow-400">Varun Hydraulics</span>, we focus on
              restoring performance and extending the life of your equipment. Our trained technicians
              use advanced tools and genuine components wherever possible.
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
              <li>Trained technicians for all major forklift brands</li>
              <li>On-site service availability to reduce downtime</li>
              <li>Comprehensive hydraulic system diagnostics</li>
              <li>Flexible maintenance contracts for long-term reliability</li>
            </ul>
          </div>

          <div className="relative">
            <img
              src="/assets/service-team.jpg"
              alt="Technicians working on forklift"
              className="rounded-2xl shadow-lg object-cover w-full h-80"
            />
            <div className="absolute -bottom-5 -right-5 bg-white dark:bg-slate-800 shadow-lg rounded-xl p-4 text-sm border border-gray-100 dark:border-slate-700">
              <div className="font-bold text-yellow-600 dark:text-yellow-400 text-lg">15+</div>
              <div className="text-gray-800 dark:text-gray-200">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services Grid Section ===== */}
      <section className="bg-gray-50 dark:bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">What We Offer</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            From emergency repairs to long-term maintenance, choose the service that fits your operational needs.
          </p>

          <ServicesGrid onBook={(serviceTitle) => scrollToContact(null, serviceTitle)} />
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="rounded-2xl shadow-lg py-12 px-6 bg-gradient-to-r from-yellow-400 to-yellow-600  ">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black dark:text-white">
            Need Help With Your Forklift or Hydraulic System?
          </h2>
          <p className="mt-4 text-black/80 dark:text-gray-200 max-w-2xl mx-auto">
            Get in touch with our expert team for fast diagnostics and reliable on-site repair service.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={(e) => scrollToContact(e)}
              className="px-6 py-3 bg-white dark:bg-slate-900 text-black dark:text-white border border-black dark:border-slate-700 rounded-lg font-semibold hover:shadow-md transition"
            >
              Book Service
            </button>
            <a
              href="tel:+9198XXXXXXX"
              className="px-6 py-3 bg-white dark:bg-slate-900 text-black dark:text-white border border-black dark:border-slate-700 rounded-lg font-semibold hover:bg-black hover:text-white transition"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
