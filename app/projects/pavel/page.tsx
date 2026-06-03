export default function PavelPage() {
  const screenshots = [
    "/images/pavel/guitar.png",
    "/images/pavel/close-up.png",
    "/images/pavel/medium-close-up.png",
    "/images/pavel/wide-shot.png",
  ]

  return (
    <main className="project-page">

      <div className="video-wrapper">
        <iframe
          src="https://player.vimeo.com/video/1193989740?h=f8e302a771&title=0&byline=0&portrait=0&badge=0"
          width="100%"
          height="700"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* PROJECT INTRO */}

      <section className="project-intro">

        <img
          src="/images/pavel/hero-shot.png"
          alt="Pavel Fakhrtdinov"
          className="project-intro-image"
        />

          <div className="project-intro-text max-w-[700px]">

            <h2 className="text-center text-[#4A4EFF] mb-8">
              Peaceful Lights
            </h2>

            <p className="text-center text-[#676f80] leading-[1.7]">
              Live performance recorded as part of a New Year concert
              featuring singer-songwriter Pavel Fakhrtdinov
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