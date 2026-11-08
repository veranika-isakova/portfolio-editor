import PreviewVideo from "../../components/PreviewVideo"

type Credit = { role: string; name: string }

type Performance = {
  artist: string
  video: string
  image: string
  stills: string[]
  description: string
  credits: Credit[]
  footer: string
}

const performances: Performance[] = [
  {
    artist: "Pavel Fakhrtdinov",
    video:
      "https://player.vimeo.com/video/1193989740?h=f8e302a771&title=0&byline=0&portrait=0&badge=0",
    image: "/images/pavel/hero-shot.jpg",
    stills: [
      "/images/pavel/guitar.jpg",
      "/images/pavel/close-up.jpg",
      "/images/pavel/medium-close-up.jpg",
      "/images/pavel/wide-shot.jpg",
    ],
    description: "Acoustic live session",
    credits: [
      { role: "Director & DOP", name: "Maxim Kol" },
      { role: "Editor", name: "Veranika Isakova" },
      { role: "Producer", name: "Alina Mil" },
      { role: "Line Producer", name: "Alina Aetaeva" },
      { role: "Sound", name: "Roma Shlyubsky" },
      { role: "Mixing", name: "Roman Gorodinsky" },
    ],
    footer: "Filmed at Lucky Studio",
  },
  {
    artist: "Musia Totibadze",
    video:
      "https://player.vimeo.com/video/1194015939?h=630bee9bb2&title=0&byline=0&portrait=0&badge=0",
    image: "/images/musia/hero-shot.jpg",
    stills: [
      "/images/musia/drums.jpg",
      "/images/musia/golden.jpg",
      "/images/musia/face.jpg",
      "/images/musia/room.jpg",
    ],
    description: "Live performance",
    credits: [
      { role: "Director", name: "Dmitry Grigoriev" },
      { role: "Editor", name: "Veranika Isakova" },
      { role: "Producer", name: "Lera Sokova" },
      { role: "DOP", name: "Danya Byakov" },
      { role: "Sound", name: "Araik Vietinghoff" },
      { role: "Mixing & Mastering", name: "Andrei Ivanov" },
    ],
    footer: "Production: HOORAY!production",
  },
]

// TODO: проверить названия групп и ссылки
const shortForm = [
  {
    name: "Zdob și Zdub",
    src: "/videos/ZdobsiZdub_Promo.mp4",
    poster: "/images/peaceful-lights/ZdobsiZdub_Promo.jpg",
    instagram: "https://www.instagram.com/p/DSvBX_vjWrm/",
  },
  {
    name: "Boris Grebenshchikov",
    src: "/videos/BG_Promo.mp4",
    poster: "/images/peaceful-lights/BG_Promo.jpg",
    instagram: "https://www.instagram.com/p/DSpsNbziGvn/",
  },
]

const container = "w-[90%] max-w-[1180px] md:w-[80%] mx-auto"
const bodyText = "text-[13.5px] md:text-[14.5px] leading-relaxed text-gray-600"
const creditText = "text-[12.5px] md:text-[13.5px] leading-relaxed text-[#171717]"

export default function PeacefulLightsPage() {
  return (
    <main className="w-full p-0 m-0 overflow-x-hidden box-border">

      {/* INTRO */}

      <section className={`${container} mt-8 md:mt-16 mb-8 md:mb-10`}>

        <div className="flex flex-col items-center text-center max-w-[640px] mx-auto px-2 md:px-0">
          <h2 className="text-[#4A4EFF] text-[18px] md:text-[22px] font-semibold tracking-[0.12em] uppercase mb-3 md:mb-5">
            Peaceful Lights
          </h2>

          <p className="text-[15px] md:text-[16px] leading-[1.7] text-gray-500 mb-4">
            New Year music show
          </p>

          <div className="text-[13.5px] md:text-[14.5px] leading-relaxed text-[#171717]">
            <div>
              <span className="text-gray-500">Executive Producer:</span> Sergey Rasskazov
            </div>
            <div>
              <span className="text-gray-500">Showrunner & Music Producer:</span> Boris Barabanov
            </div>
          </div>

          <a
            href="https://ogonki.tv/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-[13.5px] md:text-[14.5px] text-[#4A4EFF] hover:opacity-80 transition"
          >
            ogonki.tv
          </a>
        </div>
      </section>

      {/* LIVE PERFORMANCES */}

      {performances.map((item) => (
        <section key={item.artist} className="w-full mb-6 md:mb-8">

          <div className={`${container} aspect-video bg-black mb-6 md:mb-8`}>
            <iframe
              src={item.video}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={item.artist}
            />
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1fr)] gap-6 md:gap-24 items-center">
            <img
              src={item.image}
              alt={item.artist}
              className="w-full aspect-video object-cover block"
              loading="lazy"
            />

            <div className="px-5 md:px-0 md:pr-6">
              <h2 className="text-[18px] md:text-[22px] font-medium text-[#4A4EFF] mb-1">
                {item.artist}
              </h2>

              <p className={`${bodyText} mb-4`}>{item.description}</p>

              <div className={`${creditText} mb-3`}>
                {item.credits.map((credit) => (
                  <div key={credit.role}>
                    <span className="text-gray-500">{credit.role}:</span> {credit.name}
                  </div>
                ))}
              </div>

              <p className="text-[12.5px] md:text-[13.5px] text-gray-500">{item.footer}</p>
            </div>
          </div>

          <div className={`${container} grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8`}>
            {item.stills.map((still) => (
              <img
                key={still}
                src={still}
                alt={`${item.artist} still`}
                className="w-full aspect-video object-cover block"
                loading="lazy"
              />
            ))}
          </div>
        </section>
      ))}

      {/* SHORT-FORM */}

      <section className="pt-6 md:pt-8 pb-16 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">Short-form</p>
        <p className="text-sm text-gray-600">Promo edits for the project&apos;s social media</p>
        <p className="text-sm text-gray-500 mt-1 mb-8">
          Editor: <span className="text-black">Veranika Isakova</span>
        </p>

        <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto px-5 md:px-0">
          {shortForm.map((video) => (
            <div key={video.src}>
              <PreviewVideo
                src={video.src}
                poster={video.poster}
                className="w-full aspect-[9/16] object-cover bg-black block"
              />
              <a
                href={video.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-black hover:text-[#4a4aff] transition-colors"
              >
                {video.name}
              </a>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
