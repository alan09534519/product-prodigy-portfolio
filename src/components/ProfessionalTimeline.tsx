import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

export const ProfessionalTimeline = () => {
  const timelineData = [
    {
      period: "Jan 2024 - Present",
      role: "Junior Product Manager",
      company: "PVH",
      location: "Amsterdam, Netherlands",
      achievements: [
        "Directed cross-functional team (2 designers, 6 developers)",
        "57% YoY increase in market coverage across 19 European markets",
        "330% YoY increase in app usage through in-store feature",
        "10% checkout conversion improvement"
      ],
      skills: ["Cross-functional Leadership", "Analytics Implementation", "Omnichannel Strategy"]
    },
    {
      period: "Jan 2022 - Dec 2023",
      role: "Product Specialist",
      company: "PVH",
      location: "Amsterdam, Netherlands",
      achievements: [
        "20% upper-funnel conversion rate increase",
        "Built continuous product discovery framework",
        "Implemented Opportunity Solution Trees",
        "Applied Agile practices for backlog management"
      ],
      skills: ["Product Discovery", "Agile Methodology", "Feature Optimization"]
    },
    {
      period: "Dec 2020 - Dec 2021",
      role: "Product Manager",
      company: "Dakodata",
      location: "Taipei, Taiwan",
      achievements: [
        "Developed B2B data analytics product from inception",
        "5+ customer interviews per week for MVP validation",
        "Facilitated workshops defining company mission",
        "Applied Build-Measure-Learn framework"
      ],
      skills: ["0-1 Product Development", "Customer Research", "Product Vision"]
    },
    {
      period: "Sep 2019 - Oct 2021",
      role: "M.Sc. Strategic Product Design",
      company: "TU Delft",
      location: "Delft, Netherlands",
      achievements: [
        "Design thinking and user-centered design",
        "Strategic product development",
        "International study experience",
        "Cross-cultural adaptation"
      ],
      skills: ["Design Thinking", "User Research", "Strategic Planning"]
    }
  ];

  return (
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              From Taiwan to Netherlands: Building products across cultures
            </p>
          </div>
          
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.role}</h3>
                    <p className="font-medium text-primary mb-2">{item.company}</p>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{item.location}</span>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="mb-4">
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};