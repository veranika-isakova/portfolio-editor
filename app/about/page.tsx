
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 md:px-14 py-10 md:py-16">
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

        {/* PHOTO */}
        <div className="w-full max-w-[950px] mx-auto md:mx-0">
          <img
            src="/images/main-photo.jpg"
            alt="Veranika Isakova"
            className="w-full h-auto block object-cover"
          />
        </div>

        {/* INTRODUCTION */}
        <div className="flex flex-col items-start">
          <h1 className="text-3xl md:text-5xl tracking-tight font-medium mb-6">
            Veranika Isakova
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-[#676F80]">
            Film & Video Editor working across fiction, documentary, commercial projects and short-form content. 
            Interested in visual storytelling, rhythm and the relationship between image and sound. 
            With a background in software development, I combine a technical perspective with a creative approach to editing.    
          </p>

        <p className="text-base md:text-lg leading-relaxed text-[#676F80]">
            Based in Rotterdam, available for collaborations worldwide.
          </p>
        <a
        href="/images/Veranika_Isakova_Film_Editor_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-7 bg-[#4A4EFF] text-white px-8 py-3 text-sm tracking-[0.2em] hover:opacity-90 transition"
        >
        view my cv (pdf)
        </a>
        </div>

      </section>
    </main>
  )
}
