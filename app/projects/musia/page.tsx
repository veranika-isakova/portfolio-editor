export default function MusiaPage() {
  const screenshots = [
    "/images/musia/room.png",
    "/images/musia/first-look.png",
    "/images/musia/drums.png",
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