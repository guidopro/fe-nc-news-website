export const dateParser = (input) => {
  const ts = new Date(input);
  return ts.toDateString();
};
