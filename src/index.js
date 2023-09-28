export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const reverseString = (string) => {
  return string.split("").reverse().join("");
};

export const calculator = (() => {
  const add = (n1, n2) => n1 + n2;
  const subtract = (n1, n2) => n1 - n2;
  const multiply = (n1, n2) => n1 * n2;
  const divide = (n1, n2) => n1 / n2;
  return { add, subtract, multiply, divide };
})();

export const caesarCipher = (string, shift) => {
  shift = shift % 26;
  const alphabet =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return string
    .split("")
    .map((char) => {
      if (!alphabet.includes(char)) return char;
      return alphabet[alphabet.indexOf(char) + shift];
    })
    .join("");
};

export const analyzeArray = (arr) => {
  const length = arr.length;
  let min;
  let max;
  let sum = 0;
  arr.forEach((n) => {
    sum += n;
    if (!min && !max) {
      min = n;
      max = n;
    }
    if (n < min) min = n;
    else if (n > max) max = n;
  });
  return { length, min, max, average: sum / length };
};
