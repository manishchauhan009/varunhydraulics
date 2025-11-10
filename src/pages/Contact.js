// src/pages/Contact.jsx
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ContactForm from '../components/sections/ContactForm'
import Button from '../components/ui/Button'
import { SITE_CONFIG } from '../constants/siteConfig'

export default function Contact() {
  const location = useLocation()
  const prefillFromState = location?.state?.prefillService || null

  useEffect(() => {
    // optional: side-effects after mount
  }, [])

  // helper to scroll to the contact form on this page
  function scrollToContact(e) {
    e?.preventDefault()
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const phoneLink = SITE_CONFIG?.contact?.phoneLink || '919998748236'
  const phoneDisplay = SITE_CONFIG?.contact?.phone || '+91 999 874 8236'
  const email = SITE_CONFIG?.contact?.email || 'varunhydraulics01@gmail.com'
  const address = SITE_CONFIG?.contact?.address || 'KK Compound, Amar Nagar, Chanod, Vapi, Gujarat'
  const mapUrl = SITE_CONFIG?.mapUrl || 'https://www.google.com/maps?q=Varun+Hydraulics+Vapi'
  const businessHours = SITE_CONFIG?.businessHours || {
    monday: '9:00 AM – 6:00 PM',
    saturday: '9:00 AM – 2:00 PM',
    sunday: 'Closed',
  }

  return (
    <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100">
      {/* ===== Page Hero ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-90" />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-black dark:text-white">Get in Touch</h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90 text-black/80 dark:text-white">
            Need a repair, have a question, or want a quick quote? Reach out — our team is ready to help.
          </p>
        </div>
      </section>

      {/* ===== Contact Info & Form ===== */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We’re located in Vapi and provide forklift and hydraulic services across Gujarat. You can call us
              directly, send an email, or fill out the form — we’ll respond promptly.
            </p>

            <div className="space-y-5 text-gray-800">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
                  📞
                </span>
                <div>
                  <div className="font-semibold text-sm text-gray-900 dark:text-gray-100">Phone</div>
                  <a href={`tel:+${phoneLink}`} className="text-base font-medium text-gray-700 dark:text-gray-300">
                    {phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
                  📧
                </span>
                <div>
                  <div className="font-semibold text-sm text-gray-900 dark:text-gray-100">Email</div>
                  <a
                    href={`mailto:${email}`}
                    className="text-base font-medium text-gray-700 dark:text-gray-300"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
                  📍
                </span>
                <div>
                  <div className="font-semibold text-sm text-gray-900 dark:text-gray-100">Address</div>
                  <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                    {address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
                  ⏰
                </span>
                <div className='text-gray-700 dark:text-gray-300'>
                  <div className="font-semibold text-sm text-gray-900 dark:text-gray-100">Working Hours</div>
                  <div className="text-base font-medium text-gray-700 dark:text-gray-300">
                    <div>Mon: {businessHours.monday}</div>
                    <div>Tue: {businessHours.tuesday || businessHours.monday}</div>
                    <div>Wed: {businessHours.wednesday || businessHours.monday}</div>
                    <div>Thu: {businessHours.thursday || businessHours.monday}</div>
                    <div>Fri: {businessHours.friday || businessHours.monday}</div>
                    <div>Sat: {businessHours.saturday}</div>
                    <div className="text-gray-500">Sun: {businessHours.sunday}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">
              Fill in the form below and we’ll get back to you as soon as possible.
            </p>
            <div id="contact" className="rounded-xl shadow-sm">
              {/* pass initialService prop so form pre-fills immediately when navigated from a service */}
              <ContactForm initialService={prefillFromState} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Map Section ===== */}
      <section className="relative h-96 bg-gray-100 dark:bg-slate-800">
        <iframe
          title="Varun Hydraulics Location"
          src={`${mapUrl}&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-t-2xl"
        />
      </section>

      {/* ===== CTA ===== */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl shadow-lg py-12 px-6">
          <h2 className="text-3xl font-extrabold text-black mb-3 dark:text-white ">
            Need urgent hydraulic or forklift support?
          </h2>
          <p className="text-black/80 max-w-2xl mx-auto">
            Call us or send a quick service request — we respond fast.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">

            <Button
              onClick={(e) => scrollToContact(e)}
              variant="secondary"
              size="lg"
              className="px-6 py-3"
            >
              Book Service
            </Button>
            <a
              href={`tel:${phoneLink}`}
              className="px-6 py-3 bg-white text-black border border-black dark:border-slate-700 rounded-lg font-semibold inline-flex items-center justify-center"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
