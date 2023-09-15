const { getDiceThrowPoints } = require(".")

describe("getDiceThrowPoints", () => {
    it('should give 0 point when no dices have been thrown', () => {
        expect(getDiceThrowPoints()).toBe(0)
    })
})