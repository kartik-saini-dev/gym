'use client';

import { Button } from '@/components/ui/Button';
import { Pricing as PricingType } from '@/types/template';

interface Props {
  pricing: PricingType;
}

const Pricing: React.FC<Props> = ({ pricing }) => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {pricing.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {pricing.subtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.plans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                {plan.title}
              </h3>
              <p className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                {plan.price}
              </p>
              <ul className="mb-6 space-y-2 text-gray-600 dark:text-gray-300">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx}>• {feature}</li>
                ))}
              </ul>
              <Button>Choose Plan</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
