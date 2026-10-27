import {
  FaInstagram,
  FaVimeoV,
  FaTelegramPlane,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa"

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/veron.isakova/",
    Icon: FaInstagram,
  },
  {
    name: "Vimeo",
    href: "https://vimeo.com/user223178973",
    Icon: FaVimeoV,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@veranikaisakova",
    Icon: FaYoutube,
  },
  {
    name: "Telegram",
    href: "https://t.me/veranika_isakova",
    Icon: FaTelegramPlane,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/31614517801",
    Icon: FaWhatsapp,
  },
]

export default function Footer() {
  return (
    <footer className="w-full bg-white px-6 md:px-10 pt-4 pb-6 mt-auto">
      <div className="border-t border-gray-200 pt-5">
        <div className="flex items-center justify-between gap-6 flex-wrap">

          {/* COPYRIGHT — LEFT */}

          <span className="text-sm text-[#9AA1B1] whitespace-nowrap">
            Veranika Isakova 2026
          </span>

        </div>
      </div>
    </footer>
  )
}