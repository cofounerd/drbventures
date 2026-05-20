import { SignalStage } from "./signal-stage";

const focusAreas = [
  {
    title: "AI Systems",
    body: "Applied intelligence shaped around workflows, decisions, and creative leverage.",
  },
  {
    title: "Software Engineering",
    body: "Reliable product foundations for platforms that need to scale without losing clarity.",
  },
  {
    title: "Automation",
    body: "Operational loops that remove drag and create space for higher-value work.",
  },
  {
    title: "Digital Experiences",
    body: "Modern web interfaces that feel precise, cinematic, and unmistakably human.",
  },
];

const principles = [
  {
    title: "Intelligent",
    body: "Every system is designed to make better decisions easier.",
  },
  {
    title: "Minimal",
    body: "Complexity stays behind the glass; the experience stays clear.",
  },
  {
    title: "Cinematic",
    body: "Pacing, contrast, and motion give the work a memorable rhythm.",
  },
  {
    title: "Modernist",
    body: "Strong grids, precise typography, and honest materials lead the aesthetic.",
  },
  {
    title: "AI-forward",
    body: "Technology is treated as amplification for human imagination.",
  },
  {
    title: "Disciplined",
    body: "Experimentation is framed by systems that can survive real use.",
  },
];

function LogoMark() {
  return (
    <a className="brand-mark" href="#top" aria-label="Brand180 home">
      <svg
        className="logo-symbol"
        viewBox="0 0 108 96"
        aria-hidden="true"
        focusable="false"
      >
        <path
          className="logo-hook"
          d="M22 12v41c0 18.8 15.2 34 34 34s34-15.2 34-34"
        />
        <path className="logo-arrow" d="M90 31 71 55h38z" />
        <circle className="logo-orb" cx="90" cy="17" r="10" />
      </svg>
      <span className="logo-type">
        <span className="logo-name">BRAND180</span>
        <span className="logo-tagline">Creative Output Fuels Imagination</span>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <div className="site-frame" aria-hidden="true" />

      <header className="site-header">
        <LogoMark />
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#systems">Systems</a>
          <a href="#studio">Studio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="index-label">01 / Creative Technology Studio</p>
              <h1 id="hero-title">Creative Output Fuels Imagination</h1>
              <p className="hero-statement">
                Brand180 designs intelligent digital systems that merge AI,
                software engineering, and modern creative direction into
                scalable experiences.
              </p>
            </div>

            <SignalStage />
          </div>
        </section>

        <section className="manifesto" aria-label="Brand perspective">
          <p>
            Creation becomes inspiration. Systems unlock creativity. Technology
            amplifies people instead of replacing them. Momentum comes from
            making.
          </p>
        </section>

        <section
          className="split-feature"
          id="systems"
          aria-labelledby="systems-title"
        >
          <div className="section-number">02</div>
          <div>
            <h2 id="systems-title">
              Intelligent systems with a creative pulse.
            </h2>
          </div>
          <div className="feature-list" aria-label="Brand180 focus areas">
            {focusAreas.map((area) => (
              <article key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="studio-strip" id="studio" aria-labelledby="studio-title">
          <div className="poster-panel">
            <span>Not developers who design.</span>
            <span>Not creatives who code.</span>
            <strong>A true hybrid technology studio.</strong>
          </div>
          <div className="studio-copy">
            <p className="index-label">03 / Positioning</p>
            <h2 id="studio-title">
              Engineering precision meets creative direction.
            </h2>
            <p>
              Brand180 builds AI-forward infrastructure, intelligent web
              platforms, and software systems with the editorial restraint of a
              design studio and the rigor of a product engineering team.
            </p>
          </div>
        </section>

        <section className="principles" aria-labelledby="principles-title">
          <div className="section-intro">
            <p className="index-label">04 / Brand Character</p>
            <h2 id="principles-title">
              Experimental, disciplined, human-centered.
            </h2>
          </div>
          <ol className="principle-grid">
            {principles.map((principle) => (
              <li key={principle.title}>
                <span>{principle.title}</span>
                <p>{principle.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="contact-panel"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div>
            <p className="index-label">05 / Start</p>
            <h2 id="contact-title">
              Build the system behind the next creative leap.
            </h2>
          </div>
          <a href="mailto:hello@brand180.co" className="contact-link">
            hello@brand180.co
          </a>
        </section>
      </main>
    </>
  );
}
