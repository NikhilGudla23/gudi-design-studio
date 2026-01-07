import { ArrowUpRight, Hotel, Truck } from 'lucide-react';

const projects = [
  {
    id: 1,
    category: 'Full-Stack Design',
    title: 'Hotel Management System',
    description: 'A comprehensive hotel management solution featuring room booking, food ordering, billing, and admin dashboard.',
    features: [
      'Room availability & booking',
      'Food ordering system',
      'Auto bill generation',
      'Admin dashboard',
      'Role management',
    ],
    tags: ['UI/UX', 'Dashboard', 'Admin'],
    icon: Hotel,
    image: 'bg-gradient-to-br from-muted to-muted/50',
  },
  {
    id: 2,
    category: 'IoT & Logistics',
    title: 'Smart Agri Distribution',
    description: 'Intelligent distribution system for fresh agricultural products using IoT devices and smart logistics.',
    features: [
      'Python & IoT devices',
      'Real-time tracking',
      'Multi-user dashboard',
      'Blockchain integration',
      'Secure data storage',
    ],
    tags: ['IoT', 'Python', 'Blockchain'],
    icon: Truck,
    image: 'bg-gradient-to-br from-muted/80 to-muted/30',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-[11px] tracking-[0.3em] text-muted-foreground mb-4">
            PORTFOLIO
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
            My Latest Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-background rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              {/* Project Image/Preview */}
              <div className={`aspect-[4/3] ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-20 h-20 text-foreground/10" />
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-14 h-14 rounded-full bg-background flex items-center justify-center shadow-lg">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <p className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2">
                  {project.category.toUpperCase()}
                </p>
                <h3 className="font-display text-xl mb-3 group-hover:underline underline-offset-4">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 bg-foreground rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] tracking-wide bg-muted rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
