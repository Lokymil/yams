const isYams = (dices) => dices.filter(dice => dice === dices[0]).length === 5;

const getDiceThrowPoints = (dices) => {
    if (!dices || dices.length === 0) {
        return 0;
    }

    if (isYams(dices)) {
        return 50;
    }

    return 0;
};

module.exports = {
    getDiceThrowPoints
};