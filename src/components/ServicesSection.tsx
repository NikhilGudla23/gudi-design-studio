import { Paintbrush, FileSearch, LayoutDashboard, Users } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'UI/UX Design',
    status: 'Learning Stage',
    description:
      'Creating user-centered designs focusing on usability, accessibility, and visual appeal.',
  },
  {
    icon: FileSearch,
    title: 'Wireframing & Prototyping',
    status: 'Beginner',
    description:
      'Building low to high-fidelity wireframes and interactive prototypes for testing ideas.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard Design',
    status: 'Academic Projects',
    description:
      'Designing clean and functional dashboard interfaces for data visualization and management.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    status: 'Open to Work',
    description:
      'Eager to collaborate on design projects, internships, and learning opportunities.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What I Can Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As a student designer, I'm actively seeking internships, learning opportunities, and collaborative projects
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card p-8 rounded-3xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="px-4 py-1.5 text-xs font-medium bg-secondary text-muted-foreground rounded-full">
                    {service.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 rounded-3xl">
            <p className="text-lg text-foreground font-medium mb-2">
              Looking for opportunities to grow
            </p>
            <p className="text-muted-foreground text-sm">
              Open to internships, freelance projects, and design collaborations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
