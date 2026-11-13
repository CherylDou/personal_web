import Image from "next/image";
import styles from "./work.module.css";

export const metadata = {
  title: "Work at Easy Daisy",
  description:
    "Cheryl Dou’s work at Easy Daisy includes an AI flower storefront, multi-agent sales tools, and a RESTful commerce app.",
};

const workItems = [
  {
    id: "storefront",
    indexLabel: "AI storefront",
    category: "Customer experience",
    title: "AI flower storefront",
    description:
      "Shoppers often know the occasion and budget before they know which flowers to send. I built a flower concierge that recommends in-stock bouquets and answers questions about delivery and care.",
    stack: ["Next.js", "OpenAI", "Supabase", "Stripe"],
    presentation: "/slides/works/slide-1.html",
    live: "https://www.easy-daisy.com/",
    liveLabel: "Visit the storefront",
    visualLabel: "Flower concierge",
    caption: "Shoppers can describe what they need or narrow the catalog by occasion, color, and budget.",
    image: {
      src: "/images/easy-daisy-concierge.jpg",
      width: 1200,
      height: 531,
      alt: "The Easy Daisy concierge with a question field and filters for occasion, color, and budget",
    },
  },
  {
    id: "sales-tools",
    indexLabel: "Sales tools",
    category: "Internal tools",
    title: "Multi-agent sales app",
    description:
      "The shop needed one place to manage orders, products, and users. I built an internal app with a sales workflow that drafts three outreach options in parallel, selects one, and puts it in front of a person for approval.",
    stack: ["React", "FastAPI", "OpenAI Agents SDK", "PostgreSQL"],
    presentation: "/slides/works/slide-2.html",
    live: "https://easy-daisy-internal-management-system.vercel.app",
    liveLabel: "Open the sales app",
    visualLabel: "Sales workflow",
    caption: "Three writing agents work in parallel. A separate agent picks a draft for human review.",
  },
  {
    id: "web-platform",
    indexLabel: "Web platform",
    category: "Commerce engineering",
    title: "RESTful commerce app",
    description:
      "I built the core shopping journey from catalog to checkout. Behind the storefront, an Express API handles product queries, customer accounts, and orders, with MongoDB storing the underlying data.",
    stack: ["Express", "MongoDB", "Mongoose", "Pug"],
    presentation: "/slides/works/slide-3.html",
    live: "https://easy-daisy-node.onrender.com/",
    liveLabel: "Open the web app",
    visualLabel: "Product catalog",
    caption: "The catalog shows bouquet details, prices, and stock before customers move on to checkout.",
    image: {
      src: "/images/easy-daisy-catalog.jpg",
      width: 1200,
      height: 604,
      alt: "The RESTful app’s product catalog with three bouquet listings, prices, and stock status",
    },
  },
];

function SalesWorkflow() {
  return (
    <ol className={styles.flow} aria-label="Sales outreach steps">
      <li>Prospect brief</li>
      <li className={styles.flowWriters}>
        <span className={styles.flowLabel}>Three agents draft in parallel</span>
        <ul aria-label="Draft styles" className={styles.draftStyles}>
          <li>Professional</li>
          <li>Witty</li>
          <li>Concise</li>
        </ul>
      </li>
      <li>Select a draft</li>
      <li className={styles.flowReview}>Human review</li>
    </ol>
  );
}

export default function Page() {
  return (
    <div className={styles.work}>
      <header className={styles.intro}>
        <div className={styles.introGrid}>
          <h1>Work at <em>Easy Daisy.</em></h1>
          <p>
            I built an AI storefront for flower shoppers, a sales app for the shop team,
            and a separate commerce app with a REST API.
          </p>
        </div>
      </header>

      <nav className={styles.index} aria-label="On this page">
        <ul>
          {workItems.map(({ id, indexLabel }) => (
            <li key={id}>
              <a className="studio-action" href={`#${id}`}>{indexLabel} <span aria-hidden="true">↓</span></a>
            </li>
          ))}
        </ul>
      </nav>

      {workItems.map((project) => (
        <article
          className={styles.workItem}
          key={project.id}
          id={project.id}
          aria-labelledby={`${project.id}-title`}
          tabIndex={-1}
        >
          <div className={styles.summary}>
            <p className="studio-label">{project.category}</p>
            <h2 id={`${project.id}-title`}>{project.title}</h2>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.stack} aria-label="Technologies">
              {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
            <div className={styles.actions}>
              <a
                className="studio-action studio-action--primary"
                href={project.presentation}
                aria-label={`View presentation: ${project.title}`}
              >
                View presentation <span aria-hidden="true">→</span>
              </a>
              <a className="studio-action studio-action--secondary" href={project.live}>
                {project.liveLabel} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <figure className={`studio-panel ${styles.artifact}`}>
            <div className={styles.artifactHeading}>
              <span className="studio-label">{project.visualLabel}</span>
              <span className="studio-stamp" aria-hidden="true">✳</span>
            </div>
            {project.image ? (
              <Image
                src={project.image.src}
                width={project.image.width}
                height={project.image.height}
                alt={project.image.alt}
                className={styles.screenshot}
                sizes="(max-width: 46rem) 84vw, (max-width: 77rem) 48vw, 35rem"
              />
            ) : (
              <SalesWorkflow />
            )}
            <figcaption>{project.caption}</figcaption>
          </figure>
        </article>
      ))}
    </div>
  );
}
