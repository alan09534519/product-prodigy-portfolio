import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target, Globe } from "lucide-react";

export const ResultsDashboard = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Key metrics from product initiatives at PVH and Dakodata
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">330%</div>
              <div className="text-sm text-muted-foreground">YoY App Usage Increase</div>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">57%</div>
              <div className="text-sm text-muted-foreground">Market Coverage Growth</div>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">20%</div>
              <div className="text-sm text-muted-foreground">Upper-Funnel Conversion</div>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">19</div>
              <div className="text-sm text-muted-foreground">European Markets</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};