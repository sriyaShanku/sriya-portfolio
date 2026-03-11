import { useEffect, useRef } from 'react';

const useScrollFade = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = ref.current;
    if (el) {
      const sections = el.querySelectorAll('.section-fade');
      sections.forEach((s) => observer.observe(s));
      return () => sections.forEach((s) => observer.unobserve(s));
    }
  }, []);

  return ref;
};

export default useScrollFade;
