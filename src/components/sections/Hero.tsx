"use client";

import { useEffect, useRef } from "react";
import { RiArrowDownLine, RiPlayCircleLine } from "react-icons/ri";

const MARQUEE_ITEMS = [
  "Bollywood",
  "—",
  "Rap",
  "—",
  "EDM",
  "—",
  "Devotional",
  "—",
  "POP",
  "—",
  "Haryanvi",
  "—",
  "Punjabi",
  "—",
  "Bollywood",
  "—",
  "Rap",
  "—",
  "EDM",
  "—",
  "Devotional",
  "—",
  "POP",
  "—",
  "Haryanvi",
  "—",
  "Punjabi",
  "—",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-groove-black"
    >
      {/* Background circles / atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-groove-white/[0.02] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-groove-white/[0.03] blur-3xl" />
        {/* Vinyl record decoration */}
        <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-groove-gray-700 opacity-20 animate-spin-slow" />
        <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-groove-gray-700 opacity-15" />
        <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full border border-groove-gray-600 opacity-10" />
        <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full bg-groove-gray-700/30" />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-groove-gray-400" />
            <span className="text-groove-gray-300 text-xs tracking-[0.3em] uppercase font-mono">
              Welcome to the groove music studio
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-[clamp(64px,12vw,160px)] leading-[0.9] text-groove-white mb-8">
            YOUR
            <br />
            <span className="text-stroke">SOUND.</span>
            <br />
            PERFECTED.
          </h1>

          <p className="text-groove-gray-300 text-lg md:text-xl max-w-xl leading-relaxed mb-12">
            From raw ideas to chart-ready tracks — The Groove Studio delivers
            world-class music production across every genre, right here in
            Ghaziabad.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="flex items-center gap-2 px-8 py-4 bg-groove-white text-groove-black font-semibold tracking-wider uppercase text-sm rounded-full hover:bg-groove-accent transition-colors duration-200"
            >
              <RiPlayCircleLine className="text-lg" />
              Hear Our Work
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 border border-groove-gray-600 text-groove-white font-semibold tracking-wider uppercase text-sm rounded-full hover:border-groove-white transition-colors duration-200"
            >
              Book a Session
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-12 mt-20 pt-12 border-t border-groove-gray-700">
          {[
            { num: "150+", label: "Tracks Produced" },
            { num: "7", label: "Genres Mastered" },
            { num: "50+", label: "Happy Artists" },
            { num: "100%", label: "Client Satisfaction" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-5xl text-groove-white">
                {s.num}
              </div>
              <div className="text-groove-gray-400 text-xs tracking-widest uppercase mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="border-t border-groove-gray-700 py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {MARQUEE_ITEMS.map((item, i) => (
            <span
              key={i}
              className={`font-display text-2xl mr-8 ${
                item === "—" ? "text-groove-gray-600" : "text-groove-gray-400"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#work"
        className="absolute bottom-24 left-6 flex items-center gap-2 text-groove-gray-500 text-xs tracking-widest uppercase hover:text-groove-white transition-colors"
      >
        <RiArrowDownLine className="animate-bounce" />
        Scroll
      </a>

      <style jsx>{`
        .text-stroke {
          -webkit-text-stroke: 2px #f5f5f0;
          color: transparent;
        }
      `}</style>
    </section>
  );
}
