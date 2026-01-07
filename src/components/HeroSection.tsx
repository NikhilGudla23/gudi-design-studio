import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                UI/UX Designer (Aspiring)
              </span>
            </div>

            <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Hello, I'm{' '}
              <span className="text-gradient">Nikhil Gudla</span>
            </h1>

            <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              A passionate 3rd-year B.Tech student at Sri Indu Institute of
              Engineering & Technology, on a journey to become a skilled UI/UX
              Designer. I love creating intuitive and beautiful digital
              experiences.
            </p>

            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-border hover:bg-secondary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="animate-fade-up relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '20s' }} />
                
                {/* Image container */}
                <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 card-shadow">
                  <div className="w-full h-full bg-secondary flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                        <span className="text-4xl md:text-5xl font-bold text-primary">NG</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-lg animate-float" />
                <div className="absolute -bottom-2 -left-6 w-8 h-8 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
