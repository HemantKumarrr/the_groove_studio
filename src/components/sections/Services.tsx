import {
  RiMicLine,
  RiEqualizerLine,
  RiVideoLine,
  RiStarLine,
  RiFileTextLine,
  RiHeadphoneLine,
} from 'react-icons/ri'

const services = [
  {
    icon: RiMicLine,
    title: 'Recording',
    desc: 'State-of-the-art recording booth with acoustically treated walls. Vocal, instrument — we capture it all flawlessly.',
  },
  {
    icon: RiEqualizerLine,
    title: 'Mixing & Mastering',
    desc: 'Radio-ready mixes with professional mastering. Your track will sound incredible on every speaker and platform.',
  },
  {
    icon: RiHeadphoneLine,
    title: 'Beat Production',
    desc: 'Custom beats crafted from scratch for your vision. Every genre, every mood — we build the perfect canvas for your voice.',
  },
  {
    icon: RiVideoLine,
    title: 'Music Video',
    desc: 'Full-service music video production. From concept to color grade, we make your visual as powerful as your sound.',
  },
  {
    icon: RiFileTextLine,
    title: 'Songwriting',
    desc: 'Professional lyric writing and co-writing sessions. We help your story find the perfect words and melody.',
  },
  {
    icon: RiStarLine,
    title: 'Artist Branding',
    desc: 'Logo, cover art, social presence. We build your artist identity so the world recognizes your name.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 bg-groove-gray-800/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-groove-gray-400" />
            <span className="text-groove-gray-400 text-xs tracking-[0.3em] uppercase font-mono">
              What We Do
            </span>
          </div>
          <h2 className="font-display text-[clamp(48px,8vw,100px)] leading-none text-groove-white">
            SERVICES
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-groove-gray-700">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="bg-groove-black p-8 group hover:bg-groove-gray-700/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 border border-groove-gray-600 rounded-xl flex items-center justify-center mb-6 group-hover:border-groove-white group-hover:bg-groove-white/5 transition-all duration-300">
                <service.icon className="text-groove-gray-300 text-xl group-hover:text-groove-white transition-colors" />
              </div>
              <h3 className="font-display text-2xl text-groove-white mb-3">{service.title}</h3>
              <p className="text-groove-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-groove-white rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-5xl text-groove-black leading-tight">
              READY TO RECORD?
            </h3>
            <p className="text-groove-gray-500 mt-2">
              DM us on WhatsApp — get a free consultation in minutes.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-8 py-4 bg-groove-black text-groove-white font-semibold tracking-wider uppercase text-sm rounded-full hover:bg-groove-gray-700 transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
