"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import Footer from "./components/footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
    <html lang="en">
      <head>
        <title>Veranika Isakova | Film Editor</title>

        <meta
          name="description"
          content="Film Editor based in Rotterdam. Documentary, narrative and short film projects."
        />

        <meta
          name="google-site-verification"
          content="Lk2aBGPCuGHRUwZoFNoCg5mCk22lGoTEy25nKLj2gxM"
        />
      </head>

      <body className="bg-white text-black min-h-screen flex flex-col">

        <header className="flex justify-between items-start px-14 py-10 mobile-header">

          {/* NAME */}
          <div className="flex items-center gap-5 mobile-brand">

            <Link href="/" className="nav-link">
              <h1 className="text-3xl tracking-tight leading-none hover:opacity-70 transition">
                Veranika Isakova
              </h1>
            </Link>

            <p className="mt-[3px] text-lg text-gray-300 leading-none tracking-wide">
              Film Editor
            </p>

          </div>


          {/* NAVIGATION */}
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

        </header>

        <main className="flex-1">
          {children}
        </main>

        <Footer />

        <Analytics />

      </body>
    </html>
  )
}