import { RiMapPin2Line, RiCheckLine } from "react-icons/ri";

const highlights = [
  "Fully acoustically treated recording studio",
  "Professional grade gear & software",
  "Experienced producers & sound engineers",
  "All genres, all languages covered",
  "Fast turnaround — 48 hr delivery available",
  "Session musicians available on request",
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-groove-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-groove-gray-400" />
              <span className="text-groove-gray-400 text-xs tracking-[0.3em] uppercase font-mono">
                About Us
              </span>
            </div>
            <h2 className="font-display text-[clamp(48px,7vw,90px)] leading-none text-groove-white mb-8">
              WHERE MUSIC
              <br />
              IS BORN.
            </h2>
            <p className="text-groove-gray-300 text-lg leading-relaxed mb-6">
              The Groove Studio is Ghaziabad&apos;s premier music production
              house — a space where raw talent meets world-class technology.
              Whether you&apos;re an upcoming rapper, a devotional singer, or a
              Bollywood composer, we have the gear, the expertise, and the
              passion to bring your vision to life.
            </p>
            <p className="text-groove-gray-400 leading-relaxed mb-10">
              Located in the heart of Raj Nagar Extension, we&apos;ve produced
              hundreds of tracks across seven genres. Our engineers have worked
              with independent artists, label-signed musicians, and everything
              in between.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-3 text-groove-gray-300 text-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-groove-white/10 border border-groove-gray-600 flex items-center justify-center shrink-0">
                    <RiCheckLine className="text-groove-white text-xs" />
                  </div>
                  {h}
                </li>
              ))}
            </ul>

            {/* Address */}
            <div className="flex items-start gap-3 p-5 border border-groove-gray-700 rounded-2xl">
              <RiMapPin2Line className="text-groove-white text-2xl mt-0.5 shrink-0" />
              <div>
                <p className="text-groove-white font-semibold text-sm tracking-wide">
                  Find Us Here
                </p>
                <p className="text-groove-gray-400 text-sm mt-1">
                  C-906, KW Srishti-1, Raj Nagar Extension,
                  <br />
                  Ghaziabad, Uttar Pradesh
                </p>
                <a
                  href="https://maps.app.goo.gl/gcsLANVJJ8qbmiXm6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-groove-white text-xs mt-2 inline-block underline underline-offset-2 hover:text-groove-accent transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            {/* Big typographic art */}
            <div className="relative bg-groove-gray-800/40 border border-groove-gray-700 rounded-3xl p-10 overflow-hidden">
              <div className="font-display text-[120px] leading-none text-groove-white/5 select-none absolute -top-4 -left-4">
                TGS
              </div>

              <div className="relative z-10 space-y-6">
                {/* Studio specs */}
                {[
                  { label: "Studio Size", value: "Professional Grade" },
                  { label: "DAW", value: "FL Studio" }, // ← Update with your actual DAW
                  { label: "Microphone", value: "Rode NT-1, Scarlett" }, // ← Update with your mics
                  { label: "Monitors", value: "Yamaha HS-5" }, // ← Update with your monitors
                  { label: "Genres", value: "7 Genres Covered" },
                  {
                    label: "Location",
                    value: "KW Srishti-1, Raj Nagar Ext., Ghaziabad",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center border-b border-groove-gray-700 pb-4"
                  >
                    <span className="text-groove-gray-500 text-xs tracking-widest uppercase font-mono">
                      {item.label}
                    </span>
                    <span className="text-groove-white text-sm font-medium">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative vinyl */}
              <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full border-2 border-groove-gray-600 opacity-30" />
              <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full border border-groove-gray-700 opacity-20" />
              <div className="absolute -bottom-16 -right-16 w-12 h-12 rounded-full bg-groove-gray-700/50 opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
