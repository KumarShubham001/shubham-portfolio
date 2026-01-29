import { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import BuyCoffeeModal from './BuyCoffeeModal';

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kumarshubhamdotin/',
    color: 'cyan' as const,
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/KumarShubham001',
    color: 'magenta' as const,
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:kr.shubham997@gmail.com',
    color: 'cyan' as const,
  },
];

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="relative py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <span className="font-display text-primary text-xl">04.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold neon-text-cyan">
              {'<GET_IN_TOUCH />'}
            </h2>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <p className="font-mono text-muted-foreground text-sm">
            // Establishing communication protocols...
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-12 text-center"
        >
          <p className="font-mono text-muted-foreground max-w-xl mx-auto mb-8">
            Whether you have a project in mind, want to collaborate, 
            or just want to say hello — my inbox is always open. 
            Let's create something amazing together.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              const isCyan = link.color === 'cyan';
              
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group flex flex-col items-center gap-2 p-4 rounded-xl glass-card transition-all duration-300 ${
                    isCyan ? 'hover:neon-border-cyan' : 'hover:neon-border-magenta'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    isCyan 
                      ? 'bg-primary/10 group-hover:bg-primary/20' 
                      : 'bg-secondary/10 group-hover:bg-secondary/20'
                  }`}>
                    <Icon className={`w-6 h-6 transition-all duration-300 ${
                      isCyan 
                        ? 'text-primary group-hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]' 
                        : 'text-secondary group-hover:drop-shadow-[0_0_10px_rgba(255,0,255,0.8)]'
                    }`} />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    {link.label}
                  </span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-card font-mono text-xs text-muted-foreground">
                OR
              </span>
            </div>
          </div>

          {/* Buy Me a Coffee Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="font-mono text-sm text-muted-foreground mb-4">
              // Support the developer's caffeine addiction
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-display font-bold text-lg glass-card neon-border-magenta text-secondary hover:bg-secondary/10 transition-all group"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Coffee className="w-6 h-6" />
              </motion.div>
              BUY ME A COFFEE
              <span className="text-xs font-mono opacity-50 group-hover:opacity-100 transition-opacity">
                ☕
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Coffee Modal */}
      <BuyCoffeeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default ContactSection;
