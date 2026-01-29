import { motion } from 'framer-motion';
import { Download, Zap, Mail } from 'lucide-react';

import resume from '@/assets/Kumar_Shubham_resume_updated.pdf';

const HireMeSection = () => {
  return (
    <section id="hire" className="relative py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background Grid Effect */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(hsl(180 100% 50% / 0.03) 1px, transparent 1px),
                linear-gradient(90deg, hsl(180 100% 50% / 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Animated Corner Accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary opacity-50" />
          <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-secondary opacity-50" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-secondary opacity-50" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary opacity-50" />

          {/* Content */}
          <div className="relative z-10">
            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card neon-border-cyan mb-8"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-primary">SYSTEM_STATUS: ONLINE</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-display text-3xl md:text-5xl font-black mb-4"
            >
              <span className="neon-text-cyan">SYSTEM UPDATE:</span>
              <br />
              <span className="neon-text-magenta">Seeking New Opportunities</span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="font-mono text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Ready to bring my expertise in frontend architecture,
              full-stack development, and pixel-perfect design to your team.
              Let's build something extraordinary together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {/* Download CV Button */}
              <motion.a
                href={resume}
                download="Kumar_Shubham_resume_updated.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group px-8 py-4 rounded-lg font-display font-bold text-primary-foreground overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, hsl(180 100% 50%), hsl(300 100% 50%))',
                }}
              >
                {/* Scanning Light Effect */}
                <span className="absolute inset-0 scan-button" />

                {/* Button Content */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  DOWNLOAD_CV.pdf
                </span>
              </motion.a>

              {/* Contact Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg font-display font-bold glass-card neon-border-magenta text-secondary flex items-center justify-center gap-2 hover:bg-secondary/10 transition-all"
              >
                <Mail className="w-5 h-5" />
                SEND_MESSAGE()
              </motion.a>
            </motion.div>

            {/* Fun Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-12 pt-8 border-t border-border"
            >
              <p className="font-mono text-xs text-muted-foreground mb-4">
                // Current availability metrics
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-display font-bold neon-text-cyan">100%</div>
                  <div className="text-xs font-mono text-muted-foreground">Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-display font-bold neon-text-magenta">24hrs</div>
                  <div className="text-xs font-mono text-muted-foreground">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-display font-bold neon-text-cyan">Remote</div>
                  <div className="text-xs font-mono text-muted-foreground">Work Ready</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMeSection;
