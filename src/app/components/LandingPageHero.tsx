import React from 'react';
import styles from './landingpagehero.module.css';

export default function LandingPageHero() {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.heroTitle}>ONLY</h1>
      <div className={styles.heroSubtitle}>GIVE PROPS</div>
      <p className={styles.heroDescription}>OG Props is a new sports app that features classic game props from your favorite players. Bet on historical performances risk-free!</p>
      <div className={styles.contactButtonRow}>
        <a href="mailto:hello@example.com?subject=Project Inquiry" className={styles.contactButton}>SUBSCRIBE<span className={styles.arrowCircle}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span></a>
      </div>
    </section>
  );
}