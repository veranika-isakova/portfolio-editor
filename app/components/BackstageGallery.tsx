"use client"

import { useEffect, useState } from "react"

type Props = {
  photos: string[]
}

export default function BackstageGallery({ photos }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const isOpen = selectedIndex !== null

  const showPrevious = () => {
    if (selectedIndex === null) return

    setSelectedIndex(
      selectedIndex === 0
        ? photos.length - 1
        : selectedIndex - 1
    )
  }

  const showNext = () => {
    if (selectedIndex === null) return

    setSelectedIndex(
      selectedIndex === photos.length - 1
        ? 0
        : selectedIndex + 1
    )
  }

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        showPrevious()
      }

      if (event.key === "ArrowRight") {
        showNext()
      }

      if (event.key === "Escape") {
        setSelectedIndex(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedIndex, isOpen])

  return (
    <>
      {/* HORIZONTAL PHOTO SCROLL */}

      <div className="anomaly-gallery">

        {photos.map((photo, index) => (
          <button
            type="button"
            className="anomaly-gallery-item"
            key={photo}
            onClick={() => setSelectedIndex(index)}
            aria-label={`Open backstage photo ${index + 1}`}
          >
            <img
              src={photo}
              alt={`Anomaly backstage ${index + 1}`}
              loading="lazy"
            />

            {/* ZOOM INDICATOR */}

            <span className="anomaly-gallery-zoom">
              +
            </span>

          </button>
        ))}

      </div>


      {/* LIGHTBOX */}

      {selectedIndex !== null && (
        <div
          className="anomaly-lightbox"
          onClick={() => setSelectedIndex(null)}
        >

          {/* CLOSE */}

          <button
            type="button"
            className="anomaly-lightbox-close"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close"
          >
            ×
          </button>


          {/* PREVIOUS */}

          <button
            type="button"
            className="anomaly-lightbox-arrow anomaly-lightbox-prev"
            onClick={(e) => {
              e.stopPropagation()
              showPrevious()
            }}
            aria-label="Previous photo"
          >
            ←
          </button>


          {/* IMAGE */}

          <img
            src={photos[selectedIndex]}
            alt={`Anomaly backstage ${selectedIndex + 1}`}
            className="anomaly-lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />


          {/* NEXT */}

          <button
            type="button"
            className="anomaly-lightbox-arrow anomaly-lightbox-next"
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            aria-label="Next photo"
          >
            →
          </button>


          {/* COUNTER */}

          <div
            className="anomaly-lightbox-counter"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedIndex + 1} / {photos.length}
          </div>

        </div>
      )}
    </>
  )
}