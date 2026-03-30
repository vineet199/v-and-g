import { motion } from "framer-motion";

const baseUrl = import.meta.env.BASE_URL;

const memories = [
  {
    id: 1,
    src: `${baseUrl}images/memory-1.png`,
    alt: "Holding hands",
    caption: "Quiet mornings",
    aspect: "aspect-square md:aspect-[3/4]"
  },
  {
    id: 2,
    src: `${baseUrl}images/memory-2.png`,
    alt: "Journal",
    caption: "Words unspoken",
    aspect: "aspect-[4/3] md:aspect-square"
  },
  {
    id: 3,
    src: `${baseUrl}images/memory-3.png`,
    alt: "Silhouette sunset",
    caption: "Golden hour walks",
    aspect: "aspect-square md:aspect-[4/5]"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4 md:gap-6"
        >
          <div>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-3 md:mb-4">Glimpses</h2>
            <p className="text-muted-foreground font-light max-w-md text-sm md:text-base">
              Frames of time, caught and kept. The aesthetic of us.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className={`relative overflow-hidden bg-muted rounded-sm ${memory.aspect}`}>
                <img 
                  src={memory.src} 
                  alt={memory.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 mix-blend-multiply dark:mix-blend-normal"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('bg-secondary');
                  }}
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-serif italic text-lg text-foreground group-hover:text-primary transition-colors">
                  {memory.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
