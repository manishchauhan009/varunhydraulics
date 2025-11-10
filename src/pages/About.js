// src/pages/About.jsx
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import Button from '../components/ui/Button'
import { SITE_CONFIG } from '../constants/siteConfig'

export default function About() {
  const navigate = useNavigate()
  const phoneLink = SITE_CONFIG?.contact?.phoneLink || '919998748236'

  // Smart book handler: scroll to #contact if present, otherwise navigate to Contact page.
  function handleBook(e, prefillService = null) {
    if (e) e.preventDefault()

    const el = document.getElementById('contact')
    if (el) {
      // contact is on this page (rare for About) -> scroll
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      if (prefillService) {
        try { localStorage.setItem('prefillService', prefillService) } catch (err) { }
      }
      return
    }

    // not on same page: navigate to Contact and pass state so Contact.jsx can prefill
    const state = prefillService ? { prefillService } : undefined
    try { if (prefillService) localStorage.setItem('prefillService', prefillService) } catch (err) { }
    navigate(ROUTES.CONTACT, { state })
  }

  return (
    <div className="bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-100">
      {/* ===== Page Hero ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-90" />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-black dark:text-white">About Varun Hydraulics</h1>
          <p className="max-w-2xl mx-auto text-lg opacity-95 text-black/80 dark:text-white">
            Family-run service with professional technicians — keeping warehouses moving since day one.
          </p>
        </div>
      </section>

      {/* ===== Our Story & Mission ===== */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Varun Hydraulics has grown from humble beginnings. It all started in 2006 as <span className="font-semibold text-yellow-600">Lucky Motors</span> — a small two-wheeler repair shop driven by passion and hard work.
              Over time, we expanded into four-wheeler services and built a strong foundation of technical expertise and trust.
              In 2020, we rebranded as <span className="font-semibold text-yellow-600">Varun Hydraulics</span>, focusing on forklift and hydraulic system repairs.
              What began as a small workshop now stands as a specialized service partner for industries that rely on reliable, efficient, and precise hydraulic solutions.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Minimize downtime, maximize equipment life. We deliver honest diagnostics, quality repair work,
              and preventative maintenance designed to save our customers time and money.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                <div className="text-xs text-gray-500">Years Experience</div>
                <div className="font-bold text-2xl text-yellow-600">15+</div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                <div className="text-xs text-gray-500">Jobs Completed</div>
                <div className="font-bold text-2xl text-gray-900 dark:text-gray-100">1000+</div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                <div className="text-xs text-gray-500">Happy Clients</div>
                <div className="font-bold text-2xl text-gray-900 dark:text-gray-100">200+</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/assets/about-workshop.jpg"
              alt="Workshop"
              className="rounded-2xl shadow-lg object-cover w-full h-80"
            />
            <div className="absolute -bottom-6 left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md border border-gray-100 dark:border-slate-700">
              {/* <div className="text-xs text-gray-500">Certified Technicians</div> */}
              <div className="font-semibold text-gray-900 dark:text-gray-100">Trained & Experienced</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Values ===== */}
      <section className="bg-gray-50 dark:bg-slate-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard title="Integrity" desc="Transparent quotes and honest recommendations." />
            <ValueCard title="Quality" desc="Durable repairs using the right parts and procedures." />
            <ValueCard title="Speed" desc="Fast diagnostics and same-day visits where possible." />
            <ValueCard title="Support" desc="Clear communication and after-service follow-up." />
          </div>
        </div>
      </section>

      {/* ===== Team ===== */}
      {/* <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <TeamCard name="Umashankar Chauhan" role="Founder & Lead Technician" img="/assets/team-umashankar.jpg" />
          <TeamCard name="Ramanuj Chauhan" role="Operation and Coordination" img="/assets/team-ramanuj.jpg" />
          <TeamCard name="Gyanchand Prajapati" role="Forklift Specialist" img="/assets/team-gyanchand.jpg" />
        </div>
      </section> */}

      {/* ===== CTA ===== */}
      <section className="container mx-auto px-4 py-20 text-center" >
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl shadow-lg py-12 px-6 ">
          <h2 className="text-2xl md:text-3xl font-extrabold text-black dark:text-white">Need a trusted partner for repairs?</h2>
          <p className="mt-3 text-black/80 max-w-2xl mx-auto">Contact our team for fast diagnostics and clear pricing.</p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            {/* Smart Book: passes no prefillService (you could pass a string if you want a specific service) */}
            <Button
              onClick={(e) => handleBook(e)}
              variant="secondary"
              size="lg"
            >
              Book a Service
            </Button>

            {/* Phone uses SITE_CONFIG */}
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

/* ---------- small subcomponents ---------- */
function ValueCard({ title, desc }) {
  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
      <div className="text-yellow-600 font-bold mb-2">{title}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{desc}</div>
    </div>
  )
}

// function TeamCard({ name, role, img }) {
//   return (
//     <div className="p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm flex items-center gap-4">
//       <img src={img} alt={name} className="w-16 h-16 rounded-lg object-cover" />
//       <div>
//         <div className="font-semibold text-gray-900 dark:text-gray-100">{name}</div>
//         <div className="text-sm text-gray-600 dark:text-gray-300">{role}</div>
//       </div>
//     </div>
//   )
// }
