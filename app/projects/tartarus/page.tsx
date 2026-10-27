export default function DreamPage() {
  const screenshots = [
    "/images/tartarus/club.jpg",
    "/images/tartarus/coin.jpg",
    "/images/tartarus/hero.jpg",
    "/images/tartarus/neon.jpg",
  ]

  return (
    <main className="project-page">

      <section className="project-intro">

        <img
          src="/images/tartarus/hero.jpg"
          alt="tartarus"
          className="project-intro-image"
        />

        <div className="project-intro-text">

          <h2>Mists of Tartarus</h2>

          <p>
          A surreal retelling of the myth of Orpheus and Eurydice, exploring the boundaries between love, loss and death through the power of music.
          </p>
          <p>
          Directed by Django van den Busken.
          </p>
          <span className="coming-soon">Coming Soon</span>

        </div>

      </section>

      {/* SCREENSHOTS */}

      {/* FIRST ROW */}

      <div className="screenshots-grid">
        <img src="/images/tartarus/club.jpg" alt="" loading="lazy"/>
        <img src="/images/tartarus/coin.jpg" alt="" loading="lazy"/>
      </div>

      {/* SECOND ROW */}

      <div className="screenshots-grid">
        <img src="/images/tartarus/door.jpg" alt="" loading="lazy" />
        <img src="/images/tartarus/neon.jpg" alt="" loading="lazy" />
      </div>

    </main>
  )
}