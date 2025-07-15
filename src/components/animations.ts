export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Remove 'ease' from the fadeIn variant to fix type errors
export const fadeIn = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  type: 'spring' | 'tween' = 'tween',
  delay = 0,
  duration = 0.8
) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
    },
  },
}); 