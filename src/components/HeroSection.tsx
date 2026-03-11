import { useEffect, useState, memo } from 'react';
import { Link } from 'react-router-dom';
import heroPhoto from '@/assets/hero-portrait.jpg';

const roles = ["AI & ML Developer", "Problem Solver", "Deep Learning Enthusiast", "B.Tech Student", "Freelancer", "Software Developer", "Web Developer", "Open Source Contributor"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cream">
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-accent/60 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blush/40 blur-[100px] pointer-events-none" />
      <Particles />

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <h1 className="font-serif text-6xl md:text-8xl font-light leading-[0.95] text-foreground">
            Sriya<br />
            <span className="font-semibold bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">Shanku</span>
          </h1>
          <div className="h-8 font-serif text-2xl md:text-3xl text-primary/80">
            {text}<span className="typewriter-cursor" />
          </div>
          <div className="space-y-2 max-w-md">
            <p className="font-serif text-2xl md:text-3xl font-bold text-accent-foreground">
              Code. Create. Solve. Repeat.
            </p>
            <p className="font-sans text-lg text-muted-foreground">
              Building intelligent systems that solve real-world problems.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/projects" className="btn-shimmer inline-flex items-center px-6 py-3 rounded-full border border-primary text-primary font-sans font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
              View My Work
            </Link>
            <a href="/Sriya_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-shimmer inline-flex items-center px-6 py-3 rounded-full border border-primary/40 text-foreground font-sans font-medium hover:border-gold hover:text-gold transition-colors">
              View Resume
            </a>
            <Link to="/contact" className="btn-shimmer inline-flex items-center px-6 py-3 rounded-full border border-primary/40 text-foreground font-sans font-medium hover:border-gold hover:text-gold transition-colors">
              Let's Connect
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative" style={{ width: 380, height: 500 }}>
            <img
              src={heroPhoto}
              alt="Sriya Shanku"
              className="w-full h-full object-cover"
              style={{
                maskImage: 'linear-gradient(to bottom, black 60%, transparent 95%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 95%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'destination-in',
              }}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2">
          <path d="M12 5v14m-7-7l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

const particlesData = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: 2 + Math.random() * 3,
  duration: 8 + Math.random() * 12,
  delay: Math.random() * 10,
  dx: (Math.random() - 0.5) * 100,
  dy: -(50 + Math.random() * 100),
}));

const Particles = memo(() => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particlesData.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: `linear-gradient(135deg, hsl(var(--gold)), hsl(var(--primary)))`,
            opacity: 0.45,
            animation: `particle-drift ${p.duration}s linear ${p.delay}s infinite`,
            ['--dx' as string]: `${p.dx}px`,
            ['--dy' as string]: `${p.dy}px`,
          }}
        />
      ))}
    </div>
  );
});

export default HeroSection;
