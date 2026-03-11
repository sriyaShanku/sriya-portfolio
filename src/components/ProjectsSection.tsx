import { useState } from 'react';

const projects = [
  { title: "MiniBiz", emoji: "🏪", desc: "Responsive web app for small-scale businesses to grow online and engage with customers easily.", tech: ["JavaScript", "React", "HTML/CSS"], github: "https://github.com/sriyaShanku/MiniBiz" },
  { title: "RetailSight AI", emoji: "📊", desc: "AI-driven demand forecasting for retail inventory using historical sales data, seasonality, and trend analysis.", tech: ["JavaScript", "AI/ML", "Data Analysis"], github: "https://github.com/sriyaShanku/RetailSight_AI" },
  { title: "DeepFake Audio Detection", emoji: "🎙️", desc: "AI system detecting synthetic speech using deep learning.", tech: ["Python", "Deep Learning", "AI"], github: "https://github.com/sriyaShanku/DeepFake-Audio-Detection" },
  { title: "FitBuddy", emoji: "💪", desc: "AI fitness assistant giving personalized workout and nutrition guidance based on user stats.", tech: ["JavaScript", "AI", "React"], github: "https://github.com/sriyaShanku/FitBuddy" },
  { title: "LLM Based QA System", emoji: "🤖", desc: "An LLM-based Question Answering system using Retrieval-Augmented Generation (RAG) to retrieve relevant information from uploaded PDFs or notes and generate accurate, context-aware answers.", tech: ["Python", "Hugging Face", "FAISS", "Transformers"], github: "https://github.com/sriyaShanku/LLM-Based-Doc-QA-System" },
  { title: "SmartVault", emoji: "💰", desc: "Smart web vault to save money and set intelligent financial goals with a goal-tracking dashboard.", tech: ["JavaScript", "React"], github: "https://github.com/sriyaShanku/SmartVault" },
  { title: "Product Price Prediction", emoji: "📈", desc: "ML regression model predicting product prices from historical data and product features.", tech: ["Python", "ML", "Data Science"], github: "https://github.com/sriyaShanku/Product_Price_Prediction" },
  { title: "Mystery Number Game", emoji: "🎯", desc: "Python GUI guessing game with Tkinter, multiple difficulty levels, and smooth animations.", tech: ["Python", "Tkinter", "GUI"], github: "https://github.com/sriyaShanku/Mystery_Number_Game" },
];

const ProjectsSection = () => {
  const [modal, setModal] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 bg-cream relative">
      <div className="section-fade max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-light text-foreground">Things I've Built</h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-gold via-primary to-gold mx-auto mt-3" />
          <p className="font-sans text-lg text-muted-foreground mt-4">A collection of intelligent solutions built with curiosity and code.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.title} onClick={() => setModal(project)} className="group glass-card rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="h-36 bg-gradient-to-br from-accent via-blush to-gold/20 flex items-center justify-center">
                <span className="text-5xl">{project.emoji}</span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-2xl font-semibold group-hover:text-gold transition-colors">{project.title}</h3>
                <p className="font-sans text-sm text-muted-foreground line-clamp-2">{project.desc}</p>
                <span className="font-sans text-xs text-muted-foreground/60">Read more..</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map(t => (
                    <span key={t} className="px-2.5 py-0.5 text-xs rounded-full border border-primary/30 text-primary font-sans">{t}</span>
                  ))}
                </div>
                <div className="pt-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="font-sans text-sm font-medium text-primary hover:text-gold transition-colors">
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-foreground/60 backdrop-blur-md p-4" onClick={() => setModal(null)}>
          <div className="rounded-3xl max-w-lg w-full p-8 space-y-4 animate-[scale-in_0.2s_ease-out] bg-background border border-border shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <span className="text-4xl">{modal.emoji}</span>
              <h3 className="font-serif text-3xl font-semibold">{modal.title}</h3>
            </div>
            <p className="font-sans text-muted-foreground">{modal.desc}</p>
            <div className="flex flex-wrap gap-2">
              {modal.tech.map(t => (
                <span key={t} className="px-3 py-1 text-sm rounded-full border border-primary/30 text-primary font-sans">{t}</span>
              ))}
            </div>
            <a href={modal.github} target="_blank" rel="noopener noreferrer" className="btn-shimmer inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-sans font-medium hover:bg-primary/90 transition-colors">
              View on GitHub ↗
            </a>
            <button onClick={() => setModal(null)} className="block font-sans text-sm text-muted-foreground hover:text-foreground transition-colors mt-2">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
