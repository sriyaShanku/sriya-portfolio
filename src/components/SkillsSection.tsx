import { useEffect, useRef, useState } from 'react';

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

const SkillsSection = () => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 bg-blush relative">
      <div ref={ref} className="section-fade max-w-7xl mx-auto px-6">
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
                      <div
                        className="skill-bar-fill h-full rounded-full"
                        style={{ width: animated ? `${skill.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
