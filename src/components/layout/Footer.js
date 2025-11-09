// src/components/layout/Footer.jsx
import React from "react"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Varun Hydraulics</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
            Reliable forklift & hydraulic repair — fast diagnostics, honest quotes and on-site repairs that keep
            operations running smoothly.
          </p>

          <div className="mt-4 flex items-center justify-center md:justify-start gap-3">
            <a
              href="tel:+919998748236"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-yellow-600 text-black font-medium shadow-sm hover:shadow-md transition"
              aria-label="Call Varun Hydraulics"
            >
              <FaPhoneAlt /> <span className="text-sm">+91 999 874 8236</span>
            </a>

            <a
              href="mailto:info@varunhydraulics.in"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:text-gray-200 dark:border-slate-700 text-sm hover:bg-gray-50 dark:hover:bg-slate-800 transition"
              aria-label="Email Varun Hydraulics"
            >
              <FaEnvelope /> Email
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 transition">Home</a>
            </li>
            <li>
              <a href="/services" className="dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 transition">Services</a>
            </li>
            <li>
              <a href="/about" className="dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 transition">About Us</a>
            </li>
            <li>
              <a href="/contact" className="dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Contact & Location</h4>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start justify-center md:justify-start gap-3">
              <span className="mt-0.5 text-yellow-600"><FaMapMarkerAlt /></span>
              <div>
                <div className="font-medium text-gray-900 dark:text-gray-100">KK Compound, Amar Nagar, Chanod</div>
                <div className="text-xs text-gray-500 dark:text-gray-300">Vapi, Gujarat</div>
              </div>
            </li>

            <li className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-yellow-600"><FaPhoneAlt /></span>
              <a href="tel:+919998748236" className="hover:text-yellow-600 dark:hover:text-yellow-400 transition">+91 999 874 8236</a>
            </li>

            <li className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-yellow-600"><FaEnvelope /></span>
              <a href="mailto:info@varunhydraulics.in" className="hover:text-yellow-600 dark:hover:text-yellow-400 transition">info@varunhydraulics.in</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 dark:border-slate-800" />

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
        <p className="text-center sm:text-left">© {new Date().getFullYear()} Varun Hydraulics. All rights reserved.</p>

        <div className="flex items-center gap-4">
          {/* Optional social icons - uncomment & wire URLs */}
          {/* <a href="#" aria-label="Facebook" className="text-gray-600 dark:text-gray-300 hover:text-yellow-600 transition"><FaFacebookF/></a>
          <a href="#" aria-label="Instagram" className="text-gray-600 dark:text-gray-300 hover:text-yellow-600 transition"><FaInstagram/></a>
          <a href="#" aria-label="LinkedIn" className="text-gray-600 dark:text-gray-300 hover:text-yellow-600 transition"><FaLinkedinIn/></a> */}

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md transition"
          >
            <FaArrowUp /> Top
          </button>
        </div>
      </div>
     
    </footer>
  )
}
