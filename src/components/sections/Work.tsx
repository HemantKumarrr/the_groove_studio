'use client'

import { useState } from 'react'
import { genres } from '@/lib/genres'
import TrackCard from '@/components/ui/TrackCard'

export default function Work() {
  const [activeGenreId, setActiveGenreId] = useState<string>(genres[0].id)
  const [activeTrack, setActiveTrack] = useState<string | null>(null)

  const currentGenre = genres.find((g) => g.id === activeGenreId) ?? genres[0]

  return (
    <section id="work" className="py-32 bg-groove-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-groove-gray-400" />
            <span className="text-groove-gray-400 text-xs tracking-[0.3em] uppercase font-mono">
              Our Portfolio
            </span>
          </div>
          <h2 className="font-display text-[clamp(48px,8vw,100px)] leading-none text-groove-white">
            OUR WORK
          </h2>
          <p className="text-groove-gray-400 text-lg mt-4 max-w-xl">
            Seven genres. One standard — excellence. Browse our productions and hear for yourself.
          </p>
          <p className='py-2 text-xs text-gray-500'>ALL SONG ARE PRODUCED BY FUZION_MUSIC</p>
        </div>

        {/* Genre tabs */}
        <div className="flex flex-wrap gap-2 mb-12 pb-6 border-b border-groove-gray-700">
          {genres.map((genre) => {
            const isActive = activeGenreId === genre.id
            return (
              <button
                key={genre.id}
                type="button"
                onClick={() => setActiveGenreId(genre.id)}
                style={
                  isActive
                    ? { backgroundColor: '#F5F5F0', color: '#080808' }
                    : { backgroundColor: 'rgba(24,24,16,0.4)', color: '#C8C8C0', border: '1px solid #484840' }
                }
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-200 hover:opacity-90 cursor-pointer"
              >
                <span className="text-base">{genre.emoji}</span>
                {genre.name}
              </button>
            )
          })}
        </div>

        {/* Genre description */}
        <div className="mb-10">
          <h3 className="font-display text-4xl text-groove-white mb-2">
            {currentGenre.name}
          </h3>
          <p className="text-groove-gray-400 text-base">{currentGenre.description}</p>
        </div>

        {/* Tracks grid */}
        {currentGenre.tracks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {currentGenre.tracks.map((track, i) => (
              <TrackCard key={track.id} track={track} index={i} activeTrack={activeTrack} setActiveTrack={setActiveTrack} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-groove-gray-600">
            <span className="text-6xl mb-4">{currentGenre.emoji}</span>
            <p className="text-lg font-display tracking-wide">Coming Soon</p>
            <p className="text-sm mt-2">Projects dropping very soon.</p>
          </div>
        )}
      </div>
    </section>
  )
}
