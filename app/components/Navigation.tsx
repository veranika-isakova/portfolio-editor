"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const activeCategory = searchParams.get("category")

  const categories = [
    { name: "Fiction", value: "fiction" },
    { name: "Documentary", value: "documentary" },
    { name: "Music", value: "music" },
    { name: "Branded", value: "branded" },
    { name: "Visuals", value: "visuals" },
  ]

  return (
    <nav className="main-nav">

      {/* HOME */}
      <Link
        href="/"
        className={`nav-link home-link ${
          !activeCategory && pathname === "/"
            ? "text-black"
            : "text-gray-300"
        }`}
      >
        Home
      </Link>

      {/* CATEGORIES */}
        <div className="category-nav-wrapper">

        <div className="category-nav">

            {categories.map((category) => (
            <Link
                key={category.value}
                href={`/?category=${category.value}`}
                className={`nav-category ${
                activeCategory === category.value
                    ? "text-black"
                    : "text-gray-300"
                }`}
            >
                {category.name}
            </Link>
            ))}

        </div>

        </div>

      {/* CONTACT */}
      <Link
        href="/about"
        className={`nav-link contact-link ${
          pathname === "/about"
            ? "text-black"
            : "text-gray-300"
        }`}
      >
        Contact
      </Link>

    </nav>
  )
}