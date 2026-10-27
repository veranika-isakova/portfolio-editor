
"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { useRef } from "react"

export default function Navigation() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const categoryRef = useRef<HTMLDivElement>(null)

  const activeCategory = searchParams.get("category")

  const categories = [
    { name: "Fiction", value: "fiction" },
    { name: "Documentary", value: "documentary" },
    { name: "Music", value: "music" },
    { name: "Branded", value: "branded" },
    { name: "Visuals", value: "visuals" },
  ]

  const linkHoverClass =
    "transition-colors duration-200 hover:text-black"

  const centerCategory = (item: HTMLElement) => {
    const container = categoryRef.current
    if (!container) return

    const containerRect = container.getBoundingClientRect()
    const itemRect = item.getBoundingClientRect()

    const offset =
      itemRect.left -
      containerRect.left -
      container.clientWidth / 2 +
      itemRect.width / 2

    container.scrollBy({
      left: offset,
      behavior: "smooth",
    })
  }

  const resetCategoryScroll = () => {
    categoryRef.current?.scrollTo({
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <nav className="main-nav">

      {/* CATEGORIES */}
      <div className="category-nav-wrapper">
        <div className="category-nav" ref={categoryRef}>
          {categories.map((category) => (
            <Link
              key={category.value}
              href={`/?category=${category.value}`}
              className={`nav-category ${linkHoverClass} ${
                pathname === "/" &&
                activeCategory === category.value
                  ? "text-black"
                  : "text-gray-300"
              }`}
              onClick={(event) => {
                centerCategory(event.currentTarget)
              }}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      {/* HOME */}
      <Link
        href="/"
        onClick={resetCategoryScroll}
        className={`nav-link home-link ${linkHoverClass} ${
          pathname === "/" && !activeCategory
            ? "text-black"
            : "text-gray-300"
        }`}
      >
        Home
      </Link>

      {/* ABOUT */}
      <Link
        href="/about"
        className={`nav-link ${linkHoverClass} ${
          pathname === "/about"
            ? "text-black"
            : "text-gray-300"
        }`}
      >
        About
      </Link>

      {/* CONTACT */}
      <Link
        href="/contact"
        className={`nav-link contact-link ${linkHoverClass} ${
          pathname === "/contact"
            ? "text-black"
            : "text-gray-300"
        }`}
      >
        Contact
      </Link>
    </nav>
  )
}
