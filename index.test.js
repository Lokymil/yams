const { getDiceThrowPoints, getMultipleDiceThrowsPoints } = require(".");

describe("getDiceThrowPoints", () => {
  it("should give 0 point when no dices have been thrown", () => {
    expect(getDiceThrowPoints()).toBe(0);
  });

  it("should give 50 points when a YAMS figure have been thrown", () => {
    expect(getDiceThrowPoints([5, 5, 5, 5, 5])).toBe(50);
  });

  it("should give 40 points when a sorted great suite figure have been thrown", () => {
    expect(getDiceThrowPoints([1, 2, 3, 4, 5])).toBe(40);
  });

  it("should give 40 points when a unsorted great suite figure have been thrown", () => {
    expect(getDiceThrowPoints([5, 2, 4, 3, 6])).toBe(40);
  });

  it("should give 35 points when a square figure have been thrown", () => {
    expect(getDiceThrowPoints([1, 4, 4, 4, 4])).toBe(35);
  });

  it("should give 28 points when a brelan figure have been thrown", () => {
    expect(getDiceThrowPoints([1, 5, 4, 4, 4])).toBe(28);
  });

  it("should give 30 points when a full figure have been thrown", () => {
    expect(getDiceThrowPoints([5, 5, 4, 4, 4])).toBe(30);
  });

  it("should give 25 points when a sorted small suite figure have been thrown", () => {
    expect(getDiceThrowPoints([4, 2, 3, 4, 5])).toBe(25);
  });

  it("should give 25 points when a unsorted small suite figure have been thrown", () => {
    expect(getDiceThrowPoints([5, 2, 4, 3, 3])).toBe(25);
  });

  it("should give some of dice as points (luck) when no other figure have been thrown", () => {
    expect(getDiceThrowPoints([4, 5, 5, 6, 6])).toBe(26);
  });
});

describe("getMultipleDiceThrowsPoints", () => {
  it("should give some of figure points when multiple throws is provided", () => {
    expect(
      getMultipleDiceThrowsPoints([
        [5, 5, 5, 5, 5], // yams
        [5, 2, 4, 3, 6], // square
        [5, 5, 4, 4, 4], // full
        [4, 5, 5, 6, 6], // luck
      ])
    ).toBe(50 + 40 + 30 + 26);
  });
});
