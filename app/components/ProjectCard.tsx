"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import type { MouseEvent } from "react"

type Props = {
  href: string
  id?: string
  image: string
  title: string
  subtitle: string
  className?: string
}

const CLOSE_EVENT = "close-project-card"

export default function ProjectCard({
  href,
  id,
  image,
  title,
  subtitle,
  className = "",
}: Props) {
  const [revealed, setRevealed] = useState(false)

  // Only one card stays revealed at a time
  useEffect(() => {
    const close = () => setRevealed(false)
    window.addEventListener(CLOSE_EVENT, close)
    return () => window.removeEventListener(CLOSE_EVENT, close)
  }, [])

  // Touch screens: first tap shows the title and the blue dot, second tap opens the project.
  // Mouse: hover shows them (CSS), click opens right away.
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const isTouch = window.matchMedia("(hover: none)").matches
    if (!isTouch || revealed) return

    event.preventDefault()
    window.dispatchEvent(new Event(CLOSE_EVENT))
    setRevealed(true)
  }

  return (
    <Link
      id={id}
      href={href}
      onClick={handleClick}
      className={`project-card-link ${className}`}
    >
      <div className={`project-card ${revealed ? "revealed" : ""}`}>
        <img
          src={image}
          alt={title}
          draggable={false}
          style={
            href === "/projects/lore"
              ? { objectPosition: "90% center" }
              : undefined
          }
        />

        {/* Title + blue dot: on hover (mouse) or after the first tap (touch) */}
        <div className="overlay">
          <h2>
            <span className="title-main">{title}</span>
            <br />
            <span className="title-sub">{subtitle}</span>
          </h2>
        </div>

        <div className="view-circle" />
      </div>
    </Link>
  )
}
