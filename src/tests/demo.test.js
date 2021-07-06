describe('tests in the file test.js', () => {
    test('should be a equals to strings ', () => {

        // 1. Initialization
        const message = 'Hello word!'
        // 2. Stimulus
        const message2 = `Hello word!`
        // 3. Observe Behavior
        
        expect( message ).toBe(message2)
    })
})

