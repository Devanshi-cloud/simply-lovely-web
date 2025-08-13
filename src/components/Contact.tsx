import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Create Something
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss how we can help you succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input placeholder="Your name" className="border-border/50 focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="your@email.com" className="border-border/50 focus:border-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input placeholder="Project inquiry" className="border-border/50 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    className="min-h-[120px] border-border/50 focus:border-primary resize-none"
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full md:w-auto">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-border/50 shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">hello@yourwebsite.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary border-0 text-white shadow-glow">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Quick Response</h3>
                <p className="text-white/90 text-sm">
                  We typically respond to inquiries within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;