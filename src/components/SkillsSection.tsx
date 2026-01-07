import { Palette, Layout, Lightbulb, PenTool, Layers } from 'lucide-react';

const skills = [
  {
    icon: Palette,
    title: 'UI Design',
    description: 'Creating visually appealing interfaces with attention to color, typography, and layout.',
    level: 'Learning',
    progress: 60,
  },
  {
    icon: Layout,
    title: 'UX Design',
    description: 'Understanding user needs and designing intuitive experiences that solve problems.',
    level: 'Learning',
    progress: 55,
  },
  {
    icon: PenTool,
    title: 'Wireframing',
    description: 'Sketching low-fidelity layouts to plan structure and user flows effectively.',
    level: 'Growing',
    progress: 50,
  },
  {
    icon: Layers,
    title: 'Prototyping',
    description: 'Building interactive prototypes to test and validate design concepts.',
    level: 'Learning',
    progress: 45,
  },
  {
    icon: Lightbulb,
    title: 'Design Thinking',
    description: 'Applying human-centered approach to solve complex design challenges.',
    level: 'Growing',
    progress: 55,
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuously learning and improving my design skills through practice and projects
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group bg-card p-6 rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>

              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {skill.title}
                </h3>
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {skill.level}
                </span>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {skill.description}
              </p>

              {/* Progress bar */}
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-700"
                  style={{ width: `${skill.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
