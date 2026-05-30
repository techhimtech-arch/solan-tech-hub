import { motion } from "framer-motion";
import { Smartphone, Headphones, Wrench, RefreshCw, Hammer, ArrowLeftRight, Cog, Repeat, Gift } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const services = [
  { icon: Smartphone, title: "Smartphone Sales", desc: "Flagship & budget phones from every top brand." },
  { icon: Headphones, title: "Mobile Accessories", desc: "Premium cases, audio, chargers, and more." },
  { icon: Wrench, title: "Screen Replacement", desc: "Original-quality displays, same-day service." },
  { icon: RefreshCw, title: "Software Updates", desc: "Firmware, flashing, root, & optimization." },
  { icon: Hammer, title: "Phone Repairs", desc: "Board level repairs by certified technicians." },
  { icon: ArrowLeftRight, title: "Data Transfer", desc: "Move contacts, photos & apps safely." },
  { icon: Cog, title: "Mobile Setup", desc: "Brand-new device setup & personalization." },
  { icon: Repeat, title: "Device Exchange", desc: "Best buy-back value on your old phone." },
  { icon: Gift, title: "Gift Offers", desc: "Assured gifts with every purchase. Always." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">What We Offer</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-2xl">
                Everything mobile,<br /><span className="text-gradient">expertly handled.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground max-w-md">
              From your next flagship to a critical repair — we cover every step
              of your mobile journey with care and precision.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group relative glass rounded-3xl p-8 overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/0 group-hover:bg-primary/20 blur-3xl transition-all duration-700" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl glass border border-primary/20 group-hover:border-primary/60 group-hover:bg-primary/10 transition-all duration-500">
                  <s.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  Learn more →
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}