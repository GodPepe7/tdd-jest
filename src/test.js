test("capitalizes first letter", () => {
  expect(capitalize("noob")).toBe("Noob");
});

test("reverses string", () => {
  expect(reverseString("noob")).toBe("boon");
});

test("calculator operations", () => {
  expect(calculator.add(1, 4)).toBe(5);
  expect(calculator.subtract(4, 2)).toBe(2);
  expect(calculator.divide(12, 3)).toBe(4);
  expect(calculator.multiply(3, 4)).toBe(12);
});

test("ceaser shifting", () => {
  expect(caesarCipher("sup", 2)).toBe("uwr");
  expect(caesarCipher("za", 1)).toBe("ab");
  expect(caeserCipher("defend.", 3)).toBe("efgfoe.");
});

test("analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
