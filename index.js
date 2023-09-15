const isYams = dices => dices.filter(dice => dice === dices[0]).length === 5;

const isGreatSuite = dices => 
    dices.sort().every((dice, index, sortedDices) => 
        index === 0 ? true : dice - 1 === sortedDices[index - 1]
    )


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

    return 0;
};

module.exports = {
    getDiceThrowPoints
};