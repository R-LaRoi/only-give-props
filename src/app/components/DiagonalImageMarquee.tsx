'use client';
import React, { useRef, useEffect } from 'react';
import styles from './marquee.module.css';
interface DiagonalImageMarqueeProps {
  imageUrls: string[];
  scrollDuration?: number;
  rotateIntensity?: number;
  itemWidth?: number;
  itemHeight?: number;
  itemGap?: number;
  className?: string;
}

export default function DiagonalImageMarquee({
  imageUrls,
  scrollDuration = 25,
  rotateIntensity = 1,
  itemWidth = 180,
  itemHeight = 220,
  itemGap = 30,
  className = ''
}: DiagonalImageMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive rotation adjustment
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;

      const isMobile = window.innerWidth <= 768;
      const intensity = isMobile ? 0.8 : rotateIntensity;

      containerRef.current.style.setProperty('--rotate', intensity.toString());
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [rotateIntensity]);

  // Triple the images for seamless loop
  const tripleImages = [...imageUrls, ...imageUrls, ...imageUrls];

  return (
    <>


      <div className={styles.skewedViewWrapper}>
        <div className={styles.skewedView}>
          <div className={styles.marqueeTrack}>
            {tripleImages.map((src, index) => (
              <div
                key={index}
                className={styles.marqueeItem}
              >
                <div className={styles.marqueeItemOverlay} />
                <img
                  src={src}
                  alt={`Portfolio image ${(index % imageUrls.length) + 1}`}
                  className={styles.marqueeItemImage}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Overlays */}
      <div className={`${styles.marqueeOverlay} ${styles.marqueeOverlayBottom}`} />
      <div className={`${styles.marqueeOverlay} ${styles.marqueeOverlayLeft}`} />
      <div className={`${styles.marqueeOverlay} ${styles.marqueeOverlayTop}`} />
      <div className={`${styles.marqueeOverlay} ${styles.marqueeOverlayRight}`} />
    </>
  );
}