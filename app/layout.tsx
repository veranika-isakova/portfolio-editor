"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()

  return (
    <html lang="en">
      <body className="bg-white text-black">

        <header className="flex flex-col items-center px-5 py-8 md:px-14 md:py-10">

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5 text-center md:text-left">

            <Link href="/" className="nav-link">
              <h1 className="text-4xl md:text-3xl tracking-tight leading-none hover:opacity-70 transition">
                Veranika Isakova
              </h1>
            </Link>

            <p className="text-lg text-gray-300 leading-none tracking-wide">
              Video Editor
            </p>

          </div>

          <nav className="flex gap-8 text-lg mt-6 md:absolute md:right-14 md:top-10">
            <Link
              href="/"
              className={`nav-link ${
                pathname === "/"
                  ? "text-black"
                  : "text-gray-300 hover:text-black transition"
              }`}
            >
              Work
            </Link>

            <Link
              href="/about"
              className={`nav-link ${
                pathname === "/about"
                  ? "text-black"
                  : "text-gray-300 hover:text-black transition"
              }`}
            >
              Contact
            </Link>
          </nav>

        </header>

        {children}

      </body>
    </html>
  )
}