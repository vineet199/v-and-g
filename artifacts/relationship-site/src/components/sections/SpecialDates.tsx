import { motion } from "framer-motion";

const dates = [
  { label: "The Beginning", value: "Mar 22 2025" },
  { label: "I love you", value: "Sept 02 2025" },
  { label: "First Trip", value: "Mar 19 2026" },
  
];

export function SpecialDates() {
  return (
    <section id="dates" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card border border-border/50 rounded-2xl p-8 sm:p-12 md:p-20 text-center shadow-xl shadow-primary/5"
        >
          <span className="text-xs tracking-widest uppercase text-muted-foreground mb-4 block">To Remember</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-10 md:mb-16">Days That Changed Everything</h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-24">
            {dates.map((date, index) => (
              <motion.div
                key={date.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <span className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-primary mb-3 md:mb-4">{date.value}</span>
                <span className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">{date.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
    </section>
  );
}
