import { GraduationCap, Target, Lightbulb, Calendar } from 'lucide-react';

const education = [
  {
    year: '2024 - 2027',
    title: 'B.Tech in CSE–IoT',
    institution: 'Sri Indu Institute of Engineering & Technology',
    location: 'Hyderabad, India',
  },
];

const experience = [
  {
    year: 'Present',
    title: 'Learning UI/UX Design',
    description: 'Self-learning through projects',
  },
  {
    year: '2024',
    title: 'Academic Projects',
    description: 'Building practical experience',
  },
  {
    year: '2023',
    title: 'Started B.Tech Journey',
    description: 'CSE–IoT Specialization',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-[11px] tracking-[0.3em] text-muted-foreground mb-4">
            ABOUT ME
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
            Education & Journey
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Education */}
          <div>
            <h3 className="text-[11px] tracking-[0.2em] text-muted-foreground mb-8">
              EDUCATION
            </h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="border-l-2 border-foreground/10 pl-6">
                  <p className="text-[11px] tracking-[0.15em] text-muted-foreground mb-2">
                    {item.year}
                  </p>
                  <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.institution}</p>
                  <p className="text-sm text-muted-foreground">{item.location}</p>
                </div>
              ))}
            </div>

            {/* Bio cards */}
            <div className="mt-12 grid gap-4">
              <div className="flex items-start gap-4 p-5 bg-background rounded-xl">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Career Goal</h4>
                  <p className="text-sm text-muted-foreground">
                    Building a career as a professional UI/UX Designer
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-background rounded-xl">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Current Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    Learning through hands-on projects and design challenges
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Journey / Experience */}
          <div>
            <h3 className="text-[11px] tracking-[0.2em] text-muted-foreground mb-8">
              MY JOURNEY
            </h3>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <div key={index} className="border-l-2 border-foreground/10 pl-6">
                  <p className="text-[11px] tracking-[0.15em] text-muted-foreground mb-2">
                    {item.year}
                  </p>
                  <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            {/* About text */}
            <div className="mt-12 p-6 bg-background rounded-xl">
              <h4 className="font-display text-xl mb-4">About Me</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm Nikhil Gudla, a 3rd-year B.Tech student specializing in 
                Computer Science Engineering with IoT at Sri Indu Institute of 
                Engineering & Technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My passion lies at the intersection of technology and design. 
                I believe great design is about solving problems and creating 
                meaningful experiences for users. Currently in my learning stage, 
                I'm actively building my skills through practical projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
