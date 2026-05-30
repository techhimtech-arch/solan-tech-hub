import { Instagram, Phone, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-24 pb-10 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-brand-gradient flex items-center justify-center font-display font-bold text-2xl text-background glow-neon">U</div>
              <div>
                <div className="font-display text-xl font-bold leading-tight">UNIQUE</div>
                <div className="text-xs tracking-[0.25em] text-muted-foreground">COMMUNICATION</div>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
              Most popular mobile shop in Himachal Pradesh. Genuine products,
              best prices, expert services and assured gifts — proudly serving
              Solan since 2014.
            </p>
            <div className="mt-6 flex gap-3">
              <Social href="https://www.instagram.com/unique_communicationss/" icon={<Instagram className="h-4 w-4" />} />
              <Social href="tel:8091221222" icon={<Phone className="h-4 w-4" />} />
              <Social href="https://wa.me/918091221222" icon={<MessageCircle className="h-4 w-4" />} />
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-4">Explore</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["About", "Brands", "Services", "Offers", "Gallery", "Reviews", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-4">Visit</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Opp. Hanuman Mandir, Mall Road, Bajoral Khurd, Solan, HP 173212</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" /> 80912 21222</li>
              <li className="flex gap-2"><Instagram className="h-4 w-4 text-primary shrink-0 mt-0.5" /> @unique_communicationss</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 sm:justify-between items-center text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Unique Communication · Rinku Birsanta · All rights reserved.</div>
          <div className="font-display tracking-widest text-primary">CRAFTED WITH ♥ IN SOLAN</div>
        </div>

        {/* huge wordmark */}
        <div aria-hidden className="mt-16 select-none text-center">
          <div className="font-display font-bold text-[18vw] leading-none text-gradient opacity-20">UNIQUE</div>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="h-10 w-10 rounded-full glass border border-white/10 hover:border-primary/40 hover:text-primary flex items-center justify-center transition-colors">
      {icon}
    </a>
  );
}