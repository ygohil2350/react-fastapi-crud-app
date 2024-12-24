export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const truncate = (str: string, length: number): string =>
  str.length > length ? str.substring(0, length) + '...' : str;

export const isValidEmail = (email: string): boolean =>
  /\S+@\S+\.\S+/.test(email);

export const isEmpty = (value: unknown): boolean =>
  value === null || value === undefined || value === '';

export const getRandomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const calculatePercentage = (part: number, total: number): number =>
  total > 0 ? (part / total) * 100 : 0;
