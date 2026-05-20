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
      </Link>

    </main>
  );
}