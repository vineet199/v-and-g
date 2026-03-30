import { motion } from "framer-motion";

const milestones = [
  {
    date: "The First Time",
    title: "Coffee & Rain",
    description: "It was pouring outside, but neither of us wanted to leave the cafe. Three hours felt like three minutes."
  },
  {
    date: "The Realization",
    title: "Late Night Drives",
    description: "Listening to that one playlist on loop, windows down, knowing something fundamental had shifted."
  },
  {
    date: "The Commitment",
    title: "Choosing Us",
    description: "Not a grand gesture, just a quiet, certain decision that this is where we belong."
  }
];

export function Timeline() {
  return (
    <section id="timeline" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-24"
        >
          <span className="text-xs tracking-widest uppercase text-primary mb-4 block">Chapters</span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">Our Timeline</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-border md:-translate-x-1/2"></div>

          <div className="space-y-14 md:space-y-24">
            {milestones.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-16 items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center dot */}
                <div className="absolute left-[20px] md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-[5.5px] md:-translate-x-1/2 mt-2 md:mt-0 ring-4 ring-background"></div>
                
                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <span className="font-serif italic text-primary/80 text-base md:text-xl block mb-1 md:mb-2">{item.date}</span>
                  <h3 className="font-sans font-medium text-xl md:text-2xl text-foreground mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">{item.description}</p>
                </div>
                
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 md:mt-32 text-center">
           <p className="font-serif italic text-xl md:text-2xl text-muted-foreground">And so many more chapters yet to be written...</p>
        </div>
      </div>
    </section>
  );
}
