import { motion } from "framer-motion";

export function LoveLetter() {
  return (
    <section id="letter" className="py-20 md:py-36 lg:py-48 bg-background relative selection:bg-primary/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl shadow-xl shadow-primary/5 px-6 sm:px-10 md:px-16 py-10 md:py-16"
        >
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-foreground mb-4">Helu my egg puff,</h2>
            <div className="w-12 h-[1px] bg-primary/40 mx-auto"></div>
          </div>

          <div className="space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl font-serif text-muted-foreground leading-[1.9] md:leading-[2.2] tracking-wide">
            <p>
              I’ll start off by being honest, which is how I have always been with you for the past year, bear with me for this paragraph. This letter was very difficult for me to write, my primary reasons being that, I generally don’t get heartfelt revelations about things. I feel them, and at most times I know exactly what to say but when it came to this I was at a loss of words. You asked me to write this letter, I really wish you didn’t, because these things come to me naturally over time, you know this. So since you asked me, I refrained from writing anything, because it felt somewhat not organic. And I don’t like that, because it doesn’t seem fair to you. I kept thinking of what to write and nothing felt good enough, everything that I could write felt generic, nothing gave me enough emotion to overcome the thought of having asked to write a letter.
            </p>
            <p>
              That is,<br />
              Until yesterday, ( March 30th 2026 )
            </p>
            <p>
              I was travelling to my cousins place in Kerala with my family in my uncle’s safari. I was sitting in the car and was thinking about random things, but something felt off, I literally felt like my forearm was itching/vibrating, I am not sure what that feeling is, it felt off. I realised that whenever we’re together you’re always on my arm especially when sitting in my alto. My arm started bothering me a lot, as it was missing your presence. By extension, I was missing you, my moomi. I know this might seem like I ripped it off from somewhere but just so you'll believe me, I’m gonna say, I promise this is exactly how I felt.
            </p>
            <p>
              I was going to text you the above stuff, but it felt like the kind of thing that can be better expressed through a letter. To be ever more honest, I forgot to text you that I felt this way in the car, however my brain suddenly remembered this at 3:44am in the night/morning of 31st March. It is some random effect that you have on me, thoughts of you are always running in the background.
            </p>
            <p>
              I was unsure for a long time, about what safe love was and had a skewed idea of what its supposed to be, I realised that love is not something that your mind makes up from movies or long term infatuations that you consciously know are bad for you. Love is soft, it isn’t meant to be hyper-exciting, it is meant to be fulfilling and it is something that is chosen by two individuals that care deeply about each other. I hope you don’t take that in wrong way, in case you did take it the wrong way, yes it is exciting being with you also daaaaaaa.
            </p>
            <p>
              Okay coming back to your nose, yes, nose, its cute, it is what it is. Your nose has always been one cutie for me, and I have to mention it in this letter to my pookie.
            </p>
            <p>
              I still fear a lot of things about the future, as I overthink a lot. However, I promise you that my fears are slowly going away, especially after our Gokarna trip. Something that I feel better easing into and the fear reduces day by day is that —
            </p>
            <p>
              I love you, and I don’t think that will change anymore.
            </p>
            <p>
              Thank you for being in my life,<br />
              Thank you for being the moomiest,<br />
              Thank you for letting me cry at times like little bitch,<br />
              Thank you for accepting my heart.
            </p>
            <p>
              Happy Anniversary baby!!
            </p>
          </div>

          <div className="mt-12 md:mt-20 text-right">
            <p className="font-serif text-lg sm:text-xl italic text-foreground mb-2">P.s Wow, I am also tearing up whilst writing this, same pinch hehehehe.</p>
            <div className="w-24 md:w-32 h-[1px] bg-primary/40 ml-auto mt-4"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
