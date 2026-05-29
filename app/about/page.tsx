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

      <div className="max-w-6xl mx-auto grid md:grid-cols-[420px_520px] gap-28 items-start min-h-[75vh] pl-24">

        {/* LEFT SIDE */}

        <div className="flex flex-col items-center">

          <img
            src="/images/profile.jpg"
            alt="Veranika Isakova"
            className="w-full max-w-[470px] object-cover"
          />

          {/* SOCIALS */}

          <div className="mt-5 flex gap-8 text-3xl text-black">

            <a
              href="..."
              target="_blank"
              className="
                transition-all
                duration-300
                hover:text-[#4A4EFF]
                hover:scale-110
              "
            >
              <FaInstagram />
            </a>

            <a
              href="https://vimeo.com/user223178973"
              target="_blank"
              className="
                transition-all
                duration-300
                hover:text-[#4A4EFF]
                hover:scale-110
              "
            >
              <FaVimeoV />
            </a>

            <a
              href="https://t.me/veranika_isakova"
              target="_blank"
              className="
                transition-all
                duration-300
                hover:text-[#4A4EFF]
                hover:scale-110
              "
            >
              <FaTelegramPlane />
            </a>

            <a
              href="https://wa.me/+31614517801"
              target="_blank"
                            className="
                transition-all
                duration-300
                hover:text-[#4A4EFF]
                hover:scale-110
              "
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="ml-10">

          <div className="mt-4 space-y-10 text-[#676f80]">

            {/* MAIN TEXT */}

          <p className="max-w-[760px] text-[20px] leading-[1.45] text-[#676f80] text-left">
            Veranika is a film & video editor based in Rotterdam,
            creating cinematic and emotionally driven work across a variety
            of creative projects, from commercial and branded content
            to documentary and narrative storytelling.
            Focused on atmosphere, storytelling and visual rhythm.
          </p>

          {/* CONTACT TEXT */}

          <p className="text-[20px] leading-[1.45] text-[#676f80]">
            Feel free to get in touch if you'd like to collaborate.
          </p>

            {/* BUTTON */}

            <div className="flex justify-center pt-2">

              <button
                onClick={() => setIsOpen(true)}
                className="
                  bg-[#4A4EFF]
                  text-white
                  px-14
                  py-4
                  tracking-[0.28em]
                  hover:opacity-90
                  transition
                "
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
              Hello! Let&apos;s work together
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

              <button
                type="submit"
                className="
                  bg-[#4A4EFF]
                  text-white
                  px-14
                  py-3
                  text-base
                  tracking-[0.28em]
                  hover:opacity-90
                  transition
                "
              >
                SEND
              </button>

            </form>

          </div>

        </div>
      )}

    </main>
  )
}