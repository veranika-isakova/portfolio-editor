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

        <header className="flex justify-between items-start px-14 py-10 mobile-header">

          <div className="flex items-center gap-5 mobile-brand">

            <Link href="/" className="nav-link">
              <h1 className="text-3xl tracking-tight leading-none hover:opacity-70 transition">
                Veranika Isakova
              </h1>
            </Link>

            <div className="mt-2 flex flex-col items-center">
              <p className="text-lg text-gray-300 leading-none pt-[8px] tracking-wide">
                Film Editor
              </p>

              <div className="mt-2 h-[2px] w-8 bg-[#4A4EFF]" />
            </div>

          </div>

          <nav className="flex gap-8 text-lg mobile-nav">

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