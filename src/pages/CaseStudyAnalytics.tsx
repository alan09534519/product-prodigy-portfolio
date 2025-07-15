import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Target, Users, TrendingUp, CheckCircle, ArrowRight, Database } from "lucide-react";

const CaseStudyAnalytics = () => {
  const heroContent = (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
        <p className="text-muted-foreground mb-6">
          Built a comprehensive analytics culture from scratch, implementing tools and processes that 
          enabled data-driven decision making and improved key business metrics across the organization.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Analytics Implementation</Badge>
          <Badge variant="outline">Stakeholder Training</Badge>
          <Badge variant="outline">Data Culture</Badge>
        </div>
      </div>
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">10%</div>
          <div className="text-sm text-muted-foreground">Conversion Improvement</div>
        </div>
      </div>
    </div>
  );

  const challengeContent = (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            The Challenge
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            The organization lacked a unified analytics approach, leading to inconsistent data interpretation 
            and decision-making based on gut feelings rather than concrete evidence.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <span>No centralized analytics platform</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <span>Inconsistent data interpretation across teams</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <span>Limited understanding of user behavior</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <span>Decisions based on assumptions rather than data</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  const processContent = (
    <div className="space-y-8">
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                <span className="text-blue-500 font-bold">1</span>
              </div>
              Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Current state analysis</li>
              <li>• Stakeholder interviews</li>
              <li>• Tool evaluation</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                <span className="text-blue-500 font-bold">2</span>
              </div>
              Implementation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Platform setup</li>
              <li>• Data integration</li>
              <li>• Tracking implementation</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                <span className="text-blue-500 font-bold">3</span>
              </div>
              Training
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Team workshops</li>
              <li>• Documentation</li>
              <li>• Best practices</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                <span className="text-blue-500 font-bold">4</span>
              </div>
              Optimization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Performance monitoring</li>
              <li>• Continuous improvement</li>
              <li>• Advanced features</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Implementation Strategy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Technical Setup</h4>
              <ul className="space-y-2 text-sm">
                <li>• Multi-platform analytics integration</li>
                <li>• Custom event tracking framework</li>
                <li>• Real-time dashboard creation</li>
                <li>• A/B testing infrastructure</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Organizational Change</h4>
              <ul className="space-y-2 text-sm">
                <li>• Stakeholder alignment workshops</li>
                <li>• Data governance framework</li>
                <li>• Regular reporting cadence</li>
                <li>• Performance review integration</li>
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
          <CardTitle>Comprehensive Analytics Platform</CardTitle>
          <CardDescription>
            A unified analytics ecosystem that provided actionable insights across all product areas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Core Components</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Multi-platform tracking integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Real-time behavior analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Custom dashboard creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Automated reporting system</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Key Features</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-sm">Funnel analysis and optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-sm">Cohort analysis and retention tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-sm">A/B testing framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-sm">Predictive analytics capabilities</span>
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
            <div className="text-3xl font-bold text-green-600 mb-2">10%</div>
            <div className="text-sm text-muted-foreground">Conversion Improvement</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">8%</div>
            <div className="text-sm text-muted-foreground">Error Rate Reduction</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Team Adoption Rate</div>
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
              <h4 className="font-semibold mb-3">Measurable Outcomes</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm">10% improvement in checkout conversion</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm">8% reduction in error rates</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm">30% faster decision-making cycles</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm">50% increase in experiment velocity</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Organizational Benefits</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">Unified data language across teams</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">Evidence-based decision making</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">Improved cross-team collaboration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">Data-driven culture establishment</span>
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
          <CardTitle>Key Learnings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">1. Culture Change Takes Time</h4>
              <p className="text-sm text-muted-foreground">
                Implementing analytics tools is the easy part - changing organizational behavior to 
                embrace data-driven decision making requires patience and consistent reinforcement.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">2. Start with Business Questions</h4>
              <p className="text-sm text-muted-foreground">
                Rather than implementing every possible metric, we focused on answering specific 
                business questions first, which led to higher adoption and clearer value demonstration.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">3. Training is Critical</h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive training programs and ongoing support were essential for successful 
                adoption across different skill levels and departments.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">4. Governance Enables Scale</h4>
              <p className="text-sm text-muted-foreground">
                Establishing clear data governance from the beginning prevented inconsistencies 
                and maintained data quality as the system scaled.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <CaseStudyTemplate
      title="End-to-End Analytics Tool Implementation"
      subtitle="Built product analytics culture from scratch, enabling data-driven decisions that improved key metrics"
      company="Spar International"
      timeline="4 months"
      role="Senior Product Manager"
      tags={["Analytics", "Data Culture", "Stakeholder Management"]}
      heroContent={heroContent}
      challengeContent={challengeContent}
      processContent={processContent}
      solutionContent={solutionContent}
      resultsContent={resultsContent}
      lessonsContent={lessonsContent}
      nextCaseStudy={{
        title: "Building Product Discovery Culture at Scale",
        path: "/case-study/product-discovery"
      }}
    />
  );
};

export default CaseStudyAnalytics;