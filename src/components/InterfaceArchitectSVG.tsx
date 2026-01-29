import { motion } from 'framer-motion';

const InterfaceArchitectSVG = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
      {/* Glow Effect Background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl" />
      
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full animate-float"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Central Hexagon Frame */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Outer Hexagon */}
          <motion.polygon
            points="200,40 340,110 340,290 200,360 60,290 60,110"
            stroke="url(#cyanGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.6))' }}
          />
          
          {/* Inner Hexagon */}
          <motion.polygon
            points="200,80 300,130 300,270 200,320 100,270 100,130"
            stroke="url(#magentaGradient)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.3, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 0 8px rgba(255, 0, 255, 0.6))' }}
          />
        </motion.g>

        {/* Circuit Lines */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Top circuits */}
          <motion.path
            d="M200,40 L200,0 M200,40 L240,20 M200,40 L160,20"
            stroke="hsl(180, 100%, 50%)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ filter: 'drop-shadow(0 0 5px rgba(0, 255, 255, 0.8))' }}
          />
          
          {/* Side circuits */}
          <motion.path
            d="M340,110 L380,90 M340,290 L380,310 M60,110 L20,90 M60,290 L20,310"
            stroke="hsl(300, 100%, 50%)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            style={{ filter: 'drop-shadow(0 0 5px rgba(255, 0, 255, 0.8))' }}
          />
        </motion.g>

        {/* Central Icon - Code Symbol */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {/* Code brackets */}
          <motion.path
            d="M150,180 L120,200 L150,220"
            stroke="hsl(180, 100%, 50%)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            style={{ filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))' }}
          />
          <motion.path
            d="M250,180 L280,200 L250,220"
            stroke="hsl(180, 100%, 50%)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            style={{ filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))' }}
          />
          
          {/* Slash */}
          <motion.line
            x1="190"
            y1="230"
            x2="210"
            y2="170"
            stroke="hsl(300, 100%, 50%)"
            strokeWidth="4"
            strokeLinecap="round"
            style={{ filter: 'drop-shadow(0 0 10px rgba(255, 0, 255, 0.8))' }}
          />
        </motion.g>

        {/* Orbiting Nodes */}
        <motion.g>
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <motion.circle
              key={angle}
              cx={200 + 140 * Math.cos((angle * Math.PI) / 180)}
              cy={200 + 140 * Math.sin((angle * Math.PI) / 180)}
              r="6"
              fill={i % 2 === 0 ? 'hsl(180, 100%, 50%)' : 'hsl(300, 100%, 50%)'}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 2,
                delay: 0.2 * i,
                repeat: Infinity,
              }}
              style={{ 
                filter: i % 2 === 0 
                  ? 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))' 
                  : 'drop-shadow(0 0 10px rgba(255, 0, 255, 0.8))' 
              }}
            />
          ))}
        </motion.g>

        {/* Data Flow Lines */}
        <motion.g>
          <motion.path
            d="M200,120 Q200,160 170,180"
            stroke="url(#dataFlowGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
          <motion.path
            d="M200,120 Q200,160 230,180"
            stroke="url(#dataFlowGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: 'linear' }}
          />
        </motion.g>

        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(180, 100%, 50%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(180, 100%, 30%)" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="magentaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(300, 100%, 50%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(300, 100%, 30%)" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="dataFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(180, 100%, 50%)" />
            <stop offset="100%" stopColor="hsl(300, 100%, 50%)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default InterfaceArchitectSVG;
