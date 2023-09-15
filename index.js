const isYams = (dices) =>
  dices.filter((dice) => dice === dices[0]).length === 5;

const isGreatSuite = (dices) =>
  dices
    .sort()
    .every((dice, index, sortedDices) =>
      index === 0 ? true : dice - 1 === sortedDices[index - 1]
    );

const isSquare = (dices) =>
  Object.values(
    dices.reduce((scores, dice) => ({ ...scores, [dice]: scores[dice] + 1 }), {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
    })
  ).some((countOfDice) => countOfDice === 4);

const getDiceThrowPoints = (dices) => {
  if (!dices || dices.length === 0) {
    return 0;
  }

  if (isYams(dices)) {
    return 50;
  }

  if (isGreatSuite(dices)) {
    return 40;
  }

  if (isSquare(dices)) {
    return 35;
  }

  return 0;
};

module.exports = {
  getDiceThrowPoints,
};
