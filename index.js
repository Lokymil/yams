const POINTS = {
  YAMS: 50,
  GREAT_SUITE: 40,
  SQUARE: 35,
  FULL: 30,
  BRELAN: 28,
  SMALL_SUITE: 25,
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
    return 0;
  }

  if (isYams(dices)) {
    return POINTS.YAMS;
  }

  if (isGreatSuite(dices)) {
    return POINTS.GREAT_SUITE;
  }

  if (isSquare(dices)) {
    return POINTS.SQUARE;
  }

  if (isFull(dices)) {
    return POINTS.FULL;
  }

  if (isBrelan(dices)) {
    return POINTS.BRELAN;
  }

  if (isSmallSuite(dices)) {
    return POINTS.SMALL_SUITE;
  }

  return dices.reduce((sum, dice) => sum + dice, 0);
};

const getMultipleDiceThrowsPoints = (throws) =>
  throws.reduce((sum, dices) => sum + getDiceThrowPoints(dices), 0);

module.exports = {
  getDiceThrowPoints,
  getMultipleDiceThrowsPoints,
  POINTS,
};
