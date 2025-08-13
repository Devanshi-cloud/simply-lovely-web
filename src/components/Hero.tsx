import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-20 animate-float">
        <Sparkles className="w-8 h-8 text-white/30" />
      </div>
      <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: '2s' }}>
        <Zap className="w-6 h-6 text-white/40" />
      </div>
      <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: '4s' }}>
        <Sparkles className="w-10 h-10 text-white/20" />
      </div>

      <div className="container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Beautiful Web
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto">
            Creating stunning, modern websites with cutting-edge design and seamless user experiences that captivate and convert.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg">
              View Portfolio
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div className="p-6">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold mb-2">5★</div>
              <div className="text-white/80">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/10"></div>
    </section>
  );
};

export default Hero;