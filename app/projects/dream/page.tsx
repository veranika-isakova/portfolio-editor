export default function DreamPage() {
  const screenshots = [
    "/images/dream/roof.jpg",
    "/images/dream/dark.jpg",
    "/images/dream/face.jpg",
    "/images/dream/light.jpg"
  ]

  return (
    <main className="project-page">

      {/* VIDEO */}

      <div className="video-wrapper">
        <iframe
          src="https://player.vimeo.com/video/1195955716"
          width="100%"
          height="700"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* SCREENSHOTS */}

      <div className="screenshots-grid">
        {screenshots.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>

    </main>
  )
}