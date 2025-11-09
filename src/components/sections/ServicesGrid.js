import React, { useState } from 'react'
import ServiceCard from '../services/ServiceCard'
import ServiceModal from '../services/ServiceModal'
import EnquiryModal from '../services/EnquiryModal'

const SERVICES = [
  { id: 1, title: 'Forklift Repair', desc: 'Inspection, parts replacement & safety checks for major forklift brands.', details: 'Complete diagnostic, safety checks, brake & mast adjustments, routine parts replacement and test runs to ensure safe operation.', icon: 'wrench' },
  { id: 2, title: 'Hydraulic Pump Repair', desc: 'Diagnose & repair pumps, replacement if required, testing under load.', details: 'Pump diagnosis, seal & bearing replacement, flow testing and bench testing to confirm pressure and performance.', icon: 'pump' },
  { id: 3, title: 'Cylinder Rebuild', desc: 'Seal replacement, rod repair, and pressure testing to factory specs.', details: 'Full cylinder strip & rebuild, chrome rod repair/polish, new seals, and pressure testing to ensure leak-free operation.', icon: 'cylinder' },
  { id: 4, title: 'Preventive Maintenance', desc: 'Planned maintenance contracts and on-site servicing to reduce downtime.', details: 'Tailored preventive schedules, parts inspection, fluid analysis, and maintenance logs to extend equipment lifetime.', icon: 'calendar' },
  { id: 5, title: 'Emergency On-site Service', desc: 'Rapid response team for critical breakdowns — trained technicians and spare parts.', details: 'Priority dispatch, on-site repairs, temporary workarounds to restore critical operation and follow-up permanent fixes.', icon: 'flash' },
]

export default function ServicesGrid() {
  const [activeDetail, setActiveDetail] = useState(null)
  const [activeEnquiry, setActiveEnquiry] = useState(null)

  const openDetails = (id) => setActiveDetail(id)
  const closeDetails = () => setActiveDetail(null)

  const openEnquiry = (service) => setActiveEnquiry(service)
  const closeEnquiry = () => setActiveEnquiry(null)

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const openWhatsApp = () => {
    const phone = '919998748236'
    const msg = encodeURIComponent('Hello Varun Hydraulics! I would like to know more about your services.')
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank')
  }

  return (
    <section id="services" className="py-14">
      <div className="container mx-auto px-4">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">Our Services</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 max-w-lg">
              Transparent, modular repair solutions — choose what fits your needs. Click <b>Enquire</b> to send a quick request.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* Book a Service CTA */}
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-full font-semibold shadow-sm hover:shadow-lg transition-transform hover:-translate-y-[2px]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9-7-9-7-9 7 9 7z" />
              </svg>
              Book a Service
            </button>

            {/* WhatsApp / Contact CTA */}
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-slate-600 rounded-full text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
            >
              <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 0 5.373 0 12a11.94 11.94 0 003.48 8.52L0 24l3.6-1.02A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.21-1.25-6.21-3.48-8.52z" />
                <path d="M17.3 14.2c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.78.98-.96 1.18-.17.2-.34.22-.64.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.61.13-.12.3-.34.45-.5.15-.16.2-.28.3-.46.1-.17.05-.33-.02-.48-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.49-.67-.5l-.57-.01c-.2 0-.52.07-.8.33-.28.26-1.06 1.04-1.06 2.54 0 1.5 1.08 2.96 1.23 3.17.15.22 2.12 3.36 5.14 4.71 3.02 1.36 3.02.9 3.56.86.56-.04 1.78-.73 2.03-1.45.25-.72.25-1.34.18-1.46-.08-.12-.28-.2-.58-.35z" fill="#fff" />
              </svg>
              Get in Touch
            </button>
          </div>
        </div>

        {/* Service cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} service={s} onViewDetails={openDetails} onEnquire={openEnquiry} />
          ))}
        </div>
      </div>

      {/* Modals */}
      {activeDetail !== null && (
        <ServiceModal service={SERVICES.find((s) => s.id === activeDetail)} onClose={closeDetails} />
      )}
      {activeEnquiry && <EnquiryModal service={activeEnquiry} onClose={closeEnquiry} />}
    </section>
  )
}
