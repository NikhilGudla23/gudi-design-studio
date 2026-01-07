import { ExternalLink, Hotel, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    icon: Hotel,
    title: 'Hotel Management System',
    category: 'Full-Stack Application',
    description:
      'A comprehensive hotel management solution with room booking, food ordering, and administrative features.',
    features: [
      'Room availability and booking system',
      'Food ordering from hotel menu',
      'Automatic bill and invoice generation',
      'Guest data storage and booking history',
      'Admin dashboard for managing rooms & prices',
      'Login and role management for admin and staff',
    ],
    tags: ['UI/UX', 'Dashboard', 'Admin Panel'],
    color: 'from-primary/20 to-primary/5',
  },
  {
    icon: Truck,
    title: 'Smart Agricultural Distribution',
    category: 'IoT & Logistics',
    description:
      'Intelligent distribution system for fresh agricultural products using IoT and smart logistics.',
    features: [
      'Built using Python and IoT devices',
      'Real-time tracking and monitoring',
      'User-friendly dashboard for stakeholders',
      'Blockchain integration for transparency',
      'Secure data storage solutions',
    ],
    tags: ['IoT', 'Python', 'Dashboard'],
    color: 'from-green-500/20 to-green-500/5',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my academic and practice projects that demonstrate my design and technical skills
          </p>
        </div>

        {/* Projects */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-3xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              {/* Project Header */}
              <div className={`p-8 bg-gradient-to-br ${project.color}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-card/80 backdrop-blur flex items-center justify-center">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <h4 className="text-sm font-semibold text-foreground mb-4">
                  Key Features
                </h4>
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="group/btn rounded-full border-border hover:bg-secondary"
                >
                  View Project Details
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
