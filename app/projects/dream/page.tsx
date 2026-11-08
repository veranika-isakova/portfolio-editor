export default function DreamPage() {
  const screenshots = [
    "/images/dream/dark.jpg",
    "/images/dream/light.jpg",
    "/images/dream/morning.jpg",
    "/images/dream/phone.jpg",
  ]

  const credits: { role: string; name: string; highlight?: boolean }[] = [
    { role: "Cinematography", name: "Marina Basistaya"},
    { role: "Edit, Colour & Sound Design", name: "Veranika Isakova" },
    { role: "Model", name: "Tanya Ko" },
    { role: "Made for", name: "rec.stuudio" },
    { role: "Location", name: "LA, California" },
  ]

  return (
    <main className="project-page">

      <div className="video-wrapper">
        <iframe
          src="https://player.vimeo.com/video/1195955716?h=ecf5973eb7&title=0&byline=0&portrait=0&badge=0"
          width="100%"
          height="700"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* INTRO */}

      <section className="project-intro">

        <img
          src="/images/dream/hero-shot.jpg"
          alt="In a Dream Maybe"
          className="project-intro-image"
        />

        <div className="project-intro-text">

          <h2>In a Dream Maybe</h2>

          <p>
            Atmospheric film exploring intimacy, memory and emotional distance through cinematic imagery and performance.
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
        <img src="/images/dream/dark.jpg" alt="" loading="lazy" />
        <img src="/images/dream/light.jpg" alt="" loading="lazy" />
      </div>

      {/* FULL WIDTH IMAGE */}

      <img
        src="/images/dream/face.jpg"
        alt=""
        className="full-width-shot"
      />

      {/* SECOND ROW */}

      <div className="screenshots-grid">
        <img src="/images/dream/morning.jpg" alt="" loading="lazy" />
        <img src="/images/dream/phone.jpg" alt="" loading="lazy" />
      </div>

    </main>
  )
}