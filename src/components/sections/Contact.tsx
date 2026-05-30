import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Hi, I'm ${form.name}. ${form.message} (Contact: ${form.phone})`;
    window.open(`https://wa.me/918091221222?text=${encodeURIComponent(body)}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-[500px] w-[800px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <Reveal><div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Get In Touch</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Let's <span className="text-gradient">talk mobile</span>.
            </h2>
          </Reveal>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl p-8 sm:p-10 space-y-6"
        >
          <Field label="Your Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
          <Field label="Phone Number" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} type="tel" required />
          <Field label="Your Message" value={form.message} onChange={(v) => setForm({ ...form, message: v })} textarea required />

          <button
            type="submit"
            className="group w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-brand-gradient text-background font-semibold uppercase text-sm tracking-widest glow-neon hover:scale-[1.02] transition-transform"
          >
            {sent ? <><CheckCircle2 className="h-4 w-4" /> Opening WhatsApp…</> : <>Send Message <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></>}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label, value, onChange, type = "text", textarea = false, required,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; textarea?: boolean; required?: boolean }) {
  const [focus, setFocus] = useState(false);
  const active = focus || value.length > 0;
  return (
    <div className="relative">
      <label className={`absolute left-5 transition-all pointer-events-none ${
        active ? "top-2 text-[10px] uppercase tracking-widest text-primary" : "top-4 text-sm text-muted-foreground"
      }`}>
        {label}
      </label>
      {textarea ? (
        <textarea
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          rows={4}
          className="w-full bg-white/5 border border-white/10 rounded-2xl pt-7 pb-3 px-5 outline-none focus:border-primary/60 focus:bg-white/10 transition-all resize-none"
        />
      ) : (
        <input
          required={required}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className="w-full bg-white/5 border border-white/10 rounded-2xl pt-6 pb-2 px-5 outline-none focus:border-primary/60 focus:bg-white/10 transition-all"
        />
      )}
    </div>
  );
}