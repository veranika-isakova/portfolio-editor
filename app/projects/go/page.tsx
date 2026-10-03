"use client"

import { useEffect, useState } from "react"

export default function GoPage() {
  const [posterOpen, setPosterOpen] = useState(false)

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

        <div className="w-full max-w-[540px] flex flex-col items-start text-left">

          <h1 className="text-[#4A4EFF] text-2xl md:text-3xl font-bold tracking-widest uppercase mb-1.5 md:mb-2">
            Letting Go
          </h1>


          {/* SYNOPSIS */}

          <div className="mb-4 md:mb-5">

            <p className="text-[13.5px] md:text-[14.5px] leading-relaxed text-gray-600 m-0">
              Trapped in a cycle of grief, David uses a futuristic device
              to relive memories of his deceased boyfriend, but he must
              choose between a perfect digital dream and the painful
              reality of letting go.
            </p>

          </div>


          {/* KEY CREW & CAST GRID */}

          <div className="grid grid-cols-2 gap-4 md:gap-6 w-full mb-4 md:mb-5">

            {/* KEY CREW */}

            <div>

              <h3 className="text-[#4A4EFF] text-[11px] md:text-[12px] font-bold tracking-widest uppercase mb-1.5 md:mb-2">
                Key Crew
              </h3>

              <div className="text-[12.5px] md:text-[13.5px] leading-relaxed text-[#171717]">

                <div>
                  <span className="text-gray-500">Director / Producer:</span>{" "}
                  Carlos Montenegro
                </div>

                <div>
                  <span className="text-gray-500">Co-Director:</span>{" "}
                  Natisa Jones
                </div>

                <div>
                  <span className="text-gray-500">Director of Photography:</span>{" "}
                  Zbigniew Zielinski
                </div>

                <div>
                  <span className="text-gray-500">Editors:</span>{" "}
                  Veranika Isakova, Carlos Montenegro
                </div>

                <div>
                  <span className="text-gray-500">Colour Grader:</span>{" "}
                  Pieter de Pagie
                </div>

                <div>
                  <span className="text-gray-500">Sound Recordist / Composer:</span>{" "}
                  Morgan Whitney
                </div>

                <div>
                  <span className="text-gray-500">Composer:</span>{" "}
                  Matthew Torres
                </div>

              </div>

            </div>


            {/* CAST */}

            <div>

              <h3 className="text-[#4A4EFF] text-[11px] md:text-[12px] font-bold tracking-widest uppercase mb-1.5 md:mb-2">
                Cast
              </h3>

              <div className="text-[12.5px] md:text-[13.5px] leading-relaxed text-[#171717]">

                <div>
                  <span className="text-gray-500">David:</span>{" "}
                  Carlos Montenegro
                </div>

                <div>
                  <span className="text-gray-500">Nick:</span>{" "}
                  Shreyas Bettadapura
                </div>

              </div>

            </div>

          </div>


          {/* META INFO */}

          <div className="text-[12.5px] md:text-[13.5px] text-gray-500 mb-5 md:mb-6 leading-relaxed">

            <span className="coming-soon">Festival premiere soon</span>

          </div>

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