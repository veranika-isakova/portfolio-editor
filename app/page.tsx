"use client"

import { useSearchParams } from "next/navigation"
import ProjectCard from "./components/ProjectCard"

export default function Home() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category")

  const projects = [
    {
      category: "fiction",
      href: "/projects/anomaly",
      image: "/images/anomaly/man.jpg",
      title: "Anomaly",
      subtitle: "48 Hour Film Project",
    },
    {
      category: "documentary",
      href: "/projects/doc",
      image: "/images/doc/cover.jpg",
      title: "Ozharovsky",
      subtitle: "Documentary film",
    },
    {
      category: "fiction",
      href: "/projects/go",
      image: "/images/go/cover.jpg",
      title: "Letting Go",
      subtitle: "Short Film",
    },
    {
      category: "visuals",
      href: "/projects/ny",
      image: "/images/ny/cover.jpg",
      title: "City drift",
      subtitle: "Cinematic portrait film",
    },
    {
      category: "music",
      href: "/projects/pavel",
      image: "/images/pavel/cover.jpg",
      title: "Pavel Fakhrtdinov",
      subtitle: "Peaceful Lights Music Show",
    },
    {
      category: "music",
      href: "/projects/musia",
      image: "/images/musia/cover.jpg",
      title: "Musia Totibadze",
      subtitle: "Peaceful Lights Music Show",
    },
    {
      category: "branded",
      href: "/projects/lore",
      image: "/images/lore/cover.jpg",
      title: "LORE Sublimity",
      subtitle: "Spec Ad",
    },
    {
      category: "visuals",
      href: "/projects/dream",
      image: "/images/dream/cover.jpg",
      title: "In a dream maybe",
      subtitle: "Atmospheric film",
    },
    {
      category: "branded",
      href: "/projects/lime",
      image: "/images/lime/cover.jpg",
      title: "Lime",
      subtitle: "Studio campaign",
    },
  ]

  const visibleProjects = category
    ? projects.filter((project) => project.category === category)
    : projects

  return (
    <div className="home-grid">
      {visibleProjects.map((project) => (
        <ProjectCard
          key={project.href}
          href={project.href}
          image={project.image}
          title={project.title}
          subtitle={project.subtitle}
        />
      ))}
    </div>
  )
}