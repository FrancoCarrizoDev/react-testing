const { retornaArreglo } = require("../../base/07-deses-arr")

describe('Test In Destructuring', () => {
    test('shoud return an string and number', () => {

        const [letters, numbers] =  retornaArreglo()

        //expect(arr).toEqual(['ABC',123])

        expect(letters).toBe('ABC')
        expect(typeof letters).toBe('string')
        
        expect(numbers).toBe(123)
        expect(typeof numbers).toBe('number')
    })
})
