'use client';

import { useState } from 'react';

type ShiftPlan = {
  id: string;
  title: string;
  authority: string;
  description: string;
};

type ShiftPlansSectionProps = {
  plans: ShiftPlan[];
};

export default function ShiftPlansSection({ plans }: ShiftPlansSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('Alle');

  const filters = ['Alle', 'Polizei Bremen', 'Polizei Bremerhaven', 'Allgemein'];

  const filteredPlans = activeFilter === 'Alle'
    ? plans
    : plans.filter((plan) => plan.authority === activeFilter);

  return (
    <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
      {/* Filter Chips */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
              activeFilter === filter
                ? 'bg-primary-light text-white shadow-lg shadow-primary-light/20'
                : 'border border-gray-700 bg-gray-800/40 text-gray-300 hover:border-primary-light/50 hover:bg-gray-800/60 hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Filtered Plans Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredPlans.map((plan) => (
          <div
            key={plan.id}
            className="group relative overflow-hidden rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-800/40 to-gray-900/60 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary-light/50 hover:shadow-xl hover:shadow-primary-light/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-light/0 to-primary-dark/0 transition-all duration-300 group-hover:from-primary-light/5 group-hover:to-primary-dark/10" />
            <div className="relative">
              <h3 className="mb-1 text-xl font-bold tracking-tight text-white">
                {plan.title}
              </h3>
              <p className="mb-3 text-sm font-medium text-primary-light">
                {plan.authority}
              </p>
              <p className="text-base leading-7 text-gray-400">
                {plan.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

