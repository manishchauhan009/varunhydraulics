// src/components/sections/ServicesGrid.jsx
import React, { useState } from 'react'
import ServiceCard from '../services/ServiceCard'
import ServiceModal from '../services/ServiceModal'
import EnquiryModal from '../services/EnquiryModal'
import Button from '../ui/Button'
import { SITE_CONFIG } from '../../constants/siteConfig'

const SERVICES = [
  // 🏗️ Forklift Services
  {
    id: 1,
    title: 'Forklift Repair & Overhaul',
    desc: 'Full-service forklift repairs including diagnostics, part replacement, and safety checks for all major brands.',
    details:
      'We specialize in engine tuning, brake system repair, mast & hydraulic overhaul, and load testing to ensure optimal forklift performance and operator safety.',
    icon: 'wrench',
  },
  {
    id: 2,
    title: 'Forklift Engine & Transmission Service',
    desc: 'Complete engine and transmission rebuilds, oil changes, and gear calibration.',
    details:
      'Our experts service diesel, electric, and LPG forklifts — including clutch adjustments, fluid replacement, and gearbox repair.',
    icon: 'settings',
  },
  {
    id: 3,
    title: 'Forklift Electrical & Battery System',
    desc: 'Troubleshooting and repair for electrical and battery-powered forklifts.',
    details:
      'We inspect battery cells, chargers, wiring harnesses, sensors, alternators, and lighting systems to maintain peak electrical performance.',
    icon: 'battery',
  },
  {
    id: 4,
    title: 'Forklift Tyre & Brake Service',
    desc: 'Tyre replacement, brake pad changes, and safety brake inspections.',
    details:
      'We offer both solid and pneumatic tyre fitting, brake calibration, and replacement for master cylinders and brake lines.',
    icon: 'truck',
  },

  // 💧 Hydraulic System Services
  {
    id: 5,
    title: 'Hydraulic Pump Repair',
    desc: 'Diagnose and rebuild hydraulic pumps with precision testing under load.',
    details:
      'We handle vane, gear, and piston pumps — including seal replacement, shaft alignment, flow-rate calibration, and pressure testing.',
    icon: 'pump',
  },
  {
    id: 6,
    title: 'Hydraulic Cylinder Rebuild',
    desc: 'Seal and rod replacement, polishing, and leak-free performance testing.',
    details:
      'We perform complete cylinder disassembly, chrome rod repair, seal kit installation, and hydraulic pressure testing for guaranteed reliability.',
    icon: 'cylinder',
  },
  {
    id: 7,
    title: 'Hydraulic Hose & Fitting Replacement',
    desc: 'Custom-made high-pressure hoses and fittings for all hydraulic systems.',
    details:
      'We provide hose crimping, fitting replacement, and emergency hose repair to minimize downtime and ensure fluid integrity.',
    icon: 'link',
  },
  {
    id: 8,
    title: 'Hydraulic Valve & Control System Service',
    desc: 'Repair and calibration of hydraulic control valves, directional valves, and flow regulators.',
    details:
      'Our team diagnoses faulty valves, replaces seals, and adjusts control settings to ensure optimal fluid direction and pressure management.',
    icon: 'sliders',
  },

  // 🔧 Maintenance & Support
  {
    id: 9,
    title: 'Preventive Maintenance Contracts',
    desc: 'Scheduled servicing to keep your forklifts and hydraulics in top shape.',
    details:
      'Regular maintenance, oil changes, inspection reports, and wear-part replacement to prevent costly breakdowns.',
    icon: 'calendar',
  },
  {
    id: 10,
    title: 'Emergency On-site Service',
    desc: 'Rapid response for forklift or hydraulic breakdowns anywhere in the region.',
    details:
      'Our mobile technicians arrive with essential tools, parts, and diagnostic kits to restore your operations swiftly.',
    icon: 'flash',
  },
  {
    id: 11,
    title: 'Hydraulic Power Pack Repair & Fabrication',
    desc: 'Custom-built and repaired hydraulic power packs for industrial use.',
    details:
      'We design, fabricate, and service power packs including pump-motor alignment, tank cleaning, and pressure testing.',
    icon: 'toolbox',
  },
  {
    id: 12,
    title: 'Fabrication & Custom Engineering Works',
    desc: 'Design and fabrication of hydraulic structures and support frames.',
    details:
      'We undertake custom metal fabrication, welding, machine frame repair, and hydraulic component housing construction.',
    icon: 'hammer',
  },

  // ⚙️ Industrial Add-ons
  {
    id: 13,
    title: 'Hydraulic Oil Filtration & Fluid Health Check',
    desc: 'Ensure long life of systems through clean fluid management.',
    details:
      'We provide oil filtration, contamination testing, and fluid replacement to maintain hydraulic system efficiency.',
    icon: 'droplet',
  },
  {
    id: 14,
    title: 'Spare Parts Supply',
    desc: 'Genuine and high-quality forklift & hydraulic components.',
    details:
      'We supply OEM-grade seals, hoses, valves, filters, pumps, and electrical spares for forklifts and hydraulic systems.',
    icon: 'package',
  },
  {
    id: 15,
    title: 'AMC (Annual Maintenance Contract)',
    desc: 'Comprehensive yearly service contracts for peace of mind.',
    details:
      'Our AMC covers scheduled inspections, emergency support, priority servicing, and discounts on spare parts.',
    icon: 'clipboard',
  },
]

export default function ServicesGrid({ onBook }) {
  const [activeDetail, setActiveDetail] = useState(null)
  const [activeEnquiry, setActiveEnquiry] = useState(null)

  const openDetails = (id) => setActiveDetail(id)
  const closeDetails = () => setActiveDetail(null)

  const openEnquiry = (service) => setActiveEnquiry(service)
  const closeEnquiry = () => setActiveEnquiry(null)

  // If contact is on page: scroll, otherwise navigate to contact route (fallback)
  function scrollToContact(e) {
    if (e) e.preventDefault()
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    // fallback to contact page
    window.location.href = '/contact'
  }

  function openWhatsApp() {
    const w = SITE_CONFIG.social?.whatsapp || `https://wa.me/${SITE_CONFIG.contact?.phoneLink}`
    window.open(w, '_blank')
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
            {/* Book a Service CTA (uses shared Button) */}
            <Button
              as="button"
              variant="primary"
              size="md"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9-7-9-7-9 7 9 7z" />
              </svg>
              Book a Service
            </Button>

            {/* WhatsApp / Contact CTA */}
            <Button
              as="button"
              variant="outline"
              size="md"
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 0 5.373 0 12a11.94 11.94 0 003.48 8.52L0 24l3.6-1.02A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.21-1.25-6.21-3.48-8.52z" />
                <path d="M17.3 14.2c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.78.98-.96 1.18-.17.2-.34.22-.64.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.61.13-.12.3-.34.45-.5.15-.16.2-.28.3-.46.1-.17.05-.33-.02-.48-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.49-.67-.5l-.57-.01c-.2 0-.52.07-.8.33-.28.26-1.06 1.04-1.06 2.54 0 1.5 1.08 2.96 1.23 3.17.15.22 2.12 3.36 5.14 4.71 3.02 1.36 3.02.9 3.56.86.56-.04 1.78-.73 2.03-1.45.25-.72.25-1.34.18-1.46-.08-.12-.28-.2-.58-.35z" fill="#fff" />
              </svg>
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Service cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.id}
              service={s}
              onViewDetails={openDetails}
              onEnquire={openEnquiry}
            />
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
