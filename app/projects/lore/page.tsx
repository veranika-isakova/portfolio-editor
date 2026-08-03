export default function DreamPage() {
  const screenshots = [
    "/images/lore/car.jpg",
    "/images/lore/main.jpg",
    "/images/lore/beach.jpg",
    "/images/lore/home.jpg",
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