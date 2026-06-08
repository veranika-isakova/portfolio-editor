export default function LimePage() {

  return (
    <main className="project-page">

      {/* VIDEO */}

      <div className="video-wrapper">
        <iframe
          src="https://player.vimeo.com/video/1196343457?h=4868ba8545&title=0&byline=0&portrait=0&badge=0"
          width="100%"
          height="700"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* PROJECT DESCRIPTION */}

      <section className="project-intro">

        <img
          src="/images/lime/hero-shot.jpg"
          alt="Lime"
          className="project-intro-image"
        />

        <div className="project-intro-text">

          <h2> Lime</h2>

          <p>
          Visual campaign film for LIME Studio Collection.
          </p>

        </div>

      </section>

      {/* FIRST ROW */}

      <div className="screenshots-grid">
        <img src="/images/lime/sleep.jpg" alt="" />
        <img src="/images/lime/twins.jpg" alt="" />
      </div>

      {/* FULL WIDTH HERO SHOT */}

      <img
        src="/images/lime/face.jpg"
        alt=""
        className="full-width-shot"
      />

      {/* SECOND ROW */}

      <div className="screenshots-grid">
        <img src="/images/lime/fish.jpg" alt="" />
        <img src="/images/lime/drone.jpg" alt="" />
      </div>

    </main>
  )
}