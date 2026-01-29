import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const timelineData = [
  {
    date: '2024.01.15',
    title: 'Senior Interface Architect',
    company: 'Current Corp',
    description: 'Leading the frontend architecture for a next-gen SaaS platform. Building design systems and mentoring junior developers.',
    tech: ['React', 'TypeScript', 'GraphQL', 'Tailwind'],
    status: 'ACTIVE',
  },
  {
    date: '2022.06.01',
    title: 'Full-Stack Developer',
    company: 'Tech Dynamics Ltd',
    description: 'Developed scalable web applications serving 100K+ users. Implemented real-time features and optimized performance.',
    tech: ['Node.js', 'React', 'PostgreSQL', 'AWS'],
    status: 'COMPLETED',
  },
  {
    date: '2020.09.20',
    title: 'Frontend Developer',
    company: 'Digital Nexus Inc',
    description: 'Built responsive user interfaces and interactive dashboards. Collaborated with UX designers to implement pixel-perfect designs.',
    tech: ['Vue.js', 'JavaScript', 'SCSS', 'Firebase'],
    status: 'COMPLETED',
  },
  {
    date: '2019.03.10',
    title: 'Junior Developer',
    company: 'StartUp Alpha',
    description: 'Started the journey into professional development. Learned agile methodologies and production-level coding practices.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    status: 'COMPLETED',
  },
  {
    date: '2018.06.15',
    title: 'System Initialization',
    company: 'Self-Taught Developer',
    description: 'The beginning of an epic journey. First "Hello, World!" written. The spark that ignited a passion for code.',
    tech: ['Curiosity', 'Determination', 'Stack Overflow'],
    status: 'ORIGIN',
  },
];

const TimelineItem = ({ item, index, scrollProgress }: { 
  item: typeof timelineData[0]; 
  index: number;
  scrollProgress: number;
}) => {
  const isLeft = index % 2 === 0;
  const itemProgress = Math.min(1, Math.max(0, (scrollProgress - index * 0.15) / 0.2));

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`flex items-center gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}
    >
      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`glass-card rounded-xl p-6 flex-1 max-w-lg ${
          item.status === 'ACTIVE' ? 'neon-border-cyan' : 'neon-border-magenta'
        }`}
        style={{ opacity: 0.5 + itemProgress * 0.5 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs text-primary">
            EST. {item.date}
          </span>
          <span className={`font-mono text-xs px-2 py-1 rounded ${
            item.status === 'ACTIVE' 
              ? 'bg-primary/20 text-primary' 
              : item.status === 'ORIGIN'
              ? 'bg-secondary/20 text-secondary'
              : 'bg-muted text-muted-foreground'
          }`}>
            {item.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg md:text-xl font-bold mb-1 neon-text-cyan">
          {item.title}
        </h3>
        <p className="font-mono text-sm text-secondary mb-4">
          @{item.company}
        </p>

        {/* Description */}
        <p className="font-mono text-sm text-muted-foreground mb-4 leading-relaxed">
          {item.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {item.tech.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Timeline Node */}
      <div className="relative flex-shrink-0 hidden md:block">
        <motion.div
          className={`w-4 h-4 rounded-full ${
            item.status === 'ACTIVE' ? 'bg-primary' : 'bg-secondary'
          }`}
          animate={{
            boxShadow: item.status === 'ACTIVE'
              ? ['0 0 10px rgba(0, 255, 255, 0.5)', '0 0 30px rgba(0, 255, 255, 0.8)', '0 0 10px rgba(0, 255, 255, 0.5)']
              : '0 0 10px rgba(255, 0, 255, 0.5)',
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Spacer for alignment */}
      <div className="hidden md:block flex-1 max-w-lg" />
    </motion.div>
  );
};

const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section id="journey" className="relative py-32 px-4" ref={containerRef}>
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
            <span className="font-display text-primary text-xl">02.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold neon-text-cyan">
              {'<PROFESSIONAL_LOG />'}
            </h2>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <p className="font-mono text-muted-foreground text-sm">
            // Accessing career_history.log...
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary via-secondary to-primary"
              style={{ height: lineHeight, opacity: glowOpacity }}
            />
          </div>

          {/* Mobile Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:hidden">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary via-secondary to-primary"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={item.date}
                item={item}
                index={index}
                scrollProgress={0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
