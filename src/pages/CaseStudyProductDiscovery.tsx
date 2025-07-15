import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Search, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const CaseStudyProductDiscovery = () => {
  const heroContent = (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
        <p className="text-muted-foreground mb-6">
          Led the implementation of a structured product discovery process that transformed how our team 
          approached feature development, resulting in a 330% increase in app usage for the in-store 
          product request feature.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Opportunity Solution Trees</Badge>
          <Badge variant="outline">Customer Research</Badge>
          <Badge variant="outline">Cross-functional Collaboration</Badge>
        </div>
      </div>
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">330%</div>
          <div className="text-sm text-muted-foreground">YoY Usage Increase</div>
        </div>
      </div>
    </div>
  );

  const challengeContent = (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            The Problem
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Our product team was building features based on assumptions rather than validated customer needs. 
            This led to low adoption rates and features that didn't solve real customer problems.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <span>Low feature adoption rates (less than 20%)</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <span>Disconnect between customer needs and product features</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <span>Lack of structured approach to product discovery</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  const processContent = (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                <span className="text-blue-500 font-bold">1</span>
              </div>
              Research Setup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Established weekly customer interviews</li>
              <li>• Created research repository</li>
              <li>• Defined customer personas</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                <span className="text-blue-500 font-bold">2</span>
              </div>
              Opportunity Mapping
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Implemented Opportunity Solution Trees</li>
              <li>• Mapped customer pain points</li>
              <li>• Prioritized opportunities</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                <span className="text-blue-500 font-bold">3</span>
              </div>
              Team Alignment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Weekly discovery workshops</li>
              <li>• Cross-functional collaboration</li>
              <li>• Shared decision-making framework</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Key Discovery Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Customer Pain Points</h4>
              <ul className="space-y-2 text-sm">
                <li>• Difficulty finding specific products in-store</li>
                <li>• Limited product availability information</li>
                <li>• Frustration with out-of-stock items</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Opportunity Areas</h4>
              <ul className="space-y-2 text-sm">
                <li>• In-store product location assistance</li>
                <li>• Real-time inventory updates</li>
                <li>• Product request and notification system</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const solutionContent = (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>In-Store Product Request Feature</CardTitle>
          <CardDescription>
            A comprehensive solution that allows customers to request products and receive notifications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Core Features</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Product search and request system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Real-time inventory integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Automated notification system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Store staff dashboard</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Technical Implementation</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-sm">Mobile-first design approach</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-sm">Integration with existing POS system</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-sm">Push notification infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-sm">Analytics tracking implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const resultsContent = (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">330%</div>
            <div className="text-sm text-muted-foreground">YoY Usage Increase</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Customer Interviews/Week</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
            <div className="text-sm text-muted-foreground">Team Satisfaction</div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Business Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Quantitative Results</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm">330% increase in feature usage</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm">40% improvement in customer satisfaction</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm">25% reduction in support tickets</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Qualitative Impact</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">Improved team collaboration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">Data-driven decision making</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">Customer-centric culture</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const lessonsContent = (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Key Takeaways</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">1. Customer Research is Non-Negotiable</h4>
              <p className="text-sm text-muted-foreground">
                Regular customer interviews provided insights that assumptions couldn't. The discovery 
                process revealed pain points we never would have identified internally.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">2. Structure Enables Innovation</h4>
              <p className="text-sm text-muted-foreground">
                Opportunity Solution Trees provided a framework that didn't restrict creativity but 
                channeled it effectively toward solving real customer problems.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">3. Cross-Functional Collaboration is Key</h4>
              <p className="text-sm text-muted-foreground">
                Involving engineering, design, and business stakeholders in the discovery process 
                ensured solutions were both technically feasible and business-viable.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <CaseStudyTemplate
      title="Building Product Discovery Culture at Scale"
      subtitle="How implementing Opportunity Solution Trees and continuous customer research led to a 330% increase in app usage"
      company="Spar International"
      timeline="6 months"
      role="Senior Product Manager"
      tags={["Product Discovery", "Customer Research", "Team Leadership"]}
      heroContent={heroContent}
      challengeContent={challengeContent}
      processContent={processContent}
      solutionContent={solutionContent}
      resultsContent={resultsContent}
      lessonsContent={lessonsContent}
      nextCaseStudy={{
        title: "End-to-End Analytics Tool Implementation",
        path: "/case-study/analytics-implementation"
      }}
    />
  );
};

export default CaseStudyProductDiscovery;