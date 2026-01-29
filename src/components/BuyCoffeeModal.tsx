import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Coffee, Wallet, Copy, CheckCheck, Sparkles } from 'lucide-react';

interface BuyCoffeeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BuyCoffeeModal = ({ isOpen, onClose }: BuyCoffeeModalProps) => {
  const [copied, setCopied] = useState(false);
  const upiId = '8407900285@ybl'; // Replace with actual UPI ID

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="glass-card rounded-2xl p-8 max-w-md w-full relative overflow-hidden neon-border-magenta">
              {/* Background Pattern */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(hsl(300 100% 50% / 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, hsl(300 100% 50% / 0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-6">
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4"
                  >
                    <Coffee className="w-8 h-8 text-secondary" />
                  </motion.div>
                  
                  <h3 className="font-display text-2xl font-bold neon-text-magenta mb-2">
                    SIDE QUEST UNLOCKED
                  </h3>
                  <p className="font-mono text-sm text-muted-foreground">
                    // Trade transaction initiated...
                  </p>
                </div>

                {/* Caffeine Progress */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-muted-foreground">Caffeine Levels:</span>
                    <span className="text-secondary">10%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '10%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-secondary to-primary"
                      style={{
                        boxShadow: '0 0 10px hsl(300 100% 50% / 0.5)',
                      }}
                    />
                  </div>
                  <p className="text-xs font-mono text-center text-muted-foreground mt-2">
                    ⚠️ CRITICAL: Developer fuel running low!
                  </p>
                </div>

                {/* Message */}
                <div className="glass-card rounded-lg p-4 mb-6 text-center">
                  <Sparkles className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="font-mono text-sm text-foreground leading-relaxed">
                    <span className="neon-text-cyan">Fuel the Code:</span> Please contribute{' '}
                    <span className="neon-text-magenta font-bold">₹500 INR</span>{' '}
                    to keep the servers running and the developer caffeinated! ☕
                  </p>
                </div>

                {/* UPI Information */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Wallet className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-mono text-muted-foreground mb-1">UPI ID:</p>
                      <p className="font-mono text-sm text-foreground truncate">{upiId}</p>
                    </div>
                    <button
                      onClick={handleCopy}
                      className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                    >
                      {copied ? (
                        <CheckCheck className="w-5 h-5 text-primary" />
                      ) : (
                        <Copy className="w-5 h-5 text-muted-foreground" />
                      )}
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleCopy}
                      className="flex-1 py-3 rounded-lg font-display font-bold text-sm text-primary-foreground overflow-hidden relative"
                      style={{
                        background: 'linear-gradient(135deg, hsl(300 100% 50%), hsl(180 100% 50%))',
                      }}
                    >
                      <span className="relative z-10">
                        {copied ? 'COPIED!' : 'COPY UPI ID'}
                      </span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={onClose}
                      className="px-6 py-3 rounded-lg font-display font-bold text-sm glass-card neon-border-cyan text-primary"
                    >
                      LATER
                    </motion.button>
                  </div>
                </div>

                {/* Footer Note */}
                <p className="text-center font-mono text-xs text-muted-foreground mt-4">
                  // Every contribution powers more late-night coding sessions 🚀
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BuyCoffeeModal;
