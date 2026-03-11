import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import BackToTop from '@/components/BackToTop';

const ContactPage = () => {
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
      <CustomCursor variant="white" />
      <div className="noise-overlay" />
      <Navbar />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default ContactPage;
