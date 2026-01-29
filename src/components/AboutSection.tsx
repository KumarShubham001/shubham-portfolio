import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 px-4" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-2xl p-8 md:p-12 neon-border-cyan"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <span className="font-display text-primary text-xl">01.</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold neon-text-cyan">
              {'<ABOUT_ME />'}
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          {/* Terminal Content */}
          <div className="font-mono space-y-4 text-foreground">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <span className="text-primary">root@cyberdev</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-secondary">~</span>
              <span className="text-muted-foreground">$ </span>
              <span className="text-foreground">cat introduction.txt</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="pl-4 border-l-2 border-primary/30 space-y-4"
            >
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-primary">{'//'}</span> Greetings, fellow traveler of the digital realm.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I am a <span className="neon-text-cyan">Full-Stack Developer</span> and{' '}
                <span className="neon-text-magenta">UI/UX Architect</span> with a passion for 
                crafting immersive digital experiences that blur the line between 
                functionality and art.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My expertise spans the entire development spectrum — from building 
                scalable backend systems to designing pixel-perfect interfaces that 
                users <span className="text-primary">actually love</span> to interact with.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                When I'm not writing code, you'll find me exploring new technologies, 
                contributing to open-source projects, or diving deep into the latest 
                <span className="text-secondary"> cyberpunk anime</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <span className="text-primary">root@cyberdev</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-secondary">~</span>
              <span className="text-muted-foreground">$ </span>
              <span className="text-foreground animate-blink border-r-2 border-primary">_</span>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border"
          >
            {[
              { label: 'Years Active', value: '6+' },
              { label: 'Projects Deployed', value: '50+' },
              { label: 'Lines of Code', value: '500K+' },
              { label: 'Coffee Consumed', value: '∞' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.9 + index * 0.1, type: 'spring' }}
                  className="text-2xl md:text-3xl font-display font-bold neon-text-cyan"
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs text-muted-foreground mt-1 font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
