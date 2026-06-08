import ProjectCard from "./components/ProjectCard"

export default function Home() {
  return (
    <main className="home-grid">

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
        title="in a dream maybe"
        subtitle="atmospheric film"
      />

      <ProjectCard
        href="/projects/lime"
        image="/images/lime/cover.jpg"
        title="lime"
        subtitle="studio campaign"
      />

      <ProjectCard
        href="/projects/ny"
        image="/images/ny/cover.jpg"
        title="city drift"
        subtitle="cinematic portrait film"
      />

    </main>
  )
}