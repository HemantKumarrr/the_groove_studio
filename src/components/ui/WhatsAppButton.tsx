'use client'

import { useState } from 'react'
import { RiWhatsappLine, RiCloseLine, RiArrowRightLine } from 'react-icons/ri'

// ============================================================
// WHATSAPP CONFIG
// Replace the number below with your WhatsApp Business number
// Format: country code + number (no + or spaces)
// e.g. India: 919876543210
// ============================================================
const WHATSAPP_NUMBER = '919999999999' // ← PASTE YOUR WHATSAPP NUMBER HERE
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I visited The Groove Studio website and I'm interested in booking a session. Can we talk?"
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3">
      {/* Tooltip bubble */}
      <div
        className={`transition-all duration-300 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        <div className="bg-groove-white text-groove-black px-4 py-3 rounded-2xl shadow-2xl max-w-[200px]">
          <p className="text-xs font-semibold tracking-wide mb-1">Chat with us</p>
          <p className="text-xs text-groove-gray-500 leading-snug">
            Get a free quote instantly on WhatsApp
          </p>
          <div className="flex items-center gap-1 mt-2 text-xs font-semibold text-green-600">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Online now
          </div>
        </div>
        {/* Arrow pointing right */}
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-groove-white" />
      </div>

      {/* WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-200 group"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <RiWhatsappLine className="text-white text-3xl relative z-10" />
      </a>
    </div>
  )
}
