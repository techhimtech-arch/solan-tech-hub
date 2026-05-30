import { MapPin, Phone, MessageCircle, Navigation, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";

const ADDR = "Opposite Hanuman Mandir, Mall Road, Bajoral Khurd, Solan, Himachal Pradesh 173212";
const MAP_Q = encodeURIComponent("Unique Communication, Mall Road, Bajoral Khurd, Solan, Himachal Pradesh 173212");

export function Location() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <Reveal><div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Visit Us</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Find us on <span className="text-gradient">Mall Road</span>.
            </h2>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
          <div className="relative rounded-3xl overflow-hidden glass-strong min-h-[460px]">
            <iframe
              title="Unique Communication on map"
              src={`https://www.google.com/maps?q=${MAP_Q}&output=embed`}
              className="absolute inset-0 w-full h-full grayscale-[40%] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-primary/20 rounded-3xl" />
          </div>

          <div className="glass-strong rounded-3xl p-8 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
                <MapPin className="h-4 w-4" /> Store Location
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold">Unique Communication</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed text-sm">{ADDR}</p>
            </div>

            <div className="space-y-3 text-sm">
              <Row icon={<Phone className="h-4 w-4 text-primary" />} label="Phone" value="80912 21222" />
              <Row icon={<Clock className="h-4 w-4 text-primary" />} label="Hours" value="Mon – Sun · 10:00 AM – 9:00 PM" />
              <Row icon={<Navigation className="h-4 w-4 text-primary" />} label="Landmark" value="Opposite Hanuman Mandir" />
            </div>

            <div className="mt-auto flex flex-wrap gap-3">
              <MagneticButton href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_Q}`} variant="primary">
                <Navigation className="h-4 w-4" /> Directions
              </MagneticButton>
              <MagneticButton href="tel:8091221222" variant="ghost">
                <Phone className="h-4 w-4" /> Call
              </MagneticButton>
              <MagneticButton href="https://wa.me/918091221222" variant="outline">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 glass rounded-xl p-3">
      <div className="h-8 w-8 rounded-lg glass border border-primary/20 flex items-center justify-center shrink-0">{icon}</div>
      <div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
}