export default function MusiaPage() {
  const screenshots = [
    "/images/musia/room.png",
    "/images/musia/drums.png",
    "/images/musia/face.jpg",
    "/images/musia/golden.png",
  ]

  return (
    <main className="project-page">

      <div className="video-wrapper">
        <iframe
          src="https://player.vimeo.com/video/1194015939"
          width="100%"
          height="700"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>

      <section className="project-intro">

        <img
          src="/images/musia/hero-shot.png"
          alt="Musia Totibadze"
          className="project-intro-image"
        />

        <div className="project-intro-text">

          <h2> Peaceful Lights</h2>

          <p>
            Live performance recorded as part of a New Year concert
            featuring singer and actress Musia Totibadze
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