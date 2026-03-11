import { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const current = parseInt(localStorage.getItem('portfolio_visits') || '0', 10) + 1;
    localStorage.setItem('portfolio_visits', String(current));
    setCount(current);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'V') {
        e.preventDefault();
        setVisible(true);
        setTimeout(() => setVisible(false), 5000);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[99999] bg-card border border-border rounded-lg px-4 py-2 shadow-lg text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-2 duration-200">
      👁 Visits: <span className="font-bold text-foreground">{count}</span>
    </div>
  );
};

export default VisitorCounter;
