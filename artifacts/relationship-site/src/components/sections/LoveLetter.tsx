import { motion } from "framer-motion";

export function LoveLetter() {
  return (
    <section id="letter" className="py-20 md:py-36 lg:py-48 bg-background relative selection:bg-primary/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-xl shadow-primary/5 px-6 sm:px-10 md:px-16 py-10 md:py-16"
        >
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-foreground mb-4">My Dearest,</h2>
            <div className="w-12 h-[1px] bg-primary/40 mx-auto"></div>
          </div>

          <div className="space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl font-serif text-muted-foreground leading-[1.9] md:leading-[2.2] tracking-wide">
            <p>
              I wanted to make something that could hold a fraction of what I feel for you. Not just a message that gets buried in a thread, but a place we can return to when the days get loud and we need to remember the quiet center of everything.
            </p>
            <p>
              From the way you laugh at your own jokes before you even finish telling them, to the quiet moments we share when the rest of the world is asleep—those are the pieces of life I want to keep forever. You've brought a kind of warmth into my life that I didn't know I was looking for, but now can't imagine living without.
            </p>
            <p>
              This isn't just about the big milestones or the perfect photos. It's about the Tuesday evenings, the burnt dinners we laughed through, the silent understanding when words aren't needed. Every ordinary thing becomes something to treasure because I'm doing it with you.
            </p>
            <p>
              Thank you for loving me the way you do. For being my favorite hello and my hardest goodbye. 
            </p>
          </div>

          <div className="mt-12 md:mt-20 text-right">
            <p className="font-serif text-lg sm:text-xl italic text-foreground mb-2">Forever yours,</p>
            <div className="w-24 md:w-32 h-[1px] bg-primary/40 ml-auto mt-4"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
