const {
  stringReversal,
  balancedBrackets,
  findSurvivor,
} = require("./functions");

describe("stringReversal", () => {
  it("reverses a string", () => {
    expect(stringReversal("hello")).toBe("olleh");
  });
});

describe("balancedBrackets", () => {
  it("returns true if brackets are balanced", () => {
    expect(balancedBrackets("(sdfs)")).toBe(true);
    expect(balancedBrackets("(sdf[sdf])")).toBe(true);
    expect(balancedBrackets("([]sdsd)")).toBe(true);
    expect(balancedBrackets("([]{[]})")).toBe(true);
  });
  it("returns false if brackets are not balanced", () => {
    expect(balancedBrackets("(")).toBe(false);
    expect(balancedBrackets(")sdf")).toBe(false);
    expect(balancedBrackets("}{")).toBe(false);
    expect(balancedBrackets("([sdf)]")).toBe(false);
    expect(balancedBrackets("({[sdf])}")).toBe(false);
  });
});

describe("findSurvivor", () => {
  it("returns the survivor", () => {
    expect(findSurvivor(5, 2)).toBe(3);
    expect(findSurvivor(10, 3)).toBe(4);
  });
});
