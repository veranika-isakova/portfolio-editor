export default function DreamPage() {
  const screenshots = [
    "/images/ny/alone.jpg",
    "/images/ny/face.jpg",
    "/images/ny/ny.jpg",
    "/images/ny/ring.jpg",
  ]

  const credits: { role: string; name: string; highlight?: boolean }[] = [
    { role: "Cinematography", name: "Marina Basistaya" },
    { role: "Edit, Colour & Sound Design", name: "Veranika Isakova" },
    { role: "Model", name: "Anastasiia Larkicheva" },
    { role: "Made for", name: "rec.stuudio" },
  ]

  return (
    <main className="project-page">

      <div className="video-wrapper">
        <iframe
          src="https://player.vimeo.com/video/1199373908?h=b5e6eccef2&title=0&byline=0&portrait=0&badge=0"
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
          src="/images/ny/hero.jpg"
          alt="City Drift"
          className="project-intro-image"
        />

        <div className="project-intro-text">

          <h2>City Drift</h2>

          <p>
            Cinematic portrait film exploring moments of stillness within the rhythm of New York City.
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
        <img src="/images/ny/city.jpg" alt="" loading="lazy" />
        <img src="/images/ny/ring.jpg" alt="" loading="lazy" />
      </div>

      {/* FULL WIDTH IMAGE */}

      <img
        src="/images/ny/big.jpg"
        alt=""
        className="full-width-shot"
      />

      {/* SECOND ROW */}

      <div className="screenshots-grid">
        <img src="/images/ny/face.jpg" alt="" loading="lazy" />
        <img src="/images/ny/ny.jpg" alt="" loading="lazy" />
      </div>

    </main>
  )
}