import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4">
      <div className="container mx-auto">
        {/* Top Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8"
        />

        <div className="text-center space-y-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-xl font-bold neon-text-cyan"
          >
            {'<DEV/>'}
          </motion.div>

          {/* Attribution */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs text-muted-foreground"
          >
            Designed & Built with{' '}
            <span className="neon-text-magenta">♥</span> and{' '}
            <span className="neon-text-cyan">code</span>
          </motion.p>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-mono text-xs text-muted-foreground/50"
          >
            © {currentYear} CYBER_DEV. All systems operational.
          </motion.p>

          {/* Easter Egg */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="font-mono text-[10px] text-muted-foreground/30 pt-4"
          >
            // No bugs were harmed in the making of this website... probably.
          </motion.p>
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 mt-8"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
              className={`w-2 h-2 rounded-full ${
                i % 2 === 0 ? 'bg-primary' : 'bg-secondary'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
