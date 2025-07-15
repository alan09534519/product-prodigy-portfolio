import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Calendar, ArrowRight } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to drive product growth through customer-centric innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">yinjen.lee@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-muted-foreground">linkedin.com/in/yin-jen-lee-567965105</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Rotterdam, Netherlands</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Availability</p>
                    <p className="text-muted-foreground">Open to opportunities</p>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Call to Action */}
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-6">Ready to Collaborate?</h3>
              
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  I'm actively seeking product management opportunities where I can leverage my design background, analytical mindset, and international experience to drive meaningful growth.
                </p>
                
                <div className="space-y-4">
                  <Button className="w-full group">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  
                  <Button variant="outline" className="w-full group">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  
                  <Button variant="secondary" className="w-full group">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule a Call
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              © 2024 Yin-Jen Lee - Product Manager Portfolio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};