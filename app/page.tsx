import ProjectCard from "./components/ProjectCard"

export default function Home() {
  return (
    <main className="home-grid">

      <ProjectCard
        href="/projects/lore"
        image="/images/lore/cover.jpg"
        title="LORE Sublimity"
        subtitle="Spec Ad"
      />

      <ProjectCard
        href="/projects/doc"
        image="/images/doc/cover.jpg"
        title="Ozharovsky"
        subtitle="Documentary film"
      />

      <ProjectCard
        href="/projects/pavel"
        image="/images/pavel/cover.jpg"
        title="Pavel Fakhrtdinov"
        subtitle="Peaceful Lights Music Show"
      />

      <ProjectCard
        href="/projects/musia"
        image="/images/musia/cover.jpg"
        title="Musia Totibadze"
        subtitle="Peaceful Lights Music Show"
      />

      <ProjectCard
        href="/projects/dream"
        image="/images/dream/cover.jpg"
        title="In a dream maybe"
        subtitle="Atmospheric film"
      />

      <ProjectCard
        href="/projects/ny"
        image="/images/ny/cover.jpg"
        title="City drift"
        subtitle="Cinematic portrait film"
      />

      <ProjectCard
        href="/projects/lime"
        image="/images/lime/cover.jpg"
        title="Lime"
        subtitle="Studio campaign"
      />

    </main>
  )
}