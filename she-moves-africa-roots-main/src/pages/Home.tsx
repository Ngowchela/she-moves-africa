import Hero from '@/components/Hero';
import ImageCarousel from '@/components/ImageCarousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Heart, Users, Film, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Sample data for carousels
  const communityStories = [
    {
      id: 1,
      title: "Intergenerational Wisdom Circles",
      description: "Women and girls sharing stories, wisdom, and dreams across generations in intimate community gatherings.",
      image: "community-circle-1",
      category: "Community"
    },
    {
      id: 2,
      title: "Sisterhood Support Networks",
      description: "Building strong bonds between women through shared experiences, mentorship, and collective healing.",
      image: "sisterhood-support",
      category: "Sisterhood"
    },
    {
      id: 3,
      title: "Youth Leadership Development",
      description: "Empowering young African women and girls to become leaders and changemakers in their communities.",
      image: "youth-leadership",
      category: "Youth"
    }
  ];

  const filmsImpact = [
    {
      id: 1,
      title: "With Grace Documentary",
      description: "A powerful film showcasing resilience and hope, screened at IDFA and featured by BBC, bringing African stories to global audiences.",
      image: "with-grace-film",
      category: "Documentary"
    },
    {
      id: 2,
      title: "Community Screenings",
      description: "Bringing impactful films directly to communities, sparking conversations about gender and climate justice.",
      image: "community-screening",
      category: "Impact"
    },
    {
      id: 3,
      title: "Storytelling Workshops",
      description: "Teaching young people to tell their own stories through film, empowering authentic African narratives.",
      image: "storytelling-workshop",
      category: "Education"
    }
  ];

  const sisterhoodMoments = [
    {
      id: 1,
      title: "Healing Circles",
      description: "Sacred spaces for women to heal together, sharing burdens and celebrating victories in community.",
      image: "healing-circles",
      category: "Healing"
    },
    {
      id: 2,
      title: "Mentorship Programs",
      description: "Connecting experienced women with young leaders, fostering growth and professional development.",
      image: "mentorship-program",
      category: "Mentorship"
    },
    {
      id: 3,
      title: "Cultural Celebrations",
      description: "Honoring African traditions while creating new ones, celebrating our heritage and shared identity.",
      image: "cultural-celebration",
      category: "Culture"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Community & Stories Carousel */}
      <ImageCarousel 
        title="Community & Stories"
        items={communityStories}
        className="bg-background"
      />

      {/* Call to Action Section */}
      <section className="py-16 gradient-earth">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-background mb-6">
            Every Story Matters. Every Voice Counts.
          </h2>
          <p className="text-xl text-background/90 mb-8 leading-relaxed">
            Join thousands of African women and girls who are creating positive change 
            in their communities through sisterhood, storytelling, and collective action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/collaborate">
                <Users className="mr-2 h-5 w-5" />
                Join Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-background text-background hover:bg-background hover:text-foreground">
              <Link to="/about">
                Learn Our Story
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Films & Impact Carousel */}
      <ImageCarousel 
        title="Films & Impact"
        items={filmsImpact}
        className="bg-muted/30"
      />

      {/* Impact Stats */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Growing Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building stronger communities one story, one connection, one woman at a time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-border/50 shadow-soft">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
                <p className="text-muted-foreground">Women & Girls Empowered</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-border/50 shadow-soft">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Film className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-accent mb-2">12</h3>
                <p className="text-muted-foreground">Community Screenings</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-border/50 shadow-soft">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-secondary/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">8</h3>
                <p className="text-muted-foreground">Community Hubs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sisterhood Moments Carousel */}
      <ImageCarousel 
        title="Sisterhood Moments"
        items={sisterhoodMoments}
        className="bg-muted/30"
      />

      {/* Final CTA */}
      <section className="py-20 gradient-sunset relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-background mb-6">
            Ready to Move Mountains Together?
          </h2>
          <p className="text-xl text-background/90 mb-8 leading-relaxed">
            Whether you're a funder, mentor, volunteer, or creative, there's a place 
            for you in our movement. Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-warm">
              <Link to="/films">
                <Film className="mr-2 h-5 w-5" />
                Watch Our Films
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-warm">
              <Link to="/fitness">
                <Activity className="mr-2 h-5 w-5" />
                Join Wellness
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;