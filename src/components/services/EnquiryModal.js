// src/components/services/EnquiryModal.jsx
import React, { useEffect, useState } from 'react'
import { validateForm } from '../../utils/validators'
import { sendBooking } from '../../services/emailjs'
import Button from '../ui/Button'

export default function EnquiryModal({ service, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: service?.title || '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // { type, msg }

  useEffect(() => {
    setForm((f) => ({ ...f, service: service?.title || '' }))
  }, [service])

  useEffect(() => {
    // trap Escape to close
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    setStatus(null)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const v = validateForm(form)
    if (Object.keys(v).length) {
      setErrors(v)
      setStatus({ type: 'error', msg: 'Please fix the highlighted fields.' })
      return
    }

    setStatus({ type: 'loading', msg: 'Sending enquiry...' })
    try {
      const payload = { ...form, subject: `Enquiry: ${form.service}` }
      await sendBooking(payload)
      setStatus({ type: 'success', msg: 'Enquiry sent — we will contact you soon.' })
      setTimeout(() => {
        onClose()
      }, 1400)
    } catch (err) {
      console.error(err)
      setStatus({ type: 'error', msg: 'Failed to send. Please try again later.' })
    }
  }

  if (!service) return null

  return (
    <div className="fixed inset-0 z-60 flex items-end md:items-center justify-center p-4 md:p-8 mt-8">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-50 dark:bg-yellow-900/10 flex items-center justify-center text-yellow-600 font-semibold">
              Enq
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Enquire — {service.title}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{service.desc}</div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            aria-label="Close enquiry"
            onClick={onClose}
            className="p-2 rounded-md"
          >
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 mt-4">
          {status?.msg && (
            <div
              className={`p-3 rounded text-sm ${
                status.type === 'error'
                  ? 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                  : status.type === 'success'
                  ? 'bg-green-50 text-green-700 dark:bg-emerald-900/30 dark:text-emerald-200'
                  : 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300'
              }`}
              role="status"
            >
              {status.msg}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Name" name="name" value={form.name} onChange={handleChange} error={errors.name} required />
            <Field label="Email" name="email" value={form.email} onChange={handleChange} error={errors.email} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Phone" name="phone" value={form.phone} onChange={handleChange} error={errors.phone} />
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Service</label>
              <input
                name="service"
                value={form.service}
                onChange={handleChange}
                readOnly
                className="mt-1 w-full px-3 py-2 rounded-lg border bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-slate-700"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Short description of the issue / location / preferred time"
              className={`mt-1 w-full px-3 py-3 rounded-lg border bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-slate-700 ${errors.message ? 'ring-1 ring-red-400 dark:ring-red-600' : ''}`}
              rows={4}
            />
            {errors.message && <p className="mt-1 text-xs text-red-600 dark:text-red-300">{errors.message}</p>}
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={status?.type === 'loading'}
                className="inline-flex items-center gap-2"
                aria-label="Send enquiry"
              >
                {status?.type === 'loading' ? <Spinner /> : 'Send Enquiry'}
              </Button>

              <Button type="button" variant="outline" size="md" onClick={onClose}>
                Cancel
              </Button>
            </div>

            <div className="text-xs text-gray-500 dark:text-gray-400">We reply within 24 hours</div>
          </div>
        </form>
      </div>
    </div>
  )
}

/* ---------- small subcomponents ---------- */

function Field({ label, name, value, onChange, error, required = false }) {
  return (
    <label className="block">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{label}</span>
        {required && <span className="text-xs text-gray-400">required</span>}
      </div>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className={`mt-1 w-full px-3 py-2 rounded-lg border bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-slate-700 ${error ? 'ring-1 ring-red-400 dark:ring-red-600' : ''}`}
      />
      {error && <p className="mt-1 text-xs text-red-600 dark:text-red-300">{error}</p>}
    </label>
  )
}

function Spinner() {
  return (
    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="rgba(0,0,0,0.12)" strokeWidth="3" />
      <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
