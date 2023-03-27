export const years = (amount: number) => {
  const currentYear = new Date().getFullYear();

  return Array(amount)
    .fill(0)
    .map((_, i) => currentYear - i);
};
