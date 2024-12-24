export const scrollToTop = (): void =>
  window.scrollTo({ top: 0, behavior: 'smooth' });

export const copyToClipboard = (text: string): void => {
  navigator.clipboard.writeText(text);
};
