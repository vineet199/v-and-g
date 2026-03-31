import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { LoveLetter } from "@/components/sections/LoveLetter";
import { Timeline } from "@/components/sections/Timeline";
import { Reasons } from "@/components/sections/Reasons";
import { SpecialDates } from "@/components/sections/SpecialDates";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <div className="deferred-sections">
          <LoveLetter />
          <Timeline />
          <Reasons />
          <SpecialDates />
        </div>
      </main>
      
      <footer className="py-10 md:py-16 text-center border-t border-border/40 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="font-serif text-2xl md:text-3xl italic text-foreground mb-3 md:mb-4">Our Story</p>
          <p className="text-xs md:text-sm tracking-widest uppercase text-muted-foreground">To be continued</p>
        </div>
      </footer>
    </div>
  );
}
