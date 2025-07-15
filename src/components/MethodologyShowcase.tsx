import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch, Target, Users, Zap } from "lucide-react";

export const MethodologyShowcase = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How I Work
            </h2>
            <p className="text-lg text-muted-foreground">
              Proven frameworks and methodologies for product success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Opportunity Solution Trees */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Opportunity Solution Trees</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Implemented structured problem-solving framework enabling cross-team alignment and prioritization of key opportunities.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Problem Discovery</Badge>
                <Badge variant="outline">Solution Mapping</Badge>
                <Badge variant="outline">Team Alignment</Badge>
              </div>
            </Card>
            
            {/* OKR Crafting */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">OKR Strategy & Alignment</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Crafted and aligned quarterly OKRs driving business outcomes, resulting in high team performance and increased productivity.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Goal Setting</Badge>
                <Badge variant="outline">Metrics Definition</Badge>
                <Badge variant="outline">Team Alignment</Badge>
              </div>
            </Card>
            
            {/* Build-Measure-Learn */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Build-Measure-Learn</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Applied lean startup methodology for continuous product improvement, from B2B analytics MVP to scaled omnichannel solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Rapid Prototyping</Badge>
                <Badge variant="outline">Data Validation</Badge>
                <Badge variant="outline">Iterative Design</Badge>
              </div>
            </Card>
            
            {/* Customer Research */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Continuous Customer Research</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Established research cadence of 5+ interviews weekly, turning customer insights into validated product decisions and feature launches.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">User Interviews</Badge>
                <Badge variant="outline">Behavioral Analysis</Badge>
                <Badge variant="outline">Insight Translation</Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};