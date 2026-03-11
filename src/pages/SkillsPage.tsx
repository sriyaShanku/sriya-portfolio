import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SkillsSection from '@/components/SkillsSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import BackToTop from '@/components/BackToTop';

const SkillsPage = () => {
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
        <SkillsSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default SkillsPage;
