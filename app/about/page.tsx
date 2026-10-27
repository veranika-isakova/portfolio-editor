
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
            is a film & video editor with a background in software
            development and experience across narrative and
            documentary films, commercial projects, live
            performance videos and short-form content. focused
            on storytelling, pacing and emotional impact, with
            an interest in creating visually engaging and
            rhythm-driven work.
          </p>

        <p className="text-base md:text-lg leading-relaxed text-[#676F80]">
            based in rotterdam, available for collaborations.
          </p>
        </div>

      </section>
    </main>
  )
}
