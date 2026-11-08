export default function DreamPage() {
  const screenshots = [
    "/images/lore/car.jpg",
    "/images/lore/main.jpg",
    "/images/lore/beach.jpg",
    "/images/lore/home.jpg",
  ]

  const credits: { role: string; name: string; highlight?: boolean }[] = [
    { role: "Cinematography", name: "Marina Basistaya" },
    { role: "Edit, Colour & Sound Design", name: "Veranika Isakova" },
    { role: "Model", name: "Aidan Will" },
    { role: "Made for", name: "rec.stuudio" },
    { role: "Location", name: "LA, California" },
  ]

  return (
    <main className="project-page">

      <div className="video-wrapper">
        <iframe
          src="https://player.vimeo.com/video/1215109719?h=ecf5973eb7&title=0&byline=0&portrait=0&badge=0"
          width="100%"
          height="700"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>

      <section className="project-intro">

        <img
          src="/images/lore/hero-shot.jpg"
          alt="Lore"
          className="project-intro-image"
        />

        <div className="project-intro-text">

          <h2>LORE Sublimity</h2>

          <p>
          Spec commercial created for LORE Sublimity. 
          A story of warmth, memory and the freedom found in a single scent.
          </p>

          <div className="mt-5 text-[14px] md:text-[15px] leading-[1.9] text-[#171717]">
            {credits.map((credit) => (
              <div key={credit.role}>
                <span className="text-gray-500">{credit.role}:</span>{" "}
                {credit.highlight ? (
                  <span className="text-[#4A4EFF]">{credit.name}</span>
                ) : (
                  credit.name
                )}
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* SCREENSHOTS */}

      {/* FIRST ROW */}

      <div className="screenshots-grid">
        <img src="/images/lore/beach.jpg" alt="" loading="lazy" />
        <img src="/images/lore/main.jpg" alt="" loading="lazy" />
      </div>

      {/* FULL WIDTH IMAGE */}

      <img
        src="/images/lore/car.jpg"
        alt=""
        className="full-width-shot"
      />

      {/* SECOND ROW */}

      <div className="screenshots-grid">
        <img src="/images/lore/advert_beach.jpg" alt="" loading="lazy" />
        <img src="/images/lore/face.jpg" alt="" loading="lazy" />
      </div>

    </main>
  )
}