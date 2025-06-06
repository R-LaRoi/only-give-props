'use client';
import React from 'react';
import LandingPageHero from './components/LandingPageHero';
import DiagonalImageMarquee from './components/DiagonalImageMarquee';
import './components/marquee.module.css'
import './globals.css';


export default function Home() {


  // Better quality images instead of placeholders
  const portfolioImages = [

    'https://res.cloudinary.com/dyczhwkws/image/upload/v1749245019/204502-050-01D48E43_rsrkfe_f5bjqo.webp',
    'https://res.cloudinary.com/dyczhwkws/image/upload/v1749245023/636474724257307501-USATSI-5159136_nzrskd_vxdonw.webp',
    'https://res.cloudinary.com/dyczhwkws/image/upload/v1749245023/776c9cf887124d92bba16bb6dfbd5335_yjwove_kxntab.jpg',
    'https://res.cloudinary.com/dyczhwkws/image/upload/v1749245026/NBA-Utah-Jazz-Karl-Malone-action-Seattle-Supersonics-Ervin-Johnson-Western-Conference-basketball-Finalls-1996_s6s9fi_brpnku.webp',
    'https://res.cloudinary.com/dyczhwkws/image/upload/v1749245019/204502-050-01D48E43_rsrkfe_f5bjqo.webp',
    'https://res.cloudinary.com/dyczhwkws/image/upload/v1749245023/776c9cf887124d92bba16bb6dfbd5335_yjwove_kxntab.jpg',
    'https://res.cloudinary.com/dyczhwkws/image/upload/v1749245026/NBA-Utah-Jazz-Karl-Malone-action-Seattle-Supersonics-Ervin-Johnson-Western-Conference-basketball-Finalls-1996_s6s9fi_brpnku.webp',
    'https://res.cloudinary.com/dyczhwkws/image/upload/v1749245019/204502-050-01D48E43_rsrkfe_f5bjqo.webp',
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-start overflow-x-hidden relative">
      <LandingPageHero />
      <DiagonalImageMarquee
        imageUrls={portfolioImages}
        scrollDuration={30}
        itemWidth={200}
        itemHeight={260}
        itemGap={25}
      />
    </main>
  );
}