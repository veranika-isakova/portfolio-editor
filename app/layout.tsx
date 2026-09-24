"use client"

import Link from "next/link"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import Footer from "./components/footer"
import Navigation from "./components/Navigation"
import { Suspense } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
          <Suspense fallback={null}>
            <Navigation />
          </Suspense>

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