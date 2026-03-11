import { useEffect, useRef } from 'react';

interface CustomCursorProps {
  variant?: 'default' | 'white';
}

const CustomCursor = ({ variant = 'default' }: CustomCursorProps) => {
  const arrowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const currentVariant = useRef(variant);

  useEffect(() => {
    currentVariant.current = variant;
  }, [variant]);

  useEffect(() => {
    let animFrame: number;
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    let hidden = false;

    const updateCursorColor = (isOverDark: boolean) => {
      if (!arrowRef.current || !trailRef.current) return;
      const svg = arrowRef.current.querySelector('path');
      if (isOverDark) {
        if (svg) {
          svg.setAttribute('stroke', 'white');
          svg.setAttribute('fill', 'none');
        }
        arrowRef.current.style.filter = 'none';
        trailRef.current.style.display = 'none';
      } else {
        if (svg) {
          svg.setAttribute('stroke', 'hsl(25, 60%, 38%)');
          svg.setAttribute('fill', 'none');
        }
        arrowRef.current.style.filter = '';
        trailRef.current.style.display = 'block';
        trailRef.current.style.background = '';
      }
    };

    const setCursorVisibility = (visible: boolean) => {
      if (hidden === !visible) return;
      hidden = !visible;
      const display = visible ? 'block' : 'none';
      if (arrowRef.current) arrowRef.current.style.display = display;
      if (trailRef.current) trailRef.current.style.display = display;
      document.body.style.cursor = visible ? 'none' : 'pointer';
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (arrowRef.current) {
        arrowRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }

      const target = e.target as HTMLElement;
      const isClickable = target.closest('.cursor-pointer, a, button');
      setCursorVisibility(!isClickable);

      // Check if cursor is over the dark contact section (bg-primary)
      if (currentVariant.current === 'white') {
        const contactSection = document.getElementById('contact');
        const navbar = target.closest('nav, header');
        if (navbar) {
          updateCursorColor(false);
        } else if (contactSection) {
          updateCursorColor(true);
        } else {
          updateCursorColor(true);
        }
      } else {
        updateCursorColor(false);
      }
    };

    const animate = () => {
      trailX += (mouseX - trailX) * 0.15;
      trailY += (mouseY - trailY) * 0.15;
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailX}px, ${trailY}px)`;
      }
      animFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    animFrame = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animFrame);
      document.body.style.cursor = 'none';
    };
  }, []);

  return (
    <>
      <div ref={arrowRef} className="custom-cursor cursor-arrow" style={{ left: 0, top: 0 }}>
        <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 1L1 11L3.2 8.8L5.5 13L7 12.2L4.8 8L8 8L1 1Z"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div ref={trailRef} className="custom-cursor cursor-trail" style={{ left: 0, top: 0 }} />
    </>
  );
};

export default CustomCursor;
