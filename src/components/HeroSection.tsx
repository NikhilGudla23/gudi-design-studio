import profilePhoto from '@/assets/profile-photo.jpg';

const stats = [
  { value: '3rd', label: 'Year Student' },
  { value: '5+', label: 'Projects Done' },
  { value: '100%', label: 'Dedication' },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main heading */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-up">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            Nikhil Gudla
            <br />
            <span className="text-muted-foreground">UI/UX Designer</span>
            <br />
            <span className="font-display-italic">Based in India</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-[1fr,auto,1fr] gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1 space-y-8 animate-fade-up-delay-1">
            <div>
              <p className="text-[11px] tracking-[0.2em] text-muted-foreground mb-3">
                BIOGRAPHY
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Passionate about design for purpose!
                <br />
                I'm Nikhil, an aspiring UI/UX
                <br />
                Designer & 3rd year B.Tech student
                <br />
                based in India.
              </p>
            </div>

            <div>
              <p className="text-[11px] tracking-[0.2em] text-muted-foreground mb-3">
                CONTACT
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Hyderabad, India
                <br />
                nikhilgudla@email.com
                <br />
                +91 98765 43210
              </p>
            </div>

            <div>
              <p className="text-[11px] tracking-[0.2em] text-muted-foreground mb-3">
                SERVICES
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                UI/UX Design
                <br />
                Dashboard Design
                <br />
                Wireframing
              </p>
            </div>
          </div>

          {/* Center - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Nikhil Gudla"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right content - Stats */}
          <div className="order-3 space-y-8 text-right animate-fade-up-delay-2">
            {stats.map((stat, index) => (
              <div key={stat.label}>
                <p className="text-[11px] tracking-[0.2em] text-muted-foreground mb-1">
                  {stat.label.toUpperCase()}
                </p>
                <p className="font-display text-4xl md:text-5xl lg:text-6xl">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 lg:mt-24 animate-fade-up-delay-3">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.2em] text-muted-foreground">
              SCROLL DOWN
            </span>
            <div className="w-px h-12 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
