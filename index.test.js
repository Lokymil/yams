const { getDiceThrowPoints } = require(".");

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
});
