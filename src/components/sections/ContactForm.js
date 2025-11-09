import React, { useEffect, useState } from 'react'
import { validateForm } from '../../utils/validators'
import { sendBooking } from '../../services/emailjs'

export default function ContactForm({ initialService = null }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // { type: 'loading'|'success'|'error', msg: '' }

useEffect(() => {
  if (initialService) {
    setForm((f) => ({ ...f, service: initialService }))
  } else {
    try {
      const prefill = localStorage.getItem('prefillService')
      if (prefill) setForm((f) => ({ ...f, service: prefill }))
    } catch (e) {}
  }
}, [initialService])


  function handleChange(e) {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
    // live-clear specific field error
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    setStatus(null)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus(null)

    const validation = validateForm(form)
    if (Object.keys(validation).length > 0) {
      setErrors(validation)
      setStatus({ type: 'error', msg: 'Please fix the highlighted fields.' })
      // focus first invalid field (best-effort)
      const first = Object.keys(validation)[0]
      const el = document.querySelector(`[name="${first}"]`)
      if (el) el.focus()
      return
    }

    setStatus({ type: 'loading', msg: 'Sending request...' })
    try {
      await sendBooking(form)
      setStatus({ type: 'success', msg: 'Request sent — we will contact you soon.' })
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
      setErrors({})
    } catch (err) {
      console.error(err)
      setStatus({ type: 'error', msg: 'Failed to send — please try again later.' })
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm"
      noValidate
    >
      {/* Alerts */}
      {status?.msg && (
        <div
          role="status"
          className={`p-3 rounded-md text-sm ${
            status.type === 'error'
              ? 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300 border border-red-100 dark:border-red-700'
              : status.type === 'success'
              ? 'bg-green-50 text-green-700 dark:bg-emerald-900/30 dark:text-emerald-200 border border-green-100 dark:border-emerald-700'
              : 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300 border border-yellow-100 dark:border-yellow-700'
          }`}
        >
          {status.msg}
        </div>
      )}

      {/* Grid inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Full name</span>
          <div className="mt-1 relative">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className={`w-full px-3 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition
                bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100
                border-gray-200 dark:border-slate-700
                ${errors.name ? 'ring-1 ring-red-400 dark:ring-red-600' : 'focus:shadow'}`
              }
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'error-name' : undefined}
            />
            {errors.name && (
              <p id="error-name" className="mt-1 text-xs text-red-600 dark:text-red-300">{errors.name}</p>
            )}
          </div>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Email</span>
          <div className="mt-1 relative">
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full px-3 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition
                bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100
                border-gray-200 dark:border-slate-700
                ${errors.email ? 'ring-1 ring-red-400 dark:ring-red-600' : ''}`
              }
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'error-email' : undefined}
              inputMode="email"
            />
            {errors.email && (
              <p id="error-email" className="mt-1 text-xs text-red-600 dark:text-red-300">{errors.email}</p>
            )}
          </div>
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Phone</span>
          <div className="mt-1 relative">
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91XXXXXXXXXX"
              className={`w-full px-3 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition
                bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100
                border-gray-200 dark:border-slate-700
                ${errors.phone ? 'ring-1 ring-red-400 dark:ring-red-600' : ''}`
              }
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'error-phone' : undefined}
              inputMode="tel"
            />
            {errors.phone && (
              <p id="error-phone" className="mt-1 text-xs text-red-600 dark:text-red-300">{errors.phone}</p>
            )}
          </div>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Service</span>
          <div className="mt-1">
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full px-3 py-3 rounded-lg border bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            >
              <option value="">Select service (optional)</option>
              <option>Forklift Repair</option>
              <option>Hydraulic Pump Repair</option>
              <option>Cylinder Rebuild</option>
              <option>Preventive Maintenance</option>
            </select>
          </div>
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Message</span>
        <div className="mt-1">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Describe the problem / requirements"
            className={`w-full px-3 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition
              min-h-[120px] resize-vertical
              bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100
              border-gray-200 dark:border-slate-700
              ${errors.message ? 'ring-1 ring-red-400 dark:ring-red-600' : ''}`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'error-message' : undefined}
          />
          {errors.message && (
            <p id="error-message" className="mt-1 text-xs text-red-600 dark:text-red-300">{errors.message}</p>
          )}
        </div>
      </label>

      {/* actions */}
      <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={status?.type === 'loading'}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition
              ${status?.type === 'loading' ? 'bg-yellow-400 text-black opacity-90 cursor-wait' : 'bg-yellow-600 text-black hover:scale-[1.01]'}
              shadow-md`}
          >
            {status?.type === 'loading' ? (
              <>
                <Spinner /> Sending...
              </>
            ) : (
              <>Send Request</>
            )}
          </button>

          <button
            type="button"
            onClick={() => { setForm({ name: '', email: '', phone: '', service: '', message: '' }); setErrors({}); setStatus(null)}}
            className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-slate-700 transition"
          >
            Reset
          </button>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-300">
          Or call us: <a className="font-medium text-gray-900 dark:text-gray-100" href="tel:+9198XXXXXXX">+91 999 874 8236</a>
        </div>
      </div>
    </form>
  )
}

/* small spinner */
function Spinner() {
  return (
    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="rgba(0,0,0,0.15)" strokeWidth="4" />
      <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}
