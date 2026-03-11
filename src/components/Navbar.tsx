import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('/#')) {
      const hash = href.slice(1);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return location.pathname === '/' && location.hash === href.slice(1);
    return location.pathname === href;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          SS
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item =>
            item.href.startsWith('/#') ? (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className={`nav-link-hover font-serif text-lg tracking-wide text-foreground/80 hover:text-foreground transition-colors ${isActive(item.href) ? 'active text-foreground' : ''}`}
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={`nav-link-hover font-serif text-lg tracking-wide text-foreground/80 hover:text-foreground transition-colors ${location.pathname === item.href ? 'active text-foreground' : ''}`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <><path d="M3 12h18" /><path d="M3 6h18" /><path d="M3 18h18" /></>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 py-4 space-y-3">
          {navItems.map(item =>
            item.href.startsWith('/#') ? (
              <button key={item.href} onClick={() => handleNav(item.href)} className="block font-serif text-lg text-foreground/80 hover:text-primary transition-colors">
                {item.label}
              </button>
            ) : (
              <Link key={item.href} to={item.href} onClick={() => setMobileOpen(false)} className="block font-serif text-lg text-foreground/80 hover:text-primary transition-colors">
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
