import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Target, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";

interface CaseStudyTemplateProps {
  title: string;
  subtitle: string;
  company: string;
  timeline: string;
  role: string;
  tags: string[];
  heroContent: ReactNode;
  challengeContent: ReactNode;
  processContent: ReactNode;
  solutionContent: ReactNode;
  resultsContent: ReactNode;
  lessonsContent: ReactNode;
  nextCaseStudy?: {
    title: string;
    path: string;
  };
}

export const CaseStudyTemplate = ({
  title,
  subtitle,
  company,
  timeline,
  role,
  tags,
  heroContent,
  challengeContent,
  processContent,
  solutionContent,
  resultsContent,
  lessonsContent,
  nextCaseStudy
}: CaseStudyTemplateProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
            <nav className="text-sm text-muted-foreground">
              <span>Case Study</span>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary">{tag}</Badge>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              {subtitle}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Company</p>
                  <p className="font-medium">{company}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Timeline</p>
                  <p className="font-medium">{timeline}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Role</p>
                  <p className="font-medium">{role}</p>
                </div>
              </div>
            </div>
            
            {heroContent}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                <Target className="h-5 w-5 text-destructive" />
              </div>
              <h2 className="text-3xl font-bold">The Challenge</h2>
            </div>
            {challengeContent}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                <Target className="h-5 w-5 text-blue-500" />
              </div>
              <h2 className="text-3xl font-bold">The Process</h2>
            </div>
            {processContent}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">The Solution</h2>
            </div>
            {solutionContent}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <h2 className="text-3xl font-bold">The Results</h2>
            </div>
            {resultsContent}
          </div>
        </div>
      </section>

      {/* Lessons Learned Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center">
                <Target className="h-5 w-5 text-purple-500" />
              </div>
              <h2 className="text-3xl font-bold">Lessons Learned</h2>
            </div>
            {lessonsContent}
          </div>
        </div>
      </section>

      {/* Next Case Study */}
      {nextCaseStudy && (
        <section className="py-16 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle>Next Case Study</CardTitle>
                  <CardDescription>Continue exploring my work</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{nextCaseStudy.title}</h3>
                    <Button onClick={() => navigate(nextCaseStudy.path)}>
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};