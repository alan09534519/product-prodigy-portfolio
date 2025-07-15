import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, BarChart3, Users, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CaseStudies = () => {
  const navigate = useNavigate();
  
  return (
    <section id="case-studies" className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-muted-foreground">
              Deep dives into product discovery and delivery impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Search className="h-5 w-5 text-primary" />
                <Badge variant="secondary">Product Discovery</Badge>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Building Product Discovery Culture at Scale
              </h3>
              <p className="text-muted-foreground mb-6">
                How implementing Opportunity Solution Trees and continuous customer research led to a 330% increase in app usage through the in-store product request feature.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">5+ customer interviews per week</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">Cross-functional team alignment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <BarChart3 className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-green-600">330% YoY usage increase</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full group"
                onClick={() => navigate('/case-study/product-discovery')}
              >
                View Full Case Study
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
            
            {/* Case Study 2 */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="h-5 w-5 text-primary" />
                <Badge variant="secondary">Analytics Implementation</Badge>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                End-to-End Analytics Tool Implementation
              </h3>
              <p className="text-muted-foreground mb-6">
                Built product analytics culture from scratch, enabling data-driven decisions that improved checkout conversion by 10% and reduced error rates by 8%.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">Stakeholder alignment & training</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <BarChart3 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">Real-time behavior insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-green-600">10% conversion improvement</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full group"
                onClick={() => navigate('/case-study/analytics-implementation')}
              >
                View Full Case Study
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};