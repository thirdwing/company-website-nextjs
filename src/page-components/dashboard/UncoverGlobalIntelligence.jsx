"use client";

import { useState } from "react";
import { uncoverGlobalContent } from "../../constants/dashboard";
import { CollapsibleCard } from "../../components/features/CollapsibleCard";

export function UncoverGlobalIntelligence() {
  const [openCard, setOpenCard] = useState("medtech"); // First card open by default

  const handleToggle = (cardId) => {
    setOpenCard(openCard === cardId ? null : cardId);
  };

  return (
    <section className="relative py-16 bg-[#0A1121] overflow-hidden">
      <div className="max-w-[1222px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div className="text-3xl md:text-4xl lg:text-[48px] leading-[1.2] font-semibold tracking-[1px] align-middle capitalize text-[#F5F5F5]">
            {uncoverGlobalContent.title}
          </div>
          <div className="text-2xl md:text-3xl lg:text-[40px] leading-[1.2] font-medium tracking-[-0.48px] align-middle text-[#F5F5F5]">
            {uncoverGlobalContent.subtitle}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-[45px]">
          <div className="space-y-8">
            <div className="">
              <img
                src={uncoverGlobalContent.dashboardImage.src}
                alt={uncoverGlobalContent.dashboardImage.alt}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="">
            {uncoverGlobalContent.platforms.map((platform) => (
              <CollapsibleCard
                key={platform.id}
                image={platform.logo}
                title={platform.title}
                description={platform.description}
                learnMoreLink={platform.link}
                isOpen={openCard === platform.id}
                onToggle={() => handleToggle(platform.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
