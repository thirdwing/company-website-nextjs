import { Hero, Features, ClientsSection, UncoverGlobalIntelligence, WorldWideCoverage, SciencesLeadersWorldwide, DiscoverConnectCreateAI, FounderNyquistAI, ExperienceTheFuture } from '@/page-components';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <ClientsSection />
      <UncoverGlobalIntelligence />
      <WorldWideCoverage />
      <SciencesLeadersWorldwide />
      <DiscoverConnectCreateAI />
      <FounderNyquistAI />
      <ExperienceTheFuture />
    </div>
  );
}
