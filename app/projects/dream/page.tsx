export default function DreamPage() {
  const screenshots = [
    "/images/dream/dark.jpg",
    "/images/dream/light.jpg",
    "/images/dream/morning.jpg",
    "/images/dream/phone.jpg",
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

      <section className="project-intro">

        <img
          src="/images/dream/hero-shot.jpg"
          alt="Dream"
          className="project-intro-image"
        />

        <div className="project-intro-text">

          <h2> In a dream maybe</h2>

          <p>
          Atmospheric film exploring intimacy, memory and emotional distance through cinematic imagery and performance.
          </p>

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