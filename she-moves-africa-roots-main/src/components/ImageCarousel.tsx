import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface ImageCarouselProps {
  title: string;
  items: CarouselItem[];
  className?: string;
}

const ImageCarousel = ({ title, items, className = '' }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!items.length) return null;

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 gradient-warm mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Main carousel container */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-warm">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Placeholder for images - will be replaced with actual images */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center text-foreground/60">
                    <div className="text-lg font-medium mb-2">{item.category}</div>
                    <div className="text-sm">[{item.image} - Image will be generated]</div>
                  </div>
                </div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent flex items-end">
                  <div className="p-8 text-background">
                    <span className="inline-block px-3 py-1 bg-primary/80 text-primary-foreground text-sm rounded-full mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-lg opacity-90 max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/90 hover:bg-background border-border/50"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/90 hover:bg-background border-border/50"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentIndex
                    ? 'bg-primary'
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;