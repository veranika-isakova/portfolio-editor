"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

type Props = {
  href: string
  image: string
  title: string
  subtitle: string
  className?: string
}

export default function ProjectCard({
  href,
  image,
  title,
  subtitle,
  className = "",
}: Props) {

  const pathname = usePathname()

  const [isMobile, setIsMobile] = useState(false)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)
  }, [])

  useEffect(() => {
    setRevealed(false)
  }, [pathname])

  useEffect(() => {

    const closeCard = () => {
      setRevealed(false)
    }

    window.addEventListener(
      "close-project-card",
      closeCard
    )

    return () => {
      window.removeEventListener(
        "close-project-card",
        closeCard
      )
    }

  }, [])

  const openCard = () => {

    window.dispatchEvent(
      new Event("close-project-card")
    )

    setRevealed(true)
  }

  if (isMobile) {

    return (

        <div
          className={`project-card ${className}`}
          onClick={openCard}
        >

        {revealed ? (

          <div className="mobile-overlay">

            <h2>
              <span className="title-main">{title}</span>
              <br />
              <span className="title-sub">{subtitle}</span>
            </h2>

            <Link
              href={href}
              className="mobile-play"
              onClick={(e) => e.stopPropagation()}
            >
              VIEW
            </Link>

          </div>

        ) : (

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
        )}

      </div>

    )
  }

  return (

    <Link
      href={href}
      className={`project-card ${className}`}
    >

      <img
        src={image}
        alt={title}
        style={
          href === "/projects/lore"
            ? { objectPosition: "90% center" }
            : undefined
        }
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