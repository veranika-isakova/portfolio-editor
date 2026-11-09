
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 md:px-14 py-10 md:py-16">
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center md:items-end">

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

          <div className="space-y-3 text-base md:text-lg leading-relaxed text-[#676F80]">
            <p>
              Film & Video Editor based in Rotterdam, working across fiction, documentary, music and branded films.
            </p>
            <p>
              I enjoy finding the right rhythm for each story and working closely with directors to bring their vision to the screen. Every project needs something different and adapting to that is part of what I like about editing.
            </p>
            <p>
              My technical background helps me keep post-production organised and running smoothly, so the focus can stay on the story.
            </p>
            <p>
              Available for projects in the Netherlands and remotely.
            </p>
          </div>

        <a
        href="/images/Veranika_Isakova_Film_Editor_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="self-center md:self-start md:ml-[104px] inline-flex items-center justify-center h-12 mt-6 bg-[#4A4EFF] text-white px-8 text-sm tracking-[0.2em] hover:opacity-90 transition"
        >
        view my cv (pdf)
        </a>
        </div>

      </section>
    </main>
  )
}
