import { Heart, Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 pattern-overlay opacity-10" />
      
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand section */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-4">
                <span className="text-2xl font-serif font-bold text-primary">
                  She Moves Africa
                </span>
              </Link>
              <p className="text-background/80 text-lg leading-relaxed mb-6 max-w-md">
                Driving change through sisterhood, healing, and empowerment across 
                African communities. Together, we move mountains.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <a 
                  href="mailto:mwende.dina@gmail.com"
                  className="flex items-center text-background/80 hover:text-primary transition-smooth"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  mwende.dina@gmail.com
                </a>
                <a 
                  href="https://wa.me/254721803496"
                  className="flex items-center text-background/80 hover:text-primary transition-smooth"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  +254 721 803 496
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-xl font-serif font-semibold mb-4 text-primary">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-background/80 hover:text-primary transition-smooth">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/films" className="text-background/80 hover:text-primary transition-smooth">
                    Our Films
                  </Link>
                </li>
                <li>
                  <Link to="/fitness" className="text-background/80 hover:text-primary transition-smooth">
                    Wellness & Fitness
                  </Link>
                </li>
                <li>
                  <Link to="/hubs-impact" className="text-background/80 hover:text-primary transition-smooth">
                    Community Hubs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect section */}
            <div>
              <h3 className="text-xl font-serif font-semibold mb-4 text-primary">
                Connect With Us
              </h3>
              <div className="flex space-x-4 mb-6">
                <a 
                  href="https://instagram.com/shemovesafrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-background hover:bg-primary hover:text-background transition-smooth"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://facebook.com/shemovesafrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-background hover:bg-primary hover:text-background transition-smooth"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
              
              <Link 
                to="/collaborate"
                className="inline-block bg-primary text-background px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-smooth"
              >
                Join Our Movement
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-background/60 text-sm mb-4 sm:mb-0">
                © 2024 She Moves Africa. All rights reserved.
              </p>
              <p className="text-background/60 text-sm flex items-center">
                Made with <Heart className="mx-2 h-4 w-4 text-primary" /> for African communities
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;