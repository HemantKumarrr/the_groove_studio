'use client'

import { useState, useRef, useEffect } from 'react'
import {
  RiPlayCircleLine,
  RiPauseCircleLine,
  RiYoutubeLine,
  RiMusicLine,
} from 'react-icons/ri'
import type { Track } from '@/lib/genres'

interface TrackCardProps {
  track: Track
  index: number
  activeTrack: string | null
  setActiveTrack: (id: string | null) => void
}

export default function TrackCard({ track, index, activeTrack, setActiveTrack }: TrackCardProps) {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // const togglePlay = () => {
  //   if (!track.audioSrc) return
  //   if (playing) {
  //     audioRef.current?.pause()
  //   } else {
  //     audioRef.current?.play()
  //   }
  //   setPlaying(!playing)
  // }
  const isPlaying = activeTrack === track.id

const togglePlay = () => {
  if (!track.audioSrc || !audioRef.current) return

  if (audioRef.current.paused) {
    document.querySelectorAll('audio').forEach((audio) => {
      if (audio !== audioRef.current) {
        audio.pause()
      }
    })

    audioRef.current.play()
  } else {
    audioRef.current.pause()
  }
}

  const handleAudioEnd = () => setPlaying(false)

  const openYouTube = () => {
    if (track.youtubeUrl) {
      window.open(track.youtubeUrl, '_blank', 'noopener,noreferrer')
    }
  }

  useEffect(() => {
  if (!audioRef.current) return

  if (activeTrack === track.id) {
    audioRef.current.play()
  } else {
    audioRef.current.pause()
  }
}, [activeTrack, track.id])

  return (
    <div className="group relative bg-groove-gray-700/40 border border-groove-gray-700 rounded-2xl overflow-hidden hover:border-groove-gray-500 transition-all duration-300 hover:bg-groove-gray-700/60">
      {/* Cover image / placeholder */}
      <div className="relative aspect-square overflow-hidden bg-groove-gray-700">
        {track.coverImage ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={track.coverImage}
            alt={track.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              // Fallback if image doesn't load
              ;(e.target as HTMLImageElement).style.display = 'none'
            }}
          />
        ) : null}

        {/* Default cover fallback */}
        <div className={`absolute inset-0 flex items-center justify-center ${track.coverImage ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-20 h-20 rounded-full border-2 border-groove-gray-500 flex items-center justify-center">
            <RiMusicLine className="text-groove-gray-500 text-3xl" />
          </div>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-groove-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {/* Play button */}
          {track.audioSrc && (
            <button
              onClick={togglePlay}
              className="text-5xl text-groove-white hover:text-groove-accent transition-colors"
              aria-label={playing ? 'Pause' : 'Play'}
            >
              {playing ? <RiPauseCircleLine /> : <RiPlayCircleLine />}
            </button>
          )}
        </div>

        {/* Track number badge */}
        <div className="absolute top-3 left-3 w-7 h-7 bg-groove-black/80 rounded-full flex items-center justify-center">
          <span className="font-mono text-xs text-groove-gray-300">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Year badge */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-groove-black/80 rounded-full">
          <span className="font-mono text-xs text-groove-gray-400">{track.year}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-display text-xl text-groove-white tracking-wide truncate">
          {track.title}
        </h3>
        <p className="text-groove-gray-400 text-sm mt-1 truncate">{track.artist}</p>

        {/* Action buttons */}
        <div className="flex items-center gap-2 mt-4">
          {/* Listen on website */}
          {track.audioSrc ? (
            <button
              onClick={togglePlay}
              className="flex-1 flex items-center justify-center gap-2 py-2 bg-groove-white/10 hover:bg-groove-white/20 border border-groove-gray-600 rounded-full text-groove-white text-xs font-semibold tracking-wider uppercase transition-all duration-200"
            >
              {playing ? (
                <>
                  <RiPauseCircleLine className="text-base" />
                  Pause
                </>
              ) : (
                <>
                  <RiPlayCircleLine className="text-base" />
                  Play
                </>
              )}
            </button>
          ) : (
            <div className="flex-1 flex items-center justify-center gap-2 py-2 bg-groove-gray-700/30 rounded-full text-groove-gray-500 text-xs font-semibold tracking-wider uppercase cursor-not-allowed">
              <RiPlayCircleLine className="text-base" />
              Audio N/A
            </div>
          )}

          {/* YouTube button */}
          <button
            onClick={openYouTube}
            disabled={!track.youtubeUrl}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-[#FF0000]/10 hover:bg-[#FF0000]/20 border border-[#FF0000]/30 hover:border-[#FF0000]/60 rounded-full text-[#FF4444] text-xs font-semibold tracking-wider uppercase transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Watch on YouTube"
          >
            <RiYoutubeLine className="text-base" />
            YouTube
          </button>
        </div>

        {/* Audio element */}
        {track.audioSrc && (
          <audio
            ref={audioRef}
            src={track.audioSrc}
            onEnded={() => setPlaying(false)}
            onPause={() => setPlaying(false)}
            onPlay={() => setPlaying(true)}
            className="hidden"
            preload="none"
          />
        )}
      </div>
    </div>
  )
}
