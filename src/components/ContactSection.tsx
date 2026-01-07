import { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-[11px] tracking-[0.3em] text-muted-foreground mb-4">
            GET IN TOUCH
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
            Let's Work Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl mb-6">
              Have a project in mind?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-10">
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision. Feel free to 
              reach out through any of these channels.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:nikhilgudla@email.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.15em] text-muted-foreground mb-0.5">
                    EMAIL
                  </p>
                  <p className="font-medium">nikhilgudla@email.com</p>
                </div>
              </a>

              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.15em] text-muted-foreground mb-0.5">
                    PHONE
                  </p>
                  <p className="font-medium">+91 98765 43210</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/nikhilgudla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.15em] text-muted-foreground mb-0.5">
                    LINKEDIN
                  </p>
                  <p className="font-medium">linkedin.com/in/nikhilgudla</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.15em] text-muted-foreground mb-0.5">
                    LOCATION
                  </p>
                  <p className="font-medium">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background p-8 lg:p-10 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[11px] tracking-[0.15em] text-muted-foreground mb-3"
                >
                  YOUR NAME
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground bg-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[11px] tracking-[0.15em] text-muted-foreground mb-3"
                >
                  YOUR EMAIL
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground bg-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[11px] tracking-[0.15em] text-muted-foreground mb-3"
                >
                  MESSAGE
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground bg-transparent resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full py-6 mt-4"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
