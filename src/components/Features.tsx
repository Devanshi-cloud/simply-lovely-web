import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Smartphone, Zap, Shield, Globe, Heart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Palette,
      title: "Modern Design",
      description: "Beautiful, contemporary designs that capture attention and create lasting impressions."
    },
    {
      icon: Smartphone,
      title: "Responsive",
      description: "Perfect viewing experience across all devices, from mobile phones to desktop computers."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance ensuring your website loads quickly and runs smoothly."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with security best practices and reliable hosting solutions."
    },
    {
      icon: Globe,
      title: "SEO Optimized",
      description: "Search engine optimized to help your website rank higher and attract more visitors."
    },
    {
      icon: Heart,
      title: "User Focused",
      description: "Designed with your users in mind, creating engaging and intuitive experiences."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose Our
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine creativity with technology to deliver exceptional web experiences that drive results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-large transition-smooth cursor-pointer border-border/50 hover:border-primary/20"
            >
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-secondary mb-4 mx-auto group-hover:scale-110 transition-spring">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;