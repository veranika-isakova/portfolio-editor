"use client"

import { useEffect, useState } from "react"

export default function GoPage() {
  const [posterOpen, setPosterOpen] = useState(false)

  const crew = [
    { role: "Director / Producer", name: "Carlos Montenegro" },
    { role: "Co-Director", name: "Natisa Jones" },
    { role: "Director of Photography", name: "Zbigniew Zielinski" },
    { role: "Editors", name: "Veranika Isakova, Carlos Montenegro" },
    { role: "Colour Grader", name: "Pieter de Pagie" },
    { role: "Sound Recordist / Composer", name: "Morgan Whitney" },
    { role: "Composer", name: "Matthew Torres" },
  ]

  const cast = [
    { role: "David", name: "Carlos Montenegro" },
    { role: "Nick", name: "Shreyas Bettadapura" },
  ]

  const labelClass =
    "text-[10.5px] md:text-[11px] tracking-[0.3em] uppercase text-gray-500 mb-1"
  const listClass =
    "text-[13px] md:text-[14px] leading-[1.6] text-[#171717]"

  useEffect(() => {
    if (!posterOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPosterOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [posterOpen])

  return (
    <main className="w-full p-0 m-0 overflow-x-hidden box-border">

      {/* MAIN HERO BLOCK */}

      <section className="w-full max-w-[1140px] mx-auto my-4 md:my-12 px-5 md:px-8 box-border flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">

        {/* POSTER */}

        <button
          type="button"
          className="w-full max-w-[300px] sm:max-w-[340px] md:max-w-[440px] shrink-0 rounded overflow-hidden shadow-2xl bg-black leading-none mx-auto md:mx-0 anomaly-poster"
          onClick={() => setPosterOpen(true)}
          aria-label="Open Letting Go poster"
        >
          <img
            src="/images/go/poster.jpeg"
            alt="Letting Go poster"
            className="w-full h-auto block transform scale-[1.01]"
          />
        </button>


        {/* DESCRIPTION & CREDITS */}

        <div className="w-full max-w-[540px] flex flex-col items-center text-center">

          <h1 className="text-[#4A4EFF] text-[18px] md:text-[22px] font-semibold tracking-[0.12em] uppercase mb-3 md:mb-4">
            Letting Go
          </h1>

          {/* SYNOPSIS */}

          <p className="text-[14px] md:text-[15.5px] leading-[1.7] text-gray-600 mb-5">
            Trapped in a cycle of grief, David uses a futuristic device
            to relive memories of his deceased boyfriend, but he must
            choose between a perfect digital dream and the painful
            reality of letting go.
          </p>

          {/* KEY CREW */}

          <h3 className={labelClass}>Key Crew</h3>

          <div className={listClass}>
            {crew.map((item) => (
              <div key={item.role}>
                <span className="text-gray-500">{item.role}:</span> {item.name}
              </div>
            ))}
          </div>

          {/* CAST */}

          <h3 className={`${labelClass} mt-4`}>Cast</h3>

          <div className={listClass}>
            {cast.map((item) => (
              <div key={item.role}>
                <span className="text-gray-500">{item.role}:</span> {item.name}
              </div>
            ))}
          </div>

          <div className="w-[60%] max-w-[240px] h-px bg-gray-200 my-4 md:my-5" />

          {/* META INFO */}

          <p className="text-[11px] md:text-[12px] tracking-[0.3em] uppercase text-gray-500">
            Festival premiere soon
          </p>

          <a
            href="https://filmfreeway.com/Lettinggofilm"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-[13.5px] md:text-[14.5px] text-[#4A4EFF] hover:opacity-70 transition"
          >
            FilmFreeway
          </a>
        </div>

      </section>


      {/* TRAILER */}

      <section className="w-full max-w-[1140px] mx-auto px-5 md:px-8 mb-10 md:mb-14 box-border">
        <div className="w-full aspect-video bg-black">
          <iframe
            src="https://www.youtube-nocookie.com/embed/xSDVdTjuQwk?rel=0"
            title="Letting Go (2026) | Official Trailer"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <p className="mt-2 text-[13px] md:text-[14px] text-gray-500">Official Trailer</p>
      </section>


      {/* POSTER LIGHTBOX */}

      {posterOpen && (
        <div
          className="anomaly-poster-lightbox"
          onClick={() => setPosterOpen(false)}
        >
          <button
            type="button"
            className="anomaly-poster-close"
            onClick={() => setPosterOpen(false)}
            aria-label="Close poster"
          >
            ×
          </button>

          <img
            src="/images/go/poster.jpeg"
            alt="Letting Go poster"
            className="anomaly-poster-lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}


      {/* SCREENSHOTS */}

      <div className="screenshots-grid">

        <img
          src="/images/go/device.jpeg"
          alt=""
          loading="lazy"
        />

        <img
          src="/images/go/couple.jpeg"
          alt=""
          loading="lazy"
        />

      </div>


      {/* FULL WIDTH IMAGE */}

      <section className="w-full m-0 p-0">

        <img
          src="/images/go/hero-shot.jpeg"
          alt=""
          className="w-full h-auto block m-0 p-0"
        />

      </section>


      <div className="screenshots-grid">

        <img
          src="/images/go/happiness.jpeg"
          alt=""
          loading="lazy"
        />

        <img
          src="/images/go/bed.jpeg"
          alt=""
          loading="lazy"
        />

      </div>

    </main>
  )
}