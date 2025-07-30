import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pattern-overlay">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 gradient-warm opacity-90" />
      
      {/* Hero image placeholder - will be replaced with generated image */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-background leading-tight">
            She Moves is a platform rooted in driving{' '}
            <span className="text-accent font-bold">CHANGE</span> fueled by{' '}
            <span className="text-secondary font-bold">ACTIONS</span> in African{' '}
            <span className="text-primary-foreground font-bold">COMMUNITIES</span>{' '}
            with{' '}
            <span className="text-accent font-bold">WOMEN, GIRLS, and YOUTH</span>{' '}
            at the heart.
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-background/90 max-w-3xl mx-auto leading-relaxed">
            Building sisterhood, healing communities, and empowering change through 
            storytelling, wellness, and collective action across Africa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-background text-primary hover:bg-background/90 shadow-warm transition-smooth group"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Our Movement
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-background text-background hover:bg-background hover:text-primary transition-smooth group"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-background rounded-full flex justify-center">
              <div className="w-1 h-3 bg-background rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;