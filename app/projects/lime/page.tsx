export default function LimePage() {
  const screenshots = [
    "/images/lime/drone.jpg",
    "/images/lime/face.jpg",
    "/images/lime/fish.jpg",
    "/images/lime/grass.jpg",
  ]

  return (
    <main className="project-page">

      {/* VIDEO */}

      <div className="video-wrapper">
        <iframe
          src="https://player.vimeo.com/video/1196343457?fl" 
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