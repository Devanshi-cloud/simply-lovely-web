import { Button } from "@/components/ui/button";
import { CheckCircle, Code2, Users, Award } from "lucide-react";

const About = () => {
  const achievements = [
    "5+ years of web development experience",
    "Expert in modern frameworks and technologies",
    "Proven track record of successful projects",
    "Committed to quality and client satisfaction"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Crafting Digital
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We're passionate about creating web experiences that not only look amazing but also deliver real value to your business. Our approach combines cutting-edge technology with user-centered design principles.
            </p>
            
            <div className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Learn More About Us
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-soft hover:shadow-medium transition-smooth">
              <Code2 className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Clean Code</h3>
              <p className="text-muted-foreground">
                Writing maintainable, scalable code that stands the test of time.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-soft hover:shadow-medium transition-smooth mt-8">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Team Collaboration</h3>
              <p className="text-muted-foreground">
                Working closely with clients to bring their vision to life.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-soft hover:shadow-medium transition-smooth -mt-8">
              <Award className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Quality First</h3>
              <p className="text-muted-foreground">
                Delivering exceptional quality in every project we undertake.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-soft hover:shadow-medium transition-smooth">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">∞</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Continuous Growth</h3>
              <p className="text-muted-foreground">
                Always learning and adapting to the latest industry trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;