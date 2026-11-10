"use client"

import { useEffect, useRef, useState } from "react"

// Event name used so only one video plays with sound at a time
const PLAY_EVENT = "preview-video-play"

type Props = {
  src: string
  poster?: string
  className?: string
}

// Видео играет само без звука по кругу как превью.
// По нажатию Play начинается с начала со звуком и обычными кнопками управления.
export default function PreviewVideo({ src, poster, className = "" }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [preview, setPreview] = useState(true)
  // true once the viewer has pressed Play (the silent autoplay preview does not count)
  const startedByUser = useRef(false)

  const stopOtherVideos = () => {
    window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: videoRef.current }))
  }

  // When another video on the page starts playing, stop this one
  useEffect(() => {
    const handleOtherPlay = (event: Event) => {
      const video = videoRef.current
      if (!video || (event as CustomEvent).detail === video) return
      video.pause()
    }
    window.addEventListener(PLAY_EVENT, handleOtherPlay)
    return () => window.removeEventListener(PLAY_EVENT, handleOtherPlay)
  }, [])

  // Tell the other videos that this one started playing (not the silent preview loop)
  const handlePlay = () => {
    if (startedByUser.current) stopOtherVideos()
  }

  const startFromBeginning = () => {
    const video = videoRef.current
    if (!video) return

    startedByUser.current = true
    stopOtherVideos()

    video.currentTime = 0
    video.muted = false
    video.loop = false
    setPreview(false)
    video.play().catch(() => {})
  }

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        controls={!preview}
        onPlay={handlePlay}
        controlsList="nodownload"
        disablePictureInPicture
        onContextMenu={(event) => event.preventDefault()}
        className={className}
      />

      {preview && (
        <button
          type="button"
          onClick={startFromBeginning}
          aria-label="Play from the beginning"
          className="absolute inset-0 flex items-center justify-center group cursor-pointer"
        >
          <span className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/45 group-hover:bg-black/65 transition flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 fill-white ml-0.5" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  )
}
