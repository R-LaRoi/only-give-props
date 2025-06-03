'use client';
import React from 'react';
import LandingPageHero from './components/LandingPageHero';
import DiagonalImageMarquee from './components/DiagonalImageMarquee';
import './components/marquee.module.css'
import './globals.css';


export default function Home() {
  const handleContactButtonClick = () => {
    // Simple mailto or redirect to contact page
    window.location.href = 'mailto:hello@example.com?subject=Project Inquiry';
  };

  // Better quality images instead of placeholders
  const portfolioImages = [
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1618556450980-efd41ea142d1?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=500&fit=crop',
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-cyan-950/20" />

      <LandingPageHero />

      <DiagonalImageMarquee
        imageUrls={portfolioImages}
        scrollDuration={30}
        baseRotation={-15}
        itemWidth={200}
        itemHeight={260}
        itemGap={25}
        itemVerticalStagger={18}
      />
    </div>
  );
}