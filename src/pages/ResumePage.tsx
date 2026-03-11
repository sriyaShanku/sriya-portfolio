import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import BackToTop from '@/components/BackToTop';

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "C", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 88 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", level: 82 },
      { name: "Node.js", level: 78 },
      { name: "FastAPI", level: 72 },
      { name: "TensorFlow", level: 75 },
      { name: "PyTorch", level: 73 },
      
      { name: "Pandas", level: 80 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: 82 },
      { name: "PostgreSQL", level: 78 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    title: "CS Fundamentals",
    skills: [
      { name: "DSA", level: 85 },
      { name: "OOP", level: 88 },
      { name: "OS", level: 78 },
      { name: "DBMS", level: 82 },
      { name: "Software Engineering", level: 76 },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Deep Learning", level: 78 },
      { name: "Data Analysis", level: 82 },
      { name: "Computer Vision", level: 72 },
      { name: "NLP", level: 70 },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Postman", level: 78 },
      { name: "Linux", level: 72 },
      { name: "VS Code", level: 90 },
    ],
  },
];

const profiles = [
  {
    name: "LeetCode",
    username: "sriya_codes",
    tagline: "Sharpening DSA skills one problem at a time",
    url: "https://leetcode.com/u/sriya_codes/",
    icon: "⚡",
  },
  {
    name: "GeeksForGeeks",
    username: "sriyascyvs",
    tagline: "Practising algorithms and CS fundamentals",
    url: "https://www.geeksforgeeks.org/profile/sriyascyvs",
    icon: "💻",
  },
];

const ResumePage = () => {
  const [animated, setAnimated] = useState(false);
  const [drawn, setDrawn] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);
  const eduRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          if (e.target === skillRef.current) setAnimated(true);
          if (e.target === eduRef.current) setDrawn(true);
        }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.section-fade').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="noise-overlay" />
      <Navbar />
      <main className="pt-20">

        {/* Education */}
        <section className="py-24 bg-blush relative">
          <div ref={eduRef} className="section-fade max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-5xl md:text-6xl font-light text-foreground">Education</h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-gold mx-auto mt-3" />
            </div>
            <div className="max-w-xl mx-auto relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border overflow-hidden">
                <div className="w-full bg-gradient-to-b from-primary to-gold transition-all duration-[2s] ease-out" style={{ height: drawn ? '100%' : '0%' }} />
              </div>

              {/* B.Tech */}
              <div className="relative pl-16 pb-12">
                <div className="absolute left-[18px] top-8 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30" />
                <div className="glass-card rounded-2xl p-8 space-y-3">
                  <h3 className="font-serif text-2xl font-semibold text-foreground">B.Tech in CSE (AI & ML)</h3>
                  <p className="font-sans text-muted-foreground">Sridevi Women's Engineering College, Hyderabad</p>
                  <p className="font-sans text-sm text-muted-foreground">2023–2027 • Percentage: 87%</p>
                </div>
              </div>

              {/* Intermediate */}
              <div className="relative pl-16 pb-12">
                <div className="absolute left-[18px] top-8 w-4 h-4 rounded-full bg-gold shadow-lg shadow-gold/30" />
                <div className="glass-card rounded-2xl p-8 space-y-3">
                  <h3 className="font-serif text-2xl font-semibold text-foreground">Intermediate MPC</h3>
                  <p className="font-sans text-muted-foreground">Shree Akshaya Junior College, Sangareddy</p>
                  <p className="font-sans text-sm text-muted-foreground">2020–2022 • Percentage: 87%</p>
                </div>
              </div>

              {/* SSC */}
              <div className="relative pl-16">
                <div className="absolute left-[18px] top-8 w-4 h-4 rounded-full bg-secondary shadow-lg shadow-secondary/30" />
                <div className="glass-card rounded-2xl p-8 space-y-3">
                  <h3 className="font-serif text-2xl font-semibold text-foreground">SSC</h3>
                  <p className="font-sans text-muted-foreground">Karuna High School, Sangareddy</p>
                  <p className="font-sans text-sm text-muted-foreground">2020 • CGPA: 10</p>
                </div>
              </div>

              {/* Floating icons */}
              <span className="absolute -right-4 top-[5%] text-2xl animate-gentle-sway" style={{ animationDelay: '0s' }}>🤖</span>
              <span className="absolute -left-4 top-[22%] text-2xl animate-gentle-sway" style={{ animationDelay: '0.8s' }}>🎓</span>
              <span className="absolute -left-6 top-[58%] text-2xl animate-gentle-sway" style={{ animationDelay: '1.6s' }}>📚</span>
              <span className="absolute -right-6 top-[45%] text-2xl animate-gentle-sway" style={{ animationDelay: '0.4s' }}>💡</span>
              <span className="absolute -right-3 top-[80%] text-2xl animate-gentle-sway" style={{ animationDelay: '1.2s' }}>✨</span>
            </div>
          </div>
        </section>

        {/* Skills / My Arsenal */}
        <section className="py-24 bg-cream relative">
          <div ref={skillRef} className="section-fade max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-5xl md:text-6xl font-light text-foreground">My Arsenal</h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-gold mx-auto mt-3" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {skillCategories.map(cat => (
                <div key={cat.title} className="glass-card-blush rounded-2xl p-6 space-y-5">
                  <h3 className="font-serif text-2xl font-semibold text-foreground">{cat.title}</h3>
                  <div className="space-y-4">
                    {cat.skills.map(skill => (
                      <div key={skill.name}>
                        <div className="flex justify-between font-sans text-sm mb-1">
                          <span className="text-foreground">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-border overflow-hidden">
                          <div className="skill-bar-fill h-full rounded-full" style={{ width: animated ? `${skill.level}%` : '0%' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Solving Profiles */}
        <section className="py-24 bg-blush relative">
          <div className="section-fade max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-5xl md:text-6xl font-light text-foreground">Problem Solving</h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-gold mx-auto mt-3" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {profiles.map(p => (
                <div key={p.name} className="glass-card-blush rounded-2xl p-8 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300 text-center space-y-4">
                  <span className="text-5xl block">{p.icon}</span>
                  <h3 className="font-serif text-3xl font-semibold text-foreground">{p.name}</h3>
                  <p className="font-sans text-sm text-muted-foreground">@{p.username}</p>
                  <p className="font-sans text-muted-foreground">{p.tagline}</p>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-shimmer inline-flex items-center px-6 py-2.5 rounded-full bg-gold text-foreground font-sans font-medium hover:bg-gold/90 transition-colors">
                    Visit Profile →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-24 bg-cream relative">
          <div className="section-fade max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-5xl md:text-6xl font-light text-foreground">Experience</h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-gold mx-auto mt-3" />
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="glass-card rounded-2xl p-10 text-center space-y-5">
                <span className="text-5xl">🚀</span>
                <h3 className="font-serif text-3xl font-semibold text-foreground">Open to Internships</h3>
                <p className="font-sans text-lg text-muted-foreground">
                  Fresher • Eager to learn and contribute
                </p>
                <p className="font-sans text-muted-foreground max-w-md mx-auto">
                  I'm actively looking for internship opportunities in AI/ML, data science, and software development. Let's build something amazing together!
                </p>
                <div className="flex flex-col items-center gap-4">
                  <a href="/contact" className="btn-shimmer inline-flex items-center px-8 py-3 rounded-full border border-primary text-primary font-sans font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                    Get In Touch →
                  </a>
                  <a
                    href="/Sriya_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer inline-flex items-center px-8 py-3 rounded-full border border-primary text-primary font-sans font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    View Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default ResumePage;
