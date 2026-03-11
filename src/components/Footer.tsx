import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground/10 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
        <h3 className="font-serif text-3xl font-semibold bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
          Sriya Shanku
        </h3>
        <div className="flex justify-center gap-8 font-sans text-sm text-muted-foreground">
          {[
            { label: 'About', to: '/about' },
            { label: 'Projects', to: '/projects' },
            { label: 'Skills', to: '/skills' },
            { label: 'Contact', to: '/contact' },
          ].map(l => (
            <Link key={l.label} to={l.to} className="hover:text-primary transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Contact Me */}
        <div className="space-y-2">
          <p className="font-serif text-lg font-semibold text-foreground">Contact Me</p>
          <p className="font-sans text-sm text-muted-foreground">Feel free to reach out!</p>
          <div className="flex justify-center gap-5">
            <a href="mailto:sriyashanku@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/sriya-shanku/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="https://github.com/sriyaShanku" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>

        <p className="font-sans text-sm text-muted-foreground">
          Crafted with ♡ by Sriya Shanku © 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
