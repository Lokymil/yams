const { getDiceThrowPoints } = require(".")

describe("getDiceThrowPoints", () => {
    it('should give 0 point when no dices have been thrown', () => {
        expect(getDiceThrowPoints()).toBe(0)
    })

    it('should give 50 points when a YAMS figure have been thrown', () => {
        expect(getDiceThrowPoints([5, 5, 5, 5, 5])).toBe(50);
    })
})