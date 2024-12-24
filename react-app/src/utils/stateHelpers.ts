export const updateObjectInArray = <T extends { id: number }>(
  array: T[],
  id: number,
  updatedProps: Partial<T>
): T[] =>
  array.map((item) => (item.id === id ? { ...item, ...updatedProps } : item));

export const toggleItemInArray = <T>(array: T[], value: T): T[] =>
  array.includes(value)
    ? array.filter((item) => item !== value)
    : [...array, value];
