import { motion } from 'framer-motion';
import InterfaceArchitectSVG from './InterfaceArchitectSVG';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left z-10"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-primary text-sm mb-4"
            >
              {'> system.initialize()'}
            </motion.p>

            {/* Glitch Name */}
            <h1 
              className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-4 glitch neon-text-cyan"
              data-text="CYBER_DEV"
            >
              CYBER_DEV
            </h1>

            {/* Profession with Glitch */}
            <h2 
              className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-8 glitch neon-text-magenta"
              data-text="INTERFACE ARCHITECT"
            >
              INTERFACE ARCHITECT
            </h2>

            {/* Terminal Style Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-mono text-sm md:text-base text-muted-foreground max-w-xl"
            >
              <p className="terminal-prompt mb-2">
                Crafting digital experiences at the intersection of
              </p>
              <p className="terminal-prompt mb-2">
                <span className="neon-text-cyan">aesthetic design</span> and{' '}
                <span className="neon-text-magenta">functional code</span>
              </p>
              <p className="text-muted-foreground/50 mt-4">
                // Est. 2018 | Building the Future
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start"
            >
              <motion.a
                href="#journey"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card px-6 py-3 rounded-lg neon-border-cyan font-mono text-sm text-primary hover:bg-primary/10 transition-all"
              >
                {'> explore_journey()'}
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card px-6 py-3 rounded-lg neon-border-magenta font-mono text-sm text-secondary hover:bg-secondary/10 transition-all"
              >
                {'> initiate_contact()'}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* SVG Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative z-10"
          >
            <InterfaceArchitectSVG />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-muted-foreground">scroll_down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border border-primary/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
