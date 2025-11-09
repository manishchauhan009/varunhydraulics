import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ContactForm from '../components/sections/ContactForm'

export default function Contact() {
  const location = useLocation()
  const prefillFromState = location?.state?.prefillService || null

  useEffect(() => {
    // Optional: clear history state or perform side-effects
    // If you want to remove the state after reading (so back navigation doesn't reuse it),
    // you can do that here using navigate replace — omitted to keep this simple.
  }, [])

  // helper to scroll to the contact form on this page
  function scrollToContact(e) {
    e?.preventDefault()
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100">
      {/* ===== Page Hero ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-90" />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Get in Touch</h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
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
            <p className="text-gray-700 mb-6">
              We’re located in Vapi and provide forklift and hydraulic services across Gujarat. You can call us
              directly, send an email, or fill out the form — we’ll respond promptly.
            </p>

            <div className="space-y-5 text-gray-800">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
                  📞
                </span>
                <div>
                  <div className="font-semibold text-sm text-gray-600">Phone</div>
                  <a href="tel:+919998748236" className="text-base font-medium">
                    +91 999 874 4826
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
                  📧
                </span>
                <div>
                  <div className="font-semibold text-sm text-gray-600">Email</div>
                  <a
                    href="mailto:info@varunhydraulics.in"
                    className="text-base font-medium"
                  >
                    varunhydraulics01@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
                  📍
                </span>
                <div>
                  <div className="font-semibold text-sm text-gray-600">Address</div>
                  <p className="text-base font-medium">
                    Varun Hydraulics, KK Compound Amar Nagar, Chanod ,<br /> Vapi-396195
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
                  ⏰
                </span>
                <div>
                  <div className="font-semibold text-sm text-gray-600">Working Hours</div>
                  <p className="text-base font-medium">Mon–Sat: 9:00 AM – 7:00 PM</p>
                  <p className="text-base font-medium text-gray-500">Sunday: Closed</p>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.4192426928854!2d73.18121851538318!3d22.309425985322853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8b30f3d22e5%3A0x7308d6a85927d89c!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1698858039282!5m2!1sen!2sin"
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
          <h2 className="text-3xl font-extrabold text-black mb-3">
            Need urgent hydraulic or forklift support?
          </h2>
          <p className="text-black/80 max-w-2xl mx-auto">
            Call us or send a quick service request — we respond fast.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+919998748236"
              className="px-6 py-3 bg-black text-white rounded-lg font-semibold"
            >
              Call Now
            </a>
            <button
              onClick={scrollToContact}
              className="px-6 py-3 bg-white text-black border border-black rounded-lg font-semibold"
            >
              Book Service
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
