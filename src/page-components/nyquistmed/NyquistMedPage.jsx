import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { InnovationSection } from './InnovationSection';
import { UnparallelGlobalData } from './UnparallelGlobalData';
import { ExperienceTheFuture, SciencesLeadersWorldwide } from '../dashboard';
import { RoadmapSection } from './RoadmapSection';
import { FounderNyquistAI } from '../dashboard';
import { FrequentlyQuestion } from '../pricing';

export function NyquistMedPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <InnovationSection />
      <UnparallelGlobalData /> 
      <ExperienceTheFuture  bgColor="bg-[#001224]"/>
      <RoadmapSection />
      <SciencesLeadersWorldwide bgColor="bg-[#1E4ED8]"  parentBg="bg-white" />
      <FrequentlyQuestion />
      <FounderNyquistAI />
      <ExperienceTheFuture/>

    </div>
  );
}
