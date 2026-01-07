import { Linkedin, Mail, Github, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <span className="text-2xl font-bold">
              NG<span className="text-primary">.</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/nikhilgudla"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:nikhilgudla@email.com"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/nikhilgudla"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-background/60 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary inline" /> by Nikhil Gudla © {currentYear}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
