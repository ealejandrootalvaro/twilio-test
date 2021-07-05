export const uniqueValues = (values: Array<string>) => {
  const set = new Set(values);
  return Array.from(set);
}