"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "../home.module.css";

const views = [
  { id: "shoppers", label: "For shoppers" },
  { id: "shop", label: "For the shop" },
];

const workflow = [
  ["Prospect brief", "Customer and occasion"],
  ["Parallel drafts", "Three specialist writers"],
  ["Select a draft", "An agent compares options"],
  ["Human review", "Approval before sending"],
];

export default function FeaturedWork() {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);

  function handleKeyDown(event) {
    let next;
    switch (event.key) {
      case "ArrowLeft":
        next = (active + views.length - 1) % views.length;
        break;
      case "ArrowRight":
        next = (active + 1) % views.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = views.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <section className={`studio-panel ${styles.feature}`} aria-labelledby="feature-title">
      <div className={styles.featureHeading}>
        <h2 className="studio-label" id="feature-title">Featured · Easy Daisy</h2>
        <span className="studio-stamp" aria-hidden="true">✳</span>
      </div>
      <div className={styles.tabs} role="tablist" aria-label="Explore Easy Daisy">
        {views.map(({ id, label }, index) => (
          <button
            key={id}
            type="button"
            role="tab"
            id={`tab-${id}`}
            aria-selected={active === index}
            aria-controls={`panel-${id}`}
            tabIndex={active === index ? 0 : -1}
            ref={(node) => { tabs.current[index] = node; }}
            onClick={() => setActive(index)}
            onKeyDown={handleKeyDown}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={styles.panel} id="panel-shoppers" role="tabpanel" aria-labelledby="tab-shoppers" tabIndex={0} hidden={active !== 0}>
        <div className={`${styles.stage} ${styles.storefront}`}>
          <Image
            src="/images/easy-daisy-storefront.jpg"
            alt="Easy Daisy storefront with a bouquet of pink daisies"
            width={1200}
            height={623}
            sizes="(max-width: 40rem) calc(100vw - 4rem), (max-width: 48rem) 34rem, (max-width: 77rem) 44vw, 32rem"
            loading="eager"
          />
        </div>
        <div className={styles.caption}>
          <strong>Easy Daisy storefront</strong>
          <span>AI flower concierge</span>
        </div>
      </div>
      <div className={styles.panel} id="panel-shop" role="tabpanel" aria-labelledby="tab-shop" tabIndex={0} hidden={active !== 1}>
        <ol className={`${styles.stage} ${styles.workflow}`} aria-label="Sales agent workflow">
          {workflow.map(([title, description], index) => (
            <li key={title}>
              <span className={styles.stepNumber} aria-hidden="true">0{index + 1}</span>
              <strong>{title}</strong>
              <span className={styles.stepDetail}>{description}</span>
            </li>
          ))}
        </ol>
        <div className={styles.caption}>
          <strong>Easy Daisy sales tools</strong>
          <span>Multi-agent email workflow</span>
        </div>
      </div>
    </section>
  );
}
