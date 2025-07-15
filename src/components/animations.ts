export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Use type as 'spring' | 'tween' to match Framer Motion's allowed values
// Use a named easing function for 'ease' instead of a cubic-bezier array
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
      ease: 'easeInOut', // valid Easing type
    },
  },
}); 