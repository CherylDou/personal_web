"use client";

import { useState } from "react";
import styles from "./projects.module.css";

const moments = [
  {
    id: "tough-week",
    label: "Tough week",
    note: "You don’t have to turn the whole week around today. Take care of one small thing, and let that be enough.",
  },
  {
    id: "quiet-win",
    label: "Quiet win",
    note: "Some wins don’t make much noise. This one still deserves a moment to say, ‘I did that.’",
  },
  {
    id: "fresh-start",
    label: "Fresh start",
    note: "It’s okay if the first step feels awkward. You’re learning your way into something new.",
  },
];

export default function CheerSample() {
  const [moment, setMoment] = useState(moments[0]);

  return (
    <section className={`studio-panel ${styles.preview} ${styles.cheer}`} aria-labelledby="cheer-preview-title">
      <div className={styles.previewHeading}>
        <h3 className="studio-label" id="cheer-preview-title">Pick a moment</h3>
        <span className="studio-stamp" aria-hidden="true">✦</span>
      </div>
      <fieldset className={styles.moments}>
        <legend className={styles.visuallyHidden}>Choose a moment for the sample note</legend>
        <div className={styles.momentOptions}>
          {moments.map((option) => (
            <label className={styles.moment} key={option.id}>
              <input
                className={styles.visuallyHidden}
                type="radio"
                name="cheer-moment"
                value={option.id}
                checked={moment.id === option.id}
                onChange={() => setMoment(option)}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className={styles.note} aria-live="polite" aria-atomic="true">
        <p className="studio-label">Sample note</p>
        <p className={styles.noteText}>{moment.note}</p>
      </div>
    </section>
  );
}
