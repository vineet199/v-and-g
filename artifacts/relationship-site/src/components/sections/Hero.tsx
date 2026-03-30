import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-10"></div>
        <img 
          src="/images/hero-bg.png" 
          alt="Warm candlelight" 
          className="w-full h-full object-cover opacity-70"
          onError={(e) => {
            // Fallback to a warm gradient if image is not ready
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-amber-50', 'to-rose-50', 'dark:from-stone-900', 'dark:to-stone-800');
          }}
        />
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-primary mb-6 block font-medium">
            For You, Always
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-foreground mb-6 md:mb-8 leading-tight font-light text-balance">
            Every moment <br />
            <span className="italic text-primary/80">with you</span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed text-balance px-2 md:px-0">
            A quiet space to remember where we started, how far we've come, and all the beautiful ordinary days in between.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-xs tracking-widest text-muted-foreground uppercase">Scroll softly</span>
          <div className="w-[1px] h-12 bg-primary/30 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-primary"
              animate={{ top: ["-50%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
