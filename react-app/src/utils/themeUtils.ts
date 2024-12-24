export const getThemeColor = (
  theme: Record<string, string>,
  key: string
): string => theme[key] || key;

export const toggleTheme = (currentTheme: 'light' | 'dark'): 'light' | 'dark' =>
  currentTheme === 'light' ? 'dark' : 'light';
