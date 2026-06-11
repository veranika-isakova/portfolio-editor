export default function MusiaPage() {
  const screenshots = [
    "/images/musia/room.jpg",
    "/images/musia/drums.jpg",
    "/images/musia/face.jpg",
    "/images/musia/golden.jpg",
  ]

  return (
    <main className="project-page">

      <div className="video-wrapper">
      <iframe
        src="https://player.vimeo.com/video/1194015939?h=630bee9bb2&title=0&byline=0&portrait=0&badge=0"
        width="100%"
        height="700"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
      </div>

      <section className="project-intro">

        <img
          src="/images/musia/hero-shot.jpg"
          alt="Musia Totibadze"
          className="project-intro-image"
        />

        <div className="project-intro-text">

          <h2> Peaceful Lights</h2>

          <p>
            Live performance recorded as part of a New Year concert
            featuring singer and actress Musia Totibadze.
          </p>

        </div>

      </section>

      <div className="screenshots-grid">
        {screenshots.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>

    </main>
  )
}