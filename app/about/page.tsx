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

      {/* TOP SECTION */}

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">

        {/* PHOTO */}

        <div className="flex flex-col items-center">

          <img
            src="/images/profile.jpg"
            alt="Veranika Isakova"
            className="w-full max-w-[390px] object-cover"
          />

          {/* SOCIALS */}

            <div className="mt-10 flex flex-col items-center">

            <div className="flex gap-8 text-3xl">

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

            {/* CONTACT BUTTON */}

            <button
                onClick={() => setIsOpen(true)}
                className="mt-8 border-2 border-red-500 text-red-500 px-14 py-3 text-base tracking-[0.28em] hover:bg-red-500 hover:text-white transition"
            >
                CONTACT
            </button>

            </div>

        </div>

        {/* TEXT */}

        <div>

        <div className="flex justify-center">
        <h1 className="text-5xl font-medium tracking-tight">
            About me
        </h1>
        </div>

          <div className="mt-10 space-y-8 text-[#676f80] text-2xl leading-[1.7]">

            <p>
            Film & Video Editor based in Rotterdam, focused on music films, narrative cinema, documentaries and atmospheric storytelling.
            </p>

          {/* SOFTWARE ICONS */}

            <div className="mt-12 flex justify-center gap-12">

            {/* Premiere */}

            <div className="w-28 flex flex-col items-center gap-3">

                <img
                src="/icons/premiere-icon.png"
                alt="Premiere Pro"
                className="w-10 h-10 object-contain"
                />

                <span className="text-sm text-center text-black leading-tight">
                Premiere Pro
                </span>

            </div>

            {/* DaVinci */}

            <div className="w-28 flex flex-col items-center gap-3">

                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">

                <img
                    src="/icons/davinci-icon.png"
                    alt="DaVinci Resolve"
                    className="w-6 h-6 object-contain invert"
                />

                </div>

                <span className="text-sm text-center text-black leading-tight">
                DaVinci
                </span>

            </div>

            {/* After Effects */}

            <div className="w-28 flex flex-col items-center gap-3">

                <img
                src="/icons/ae-icon.png"
                alt="After Effects"
                className="w-10 h-10 object-contain"
                />

                <span className="text-sm text-center text-black leading-tight">
                After Effects
                </span>

            </div>

            </div>

            <p>
              Please feel free to contact me
              if you want to collaborate.
            </p>

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