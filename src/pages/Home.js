// src/pages/Home.jsx
import React from 'react'
import Hero from '../components/sections/Hero'
import ServicesGrid from '../components/sections/ServicesGrid'
import ContactForm from '../components/sections/ContactForm'
import Clients from '../components/sections/Clients'

export default function Home() {
  // smooth scroll helper used by CTAs on this page
  function scrollToContact(e) {
    if (e) e.preventDefault()
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100">
      {/* Page container with top padding to account for sticky navbar */}
      <div className="container mx-auto px-4 pt-8 space-y-16">
        {/* Hero (large, attention-grabbing) */}
        <Hero />

        {/* Services overview */}
        <section aria-labelledby="services-heading" className="pt-6">
          <div>
            <ServicesGrid />
          </div>
        </section>

        {/* Clients / logos */}
        <Clients
          title="Trusted by local businesses"
          subtitle="We service warehouses, manufacturers and logistics teams across the region."
          autoplay
          autoplayDelay={3500}
        />

        {/* Enhanced about preview */}
        <section
          id="about-preview"
          className="bg-gradient-to-tr from-white to-yellow-50 dark:from-slate-800 dark:to-slate-900 border border-gray-100 dark:border-slate-700 rounded-2xl p-6 md:p-10 shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold">About Varun Hydraulics</h3>
              <p className="mt-3 text-gray-700 dark:text-gray-300 max-w-xl">
                Varun Hydraulics has grown from humble beginnings. It all started in 2006 as <span className="font-semibold text-yellow-600">Lucky Motors</span> — a small two-wheeler repair shop driven by passion and hard work.
                Over time, we expanded into four-wheeler services and built a strong foundation of technical expertise and trust.
                In 2020, we rebranded as <span className="font-semibold text-yellow-600">Varun Hydraulics</span>, focusing on forklift and hydraulic system repairs.
                What began as a small workshop now stands as a specialized service partner for industries that rely on reliable, efficient, and precise hydraulic solutions.
              </p>

              <ul className="mt-4 text-sm text-gray-600 dark:text-gray-300 space-y-2 list-inside list-disc max-w-xl">
                <li>Experienced technicians for forklift & hydraulic systems</li>
                <li>On-site repairs and preventive maintenance</li>
                <li>Clear estimates & honest recommendations</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3 items-center">
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg font-medium shadow-sm hover:opacity-95 transition"
                >
                  Learn more
                </a>
                <button
                  onClick={scrollToContact}
                  className="ml-0 md:ml-3 inline-flex items-center px-4 py-2 border rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-slate-700 transition"
                >
                  Book service
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md relative">
                <img
                  src="/assets/about-workshop.jpg"
                  alt="Workshop"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />

                {/* subtle badge */}
                <div className="absolute -top-4 -left-4 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-xl px-3 py-2 shadow-md flex items-center gap-3">
                  <svg className="w-5 h-5 text-yellow-600" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z" fill="currentColor" />
                  </svg>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Fast response</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Same-day visits where available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Booking */}
        <section id="contact" className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h2 className="text-2xl font-bold">Contact & Booking</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              We offer on-site service across the city. Call or send a request and our team will respond quickly.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+919998748236" className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg">
                Call Now
              </a>
              <button onClick={scrollToContact} className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 text-black rounded-lg">
                Book Service
              </button>
            </div>
          </div>

          <div className="rounded-2xl shadow-sm bg-white dark:bg-slate-800  dark:border-slate-700 mb-6">
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  )
}