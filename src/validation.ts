export const isValidName = (name: string): boolean => {
  return name.length >= 2 && name.length <= 50;
};
