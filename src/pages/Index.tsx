import { HeroSection } from "@/components/HeroSection";
import { ValueProposition } from "@/components/ValueProposition";
import { CaseStudies } from "@/components/CaseStudies";
import { MethodologyShowcase } from "@/components/MethodologyShowcase";
import { ProfessionalTimeline } from "@/components/ProfessionalTimeline";
import { ResultsDashboard } from "@/components/ResultsDashboard";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ValueProposition />
      <ResultsDashboard />
      <CaseStudies />
      <MethodologyShowcase />
      <ProfessionalTimeline />
      <ContactSection />
    </div>
  );
};

export default Index;