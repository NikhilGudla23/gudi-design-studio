const skills = [
  { name: 'Figma', level: 75, icon: '◆' },
  { name: 'UI Design', level: 70, icon: '◇' },
  { name: 'UX Design', level: 65, icon: '○' },
  { name: 'Wireframing', level: 60, icon: '□' },
  { name: 'Prototyping', level: 55, icon: '△' },
  { name: 'Design Thinking', level: 60, icon: '◈' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-[11px] tracking-[0.3em] text-muted-foreground mb-4">
            MY ADVANTAGE
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
            Skills & Tools
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center text-center group"
            >
              {/* Circular progress */}
              <div className="relative w-24 h-24 mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="hsl(var(--muted))"
                    strokeWidth="2"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="hsl(var(--foreground))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={`${skill.level * 2.83} 283`}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                {/* Icon in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </span>
                </div>
              </div>
              
              {/* Percentage */}
              <p className="text-lg font-medium mb-1">{skill.level}%</p>
              
              {/* Skill name */}
              <p className="text-xs text-muted-foreground tracking-wide">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <p className="inline-flex items-center gap-2 px-6 py-3 bg-muted/50 rounded-full text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
            Currently learning & growing
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
