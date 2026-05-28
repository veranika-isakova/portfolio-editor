"use client"

import { useState } from "react"

import {
  FaInstagram,
  FaVimeoV,
  FaTelegramPlane,
  FaWhatsapp
} from "react-icons/fa"

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white text-black px-10 pt-6 pb-24">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-start">

        {/* LEFT SIDE */}

        <div className="flex flex-col items-center -translate-y-6">

          <img
            src="/images/profile.jpg"
            alt="Veranika Isakova"
            className="w-full max-w-[470px] object-cover"
          />

          {/* SOCIALS */}

          <div className="mt-10 flex gap-8 text-3xl text-black">

            <a
              href="https://www.instagram.com/veron.isakova/"
              target="_blank"
              className="hover:opacity-60 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://vimeo.com/user223178973"
              target="_blank"
              className="hover:opacity-60 transition"
            >
              <FaVimeoV />
            </a>

            <a
              href="https://t.me/veranika_isakova"
              target="_blank"
              className="hover:opacity-60 transition"
            >
              <FaTelegramPlane />
            </a>

            <a
              href="https://wa.me/+31614517801"
              target="_blank"
              className="hover:opacity-60 transition"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="-translate-y-2">

          <div className="flex justify-center">
            <h1 className="text-5xl font-medium tracking-tight">
              About me
            </h1>
          </div>

          <div className="mt-10 space-y-10 text-[#676f80]">

            {/* MAIN TEXT */}

  <p className="max-w-[560px] text-[26px] leading-[1.45] text-[#676f80] text-justify">
    Film & Video Editor based in Rotterdam, creating cinematic and emotionally driven work across a variety of creative projects.
    Focused on atmosphere, storytelling and visual rhythm.
  </p>

  {/* CONTACT TEXT */}

  <p className="text-[22px] leading-[1.5] text-[#676f80]">
    Feel free to get in touch if you'd like to collaborate.
  </p>

            {/* BUTTON */}

            <div className="flex justify-center pt-2">

              <button
                onClick={() => setIsOpen(true)}
                className="border-2 border-red-500 text-red-500 px-14 py-3 text-base tracking-[0.28em] hover:bg-red-500 hover:text-white transition"
              >
                CONTACT
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* CONTACT MODAL */}

      {isOpen && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50 px-6">

          <div className="bg-white w-full max-w-3xl p-10 relative">

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-3xl hover:opacity-60 transition"
            >
              ×
            </button>

            <h2 className="text-3xl mb-8">
              Hello! Let&apos;s work together.
            </h2>

            <form
              action="https://formspree.io/f/xjgzyblw"
              method="POST"
              className="space-y-7"
            >

              <div className="grid grid-cols-2 gap-4">

                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="border border-gray-300 p-3 outline-none"
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="border border-gray-300 p-3 outline-none"
                />

              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 p-3 outline-none"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full border border-gray-300 p-3 outline-none"
              />

              <textarea
                name="message"
                placeholder="Project Description"
                rows={4}
                className="w-full border border-gray-300 p-3 outline-none resize-none"
              />

              <button className="border border-red-500 text-red-500 px-8 py-3 tracking-[0.2em] hover:bg-red-500 hover:text-white transition">
                SUBMIT
              </button>

            </form>

          </div>

        </div>
      )}

    </main>
  )
}