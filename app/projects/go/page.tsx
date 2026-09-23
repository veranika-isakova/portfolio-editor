export default function DreamPage() {
  const screenshots = [
    "/images/go/bed.jpg",
    "/images/go/device.jpg",
    "/images/go/happiness.jpg",
    "/images/go/lonely.jpg",
  ]

  return (
    <main className="project-page">

      <section className="project-intro">

        <img
          src="/images/go/hero-shot.jpg"
          alt="go"
          className="project-intro-image"
        />

        <div className="project-intro-text">

          <h2>Letting Go</h2>

          <p>
          Trapped in a cycle of grief, David uses a futuristic device to relive memories of his deceased boyfriend, but he must choose between a perfect digital dream and the painful reality of letting go.
          </p>
          <p>
          Directed by Carlos Montenegro.
          </p>
          <span className="coming-soon">Coming Soon</span>

        </div>

      </section>

      {/* SCREENSHOTS */}

      {/* FIRST ROW */}

      {/* <div className="screenshots-grid">
        <img src="/images/go/device.jpg" alt="" loading="lazy"/>
        <img src="/images/go/couple.jpg" alt="" loading="lazy"/>
      </div> */}

      {/* FULL WIDTH IMAGE */}

      {/* <img
        src="/images/go/lonely.jpg"
        alt="go"
        className="full-width-shot"
      /> */}

      {/* SECOND ROW */}

      {/* <div className="screenshots-grid">
        <img src="/images/go/happiness.jpg" alt="" loading="lazy" />
        <img src="/images/go/bed.jpg" alt="" loading="lazy" />
      </div> */}

    </main>
  )
}