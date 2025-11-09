// src/pages/About.jsx
import React from 'react'

export default function About() {
  return (
    <div className="bg-white text-gray-900">
      {/* ===== Page Hero ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-90" />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">About Varun Hydraulics</h1>
          <p className="max-w-2xl mx-auto text-lg opacity-95">
            Family-run service with professional technicians — keeping warehouses moving since day one.
          </p>
        </div>
      </section>

      {/* ===== Our Story & Mission ===== */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Varun Hydraulics started as a small workshop focused on hydraulic repairs. Over the years we've
              grown into a trusted service partner for industries and warehouses — but we kept our hands-on,
              customer-first approach. We believe in clear estimates, fast turnarounds and durable repairs.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Our Mission</h3>
            <p className="text-gray-700">
              Minimize downtime, maximize equipment life. We deliver honest diagnostics, quality repair work,
              and preventative maintenance designed to save our customers time and money.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-500">Years Experience</div>
                <div className="font-bold text-2xl text-yellow-600">10+</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-500">Jobs Completed</div>
                <div className="font-bold text-2xl text-gray-900">300+</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-500">Happy Clients</div>
                <div className="font-bold text-2xl text-gray-900">120+</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/assets/about-workshop.jpg"
              alt="Workshop"
              className="rounded-2xl shadow-lg object-cover w-full h-80"
            />
            <div className="absolute -bottom-6 left-6 bg-white p-4 rounded-xl shadow-md border">
              <div className="text-xs text-gray-500">Certified Technicians</div>
              <div className="font-semibold text-gray-900">Trained & Experienced</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Values ===== */}
      <section className="bg-gray-50 py-12">
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
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <TeamCard name="Varun Patel" role="Founder & Lead Technician" img="/assets/team-varun.jpg" />
          <TeamCard name="Ravi Kumar" role="Hydraulics Specialist" img="/assets/team-ravi.jpg" />
          <TeamCard name="Sita Sharma" role="Operations & Coordination" img="/assets/team-sita.jpg" />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl shadow-lg py-12 px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-black">Need a trusted partner for repairs?</h2>
          <p className="mt-3 text-black/80 max-w-2xl mx-auto">Contact our team for fast diagnostics and clear pricing.</p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="px-6 py-3 bg-black text-white rounded-lg font-semibold">Book a Service</a>
            <a href="tel:+9198XXXXXXX" className="px-6 py-3 bg-white text-black border border-black rounded-lg font-semibold">Call Now</a>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ---------- small subcomponents ---------- */
function ValueCard({ title, desc }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <div className="text-yellow-600 font-bold mb-2">{title}</div>
      <div className="text-sm text-gray-600">{desc}</div>
    </div>
  )
}

function TeamCard({ name, role, img }) {
  return (
    <div className="p-4 bg-white rounded-xl shadow-sm flex items-center gap-4">
      <img src={img} alt={name} className="w-16 h-16 rounded-lg object-cover" />
      <div>
        <div className="font-semibold text-gray-900">{name}</div>
        <div className="text-sm text-gray-600">{role}</div>
      </div>
    </div>
  )
}
