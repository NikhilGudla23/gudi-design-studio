import { Paintbrush, FileSearch, LayoutDashboard, Handshake } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'UI/UX Design',
    status: 'Learning Stage',
    description: 'Creating user-centered designs with focus on usability and visual appeal.',
  },
  {
    icon: FileSearch,
    title: 'Wireframing',
    status: 'Beginner',
    description: 'Building low to high-fidelity wireframes and interactive prototypes.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard Design',
    status: 'Academic',
    description: 'Designing clean dashboard interfaces for data visualization.',
  },
  {
    icon: Handshake,
    title: 'Open to Work',
    status: 'Available',
    description: 'Seeking internships, collaborations, and learning opportunities.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-[11px] tracking-[0.3em] text-muted-foreground mb-4">
            SERVICES
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
            What I Can Offer
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-muted/30 rounded-2xl hover:bg-background hover:shadow-xl transition-all duration-500 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-background group-hover:bg-muted flex items-center justify-center mb-6 transition-colors">
                <service.icon className="w-7 h-7" />
              </div>

              <span className="inline-block px-3 py-1 text-[10px] tracking-wide bg-muted rounded-full mb-4">
                {service.status}
              </span>

              <h3 className="font-medium text-lg mb-3">{service.title}</h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Looking for opportunities to grow and learn
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
