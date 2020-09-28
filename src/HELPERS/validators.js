const validateStrings = (str) => {
  const result = str.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
};

const hi = () => {};
export { validateStrings, hi };
