import Link from "next/link";
import styles from "./profile.module.css";

export const metadata = {
  title: "About",
  description:
    "How Cheryl Dou’s four years in business intelligence at Amazon inform the applied AI tools she builds today.",
};

const amazonRoles = [
  { title: "Business Intelligence Engineer II", dates: "Oct 2022 – Mar 2024" },
  { title: "Business Intelligence Engineer I", dates: "May 2022 – Sep 2022" },
  { title: "Business Intelligence Analyst I", dates: "June 2020 – Apr 2022" },
];

export default function Page() {
  return (
    <div className={styles.profile}>
      <section className={styles.hero} aria-labelledby="about-title">
        <div className={styles.intro}>
          <p className="studio-label">About · Cheryl Dou</p>
          <h1 id="about-title">
            <span>From data analytics</span> <em>to applied AI.</em>
          </h1>
          <p className={styles.lede}>
            Hi there, my name is Cheryl. I’m an Applied AI Engineer who builds web applications that solves business and users’ problems. AI still feels a little like magic to me, especially when an idea turns into something people can actually use.
          </p>
        </div>
        <section className={`studio-panel ${styles.timelinePanel}`} aria-labelledby="career-title">
          <div className={styles.timelineHeading}>
            <h2 id="career-title">Career progression</h2>
            <span className="studio-stamp" aria-hidden="true">✳</span>
          </div>

          <div className={styles.employment}>
            <div className={styles.employer}>
              <h3>Easy Daisy</h3>
              <span className={styles.dates}>June 2024 – Present</span>
            </div>
            <p className={styles.role}>Applied AI Engineer &amp; Founder</p>
          </div>

          <div className={styles.employment}>
            <div className={styles.employer}>
              <h3>Amazon</h3>
              <span className={styles.dates}>June 2020 – Mar 2024</span>
            </div>
            <ol className={styles.timeline} role="list">
              {amazonRoles.map(({ title, dates }) => (
                <li key={title}>
                  <span className={styles.role}>{title}</span>
                  <span className={styles.dates}> ({dates})</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </section>

      <div className={styles.chapters}>
        <section aria-labelledby="applied-title">
          <p className="studio-label">At Easy Daisy</p>
          <h2 id="applied-title">AI for shoppers and shop teams</h2>
          <p className={styles.body}>
            At Easy Daisy, the flower concierge helps shoppers narrow down bouquets
            by occasion, color, and budget. The sales app drafts outreach for the
            shop team to review before sending.
          </p>
          <Link className={`studio-action ${styles.chapterAction}`} href="/works">
            Explore the Easy Daisy work <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section aria-labelledby="data-title">
          <p className="studio-label">At Amazon</p>
          <h2 id="data-title">Data for business decisions</h2>
          <p className={styles.body}>
            Before focusing on applied AI, I spent four years at Amazon.
            I pioneered cloud data platform development from the ground up and partnered with teams across sales, finance, marketing, supply chain, and product to develop tools that helped them make better business decision using their data.
          </p>
        </section>


      </div>

      <section className={styles.curiosity} aria-labelledby="curiosity-title">
        <div>
          <h2 id="curiosity-title">What keeps me curious</h2>
          <p className={styles.body}>
            I like trying new ideas, figuring out why they work, and hearing how other
            people approach a problem. My side projects give me room to do that.
          </p>
        </div>
        <Link className="studio-action" href="/projects">
          Browse independent projects <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}
