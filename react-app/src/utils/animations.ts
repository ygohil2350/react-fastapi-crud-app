export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const slideIn = (direction: 'left' | 'right' = 'left') => ({
  initial: { x: direction === 'left' ? -100 : 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: direction === 'left' ? -100 : 100, opacity: 0 },
});
