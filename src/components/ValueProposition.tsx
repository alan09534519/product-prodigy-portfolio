import { Card } from "@/components/ui/card";
import { Brain, BarChart3, Globe } from "lucide-react";

export const ValueProposition = () => {
  return (
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Turning customer insights into measurable business growth
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Design-trained product manager with international experience building data-driven product cultures from the ground up
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Customer Discovery</h3>
            <p className="text-muted-foreground">
              Design background enables deep customer empathy, conducting 5+ interviews weekly to uncover real user needs
            </p>
          </Card>
          
          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Data-Driven Delivery</h3>
            <p className="text-muted-foreground">
              Built analytics cultures from scratch, implementing frameworks that drive 300%+ growth through measurable impact
            </p>
          </Card>
          
          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Cross-Cultural Innovation</h3>
            <p className="text-muted-foreground">
              International experience across Taiwan and Netherlands, scaling products across 19 European markets
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};