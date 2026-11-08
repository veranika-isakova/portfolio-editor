"use client"

import { useEffect, useState } from "react"
import BackstageGallery from "../../components/BackstageGallery"

export default function AnomalyPage() {
  const [posterOpen, setPosterOpen] = useState(false)

  const backstagePhotos = [
    "/images/anomaly/backstage/3.jpeg",
    "/images/anomaly/backstage/2.jpeg",
    "/images/anomaly/backstage/4.jpeg",
    "/images/anomaly/backstage/5.jpeg",
    "/images/anomaly/backstage/6.jpeg",
    "/images/anomaly/backstage/7.jpeg",
    "/images/anomaly/backstage/8.jpeg",
    "/images/anomaly/backstage/1.jpeg",
    "/images/anomaly/backstage/9.jpeg",
    "/images/anomaly/backstage/10.jpeg"
  ]

  const crew = [
    { role: "Director", name: "Masha Shaposhnikova" },
    { role: "Producer & Editing", name: "Veranika Isakova" },
    { role: "DOP & Editing", name: "Max Hertz Lomakin" },
    { role: "Sound", name: "Hassibullah Kushkaki" },
    { role: "Music", name: "Berke Baha Dikmen" },
    { role: "Art Department", name: "Veranika Isakova, Zofia Sanjuan - Janiec, Dimitris Matthaiou, Orlando Andersson" },
  ]

  const cast = [
    { role: "Sara Smit", name: "Ines Angelova" },
    { role: "Rob", name: "Robert Boerleider" },
    { role: "Leo", name: "Lu Wang" },
    { role: "Bodi", name: "Grace Kimasi" },
    { role: "Billy", name: "Bill Stevenson" },
  ]

  const labelClass =
    "text-[10.5px] md:text-[11px] tracking-[0.3em] uppercase text-gray-500 mb-1"
  const listClass =
    "text-[13px] md:text-[14px] leading-[1.6] text-[#171717]"

  const meta = [
    { role: "Team", name: "MM Film" },
    { role: "Competition", name: "The 48 Hour Film Project Rotterdam 2026" },
    { role: "Recognition", name: "Best Art Direction & Best Sound Design nominations" },
  ]

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

      {/* VIMEO */}

      <div className="w-[90%] max-w-[1180px] mx-auto aspect-[4/3] md:w-[80%] md:aspect-[2/1]">
        <iframe
          src="https://player.vimeo.com/video/1228545311?h=4868ba8545&transparent=0&title=0&byline=0&portrait=0&badge=0"
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* MAIN HERO BLOCK */}

      <section className="w-full max-w-[1140px] mx-auto my-4 md:my-12 px-5 md:px-8 box-border flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">

        {/* POSTER */}

        <button
          type="button"
          className="w-full max-w-[300px] sm:max-w-[340px] md:max-w-[440px] shrink-0 rounded overflow-hidden shadow-2xl bg-black leading-none mx-auto md:mx-0 anomaly-poster"
          onClick={() => setPosterOpen(true)}
          aria-label="Open Anomaly poster"
        >
          <img
            src="/images/anomaly/poster-nominations.jpeg"
            alt="Anomaly poster"
            className="w-full h-auto block transform scale-[1.01]"
          />
        </button>

        {/* DESCRIPTION & CREDITS */}

        <div className="w-full max-w-[540px] flex flex-col items-center text-center">

          <h1 className="text-[#4A4EFF] text-[18px] md:text-[22px] font-semibold tracking-[0.12em] uppercase mb-3 md:mb-4">
            Anomaly
          </h1>

          {/* SYNOPSIS */}

          <p className="text-[14px] md:text-[15.5px] leading-[1.7] text-gray-600 mb-5">
            Trapped inside an isolated research facility, a group of numbered subjects tries
            to survive the presence of a mysterious entity known as the Anomaly.
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

          <div className={listClass}>
            {meta.map((item) => (
              <div key={item.role}>
                <span className="text-gray-500">{item.role}:</span> {item.name}
              </div>
            ))}
          </div>

          <a
            href="https://www.imdb.com/title/tt50440542/?ref_=nm_knf_t_1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-[13.5px] md:text-[14.5px] text-[#4A4EFF] hover:opacity-70 transition"
          >
            IMDb
          </a>
        </div>
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
            src="/images/anomaly/poster-nominations.jpeg"
            alt="Anomaly poster"
            className="anomaly-poster-lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

      {/* STILLS / FULL-BLEED GALLERY */}

      <section className="w-full m-0 p-0">

        <div className="grid grid-cols-1 md:grid-cols-2 w-full m-0 p-0 leading-none">
          <img
            src="/images/anomaly/death.jpeg"
            alt="Still 1"
            className="w-full h-auto block m-0 p-0"
            loading="lazy"
          />

          <img
            src="/images/anomaly/stairs.jpeg"
            alt="Still 2"
            className="w-full h-auto block m-0 p-0"
            loading="lazy"
          />
        </div>

        <img
          src="/images/anomaly/cover.jpeg"
          alt="Anomaly hero shot"
          className="w-full h-auto block m-0 p-0"
          loading="lazy"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 w-full m-0 p-0 leading-none">
          <img
            src="/images/anomaly/couple.jpeg"
            alt="Still 3"
            className="w-full h-auto block m-0 p-0"
            loading="lazy"
          />

          <img
            src="/images/anomaly/hand.jpeg"
            alt="Still 4"
            className="w-full h-auto block m-0 p-0"
            loading="lazy"
          />
        </div>
      </section>

      {/* BACKSTAGE */}

      <section className="anomaly-backstage">

        <div className="anomaly-backstage-header">
          <h3>Backstage</h3>
          <span>Behind the scenes</span>
        </div>

        <div className="anomaly-gallery-wrapper">
          <BackstageGallery photos={backstagePhotos} />
        </div>

      </section>
    </main>
  )
}