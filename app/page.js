import Link from "next/link";
import FeaturedWork from "./components/FeaturedWork";
import styles from "./home.module.css";

const selectedWork = [
  {
    label: "Customer experience",
    title: "Find the right bouquet",
    description:
      "An online flower shop with an AI concierge that recommends bouquets by occasion, color, and budget.",
    presentation: "/slides/works/slide-1.html",
    demo: "https://www.easy-daisy.com/",
    demoLabel: "Visit the storefront",
  },
  {
    label: "Internal tools",
    title: "Help the shop run",
    description:
      "An operations app for orders and products, with specialist agents that draft sales emails for human review.",
    presentation: "/slides/works/slide-2.html",
    demo: "https://easy-daisy-internal-management-system.vercel.app",
    demoLabel: "Open the sales app",
  },
];

export default function Page() {
  return (
    <div className={styles.home}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.intro}>
          <p className="studio-label">Applied AI engineer</p>
          <h1 id="home-title" className={styles.title}>
            <span>From bouquets</span> <em>to back office.</em>
          </h1>
          <p className={styles.lede}>
            I’m Cheryl. I build web apps that help people find what they need
            and give teams better tools to do their work.
          </p>
          <a className={`studio-action studio-action--primary ${styles.heroAction}`} href="#selected-work">
            Explore my work <span aria-hidden="true">↓</span>
          </a>
        </div>
        <FeaturedWork />
      </section>

      <section id="selected-work" className={styles.work} aria-labelledby="work-title" tabIndex={-1}>
        <div className={styles.sectionHeading}>
          <h2 id="work-title">Selected work</h2>
          <Link className="studio-action" href="/works">
            All Easy Daisy work <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className={styles.workGrid}>
          {selectedWork.map((project) => (
            <article className={styles.workCard} key={project.title}>
              <p className="studio-label">{project.label}</p>
              <h3>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
              <div className={styles.cardLinks}>
                <a className="studio-action" href={project.presentation} aria-label={`View presentation: ${project.title}`}>
                  View presentation <span aria-hidden="true">→</span>
                </a>
                <a className="studio-action studio-action--secondary" href={project.demo}>
                  {project.demoLabel} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className={styles.more}>
        <section aria-labelledby="projects-title">
          <h2 id="projects-title">Independent projects</h2>
          <p>Company research with CrewAI and a little encouragement from Cheer Cookies.</p>
          <Link className="studio-action" href="/projects">
            Browse projects <span aria-hidden="true">→</span>
          </Link>
        </section>
        <section aria-labelledby="about-title">
          <h2 id="about-title">A bit about me</h2>
          <p>Before applied AI, I spent four years at Amazon building data solutions for business teams.</p>
          <Link className="studio-action" href="/profile">
            Read my profile <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
