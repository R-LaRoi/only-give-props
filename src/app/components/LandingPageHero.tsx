import React from 'react';
import styles from './marquee.module.css';

export default function LandingPageHero({
  title = "give",
  subtitle = "props",
  contactText = "CONTACT",
  onContactClick
}: {
  title?: string;
  subtitle?: string;
  contactText?: string;
  onContactClick?: () => void;
}) {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center mb-8">
        <h1 className={`${styles.heroTitle} text-white mb-2`}>{title}</h1>
        <h2 className={styles.heroSubtitle}>{subtitle}</h2>
      </div>

      <button
        className={`${styles.contactButton} flex items-center gap-3 px-6 py-3 border border-white/30 rounded-full text-sm font-medium tracking-wide hover:bg-white/10 transition-all duration-300 group`}
        onClick={onContactClick}
      >
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <svg className={`${styles.arrowIcon} w-4 h-4 text-black`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </div>
        <span>{contactText}</span>
      </button>
    </div>
  );
}