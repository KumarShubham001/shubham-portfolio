import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Database, 
  Server, 
  Smartphone, 
  GitBranch,
  Cloud,
  Zap,
  Shield,
  Layers
} from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend',
    description: 'React, Vue, TypeScript, Next.js',
    color: 'cyan' as const,
  },
  {
    icon: Server,
    title: 'Backend',
    description: 'Node.js, Python, GraphQL, REST',
    color: 'magenta' as const,
  },
  {
    icon: Database,
    title: 'Databases',
    description: 'PostgreSQL, MongoDB, Redis',
    color: 'cyan' as const,
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Figma, Tailwind, Framer Motion',
    color: 'magenta' as const,
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'AWS, Docker, Kubernetes, CI/CD',
    color: 'cyan' as const,
  },
  {
    icon: Smartphone,
    title: 'Mobile Dev',
    description: 'React Native, Flutter, PWAs',
    color: 'magenta' as const,
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Git, GitHub, GitLab, Workflows',
    color: 'cyan' as const,
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimization, Caching, CDNs',
    color: 'magenta' as const,
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Auth, Encryption, Best Practices',
    color: 'cyan' as const,
  },
  {
    icon: Layers,
    title: 'Architecture',
    description: 'System Design, Microservices',
    color: 'magenta' as const,
  },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const Icon = skill.icon;
  const isCyan = skill.color === 'cyan';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <motion.div
        className={`glass-card rounded-xl p-6 h-full transition-all duration-300 ${
          isCyan ? 'hover:neon-border-cyan' : 'hover:neon-border-magenta'
        }`}
        style={{
          animation: `float ${6 + index * 0.5}s ease-in-out infinite`,
          animationDelay: `${index * 0.2}s`,
        }}
      >
        {/* Icon Container */}
        <motion.div
          className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${
            isCyan 
              ? 'bg-primary/10 group-hover:bg-primary/20' 
              : 'bg-secondary/10 group-hover:bg-secondary/20'
          }`}
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Icon 
            className={`w-7 h-7 transition-all duration-300 ${
              isCyan 
                ? 'text-primary group-hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]' 
                : 'text-secondary group-hover:drop-shadow-[0_0_10px_rgba(255,0,255,0.8)]'
            }`}
          />
        </motion.div>

        {/* Title */}
        <h3 className={`font-display text-lg font-bold mb-2 transition-all duration-300 ${
          isCyan ? 'group-hover:neon-text-cyan' : 'group-hover:neon-text-magenta'
        }`}>
          {skill.title}
        </h3>

        {/* Description */}
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">
          {skill.description}
        </p>

        {/* Animated underline */}
        <motion.div
          className={`h-0.5 mt-4 rounded-full ${
            isCyan ? 'bg-primary' : 'bg-secondary'
          }`}
          initial={{ width: '0%' }}
          whileInView={{ width: '30%' }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <span className="font-display text-primary text-xl">03.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold neon-text-cyan">
              {'<SKILL_MATRIX />'}
            </h2>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <p className="font-mono text-muted-foreground text-sm">
            // Loading core_competencies...
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        />
      </div>
    </section>
  );
};

export default SkillsSection;
