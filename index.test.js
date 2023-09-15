const {
  getDiceThrowInfos,
  getMultipleDiceThrowsPoints,
  POINTS,
  FIGURES,
} = require(".");

describe("getDiceThrowInfos", () => {
  it("should give 0 point when no dices have been thrown", () => {
    expect(getDiceThrowInfos()).toEqual({ figure: "", points: 0 });
  });

  it("should give 50 points when a YAMS figure have been thrown", () => {
    expect(getDiceThrowInfos([5, 5, 5, 5, 5])).toEqual({
      figure: FIGURES.YAMS,
      points: 50,
    });
  });

  it("should give 40 points when a sorted great suite figure have been thrown", () => {
    expect(getDiceThrowInfos([1, 2, 3, 4, 5])).toEqual({
      figure: FIGURES.GREAT_SUITE,
      points: 40,
    });
  });

  it("should give 40 points when a unsorted great suite figure have been thrown", () => {
    expect(getDiceThrowInfos([5, 2, 4, 3, 6])).toEqual({
      figure: FIGURES.GREAT_SUITE,
      points: 40,
    });
  });

  it("should give 35 points when a square figure have been thrown", () => {
    expect(getDiceThrowInfos([1, 4, 4, 4, 4])).toEqual({
      figure: FIGURES.SQUARE,
      points: 35,
    });
  });

  it("should give 28 points when a brelan figure have been thrown", () => {
    expect(getDiceThrowInfos([1, 5, 4, 4, 4])).toEqual({
      figure: FIGURES.BRELAN,
      points: 28,
    });
  });

  it("should give 30 points when a full figure have been thrown", () => {
    expect(getDiceThrowInfos([5, 5, 4, 4, 4])).toEqual({
      figure: FIGURES.FULL,
      points: 30,
    });
  });

  it("should give 25 points when a sorted small suite figure have been thrown", () => {
    expect(getDiceThrowInfos([4, 2, 3, 4, 5])).toEqual({
      figure: FIGURES.SMALL_SUITE,
      points: 25,
    });
  });

  it("should give 25 points when a unsorted small suite figure have been thrown", () => {
    expect(getDiceThrowInfos([5, 2, 4, 3, 3])).toEqual({
      figure: FIGURES.SMALL_SUITE,
      points: 25,
    });
  });

  it("should give some of dice as points (luck) when no other figure have been thrown", () => {
    expect(getDiceThrowInfos([4, 5, 5, 6, 6])).toEqual({
      figure: FIGURES.LUCK,
      points: 26,
    });
  });
});

describe("getMultipleDiceThrowsPoints", () => {
  it("should give sum of figure points when multiple throws is provided", () => {
    expect(
      getMultipleDiceThrowsPoints([
        [5, 5, 5, 5, 5], // yams
        [5, 2, 4, 3, 6], // great suite
        [5, 5, 4, 4, 4], // full
        [4, 5, 5, 6, 6], // luck
      ])
    ).toEqual(
      POINTS[FIGURES.YAMS] +
        POINTS[FIGURES.GREAT_SUITE] +
        POINTS[FIGURES.FULL] +
        26
    );
  });

  it("should give sum of figure points preventing multiple occurences of 1 figure when multiple throws is provided", () => {
    expect(
      getMultipleDiceThrowsPoints([
        [1, 1, 1, 2, 2], // full
        [1, 1, 1, 2, 2], // brelan
        [1, 1, 1, 2, 2], // luck
        [1, 1, 1, 2, 2], // nothing
      ])
    ).toEqual(POINTS[FIGURES.FULL] + POINTS[FIGURES.BRELAN] + 7);
  });
});
