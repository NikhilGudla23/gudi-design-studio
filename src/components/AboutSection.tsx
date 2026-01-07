import { GraduationCap, Calendar, MapPin, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get to Know Me Better
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate learner dedicated to mastering the art of user experience design
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm Nikhil Gudla, a 3rd-year B.Tech student specializing in
                Computer Science Engineering with IoT at Sri Indu Institute of
                Engineering & Technology. My passion lies at the intersection of
                technology and design.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Currently in my learning stage, I'm building my skills through
                hands-on projects and continuous exploration of UI/UX principles.
                I believe that great design is about solving problems and creating
                meaningful experiences for users.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to become a skilled UI/UX Designer who can bridge the
                gap between user needs and beautiful, functional interfaces.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-2xl card-shadow hover:card-shadow-hover transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Education</h4>
                    <p className="text-muted-foreground text-sm">
                      B.Tech in CSE–IoT
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Sri Indu Institute of Engineering & Technology
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-2xl card-shadow hover:card-shadow-hover transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Expected Graduation
                    </h4>
                    <p className="text-muted-foreground text-sm">2027</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-2xl card-shadow hover:card-shadow-hover transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Career Goal
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Building a career as a UI/UX Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
