export default function DreamPage() {
  const screenshots = [
    "/images/doc/device.jpg",
    "/images/doc/f.jpg",
    "/images/doc/radiation.jpg",
    "/images/doc/sit.jpg",
  ]

  return (
    <main className="project-page">

      <section className="project-intro">

        <img
          src="/images/doc/hero-shot.jpg"
          alt="doc"
          className="project-intro-image"
        />

        <div className="project-intro-text">

          <h2>Ozharovsky</h2>

          <p>
          A documentary film about nuclear physicist and environmental activist Andrey Ozharovsky.
          </p>
          <p>
          Directed by Dmitry Grigoriev.
          </p>
          <span className="coming-soon">Coming Soon</span>

        </div>

      </section>

      {/* SCREENSHOTS */}

      {/* FIRST ROW */}

      <div className="screenshots-grid">
        <img src="/images/doc/cave.jpg" alt="" />
        <img src="/images/doc/radiation.jpg" alt="" />
      </div>

      {/* FULL WIDTH IMAGE */}

      <img
        src="/images/doc/poster.png"
        alt="doc"
        className="full-width-shot"
      />

      {/* SECOND ROW */}

      <div className="screenshots-grid">
        <img src="/images/doc/f.jpg" alt="" />
        <img src="/images/doc/device.jpg" alt="" />
      </div>

    </main>
  )
}