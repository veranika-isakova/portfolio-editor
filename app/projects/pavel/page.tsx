export default function PavelPage() {
  const screenshots = [
    "/images/pavel/detail-shot.png",
    "/images/pavel/close-up.png",
    "/images/pavel/medium-close-up.png",
    "/images/pavel/wide-shot.png",
  ]

  return (
    <main className="project-page">
      <div className="video-wrapper">
        <iframe
          src="https://player.vimeo.com/video/1193989740"
          width="100%"
          height="700"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="screenshots-grid">
        {screenshots.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>
    </main>
  )
}