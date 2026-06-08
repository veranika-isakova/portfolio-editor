export default function DreamPage() {
  const screenshots = [
    "/images/ny/alone.jpg",
    "/images/ny/face.jpg",
    "/images/ny/ny.jpg",
    "/images/ny/ring.jpg",
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

      <section className="project-intro">

        <img
          src="/images/ny/hero.jpg"
          alt="NY"
          className="project-intro-image"
        />

        <div className="project-intro-text">

          <h2>City drift</h2>

          <p>
          Cinematic portrait film exploring moments of stillness within the rhythm of New York City.
          </p>

        </div>

      </section>

      {/* SCREENSHOTS */}

      {/* FIRST ROW */}

      <div className="screenshots-grid">
        <img src="/images/ny/city.jpg" alt="" />
        <img src="/images/ny/ring.jpg" alt="" />
      </div>

      {/* FULL WIDTH IMAGE */}

      <img
        src="/images/ny/big.jpg"
        alt=""
        className="full-width-shot"
      />

      {/* SECOND ROW */}

      <div className="screenshots-grid">
        <img src="/images/ny/alone.jpg" alt="" />
        <img src="/images/ny/ny.jpg" alt="" />
      </div>

    </main>
  )
}