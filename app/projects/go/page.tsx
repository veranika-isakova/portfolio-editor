export default function GoPage() {
  const screenshots = [
    "/images/go/bed.jpg",
    "/images/go/device.jpg",
    "/images/go/happiness.jpg",
    "/images/go/lonely.jpg",
  ]

  return (
    <main className="project-page">

      {/* HERO / INTRO */}

      <section className="project-intro">

        <img
          src="/images/go/hero-shot.jpg"
          alt="go"
          className="project-intro-image"
        />

        <div className="project-intro-text">

          <h2>Letting Go</h2>

          <p>
            Trapped in a cycle of grief, David uses a futuristic device to
            relive memories of his deceased boyfriend, but he must choose
            between a perfect digital dream and the painful reality of
            letting go.
          </p>

          <span className="coming-soon">FESTIVAL PREMIERE SOON</span>

        </div>

      </section>


      {/* KEY CREW & CAST */}

      <section className="project-credits">

        <div className="project-credits-grid">

          {/* KEY CREW */}

          <div>
            <h3 className="text-[#4A4EFF] text-[11px] md:text-[12px] font-bold tracking-widest uppercase mb-3">
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
                <span className="text-gray-500">Composers:</span>{" "}
                Morgan Whitney, Matthew Torres
              </div>

            </div>
          </div>


          {/* CAST */}

          <div className="-translate-x-[8px]">

            <h3 className="text-[#4A4EFF] text-[11px] md:text-[12px] font-bold tracking-widest uppercase mb-3">
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

      </section>


      {/* SCREENSHOTS */}

      <div className="screenshots-grid">

        <img
          src="/images/go/device.jpg"
          alt=""
          loading="lazy"
        />

        <img
          src="/images/go/couple.jpg"
          alt=""
          loading="lazy"
        />

      </div>


      <div className="screenshots-grid">

        <img
          src="/images/go/happiness.jpg"
          alt=""
          loading="lazy"
        />

        <img
          src="/images/go/bed.jpg"
          alt=""
          loading="lazy"
        />

      </div>

    </main>
  )
}