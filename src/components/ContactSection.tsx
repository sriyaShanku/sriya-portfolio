import { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { toast } from 'sonner';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const validate = (form: { name: string; email: string; message: string }) => {
  const errors: FormErrors = {};
  if (!form.name.trim() || form.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email address.';
  if (!form.message.trim() || form.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
  return errors;
};

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [sending, setSending] = useState(false);

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const fieldErrors = validate(form);
    setErrors(prev => ({ ...prev, [field]: fieldErrors[field as keyof FormErrors] }));
  };

  const handleChange = (field: string, value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field]) {
      const fieldErrors = validate(updated);
      setErrors(prev => ({ ...prev, [field]: fieldErrors[field as keyof FormErrors] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allErrors = validate(form);
    setErrors(allErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(allErrors).length > 0) return;

    setSending(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '0768b495-c842-4169-8883-24e86c79d06c',
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact from ${form.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSending(false);
        setForm({ name: '', email: '', message: '' });
        setTouched({});
        setErrors({});
        toast.success('✅ Message sent! I\'ll get back to you soon 😊', {
          style: {
            background: 'hsl(25 25% 12%)',
            color: 'hsl(35 55% 52%)',
            border: '1px solid hsl(35 55% 52% / 0.3)',
          },
          duration: 5000,
        });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch {
      setSending(false);
      toast.error(
        <span>
          ❌ Something went wrong. Please try again or{' '}
          <a href="mailto:sriyashanku@gmail.com" className="underline font-semibold hover:opacity-80">email me directly</a>.
        </span>,
        {
          style: {
            background: 'hsl(25 25% 12%)',
            color: 'hsl(0 84% 60%)',
            border: '1px solid hsl(0 84% 60% / 0.3)',
          },
          duration: 7000,
        }
      );
    }
  };

  const inputClass = (field: string) =>
    `w-full px-5 py-3 rounded-xl bg-primary-foreground/10 border ${
      errors[field as keyof FormErrors] && touched[field]
        ? 'border-destructive'
        : 'border-primary-foreground/20'
    } text-primary-foreground placeholder:text-primary-foreground/40 font-sans focus:outline-none focus:border-gold focus:shadow-[0_0_15px_hsla(var(--gold),0.3)] transition-all`;

  return (
    <section id="contact" className="py-24 bg-primary relative">
      <div className="section-fade visible max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-light text-primary-foreground">Let's Build Something Together</h2>
          <p className="font-sans text-lg text-primary-foreground/70 mt-4">Open to collaborations, internships, and exciting projects.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Links */}
          <div className="space-y-6">
            <a href="mailto:sriyashanku@gmail.com" className="flex items-center gap-4 text-primary-foreground/80 hover:text-gold transition-colors font-sans text-lg group">
              <Mail className="w-5 h-5 group-hover:text-gold" />
              sriyashanku@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/sriya-shanku/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-primary-foreground/80 hover:text-gold transition-colors font-sans text-lg group">
              <Linkedin className="w-5 h-5 group-hover:text-gold" />
              LinkedIn
            </a>
            <a href="https://github.com/sriyaShanku" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-primary-foreground/80 hover:text-gold transition-colors font-sans text-lg group">
              <Github className="w-5 h-5 group-hover:text-gold" />
              GitHub
            </a>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={e => handleChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                className={inputClass('name')}
              />
              {errors.name && touched.name && (
                <p className="mt-1.5 text-sm text-destructive font-sans">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={e => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                className={inputClass('email')}
              />
              {errors.email && touched.email && (
                <p className="mt-1.5 text-sm text-destructive font-sans">{errors.email}</p>
              )}
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={e => handleChange('message', e.target.value)}
                onBlur={() => handleBlur('message')}
                className={`${inputClass('message')} resize-none`}
              />
              {errors.message && touched.message && (
                <p className="mt-1.5 text-sm text-destructive font-sans">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={sending}
              className="btn-shimmer px-8 py-3 rounded-full bg-primary-foreground text-primary font-sans font-semibold hover:bg-gold hover:text-foreground transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
