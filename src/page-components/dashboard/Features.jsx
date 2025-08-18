"use client";

import { dashboardFeatures, dashboardContent } from "../../constants/dashboard";

export function Features() {
  return (
    <section className="py-16 sm:py-20 md:py-25 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mb-12">
          <div className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-medium leading-[1.2em] tracking-wider mb-8">
            {dashboardContent.title}
          </div>
          <div className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-light leading-[1em] tracking-wider text-[#000000]" >
            {dashboardContent.subtitle}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
          {dashboardFeatures.map((feature, index) => (
            <div key={index} className="">
              <div className="text-[16px] text-[#1e4ed8] mb-2 font-semibold uppercase leading-[1.2em] tracking-[1.2px]">
                {feature.title}
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
