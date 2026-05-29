import Link from "next/link";

export default function Home() {
  return (
    <main className="home-grid">

      {/* PAVEL */}
      <Link href="/projects/pavel" className="project-card">
        <img
          src="/images/pavel/cover.jpg"
          alt="Pavel"
        />

        <div className="overlay">
          <h2>
            <span className="title-main">Pavel Fakhrtdinov</span>
            <br />
            <span className="title-sub">Peaceful Lights Music Show</span>
          </h2>
        </div>
        <div className="view-circle">
        </div>
      </Link>

      {/* MUSIA */}
      <Link href="/projects/musia" className="project-card">
        <img
          src="/images/musia/cover.jpg"
          alt="Musia"
        />

        <div className="overlay">
          <h2>
            <span className="title-main">Musia Totibadze</span>
            <br />
            <span className="title-sub">Peaceful Lights Music Show</span>
          </h2>
        </div>
        <div className="view-circle">
        </div>
      </Link>

      {/* DREAM */}
      <Link href="/projects/dream" className="project-card">
        <img
          src="/images/dream/cover.jpg"
          alt="Dream"
        />

        <div className="overlay">
          <h2>
            <span className="title-main">in a dream maybe</span>
            <br />
            <span className="title-sub">atmospheric film</span>
          </h2>
        </div>
        <div className="view-circle">
        </div>
      </Link>

      {/* LIME */}
      <Link href="/projects/lime" className="project-card">
        <img
          src="/images/lime/cover.jpg"
          alt="Lime"
        />

        <div className="overlay">
          <h2>
            <span className="title-main">lime</span>
            <br />
            <span className="title-sub">studio campaign</span>
          </h2>
        </div>
        <div className="view-circle">
        </div>
      </Link>

    </main>
  );
}