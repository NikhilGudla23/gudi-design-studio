import { Linkedin, Mail, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-semibold tracking-tight">
              NIKHIL
            </span>
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground">
              GUDLA
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground order-3 md:order-2">
            © {currentYear} Nikhil Gudla. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 order-2 md:order-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all"
            >
              <Twitter size={16} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/nikhilgudla"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:nikhilgudla@email.com"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
