"use client";

import { HeroSection } from "../../components/product-page-generic/HeroSection";
import { FeaturesSection } from "../../components/product-page-generic/FeaturesSection";
import { InnovationSection } from "../../components/product-page-generic/InnovationSection";
import { UnparallelGlobalData } from "../../components/product-page-generic/UnparallelGlobalData";
import { RoadmapSection } from "../../components/product-page-generic/RoadmapSection";
import { CommitmentDataProtection } from "../../components/product-page-generic/CommitmentDataProtection";
import { ExperienceTheFuture, SciencesLeadersWorldwide } from '../dashboard';
import { FounderNyquistAI } from '../dashboard';
import { FrequentlyQuestion } from '../pricing';
import { nyquistIqData } from '../../constants/nyquistiq';

export function NyquistIqPage() {
    const { hero, features, globalDataSections, commitmentDataProtection } = nyquistIqData;

    return (
        <div className="min-h-screen">
            <HeroSection
                heading={hero.heading}
                title={hero.title}
                description={hero.description}
                ctaButton={hero.ctaButton}
                imageSrc="/images/hero/nyquistai-iq-hero.webp"
                imageAlt="Nyquist IQ Hero"
                videoId="957152909"
                cursor={false}
            />

            <FeaturesSection
                sections={features.sections}
                bgColor="bg-[#1E4ED8]"
            />

            <UnparallelGlobalData
                globalDataSections={globalDataSections}
                bgColor="bg-white"
                showFlags={false}
                title="Revolutionize Your Workflow with the Power of AI"
            />

            <CommitmentDataProtection
                title={commitmentDataProtection.title}
                commitments={commitmentDataProtection.commitments}
                bgColor="bg-gray-900"
            />

            <ExperienceTheFuture />

            <SciencesLeadersWorldwide bgColor="bg-[#1E4ED8]" parentBg="bg-white" removeMargin={true} />
            <FrequentlyQuestion />
            <FounderNyquistAI />
            <ExperienceTheFuture />
        </div>
    );
}
