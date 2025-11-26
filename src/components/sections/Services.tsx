
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { TemplateData } from '@/types/template';

type ServicesProps = {
  services: TemplateData['services'];
};

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <section  id = "services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {services.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.items.map((service, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.02] transition transform"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {service.description}
                </p>

                {service.price && (
                  <p className="text-gray-800 dark:text-white font-semibold mb-4">
                    {service.price}
                  </p>
                )}

                <Button>Learn More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
