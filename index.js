const FIGURES = {
  YAMS: "YAMS",
  GREAT_SUITE: "GREAT_SUITE",
  SQUARE: "SQUARE",
  FULL: "FULL",
  BRELAN: "BRELAN",
  SMALL_SUITE: "SMALL_SUITE",
  LUCK: "LUCK",
};

const POINTS = {
  [FIGURES.YAMS]: 50,
  [FIGURES.GREAT_SUITE]: 40,
  [FIGURES.SQUARE]: 35,
  [FIGURES.FULL]: 30,
  [FIGURES.BRELAN]: 28,
  [FIGURES.SMALL_SUITE]: 25,
};

const isYams = (dices) =>
  dices.filter((dice) => dice === dices[0]).length === 5;

const isSuite = (dices) =>
  dices
    .sort()
    .every((dice, index, sortedDices) =>
      index === 0 ? true : dice - 1 === sortedDices[index - 1]
    );

const isGreatSuite = (dices) => isSuite(dices);

const getDicesCount = (dices) =>
  dices.reduce((scores, dice) => ({ ...scores, [dice]: scores[dice] + 1 }), {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  });

const isSquare = (dices) =>
  Object.values(getDicesCount(dices)).some((countOfDice) => countOfDice === 4);

const isBrelan = (dices) =>
  Object.values(getDicesCount(dices)).some((countOfDice) => countOfDice === 3);

const isFull = (dices) => {
  const dicesCount = Object.values(getDicesCount(dices));

  return dicesCount.includes(3) && dicesCount.includes(2);
};

const isSmallSuite = (dices) => {
  const deduplicatedSortedDices = dices
    .reduce((deduplicatedDices, dice) => {
      if (deduplicatedDices.includes(dice)) {
        return deduplicatedDices;
      }

      return [...deduplicatedDices, dice];
    }, [])
    .sort();

  if (deduplicatedSortedDices.length < 4) {
    return false;
  }

  const lowerDices = deduplicatedSortedDices.slice(5);
  const upperDices = deduplicatedSortedDices.slice(-4);

  return isSuite(lowerDices) || isSuite(upperDices);
};

const getDiceThrowPoints = (dices) => {
  if (!dices || dices.length === 0) {
    return { figure: "", points: 0 };
  }

  if (isYams(dices)) {
    return { figure: FIGURES.YAMS, points: POINTS[FIGURES.YAMS] };
  }

  if (isGreatSuite(dices)) {
    return { figure: FIGURES.GREAT_SUITE, points: POINTS[FIGURES.GREAT_SUITE] };
  }

  if (isSquare(dices)) {
    return { figure: FIGURES.SQUARE, points: POINTS[FIGURES.SQUARE] };
  }

  if (isFull(dices)) {
    return { figure: FIGURES.FULL, points: POINTS[FIGURES.FULL] };
  }

  if (isBrelan(dices)) {
    return { figure: FIGURES.BRELAN, points: POINTS[FIGURES.BRELAN] };
  }

  if (isSmallSuite(dices)) {
    return { figure: FIGURES.SMALL_SUITE, points: POINTS[FIGURES.SMALL_SUITE] };
  }

  return {
    figure: FIGURES.LUCK,
    points: dices.reduce((sum, dice) => sum + dice, 0),
  };
};

const getMultipleDiceThrowsPoints = (throws) =>
  throws.reduce((sum, dices) => sum + getDiceThrowPoints(dices).points, 0);

module.exports = {
  getDiceThrowPoints,
  getMultipleDiceThrowsPoints,
  POINTS,
  FIGURES,
};
