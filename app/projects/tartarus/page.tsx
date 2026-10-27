export default function DreamPage() {
  const screenshots = [
    "/images/tartarus/club.jpeg",
    "/images/tartarus/coin.jpeg",
    "/images/tartarus/hero.jpeg",
    "/images/tartarus/neon.jpeg",
  ]

  return (
    <main className="project-page">

      <section className="project-intro">

        <img
          src="/images/tartarus/hero.jpeg"
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
        <img src="/images/tartarus/club.jpeg" alt="" loading="lazy"/>
        <img src="/images/tartarus/coin.jpeg" alt="" loading="lazy"/>
      </div>

      {/* SECOND ROW */}

      <div className="screenshots-grid">
        <img src="/images/tartarus/door.jpeg" alt="" loading="lazy" />
        <img src="/images/tartarus/neon.jpeg" alt="" loading="lazy" />
      </div>

    </main>
  )
}