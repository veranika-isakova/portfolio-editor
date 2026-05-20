import Link from "next/link"
import "./globals.css"

export const metadata = {
  title: "Veranika Isakova",
  description: "Movie Editor Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">

        <header className="flex justify-between items-start px-14 py-10">

          <div className="flex items-center gap-5">
            <h1 className="text-3xl tracking-tight leading-none">
              Veranika Isakova
            </h1>

            <p className="text-lg text-gray-300 leading-none pt-[2px] tracking-wide">
                Video Editor
            </p>
          </div>

          <nav className="flex gap-8 text-lg">
            <Link
              href="/"
              className="text-black"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-gray-300 hover:text-black transition"
            >
              About
            </Link>
          </nav>

        </header>

        {children}

      </body>
    </html>
  )
}