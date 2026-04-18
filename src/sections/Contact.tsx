import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { siteConfig } from '../data/site';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = { name: '', email: '', phone: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [sent, setSent] = useState(false);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((s) => ({ ...s, [k]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm(initialState);
    }, 5000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial-fade opacity-60 blur-3xl" aria-hidden />
      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">Contacto</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-semibold text-brand-navy tracking-tight leading-tight">
              Hablemos sobre tu <span className="italic text-brand-orange">próximo proyecto</span>.
            </h2>
            <p className="mt-6 text-lg text-brand-stone leading-relaxed max-w-lg">
              Cotización gratuita, sin compromiso. Recibe una propuesta técnica clara en menos de 48 horas hábiles.
            </p>

            <ul className="mt-12 space-y-6">
              <ContactItem icon={<Phone size={18} />} label="Teléfono">
                <a href={`tel:${siteConfig.phoneRaw}`} className="link-underline">{siteConfig.phone}</a>
              </ContactItem>
              <ContactItem icon={<Mail size={18} />} label="Correo">
                <a href={`mailto:${siteConfig.email}`} className="link-underline">{siteConfig.email}</a>
              </ContactItem>
              <ContactItem icon={<MapPin size={18} />} label="Ubicación">
                <span>{siteConfig.address} · Cobertura nacional</span>
              </ContactItem>
            </ul>

            <div className="mt-12 p-6 rounded-2xl bg-brand-navy-50 border border-brand-navy/5">
              <p className="text-sm font-semibold text-brand-navy mb-1">Horario de atención</p>
              <p className="text-sm text-brand-stone">Lunes a viernes · 8:00 — 18:00</p>
              <p className="text-sm text-brand-stone">Sábados · 8:00 — 12:00</p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-8 md:p-10 rounded-3xl bg-white border border-brand-navy/8 shadow-card"
          >
            <h3 className="font-display text-2xl font-semibold text-brand-navy mb-8">Envíanos un mensaje</h3>

            <div className="space-y-5">
              <Field id="name" label="Nombre completo" value={form.name} onChange={update('name')} required />
              <div className="grid sm:grid-cols-2 gap-5">
                <Field id="email" label="Correo" type="email" value={form.email} onChange={update('email')} required />
                <Field id="phone" label="Teléfono" type="tel" value={form.phone} onChange={update('phone')} />
              </div>
              <TextareaField id="message" label="Cuéntanos sobre tu proyecto" value={form.message} onChange={update('message')} required />
            </div>

            <button
              type="submit"
              className="mt-8 w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-gradient-brand text-white font-semibold shadow-glow-orange hover:-translate-y-0.5 transition-all duration-500 ease-premium disabled:opacity-70"
              disabled={sent}
            >
              {sent ? (
                <>
                  <CheckCircle2 size={18} /> Mensaje enviado
                </>
              ) : (
                <>
                  Enviar mensaje <Send size={16} />
                </>
              )}
            </button>

            {sent && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-center text-sm text-brand-navy/70"
              >
                Gracias por escribirnos. Te contactaremos en menos de 48 horas hábiles.
              </motion.p>
            )}

            <p className="mt-4 text-[11px] text-brand-stone text-center">
              Al enviar, aceptas nuestra política de tratamiento de datos personales.
            </p>
          </motion.form>
        </div>
      </Container>
    </section>
  );
};

const ContactItem = ({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => (
  <li className="flex items-start gap-4">
    <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-orange-50 text-brand-orange flex-shrink-0">
      {icon}
    </span>
    <div>
      <p className="text-xs uppercase tracking-[0.22em] text-brand-stone mb-1">{label}</p>
      <p className="text-lg text-brand-navy font-medium">{children}</p>
    </div>
  </li>
);

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const Field = ({ id, label, type = 'text', value, onChange, required }: FieldProps) => (
  <div className="relative">
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder=" "
      className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-brand-navy/15 bg-white text-brand-navy focus:border-brand-orange focus:outline-none transition-colors"
    />
    <label
      htmlFor={id}
      className="absolute left-4 top-4 text-brand-stone text-sm pointer-events-none transition-all duration-300 peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand-orange peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
    >
      {label}{required && ' *'}
    </label>
  </div>
);

const TextareaField = ({ id, label, value, onChange, required }: Omit<FieldProps, 'type'> & { onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }) => (
  <div className="relative">
    <textarea
      id={id}
      name={id}
      rows={5}
      value={value}
      onChange={onChange}
      required={required}
      placeholder=" "
      className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-brand-navy/15 bg-white text-brand-navy focus:border-brand-orange focus:outline-none transition-colors resize-none"
    />
    <label
      htmlFor={id}
      className="absolute left-4 top-4 text-brand-stone text-sm pointer-events-none transition-all duration-300 peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand-orange peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
    >
      {label}{required && ' *'}
    </label>
  </div>
);

export default Contact;
