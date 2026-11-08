import Link from "next/link"
import ProjectCard from "./components/ProjectCard"

// Фильтры на главной. Новый раздел добавляется здесь одной строкой.
// value совпадает с полем category у проектов ниже; null = все проекты.
const categories = [
  { name: "All", value: null },
  { name: "Fiction", value: "fiction" },
  { name: "Documentary", value: "documentary" },
  { name: "Music", value: "music" },
  { name: "Branded", value: "branded" },
  { name: "Experimental", value: "experimental" },
]

const filterClass =
  "transition-colors duration-200 hover:text-black focus:outline-none focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4A4EFF]"

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const params = await searchParams
  const category = params.category ?? null

  const projects = [
    {
      category: "fiction",
      href: "/projects/anomaly",
      image: "/images/anomaly/man.jpeg",
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
      href: "/projects/tartarus",
      image: "/images/tartarus/cover.jpeg",
      title: "Mists of Tartarus",
      subtitle: "Short Film",
    },
    {
      category: "fiction",
      href: "/projects/go",
      image: "/images/go/cover.jpeg",
      title: "Letting Go",
      subtitle: "Short Film",
    },
    {
      category: "music",
      href: "/projects/lights",
      image: "/images/musia/cover.jpg",
      title: "Peaceful Lights",
      subtitle: "Live performances & Short-form",
    },
    {
      category: "branded",
      href: "/projects/lore",
      image: "/images/lore/cover.jpg",
      title: "LORE Sublimity",
      subtitle: "Spec Ad",
    },
   {
      category: "experimental",
      href: "/projects/ny",
      image: "/images/ny/cover.jpg",
      title: "City Drift",
      subtitle: "Cinematic portrait film",
    },
    {
      category: "experimental",
      href: "/projects/dream",
      image: "/images/dream/cover.jpg",
      title: "In a Dream Maybe",
      subtitle: "Atmospheric film",
    },
    {
      category: "branded",
      href: "/projects/lime",
      image: "/images/lime/cover.jpg",
      title: "Lime",
      subtitle: "Spec Ad",
    },
  ]

  const visibleProjects = category
    ? projects.filter((project) => project.category === category)
    : projects

  return (
    <>
      <nav className="category-filter" aria-label="Filter projects">
        {categories.map((item) => (
          <Link
            key={item.name}
            href={item.value ? `/?category=${item.value}` : "/"}
            className={`${filterClass} ${
              category === item.value ? "text-black" : "text-gray-300"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

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
    </>
  )
}