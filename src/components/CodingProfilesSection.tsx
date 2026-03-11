const profiles = [
  {
    name: "LeetCode",
    username: "sriya_codes",
    tagline: "Sharpening DSA skills one problem at a time",
    url: "https://leetcode.com/u/sriya_codes/",
    icon: "⚡",
    color: "from-gold/20 to-accent",
  },
  {
    name: "GeeksForGeeks",
    username: "sriyascyvs",
    tagline: "Practising algorithms and CS fundamentals",
    url: "https://www.geeksforgeeks.org/profile/sriyascyvs",
    icon: "🧠",
    color: "from-accent to-blush",
  },
];

const CodingProfilesSection = () => {
  return (
    <section id="profiles" className="py-24 bg-cream relative">
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
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex items-center px-6 py-2.5 rounded-full bg-gold text-foreground font-sans font-medium hover:bg-gold/90 transition-colors"
              >
                Visit Profile →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
