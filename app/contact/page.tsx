
"use client"

import { useState } from "react"
import {
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaVimeoV,
  FaYoutube,
} from "react-icons/fa"

export default function ContactPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const email = formData.get("email")?.toString().trim()
    const message = formData.get("message")?.toString().trim()

    if (!email || !message) return

    setIsSubmitting(true)

    try {
      const response = await fetch(
        "https://formspree.io/f/xjgzyblw",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      )

      if (response.ok) {
        setIsSent(true)
        form.reset()

        setTimeout(() => {
          setIsOpen(false)
          setIsSent(false)
        }, 2000)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch {
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialClass =
    "flex items-center gap-3 text-lg md:text-xl text-black no-underline"

  return (
    <main className="flex-1 w-full bg-white text-black px-6 md:px-14 py-10 md:py-16">

      {/* CONTACT CONTENT */}


{/* CONTACT CONTENT */}

<section className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[800px_minmax(0,1fr)] gap-8 lg:gap-12 items-center">

  {/* PHOTO */}

  <div className="w-full max-w-[800px] mx-auto md:mx-0">
    <img
      src="/images/portfolio-card.png"
      alt="Veranika Isakova"
      className="w-full h-auto block object-contain"
    />
  </div>

  {/* CONTACT DETAILS */}

  <div className="w-full max-w-[520px] mx-auto md:mx-10">


  <div className="pt-2 space-y-4">
    <a
      href="https://t.me/veranika_isakova"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 text-lg md:text-xl text-black no-underline hover:text-[#4A4EFF] transition-colors duration-200"
    >
      <FaTelegramPlane className="text-2xl shrink-0" />
      <span>Telegram</span>
    </a>

    <a
      href="https://instagram.com/veron.isakova/"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 text-lg md:text-xl text-black no-underline hover:text-[#4A4EFF] transition-colors duration-200"
    >
      <FaInstagram className="text-2xl shrink-0" />
      <span>Instagram</span>
    </a>

    <a
      href="https://wa.me/31614517801"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 text-lg md:text-xl text-black no-underline hover:text-[#4A4EFF] transition-colors duration-200"
    >
      <FaWhatsapp className="text-2xl shrink-0" />
      <span>WhatsApp</span>
    </a>

      <a
      href="https://vimeo.com/user223178973"
      target="_blank"
      rel="noreferrer"
      aria-label="Vimeo"
      className="flex items-center gap-3 text-lg md:text-xl text-black no-underline hover:text-[#4A4EFF] transition-colors duration-200"
    >
      <FaVimeoV className="text-2xl shrink-0" />
      <span>Vimeo</span>
    </a>

    <a
      href="https://www.youtube.com/@veranikaisakova"
      target="_blank"
      rel="noreferrer"
      aria-label="YouTube"
      className="flex items-center gap-3 text-lg md:text-xl text-black no-underline hover:text-[#4A4EFF] transition-colors duration-200"
    >
      <FaYoutube className="text-2xl shrink-0" />
      <span>YouTube</span>
    </a>
  </div>

    {/* SAY HELLO */}

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="mt-7 ml-0 bg-[#4A4EFF] text-white px-8 py-3 text-sm tracking-[0.2em] hover:opacity-90 transition cursor-pointer"
      >
        SAY HELLO
      </button>

  </div>
</section>


      {/* CONTACT MODAL */}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 flex items-center justify-center z-50 px-4 py-6"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white w-full max-w-3xl p-6 md:p-10 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close contact form"
              className="absolute top-4 right-5 text-3xl hover:opacity-60 transition"
            >
              ×
            </button>

            <h2 className="text-2xl md:text-3xl mb-8 pr-8">
              Let&apos;s work together
            </h2>

            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="space-y-5 md:space-y-7"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full border border-gray-300 p-3 outline-none focus:border-[#4A4EFF]"
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 p-3 outline-none focus:border-[#4A4EFF]"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck={false}
                required
                className="w-full border border-gray-300 p-3 outline-none focus:border-[#4A4EFF]"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                autoComplete="off"
                className="w-full border border-gray-300 p-3 outline-none focus:border-[#4A4EFF]"
              />

              <textarea
                name="message"
                placeholder="Project Description"
                rows={4}
                required
                className="w-full border border-gray-300 p-3 outline-none resize-none focus:border-[#4A4EFF]"
              />

              {isSent && (
                <p className="text-green-600">
                  Thank you! Your message has been sent.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#4A4EFF] text-white px-14 py-4 tracking-[0.28em] hover:opacity-90 transition cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? "SENDING..." : "SEND"}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
