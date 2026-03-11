import { useEffect, useRef, useState } from 'react';

const EducationSection = () => {
  const [drawn, setDrawn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setDrawn(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-24 bg-blush relative">
      <div ref={ref} className="section-fade max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-light text-foreground">My Journey</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-gold mx-auto mt-3" />
        </div>

        <div className="max-w-xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border overflow-hidden">
            <div
              className="w-full bg-gradient-to-b from-primary to-gold transition-all duration-[2s] ease-out"
              style={{ height: drawn ? '100%' : '0%' }}
            />
          </div>

          {/* Card */}
          <div className="relative pl-16">
            {/* Dot */}
            <div className="absolute left-[18px] top-6 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30" />

            <div className="glass-card rounded-2xl p-8 space-y-3">
              <span className="text-4xl">🎓</span>
              <h3 className="font-serif text-2xl font-semibold text-foreground">B.Tech in CSE (AI & ML)</h3>
              <p className="font-sans text-muted-foreground">3rd Year • 2022–2026</p>
              <p className="font-sans text-sm text-muted-foreground">Pursuing specialization in Artificial Intelligence and Machine Learning</p>
            </div>

            {/* Floating icons */}
            <span className="absolute -right-4 top-0 text-2xl animate-float" style={{ animationDelay: '0s' }}>🤖</span>
            <span className="absolute -right-8 bottom-4 text-2xl animate-float" style={{ animationDelay: '1.2s' }}>💡</span>
            <span className="absolute -left-2 bottom-0 text-2xl animate-float" style={{ animationDelay: '0.6s' }}>📚</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
