import { motion } from "framer-motion";

const reasons = [
  {
    id: "01",
    title: "Your simplicity",
    desc: "You don't just hear words; you pay attention to the spaces between them, something I generally miss on. You remember the small things I mention in passing."
  },
  {
    id: "02",
    title: "Your gentleness",
    desc: "You actually care for me deeply and allow me to be who I am for the most part."
  },
  {
    id: "03",
    title: "The understanding",
    desc: "No matter how stupid my thoughts are, you bring a quiet peace to chaotic days, just by existing in the same room."
  },
  {
    id: "04",
    title: "Your nose",
    desc: "It is what it is"
  }
];

export function Reasons() {
  return (
    <section id="reasons" className="py-20 md:py-32 bg-secondary/20 border-y border-border/40">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">Why I Love You</h2>
          <p className="text-muted-foreground font-light text-base md:text-lg">
            A non-exhaustive list.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8 md:gap-y-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-6">
                <span className="font-serif italic text-3xl text-primary/40 group-hover:text-primary transition-colors duration-500">
                  {reason.id}
                </span>
                <div>
                  <h3 className="font-sans font-medium text-xl text-foreground mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
