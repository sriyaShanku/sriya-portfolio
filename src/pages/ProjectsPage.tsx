import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import BackToTop from '@/components/BackToTop';

const ProjectsPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
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
        <ProjectsSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default ProjectsPage;
