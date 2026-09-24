export default function AnomalyPage() {
  const backstagePhotos = [
    "/images/anomaly/backstage/1.jpg",
    "/images/anomaly/backstage/2.jpg",
    "/images/anomaly/backstage/3.jpg",
    "/images/anomaly/backstage/4.jpg",
    "/images/anomaly/backstage/5.jpg",
    "/images/anomaly/backstage/6.jpg",
    "/images/anomaly/backstage/7.jpg",
    "/images/anomaly/backstage/8.jpg",
    "/images/anomaly/backstage/9.jpg",
    "/images/anomaly/backstage/10.jpg"
  ]

  return (
    <main className="w-full p-0 m-0 overflow-x-hidden box-border">

      {/* VIMEO */}

      <div className="w-[90%] max-w-[1180px] mx-auto aspect-[4/3] md:w-[80%] md:aspect-[2/1]">
        <iframe
          src="https://player.vimeo.com/video/1228545311?h=4868ba8545&transparent=0&title=0&byline=0&portrait=0&badge=0"
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>


      {/* MAIN HERO BLOCK */}

      <section className="w-full max-w-[1140px] mx-auto my-4 md:my-12 px-5 md:px-8 box-border flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">

        {/* POSTER */}

        <div className="w-full max-w-[300px] sm:max-w-[340px] md:max-w-[440px] shrink-0 rounded overflow-hidden shadow-2xl bg-black leading-none mx-auto md:mx-0">
          <img
            src="/images/anomaly/poster-nominations.jpg"
            alt="Anomaly poster"
            className="w-full h-auto block transform scale-[1.01]"
          />
        </div>


        {/* DESCRIPTION & CREDITS */}

        <div className="w-full max-w-[540px] flex flex-col items-start text-left">

          <h1 className="text-[#4A4EFF] text-2xl md:text-3xl font-bold tracking-widest uppercase mb-1.5 md:mb-2">
            Anomaly
          </h1>

          <p className="text-[15px] md:text-[17px] italic text-[#171717] font-medium mb-4 md:mb-5">
            "The Anomaly sees through every mask."
          </p>


          {/* SYNOPSIS */}

          <div className="mb-4 md:mb-5">

            <h3 className="text-[#4A4EFF] text-[11px] md:text-[12px] font-bold tracking-widest uppercase mb-1.5 md:mb-2">
              Synopsis
            </h3>

            <p className="text-[13.5px] md:text-[14.5px] leading-relaxed text-gray-600 m-0">
              Trapped inside an isolated research facility, a group of numbered subjects tries 
              to survive the presence of a mysterious entity known as the Anomaly. 
              As panic rises and lives are lost, one of them attempts a desperate escape - 
              only to discover the cold truth behind the experiment.
            </p>

          </div>


          {/* KEY CREW & CAST GRID */}

          <div className="grid grid-cols-2 gap-4 md:gap-6 w-full mb-4 md:mb-5">

            {/* KEY CREW */}

            <div>

              <h3 className="text-[#4A4EFF] text-[11px] md:text-[12px] font-bold tracking-widest uppercase mb-1.5 md:mb-2">
                Key Crew
              </h3>

              <div className="text-[12.5px] md:text-[13.5px] leading-relaxed text-[#171717]">

                <div>
                  <span className="text-gray-500">Director:</span>{" "}
                  Masha Shaposhnikova
                </div>

                <div>
                  <span className="text-gray-500">Producer & Editing:</span>{" "}
                  Veranika Isakova
                </div>

                <div>
                  <span className="text-gray-500">DOP & Editing:</span>{" "}
                  Max Hertz Lomakin
                </div>

                <div>
                  <span className="text-gray-500">Sound:</span>{" "}
                  Hassibullah Kushkaki
                </div>

                <div>
                  <span className="text-gray-500">Music:</span>{" "}
                  Berke Baha Dikmen
                </div>

                <div>
                  <span className="text-gray-500">Art Department:</span>{" "}
                  Veranika Isakova, Zofia Sanjuan - Janiec, Dimitris Matthaiou, Orlando Andersson
                </div>

              </div>

            </div>


            {/* CAST */}

            <div>

              <h3 className="text-[#4A4EFF] text-[11px] md:text-[12px] font-bold tracking-widest uppercase mb-1.5 md:mb-2">
                Cast
              </h3>

              <div className="text-[12.5px] md:text-[13.5px] leading-relaxed text-[#171717]">

                <div>
                  <span className="text-gray-500">Sara Smit:</span>{" "}
                  Ines Angelova
                </div>

                <div>
                  <span className="text-gray-500">Rob:</span>{" "}
                  Robert Boerleider
                </div>

                <div>
                  <span className="text-gray-500">Leo:</span>{" "}
                  Lu Wang
                </div>

                <div>
                  <span className="text-gray-500">Bodi:</span>{" "}
                  Grace Kimasi
                </div>

                <div>
                  <span className="text-gray-500">Billy:</span>{" "}
                  Bill Stevenson
                </div>

              </div>

            </div>

          </div>


          {/* META INFO */}

          <div className="text-[12.5px] md:text-[13.5px] text-gray-500 mb-5 md:mb-6 leading-relaxed">

            <div>
              <strong className="text-[#171717]">Team:</strong>{" "}
              MM Film
            </div>

            <div>
              <strong className="text-[#171717]">Festival:</strong>{" "}
              The 48 Hour Film Project Rotterdam 2026
            </div>

            <div>
              <strong className="text-[#171717]">Festival recognition:</strong>{" "}
              Best Art Direction & Best Sound Design nominations
            </div>

          </div>

        </div>

      </section>


      {/* STILLS / FULL-BLEED GALLERY */}

      <section className="w-full m-0 p-0">

        {/* ROW 1 */}

        <div className="grid grid-cols-1 md:grid-cols-2 w-full m-0 p-0 leading-none">

          <img
            src="/images/anomaly/death.jpg"
            alt="Still 1"
            className="w-full h-auto block m-0 p-0"
            loading="lazy"
          />

          <img
            src="/images/anomaly/stairs.jpg"
            alt="Still 2"
            className="w-full h-auto block m-0 p-0"
            loading="lazy"
          />

        </div>


        {/* HERO SHOT */}

        <img
          src="/images/anomaly/cover.jpg"
          alt="Anomaly hero shot"
          className="w-full h-auto block m-0 p-0"
          loading="lazy"
        />


        {/* ROW 2 */}

        <div className="grid grid-cols-1 md:grid-cols-2 w-full m-0 p-0 leading-none">

          <img
            src="/images/anomaly/couple.jpg"
            alt="Still 3"
            className="w-full h-auto block m-0 p-0"
            loading="lazy"
          />

          <img
            src="/images/anomaly/hand.jpg"
            alt="Still 4"
            className="w-full h-auto block m-0 p-0"
            loading="lazy"
          />

        </div>

      </section>


      {/* BACKSTAGE */}

      <section className="anomaly-backstage">

        <div className="anomaly-backstage-header">

          <h3>Backstage</h3>

          <span>Behind the scenes</span>

        </div>


        {/* HORIZONTAL PHOTO SCROLL */}

        <div className="anomaly-gallery">

          {backstagePhotos.map((photo, index) => (
            <div
              className="anomaly-gallery-item"
              key={photo}
            >

              <img
                src={photo}
                alt={`Anomaly backstage ${index + 1}`}
                loading="lazy"
              />

            </div>
          ))}

        </div>

      </section>

    </main>
  )
}