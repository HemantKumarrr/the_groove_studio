import {
  RiWhatsappLine,
  RiInstagramLine,
  RiYoutubeLine,
  RiMailLine,
  RiMapPin2Line,
  RiPhoneLine,
  RiFacebookCircleLine,
  RiTwitterXLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";

// ============================================================
// CONTACT INFO — Update all values below
// ============================================================
const CONTACT = {
  // ← PASTE YOUR WHATSAPP/PHONE NUMBER
  phone: "+91 78276 51976",
  // ← PASTE YOUR EMAIL
  email: "yourgroovestudio@gmail.com",
  address: "C-906, KW Srishti-1, Raj Nagar Extension, Ghaziabad, UP",
  // ← PASTE YOUR WHATSAPP LINK (with your number)
  whatsapp:
    "https://api.whatsapp.com/message/YCFLSAIOT4N7B1?autoload=1&app_absent=0",
  // ← PASTE YOUR INSTAGRAM PROFILE URL
  instagram: "https://www.instagram.com/itsyourgroove",
  // ← PASTE YOUR YOUTUBE CHANNEL URL
  youtube: "https://youtube.com/@thegroovstudio",
  // ← PASTE YOUR FACEBOOK PAGE URL
  facebook: "https://facebook.com/thegroovstudio",
  // ← PASTE YOUR TWITTER/X PROFILE URL
  twitter: "https://x.com/itsyourgroove",
  // ← PASTE YOUR LINKEDIN PAGE URL
  linkedin: "https://linkedin.com/company/thegroovstudio",
};

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-groove-gray-800/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-groove-gray-400" />
            <span className="text-groove-gray-400 text-xs tracking-[0.3em] uppercase font-mono">
              Get In Touch
            </span>
            <div className="w-8 h-[1px] bg-groove-gray-400" />
          </div>
          <h2 className="font-display text-[clamp(48px,8vw,100px)] leading-none text-groove-white">
            LET&apos;S CREATE
          </h2>
          <p className="text-groove-gray-400 mt-4 text-lg max-w-xl mx-auto">
            Got a vision? We&apos;ve got the studio. Reach out — your next hit
            starts with one message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact cards */}
          <div className="space-y-4">
            {/* WhatsApp — Primary CTA */}
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366]/60 hover:bg-[#25D366]/20 rounded-2xl transition-all duration-200 group"
            >
              <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center shrink-0">
                <RiWhatsappLine className="text-white text-2xl" />
              </div>
              <div>
                <p className="text-groove-white font-semibold">
                  Chat on WhatsApp
                </p>
                <p className="text-groove-gray-400 text-sm">{CONTACT.phone}</p>
                <p className="text-[#25D366] text-xs mt-1 font-semibold tracking-wide group-hover:underline">
                  Message us now →
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-5 p-6 bg-groove-gray-700/30 border border-groove-gray-700 hover:border-groove-gray-500 rounded-2xl transition-all duration-200"
            >
              <div className="w-14 h-14 bg-groove-gray-700 rounded-2xl flex items-center justify-center shrink-0">
                <RiPhoneLine className="text-groove-white text-2xl" />
              </div>
              <div>
                <p className="text-groove-white font-semibold">Call Us</p>
                <p className="text-groove-gray-400 text-sm">{CONTACT.phone}</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-5 p-6 bg-groove-gray-700/30 border border-groove-gray-700 hover:border-groove-gray-500 rounded-2xl transition-all duration-200"
            >
              <div className="w-14 h-14 bg-groove-gray-700 rounded-2xl flex items-center justify-center shrink-0">
                <RiMailLine className="text-groove-white text-2xl" />
              </div>
              <div>
                <p className="text-groove-white font-semibold">Email</p>
                <p className="text-groove-gray-400 text-sm">{CONTACT.email}</p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-center gap-5 p-6 bg-groove-gray-700/30 border border-groove-gray-700 rounded-2xl">
              <div className="w-14 h-14 bg-groove-gray-700 rounded-2xl flex items-center justify-center shrink-0">
                <RiMapPin2Line className="text-groove-white text-2xl" />
              </div>
              <div>
                <p className="text-groove-white font-semibold">
                  Studio Location
                </p>
                <p className="text-groove-gray-400 text-sm">
                  {CONTACT.address}
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 border border-groove-gray-600 hover:border-[#E1306C] hover:text-[#E1306C] rounded-full text-groove-gray-300 text-sm transition-all duration-200"
              >
                <RiInstagramLine className="text-base" />
                Instagram
              </a>
              <a
                href={CONTACT.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 border border-groove-gray-600 hover:border-[#FF0000] hover:text-[#FF4444] rounded-full text-groove-gray-300 text-sm transition-all duration-200"
              >
                <RiYoutubeLine className="text-base" />
                YouTube
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 border border-groove-gray-600 hover:border-[#1877F2] hover:text-[#1877F2] rounded-full text-groove-gray-300 text-sm transition-all duration-200"
              >
                <RiFacebookCircleLine className="text-base" />
                Facebook
              </a>
              <a
                href={CONTACT.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 border border-groove-gray-600 hover:border-groove-white hover:text-groove-white rounded-full text-groove-gray-300 text-sm transition-all duration-200"
              >
                <RiTwitterXLine className="text-base" />
                Twitter / X
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 border border-groove-gray-600 hover:border-[#0A66C2] hover:text-[#0A66C2] rounded-full text-groove-gray-300 text-sm transition-all duration-200"
              >
                <RiLinkedinBoxLine className="text-base" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Map embed placeholder + Quote box */}
          <div className="space-y-6">
            {/* Google Maps embed */}
            <div className="w-full h-64 bg-groove-gray-700/30 border border-groove-gray-700 rounded-2xl overflow-hidden">
              {/* 
                ============================================================
                GOOGLE MAPS EMBED
                Go to maps.google.com → Find your location → Share → Embed a map
                Paste the iframe src URL below replacing the placeholder
                ============================================================
              */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6999.147872572417!2d77.42446049813623!3d28.702389139945886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf104fa7d36fd%3A0x8442a693416a77aa!2sThe%20Groove%20Music%20Studio!5e0!3m2!1sen!2sin!4v1775326488899!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Groove Studio Location"
              />
            </div>

            {/* Big WhatsApp CTA */}
            <div className="bg-groove-white rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <RiWhatsappLine className="text-white text-3xl" />
              </div>
              <h3 className="font-display text-4xl text-groove-black mb-2">
                BOOK YOUR SESSION
              </h3>
              <p className="text-groove-gray-500 text-sm mb-6">
                Get pricing, availability, and answers — instantly on WhatsApp.
              </p>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#1DA851] transition-colors duration-200"
              >
                <RiWhatsappLine className="text-xl" />
                Chat Now — It&apos;s Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
