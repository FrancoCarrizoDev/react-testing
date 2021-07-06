const { getHeroeByIdAsync } = require("../../base/09-promesas");
const { default: heroes } = require("../../data/heroes");

describe('Test with promise', () => {
    test('should return an hero async', (done) => {
        const id = 1;

        getHeroeByIdAsync(id)
            .then( hero => {
                expect(hero).toBe( heroes[0])
                done()
            })
    })
})