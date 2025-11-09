
export default function WhatsAppButton({ phone = '919998748236', message = 'Hi, I need service for my forklift. Can you help?' }) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-14 z-50 flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg"
      aria-label="Message us on WhatsApp"
      title="Message us on WhatsApp"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 0 5.373 0 12a11.94 11.94 0 003.48 8.52L0 24l3.6-1.02A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.21-1.25-6.21-3.48-8.52z" fill="currentColor"/>
        <path d="M17.3 14.2c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.78.98-.96 1.18-.17.2-.34.22-.64.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.61.13-.12.3-.34.45-.5.15-.16.2-.28.3-.46.1-.17.05-.33-.02-.48-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.49-.67-.5l-.57-.01c-.2 0-.52.07-.8.33-.28.26-1.06 1.04-1.06 2.54 0 1.5 1.08 2.96 1.23 3.17.15.22 2.12 3.36 5.14 4.71 3.02 1.36 3.02.9 3.56.86.56-.04 1.78-.73 2.03-1.45.25-.72.25-1.34.18-1.46-.08-.12-.28-.2-.58-.35z" fill="#fff"/>
      </svg>
      <span className="hidden sm:inline-block text-sm font-medium">Chat on WhatsApp</span>
    </a>
  )
}
