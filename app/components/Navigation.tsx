"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { name: "Work", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const linkClass =
  "nav-link transition-colors duration-200 hover:text-black focus:outline-none focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4A4EFF]"

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="main-nav">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${linkClass} ${
            pathname === link.href ? "text-black" : "text-gray-300"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
