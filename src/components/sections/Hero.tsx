
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { TemplateData } from '@/types/template';


type HeroProps = {
  hero: TemplateData['hero'];
};

const Hero: React.FC<HeroProps> = ({ hero }) => {
  const [current, setCurrent] = useState(0);
  const images = hero.images;

  // Auto-slide images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id= "hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background carousel */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={img}
            alt={`Hero ${index + 1}`}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Glass content box */}
      <div className="relative z-10 bg-white/20 backdrop-blur-md rounded-2xl p-10 max-w-3xl text-center md:text-left shadow-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {hero.title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8">
          {hero.subtitle}
        </p>

        <div className="flex justify-center md:justify-start gap-4">
          {hero.callToActionText && (
            <Button asChild>
              <a href={hero.callToActionLink || '#'}>{hero.callToActionText}</a>
            </Button>
          )}

          {/* Optional second button */}
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
