import CheerSample from "./CheerSample";
import styles from "./projects.module.css";

export const metadata = {
  title: "Projects",
  description:
    "Explore Cheryl Dou’s independent AI projects: Company AI Researcher and Cheer Cookies.",
};

function ResearchPreview() {
  return (
    <section className={`studio-panel ${styles.preview}`} aria-labelledby="research-preview-title">
      <div className={styles.previewHeading}>
        <h3 className="studio-label" id="research-preview-title">Report preview</h3>
        <span className="studio-stamp" aria-hidden="true">✳</span>
      </div>
      <ol className={styles.pipeline} aria-label="Research workflow">
        <li>Company name</li>
        <li>Public sources</li>
        <li>AI brief</li>
      </ol>
      <div className={styles.report}>
        <div className={styles.reportHeading}>
          <p>Example report outline</p>
          <span>Markdown</span>
        </div>
        <ul>
          <li>Executive summary</li>
          <li>AI products and engineering</li>
          <li>Recent developments and sources</li>
        </ul>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div className={styles.projects}>
      <header className={styles.intro}>
        <h1>Independent <em>projects.</em></h1>
        <p>A research brief for a company. A kind note for a person. Two small apps for very different moments.</p>
      </header>

      <div className={styles.projectGrid}>
        <article className={styles.project} aria-labelledby="researcher-title">
          <div className={styles.projectIntro}>
            <p className="studio-label">Research automation · CrewAI</p>
            <h2 id="researcher-title">Company AI Researcher</h2>
            <p className={styles.description}>
              Enter a company name. A team of agents researches its AI products and strategy
              using public sources, then turns the findings into a report you can download.
            </p>
          </div>
          <ResearchPreview />
          <div>
            <a className="studio-action studio-action--primary" href="https://easy-daisy-company-ai-researcher.onrender.com">
              Open the research app <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>

        <article className={styles.project} aria-labelledby="cookies-title">
          <div className={styles.projectIntro}>
            <p className="studio-label">Personalized writing · OpenAI</p>
            <h2 id="cookies-title">Cheer Cookies</h2>
            <p className={styles.description}>
              When you want to encourage someone but can’t find the words,
              Cheer Cookies writes a personal note for the moment. Keep it for yourself or share it with someone else.
            </p>
          </div>
          <CheerSample />
          <div>
            <a className="studio-action studio-action--primary" href="https://cheercookies.vercel.app">
              Visit Cheer Cookies <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
