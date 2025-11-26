
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { TemplateData } from '@/types/template';

type AboutProps = {
  about: TemplateData['about'];
};

const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <section id = "about" className="relative py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {about.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {about.subtitle}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Text + badges */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              What We Do
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{about.whatWeDo}</p>

            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Why Choose Us
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{about.whyChooseUs}</p>

            {/* Highlight badges */}
            <div className="flex flex-wrap gap-4 mt-6">
              {about.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="bg-white/20 backdrop-blur-md text-gray-800 dark:text-white px-4 py-2 rounded-xl shadow-md font-semibold"
                >
                  {highlight.label}
                </div>
              ))}
            </div>

            {/* Optional CTA */}
            {about.callToActionText && (
              <div className="mt-8">
                <Button>{about.callToActionText}</Button>
              </div>
            )}
          </div>

          {/* Right: Owner Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            {about.ownerPhoto && (
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={about.ownerPhoto}
                  alt={about.ownerName || 'Owner'}
                  fill
                  className="object-cover object-center"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
