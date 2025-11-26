
'use client';

import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import 'keen-slider/keen-slider.min.css';
import { TemplateData } from '@/types/template';

type GalleryProps = {
  gallery: TemplateData['gallery'];
};

const GalleryCarousel: React.FC<GalleryProps> = ({ gallery }) => {
  const [current, setCurrent] = useState(0);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    drag: true,
    mode: 'free-snap',
    slides: {
      perView: 1.2,
      spacing: 15,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2.2, spacing: 15 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3.2, spacing: 20 },
      },
    },
    slideChanged(s) {
      setCurrent(s.track.details.rel);
    },
  });

  return (
    <section id = "gallery" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            {gallery.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            {gallery.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div ref={sliderRef} className="keen-slider rounded-3xl overflow-hidden">
            {gallery.images.map((img, i) => (
              <div
                key={i}
                className="keen-slider__slide relative h-[280px] md:h-[350px]"
              >
                <Image
                  src={img}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>

          {/* Left Button */}
          <button
            onClick={() => slider.current?.prev()}
            className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/40 backdrop-blur-md p-3 rounded-full text-white shadow-lg hover:scale-110 transition"
          >
            <HiChevronLeft className="text-3xl" />
          </button>

          {/* Right Button */}
          <button
            onClick={() => slider.current?.next()}
            className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/40 backdrop-blur-md p-3 rounded-full text-white shadow-lg hover:scale-110 transition"
          >
            <HiChevronRight className="text-3xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
