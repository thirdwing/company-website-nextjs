"use client";

import { HeroSection } from "../../components/product-page-generic/HeroSection";
import { FeaturesSection  } from "../../components/product-page-generic/FeaturesSection";
import { InnovationSection  } from "../../components/product-page-generic/InnovationSection";
import { UnparallelGlobalData  } from "../../components/product-page-generic/UnparallelGlobalData";
import { RoadmapSection  } from "../../components/product-page-generic/RoadmapSection";
import { ExperienceTheFuture, SciencesLeadersWorldwide } from '../dashboard';
import { FounderNyquistAI } from '../dashboard';
import { FrequentlyQuestion } from '../pricing';
import { nyquistPharmaData } from '../../constants/nyquistPharma';

export function NyquistPharmaPage() {
  const { hero, features, flags, globalDataSections, roadmapSections } = nyquistPharmaData;

  return (
    <div className="min-h-screen">
      <HeroSection
        heading={hero.heading}
        title={hero.title}
        description={hero.description}
        ctaButton={hero.ctaButton}
        imageSrc="/images/hero/nyquistpharma-hero.png"
        imageAlt="Nyquist Pharma Hero"
        videoId="957152909"
        cursor={true}
      />

      <FeaturesSection
        sections={features.sections}
        bgColor="bg-[#1E4ED8]"
      />

      <InnovationSection
        title="All the Data, Insights, and Tools Needed to"
        highlightedText="Accelerate Your Innovation"
        bgColor="bg-gradient-to-br from-gray-50 via-white to-blue-50"
      />

      <UnparallelGlobalData
        flags={flags}
        globalDataSections={globalDataSections}
        bgColor="bg-white"
      />

      <ExperienceTheFuture bgColor="bg-[#001224]" />

      <RoadmapSection
        sections={roadmapSections}
        bgColor="bg-gray-50"
      />

      <SciencesLeadersWorldwide bgColor="bg-[#1E4ED8]" parentBg="bg-white" />
      <FrequentlyQuestion />
      <FounderNyquistAI />
      <ExperienceTheFuture />
    </div>
  );
}
