import aboutPhoto from '@/assets/hero-portrait.jpg';

const badges = ["AI Enthusiast ✦", "Open Source ✦", "Problem Solver ✦"];
const skills = ["Python", "C/C++", "Java", "JavaScript", "HTML & CSS", "React", "Node.js", "FastAPI", "PyTorch", "TensorFlow", "Machine Learning", "Deep Learning", "MongoDB", "PostgreSQL", "Docker", "Git/GitHub", "Data Analysis"];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-cream relative">
      <div className="section-fade max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Photo with badges */}
          <div className="relative flex justify-center">
            <div className="relative">
              <img src={aboutPhoto} alt="Sriya Shanku" className="w-64 h-80 object-cover rounded-[24px] shadow-lg" />
              {badges.map((badge, i) => (
                <span
                  key={badge}
                  className="absolute px-4 py-1.5 rounded-full border border-secondary/60 text-secondary font-sans text-sm font-medium bg-background/80 backdrop-blur-sm animate-gentle-sway"
                  style={{
                    top: i === 0 ? '10%' : i === 1 ? '50%' : '80%',
                    left: i === 1 ? '-30%' : 'auto',
                    right: i !== 1 ? '-30%' : 'auto',
                    animationDelay: `${i * 1.5}s`,
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Bio */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl font-light text-foreground">About Me</h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-secondary mt-3" />
            </div>
            <p className="font-sans text-lg leading-relaxed text-muted-foreground">
              Hi! I'm Sriya — a passionate CSE (AI & ML) student who loves building smart, impactful applications. From AI-powered retail tools to deepfake detection systems, I turn ideas into intelligent, elegant solutions.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map(skill => (
                <span key={skill} className="px-4 py-1.5 rounded-full bg-foreground text-background font-sans text-sm font-medium hover:shadow-md hover:scale-105 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
