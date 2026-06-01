"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

type Props = {
  href: string
  image: string
  title: string
  subtitle: string
}

export default function ProjectCard({
  href,
  image,
  title,
  subtitle,
}: Props) {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)
  }, [])

  if (isMobile) {
    return (
      <div className="project-card">

        <img
          src={image}
          alt={title}
        />

        <div className="overlay mobile-overlay">
          <h2>
            <span className="title-main">{title}</span>
            <br />
            <span className="title-sub">{subtitle}</span>
          </h2>
        </div>

        <Link
          href={href}
          className="mobile-play"
        >
          ▶
        </Link>

      </div>
    )
  }

  return (
    <Link href={href} className="project-card">

      <img
        src={image}
        alt={title}
      />

      <div className="overlay">
        <h2>
          <span className="title-main">{title}</span>
          <br />
          <span className="title-sub">{subtitle}</span>
        </h2>
      </div>

      <div className="view-circle" />

    </Link>
  )
}