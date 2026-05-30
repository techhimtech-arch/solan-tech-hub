import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/Loader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MouseFollower } from "@/components/MouseFollower";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Brands } from "@/components/sections/Brands";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Offers } from "@/components/sections/Offers";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { InstagramSection } from "@/components/sections/Instagram";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unique Communication — Solan's Most Trusted Mobile Store" },
      { name: "description", content: "Premium smartphones, accessories, expert repairs & assured gifts at Solan's most loved mobile store. Mall Road, Bajoral Khurd. Call 80912 21222." },
      { property: "og:title", content: "Unique Communication — Solan's Most Trusted Mobile Store" },
      { property: "og:description", content: "Latest smartphones, best deals, expert services and assured gifts with every purchase." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Loader />
      <ScrollProgress />
      <MouseFollower />
      <Navbar />
      <Hero />
      <About />
      <Brands />
      <Services />
      <WhyUs />
      <Offers />
      <Gallery />
      <Reviews />
      <InstagramSection />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
