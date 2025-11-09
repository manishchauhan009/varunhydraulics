// src/services/emailjs.js
import * as emailjs from 'emailjs-com'

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
const USER_ID =process.env.REACT_APP_EMAILJS_USER_ID

function assertEnv() {
  if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
    throw new Error(
      'EmailJS env variables not set. Please set or REACT_APP_EMAILJS_SERVICE_ID / REACT_APP_EMAILJS_TEMPLATE_ID / REACT_APP_EMAILJS_USER_ID (CRA).'
    )
  }
}

export async function sendBooking(formData = {}) {
  assertEnv()
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
}

export default sendBooking
