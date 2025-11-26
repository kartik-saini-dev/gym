'use client';

import { WhyChooseUs as WhyChooseUsType, WhyChooseUsItem, WhyChooseUsIcon } from '@/types/template';
import { HiUserGroup, HiBadgeCheck, HiLightningBolt, HiCurrencyDollar, HiSupport } from 'react-icons/hi';

interface Props {
  data: WhyChooseUsType;
}

// Map string keys to react-icons components
const iconMap: Record<WhyChooseUsIcon, React.ElementType> = {
  HiUserGroup: HiUserGroup,
  HiBadgeCheck: HiBadgeCheck,
  HiLightningBolt: HiLightningBolt,
  HiCurrencyDollar: HiCurrencyDollar,
  HiSupport: HiSupport,
};

const WhyChooseUs: React.FC<Props> = ({ data }) => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* USP Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((item: WhyChooseUsItem, idx: number) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={idx}
                className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
              >
                {Icon && <Icon className="w-8 h-8 text-blue-500 mb-4" />}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
