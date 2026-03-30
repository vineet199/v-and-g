import { motion } from "framer-motion";

const reasons = [
  {
    id: "01",
    title: "How you listen",
    desc: "You don't just hear words; you pay attention to the spaces between them. You remember the small things I mention in passing."
  },
  {
    id: "02",
    title: "Your laugh",
    desc: "That specific laugh you do when you genuinely find something funny, where your eyes crinkle. It's my favorite sound in the world."
  },
  {
    id: "03",
    title: "The calm",
    desc: "How everything feels easier when you're around. You bring a quiet peace to chaotic days, just by existing in the same room."
  },
  {
    id: "04",
    title: "Your passion",
    desc: "The way your eyes light up when you talk about something you love. It's intoxicating to watch you be in your element."
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
