"use client";

import { worldWideCoverage } from "../../constants/dashboard";

export function WorldWideCoverage() {
  return (
    <section className="py-16 sm:py-20 md:py-25 bg-[#F5F5F5]">
      <div className="max-w-[1222px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="text-[40px] font-medium leading-[1.2em] mb-4">
            {worldWideCoverage.title}
          </div>
        </div>

        {/* Flags Row */}
        <div className="flex justify-center items-center gap-[50px] mb-16 mt-6 flex-wrap">
          {worldWideCoverage.flags.map((flag) => (
            <div key={flag.id} className="flex flex-col items-center">
              <img
                src={flag.flag}
                alt={flag.alt}
                className=" object-cover mb-2"
              />
              <span className="text-sm font-medium text-black mt-2">
                {flag.name}
              </span>
            </div>
          ))}
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {worldWideCoverage.statistics.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-[40px] font-medium leading-[1.2em] mb-4">
                {stat.value}
              </div>
              <div className="text-[16px] font-medium leading-[1.2em] tracking-[1.2px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
