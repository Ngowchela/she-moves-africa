import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Star, Compass, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Star,
      title: "Integrity of Story",
      description: "We honor authentic African narratives, ensuring every story is told with truth, respect, and cultural integrity."
    },
    {
      icon: Heart,
      title: "Collective Healing",
      description: "Through shared experiences and community support, we create spaces for healing that benefit entire communities."
    },
    {
      icon: Users,
      title: "Sisterhood",
      description: "Building unbreakable bonds between women across generations, cultures, and backgrounds throughout Africa."
    },
    {
      icon: Compass,
      title: "Accessible Expression",
      description: "Ensuring every woman and girl has the tools, platform, and support to express herself and share her story."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-warm relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-background mb-6">
            Our Story is Your Story
          </h1>
          <p className="text-xl md:text-2xl text-background/90 leading-relaxed">
            From a whisper of hope to a movement of thousands, She Moves Africa 
            is the collective heartbeat of African women rising together.
          </p>
        </div>
      </section>

      {/* Our Why Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Our Why: Healing, Joy, Power
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  In every corner of Africa, there are women carrying dreams bigger than 
                  their circumstances, girls with visions that could reshape continents, 
                  and communities waiting for the spark that ignites transformation.
                </p>
                <p>
                  We exist because we believe in the power of African women. We believe 
                  in healing that happens in circles, joy that multiplies when shared, 
                  and power that emerges when sisters stand together.
                </p>
                <p>
                  Our why is simple: because every African woman deserves to see herself 
                  reflected in stories of strength, to feel held by a community that 
                  understands her journey, and to know that her voice can move mountains.
                </p>
              </div>
              <Button asChild size="lg" className="mt-8">
                <Link to="/collaborate">
                  <Users className="mr-2 h-5 w-5" />
                  Join Our Movement
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              {/* Placeholder for image - will be replaced with generated image */}
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl shadow-warm flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-lg font-medium mb-2">Community Gathering</div>
                  <div className="text-sm">[Image will be generated: African women in healing circle]</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Journey: From Whisper to Movement
            </h2>
            <div className="w-24 h-1 gradient-warm mx-auto rounded-full" />
          </div>
          
          <div className="space-y-8">
            <div className="bg-background rounded-2xl p-8 shadow-soft">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2020</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">The Whisper</h3>
                  <p className="text-muted-foreground">
                    A single voice speaking truth about African women's experiences, 
                    starting conversations that would spark a movement.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">2022</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">The Circle</h3>
                  <p className="text-muted-foreground">
                    First community gatherings form, creating safe spaces for women 
                    to share stories, heal together, and build sisterhood.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/70 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-foreground">2024</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">The Movement</h3>
                  <p className="text-muted-foreground">
                    Hundreds of women across multiple countries unite, creating 
                    lasting change through films, wellness, and community action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Placeholder for founder image */}
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl shadow-warm flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-lg font-medium mb-2">Dina Mwende</div>
                  <div className="text-sm">[Founder portrait will be generated]</div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Meet Our Founder: Dina Mwende
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Dina Mwende is a storyteller, community builder, and visionary who 
                  believes in the transformative power of African women's voices. 
                  Her journey began with a simple truth: our stories have the power 
                  to heal, inspire, and create lasting change.
                </p>
                <p>
                  As a filmmaker and wellness advocate, Dina has dedicated her life 
                  to creating spaces where African women can thrive. Through her 
                  documentary work and community organizing, she has touched hundreds 
                  of lives across the continent.
                </p>
                <p>
                  "When women come together in truth and vulnerability, magic happens. 
                  We heal not just ourselves, but our communities, our daughters, 
                  and generations to come." - Dina Mwende
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild>
                  <Link to="/films">Learn About Our Films</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contact">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Connect with Dina
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 gradient-earth">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-background mb-4">
              Our Values: The Foundation We Stand On
            </h2>
            <p className="text-xl text-background/90 max-w-3xl mx-auto">
              These principles guide every decision we make, every story we tell, 
              and every community we serve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-background/95 backdrop-blur-sm border-background/20 shadow-soft">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Your Story is Part of Our Story
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Every woman who joins us adds a new chapter to our collective narrative. 
            What chapter will you write?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/collaborate">Join Our Community</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/hubs-impact">See Our Impact</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;